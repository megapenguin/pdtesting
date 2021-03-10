const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/gettransactions", (req, res) => {
  Transaction.findAll()
    .then((_res) => {
      res.json(_res);
      console.log(res);
    })
    .catch((error) => console.log(error));
});

router.post("/create_transaction", (req, res) => {
  console.log(req.body);

  let id = req.query;

  //User.destroy({ where: { i } }).then

  //User.update({ where: { id } });

  let {
    providerId,
    userId,
    vehiclePlatenumber,
    parkingStart,
    parkingEnd,
  } = req.body;

  Transaction.create({
    providerId,
    userId,
    vehiclePlatenumber,
    parkingStart,
    parkingEnd,
  })
    .then((_res) => {
      res.json(_res);
      console.log(_res);
    })
    .catch((error) => console.log(error));
});

router.post("/search_platenumber", (req, res) => {
  let { providerId, platenumber } = req.body;

  Transaction.findAll({
    where: {
      [Op.and]: [
        {
          providerId: {
            [Op.like]: providerId,
          },
        },
        {
          vehiclePlatenumber: {
            [Op.like]: platenumber,
          },
        },
      ],
    },
  })
    .then((_res) => {
      res.json(_res);
    })
    .catch((error) => console.log(error));
});

router.get("/get", (req, res) => {
  Transaction.findAll()
    .then((_res) => {
      res.json(_res);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
