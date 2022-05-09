const { BasketComics, Basket, Comics } = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController {
  async create(req, res) {
    const { comicId, userId } = req.body;
    console.log(comicId, userId);
    const { id } = await Basket.findOne({
      where: {
        userId,
      },
    });

    const basket = await BasketComics.create({
      comicId,
      basketId: id,
    });
    return res.json(basket);
  }
  async getAllComicsByBasketId(req, res) {
    const { userId } = req.query;

    const { id } = await Basket.findOne({
      where: {
        userId,
      },
    });

    const comicsesId = await BasketComics.findAll({
      attributes: ['comicId'],
      where: {
        basketId: id,
      },
    });
    const com = [];

    comicsesId.forEach((element) => {
      com.push(element.comicId);
    });
    const comicses = await Comics.findAll({
      where: {
        id: [...com],
      },
    });
    return res.json(comicses);
  }

  async deleteComics(req, res) {
    const { comicsId } = req.query;

    const count = await BasketComics.destroy({ where: { comicId: comicsId } });
    return res.json(count);
  }
}

module.exports = new BasketController();
