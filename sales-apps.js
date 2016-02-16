'use strict'

var place = document.getElementById('place')
var slecList = ['Time', 'pizza', 'deliveries', 'drivers'];
var tableData = document.getElementById('time')


function listy1() {
  for (var i = 0; i < slecList.length; i++) {
    var liEl = document.createElement('li')
    liEl.textContent = slecList[i]
    place.appendChild(liEl)
  }
}
// var toggle1 = 'non'
// function listy1() {
// if (toggle1 = 'non') {
//   for (var i = 0; i < slecList.length; i++) {
//     liEl.textContent = slecList[i]
//     place.appendChild(liEl)
//     var toggle1 = 'true'
//    }
//   } else if (toggle1 = 'true') {
//     for (var i = 0; i < slecList.length; i++) {
//       liEl.textContent = ' '
//       place.appendChild(liEl)
//       var toggle1 = 'false'
  // }else if (toggle1 = 'false') {
  //   for (var i = 0; i < slecList.length; i++) {
  //     liEl.textContent = slecList[i]
  //     place.appendChild(liEl)
  //     var toggle1 = 'true'
  // }
//  }
// }



//+++++++++++ the objects ++++++++++++




var ballard = {
  time: [],
  pizzas: [],
  deliveries: [],
  drivers: []

}

// howManyDrivers: function driversD(i) {
//  var tD = this.deliveries[i] / 3;
//  var rTD = this.deliveries[i] % 3
//    if (rTD > 0) {
//      ++tD
// }
//}
