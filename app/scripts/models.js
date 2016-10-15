var $ = require('jquery');


function Character(config) {
  config = config || {};
  $.extend(this, config);
  this.health = 100;
  this.damage = 5;
}

Character.prototype.attack = function(enemy){
  console.log('ATTACK');
  console.log(enemy);
};

function Heroes(config) {
  Character.call(this, config);

}
Heroes.prototype = new Character();


function Dragons(config) {
  Character.call(this, config);
}

Dragons.prototype = new Character();

module.exports = {
  Character: Character,
  Heroes: Heroes,
  Dragons: Dragons
};
