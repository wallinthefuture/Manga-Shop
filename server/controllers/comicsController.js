const uuid = require('uuid');
const path = require('path');
const { Comics, ComicsInfo, Genre } = require('../models/models');
const ApiError = require('../error/ApiError');

class ComicsController {
  async create(req, res, next) {
    try {
      const { name, price, comicsGenres, typeId, description } = req.body;

      const { img } = req.files;

      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const comics = await Comics.create({
        name,
        price,
        description,
        typeId,
        img: fileName,
      });

      if (comicsGenres) {
        comics = JSON.parse(comicsGenres);
        comicsGenres.forEach((element) => {
          Genre.create({
            name: element.name,
            comicsId: comics.id,
          });
        });
      }

      return res.json(comics);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { typeId, limit = 9, page = 1, name } = req.query;
    let offset = page * limit - limit;
    let comics;
    let searchComics;
    if (!typeId) {
      comics = await Comics.findAndCountAll({
        limit,
        offset,
      });
    }
    if (typeId) {
      comics = await Comics.findAndCountAll({
        where: {
          typeId,
        },
        limit,
        offset,
      });
    }
    if (typeId && name) {
      searchComics = await Comics.findAndCountAll({
        where: {
          name,
        },
        limit,
        offset,
      });
      if (searchComics.count == 0) {
        comics = await Comics.findAndCountAll({
          limit,
          offset,
        });
      } else {
        comics = searchComics;
      }
    }
    if (!typeId && name) {
      searchComics = await Comics.findAndCountAll({
        where: {
          name,
        },
        limit,
        offset,
      });
      if (searchComics.count == 0) {
        comics = await Comics.findAndCountAll({
          limit,
          offset,
        });
      } else {
        comics = searchComics;
      }
    }
    if (!typeId && !name) {
      comics = await Comics.findAndCountAll({
        limit,
        offset,
      });
    }
    return res.json(comics);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const comics = await Comics.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Genre,
          as: 'comicsGenres',
        },
      ],
    });
    return res.json(comics);
  }
  async deleteComics(req, res) {
    const { comicsId } = req.query;
    console.log(comicsId);
    const count = await Comics.destroy({ where: { id: comicsId } });
    return res.count;
  }
}

module.exports = new ComicsController();
