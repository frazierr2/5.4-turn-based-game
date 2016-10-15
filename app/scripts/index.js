var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var gameTemplate = require('../templates/gameTemplate.hbs');
var testTemp = require('../templates/testTemplate.hbs');
var loseTemp = require('../templates/loseTemp.hbs');
var winTemp = require('../templates/winTemp.hbs');
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
        // mySelection.attack(dragons[randomDragon]);
        // mySelection.attack(dragons[randomDragon]);
      });
    });
  })

  $('.js-attack').on('click', function(event){
    event.preventDefault();
    mySelection.attack(dragons[randomDragon]);
    $('.js-dragon').html(testTemp(dragons[randomDragon])).show();

    window.setTimeout(function(){
      dragons[randomDragon].attack(mySelection);
      $('.js-hero').html(testTemp(mySelection)).show();

      console.log(mySelection.health);
      if(mySelection.health <= 0){
        $('.js-hero').html(loseTemp());
        $('.js-dragon').html(winTemp());
      }

      var currentDragon = dragons[randomDragon.health];

      console.log();

      // if(dragons[randomDragon].health <= 0){
      //   $('js-dragon').html(lostTemp());
      // }


      //console.log(mySelection.health);
    }, 2000);
  })





  // RESTART THE GAME
  var reset = document.getElementById("restart");
  reset.addEventListener("click", resetGame);
  //console.log(reset);

  function resetGame() {
    window.location.reload();
  }


});
