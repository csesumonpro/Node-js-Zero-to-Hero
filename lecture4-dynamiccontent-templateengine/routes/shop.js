const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  const allProducts = adminData.products
  res.render('shop',{allProducts,pageTitle:'Digital Shop',path:'/'});
});

module.exports = router;
