var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var gameTemplate = require('../templates/gameTemplate.hbs');
var testTemp = require('../templates/testTemplate.hbs');
var loseTemp = require('../templates/loseTemp.hbs');
var winTemp = require('../templates/winTemp.hbs');
var draw = require('../templates/draw.hbs');
var attackButton = require('../templates/attackButton.hbs');

// console.log(models);

$(function() {

  var arr = _.range(100);

  var randomDamage = Math.floor(Math.random() * arr.length);
  var randomDamage2 = Math.floor(Math.random() * arr.length);

  var message = {
    win: 'You win',
    lose: 'You lose'
  };
  // ***********CREATING CHARACTERS**************
  var heroes = [
    new models.Heroes({
      name: 'Knight',
      image: 'images/Knight.png',
      health: 100,
      damage: randomDamage
    }),
    new models.Heroes({
      name: 'Archer',
      image: 'images/Archer.png',
      health: 100,
      damage: randomDamage
    }),
    new models.Heroes({
      name: 'Wizard',
      image: 'images/Wizzard .png',
      health: 100,
      damage: randomDamage
    })
  ];

  var dragons = [
    new models.Dragons({
      name: 'Drogon',
      image: 'images/dragon1.png',
      health: 100,
      damage: randomDamage2
    }),
    new models.Dragons({
      name: 'Rhaegal',
      image: 'images/dragon2.png',
      health: 100,
      damage: randomDamage2
    }),
    new models.Dragons({
      name: 'Viserion',
      image: 'images/dragon3.png',
      health: 100,
      damage: randomDamage2
    })
  ];
  // ***************SELECTING RANDOM DRAGON***************
  var randomDragon = Math.floor(Math.random() * dragons.length);
  // var currentDragon = dragons[randomDragon];
  // console.log(dragons[randomDragon].health);

  // *********SELECTING CHARACTER AND DRAGON************
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
      $('.js-attack').html(attackButton).show();
      $('.js-hero').html(testTemp(mySelection)).show(function() {
        $('.js-dragon').html(testTemp(dragons[randomDragon])).show();
      });
    });
  })

  //************** ATTACKING EACH PLAYER**************
  $('.js-attack').on('click', function(event) {
    event.preventDefault();
    mySelection.attack(dragons[randomDragon]);
    $('.js-dragon').html(testTemp(dragons[randomDragon])).show();
    $('.js-hero').animate({
      "left": "+=350px"
    }, "slow").animate({
      "left": "-=350px"
    }, "slow");
    window.setTimeout(function() {
      dragons[randomDragon].attack(mySelection);
      $('.js-hero').html(testTemp(mySelection)).show();
      $('.js-dragon').animate({
        "right": "+=350px"
      }, "fast").animate({
        "right": "-=350px"
      }, "fast");
      if (mySelection.health <= 0 && dragons[randomDragon].health >= 0) {
        $('.js-dragon').html(loseTemp());
      } else if (mySelection.health >= 0 && dragons[randomDragon].health <= 0) {
        $('.js-dragon').html(winTemp());
      } else if (mySelection.health <= 0 && dragons[randomDragon].health <= 0) {
        $('.js-dragon').html(draw());
        $('.js-hero').html(draw());
      }
    }, 1000);
  })




  // RESTART THE GAME
  var reset = document.getElementById("restart");
  reset.addEventListener("click", resetGame);
  //console.log(reset);

  function resetGame() {
    window.location.reload();
  }


});
