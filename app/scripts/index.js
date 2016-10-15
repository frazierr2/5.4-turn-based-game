var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var gameTemplate = require('../templates/gameTemplate.hbs');
var testTemp = require('../templates/testTemplate.hbs');
var attackButton = require('../templates/attackButton.hbs');

// console.log(models);

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
      name: 'Wizard',
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

  var randomDragon = Math.floor(Math.random() * dragons.length);
  // console.log(randomDragon);
  // console.log(dragons[randomDragon]);

  // var context = {
  //   'characters': heroes,
  //   'type': 'hero'
  // };
  //
  // $('.js-hero').html(gameTemplate(context));
  // $('.js-hero').hide();
  //
  // var context = {
  //   'characters': dragons,
  //   'type': 'dragon'
  // };
  //
  // $('.js-dragon').html(gameTemplate(context));
  // $('.js-dragon').hide();

  var mySelection;

  $('button').on('click', function() {
    var $heroeSelector = $('.hero-selector');
    var clickValue = $(this);
    var selectedHero = clickValue.data('hero-name');
    mySelection = _.filter(heroes, {
      'name': selectedHero
    })[0];
    // console.log('selected', mySelection);
    $heroeSelector.hide(1500, function() {
      $('.js-attack').html(attackButton).show()
      $('.js-hero').html(testTemp(mySelection)).show(function() {
        $('.js-dragon').html(testTemp(dragons[randomDragon])).show();

        //console.log(mySelection.attack(dragons[randomDragon]));
        mySelection.attack(dragons[randomDragon]);
      });
    });
  })

  // RESTART THE GAME
  var reset = document.getElementById("restart");
  reset.addEventListener("click", resetGame);
  console.log(reset);

  function resetGame() {
    window.location.reload();
  }


});
