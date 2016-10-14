var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var gameTemplate = require('../templates/gameTemplate.hbs');
var testTemp = require('../templates/testTemplate.hbs');

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

// var mySelectionTwo = heroes.filter(function(hero){
//   return hero.name === 'Knight'
// })
//
// console.log(mySelectionTwo);


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

  var randomDragon = Math.floor(Math.random() * dragons.length);
  console.log(randomDragon);
  console.log(dragons[randomDragon]);

  var context = {
    'characters': heroes,
    'type': 'hero'
  };

  $('.js-hero').html(gameTemplate(context));
  $('.js-hero').hide();

  var context = {
    'characters': dragons,
    'type': 'dragon'
  };

  $('.js-dragon').html(gameTemplate(context));
  $('.js-dragon').hide();

  var mySelection;

  $('button').on('click', function(){
    var $heroeSelector = $('.hero-selector');
    var clickValue = $(this);
    var selectedHero = clickValue.data('hero-name');
    mySelection = _.filter(heroes, {'name': selectedHero})[0];
    console.log('selected', mySelection);
    $heroeSelector.hide(1500, function(){
      $('.js-hero').html(testTemp(mySelection)).show(function() {
        $('.js-dragon').html(testTemp(dragons[randomDragon])).show();
      });

    });
  })

  // if button value = 'knight' then filter the array to only include the knight

  // console.log(heroes);
  // console.log(dragons);

  // var clickValue = 'Archer'
  //
  // var mySelection = _.filter(heroes, function(hero){
  //   return hero.name === clickValue
  // })
  //
  // $('.js-hero').html(gameTemplate(heroes[0]));
  //

});
