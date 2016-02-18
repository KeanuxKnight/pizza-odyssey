'use strict';

// +++++++++ Table locations +++++++++++++++

var pBallard = document.getElementById("ballard")
var pFirsthill= document.getElementById("firsthill")
var pSouthlakeunion = document.getElementById("southlakeunion")
var pTheinternationaldistrict = document.getElementById("theinternationaldistrict")
var pGeorgetown = document.getElementById("georgetown")
var pRavenna = document.getElementById("ravenna")



//+++++++++++++++ Constructors +++++++++++++++++

function Place(time, pizzas, deliveries, drivers) {
  this.time = time;
  this.pizzas = pizzas;
  this.deliveries = deliveries;
  this.drivers = drivers;

this.fill = function(bCell1, bCell2, bCell3, bCell4) {
   var row = pBallard.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
     bCell1.innerHTML = cell1;
     bCell2.innerHTML = cell2;
     bCell3.innerHTML = cell3;
     bCell4.innerHTML = cell4;
  }
};

//+++++++++++ object vars +++++++++

//---------- universal vars --------------
// var time = [];
//var drivers = []
//--------- induvidual vars -------------
// var bpizzas = [];
// var bdeliveries = [];
// var fpizzas = [];
// var fdeliveries = [];
// var spizzas = [];
// var sdeliveries = [];
// var tpizzas = [];
// var tdeliveries = [];
// var gpizzas = [];
// var gdeliveries = [];
// var rpizzas = [];
// var rdeliveries = [];


//++++++++++++++ Instances +++++++++++

var ballard = new Place(time[],[],[],[])
//var firsthill = new Place()
//var southlakeunion = new Place()
//var theinternationaldistrict = new Place()
//var georgetown = new Place()
//var ravenna = new Place()

//++++++++++++++ filling in Tables (not in use) ++++++++++++

// function filltest(bCell1, bCell2) {
//   var bRow = pBallard.insertRow(0);
// var bCell1 = bRow.insertCell(0);
// var bCell2 = bRow.insertCell(1);
// var bCell3 = bRow.insertCell(2);
// var bCell4 = bRow.insertCell(3);
// bCell1.innerHTML = bCell1;
// bCell2.innerHTML = bCell2;
// bCell3.innerHTML = bCell3;
// bCell4.innerHTML = bCell4;
// }
