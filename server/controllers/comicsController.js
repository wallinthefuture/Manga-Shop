const uuid = require('uuid');
const path = require('path');
const { Comics, ComicsInfo, Genre } = require('../models/models');
const ApiError = require('../error/ApiError');

class ComicsController {
  async create(req, res, next) {
    try {
      console.log(req.body);
      const { name, price, comicsGenres, typeId, description } = req.body;
      console.log(req.files);
      const { img } = req.files;
      console.log(img);
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
    let { typeId, limit = 9, page = 1 } = req.query;
    let offset = page * limit - limit;
    let comics;
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
}

module.exports = new ComicsController();
