const express = require("express");
const router = express.Router();
const Provider = require("../models/Provider");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", (req, res) => {
  //SELECT * FROM users

  Provider.findAll()
    .then((response) => {
      //console.log(response);
      res.json(response);
    })
    .catch((error) => console.log(error));
});

router.post("/search_parkinglot", (req, res) => {
  let { value } = req.body;

  Provider.findAll({
    where: {
      parkingLotLocation: {
        [Op.like]: "%" + value + "%",
      },
    },
  })
    .then((_res) => {
      res.json(_res);
    })
    .catch((error) => console.log(error));
});

router.post("/reservedslot", (req, res) => {
  let { id, userId, reservedSlots } = req.body;
  console.log(req.body);

  Provider.update(
    {
      reservedSlots,
    },
    { where: { id, userId } }
  )
    .then((_res) => {
      res.json(_res);
      console.log(_res);
    })
    .catch((error) => console.log(error));
});

router.post("/insertprovider", (req, res) => {
  console.log(req.body);

  let id = req.query;

  //User.destroy({ where: { i } }).then

  //User.update({ where: { id } });

  let {
    userId,
    firstName,
    lastName,
    personalAddress,
    parkingLotName,
    parkingLotLocation,
    vehicleType,
    mobileNumber,
    parkingPrice,
    totalSlots,
    reservedSlots,
    providerStatus,
    parkingLotPicture,
    parkingLotStatus,
  } = req.body;

  Provider.create({
    userId,
    firstName,
    lastName,
    personalAddress,
    parkingLotName,
    parkingLotLocation,
    vehicleType,
    mobileNumber,
    parkingPrice,
    totalSlots,
    reservedSlots,
    providerStatus,
    parkingLotPicture,
    parkingLotStatus,
  })
    .then((_res) => {
      res.json(_res);
      //console.log(_res);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
