var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var gameTemplate = require('../templates/gameTemplate.hbs');

console.log(models);

$(function() {

  var heroes = [
    new models.Heroes({
      name: 'Knight',
      image: 'images/Knight.png'
    }),
    new models.Heroes({
      name: 'Archer',
      image: 'images/Archer.png'
    }),
    new models.Heroes({
      name: 'Wizzard',
      image: 'images/Wizzard .png'
    })
  ];

  var dragons = [
    new models.Dragons({
      name: 'Drogon',
      image: 'images/dragon1.png'
    }),
    new models.Dragons({
      name: 'Rhaegal',
      image: 'images/dragon2.png'
    }),
    new models.Dragons({
      name: 'Viserion',
      image: 'images/dragon3.png'
    })
  ];

  var context = {
    'heroes': heroes
  }
  var evil = {
    'dragons': dragons
  }

  $('.js-hero').html(gameTemplate(context));
  $('.js-dragon').html(gameTemplate(evil));

  // console.log(heroes);
  // console.log(dragons);

});
