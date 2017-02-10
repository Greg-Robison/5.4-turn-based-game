var $ = require ('jquery');
var pain = require('./pain.js');


function Character(config){
  this.health = 100 || {};

}

/*
*Hero prototype of Character
*/

function Hero(options){
  var defaults = {
    health: 100
  };

  $.extend(this, defaults, options);
}

Hero.prototype.attack = function(villain){
  if(pain.painInflicted()){
    villain.health -= 20;
  }
}
// Hero.prototype = new Character ();

var bart = new Hero({
  // attack:
  name: "bart",
  image: "images/BARTslingshot-psd.png",
  animation: "shake-opacity"
});

var lisa = new Hero({
  // attack:
  name: "lisa",
  image: "images/lisa.png",
  animation: 'shake-vertical'
});

/*
*villians prototype of Character
*/

function Villian(options){
  var defaults = {
    health: 100
  };

  $.extend(this, defaults, options);

}

var homer = new Villian({
  name: 'homer',
  image: 'images/homer-doh.png',
  animation: 'shake-slow'
});

var krusty = new Villian({
  name: 'krusty',
  image: 'images/Krusty_The_Clown.png',
  animation: 'shake-hard'
})

// Villian.prototype = new Character(){
//
// }

module.exports = {
  "bart": bart,
  "lisa": lisa,
  "homer": homer,
  "krusty": krusty

}
