var $ = require('jquery');


function Character(config) {
  config = config || {};
  $.extend(this, config);
  this.health = 100;
  this.damage = 5;
}

Character.prototype.attack = function(enemy){
  enemy.health = enemy.health - this.damage;
  this.health = this.health - enemy.damage;
  console.log(enemy.health);
  console.log(this.health);
  //$('health-bar').textContent = enemy.health;
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
