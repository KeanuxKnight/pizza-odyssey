'use strict'

//++++++++ example and testing +++++++++
//-------- do not use in final project ---------
var table = document.createElement('table');
var row1 = document.createElement('tr');
var r1d1 = document.createElement('td');
r1d1.textContent = 'stuff';
var r1d2 = document.createElement('td');
r1d2.textContent = 'more stuff';
var r1d3 = document.createElement('td');
r1d3.textContent = 'even more stuff';

table.appendChild(row1);

row1.appendChild(r1d1);
row1.appendChild(r1d2);
row1.appendChild(r1d3);

document.body.appendChild(table);
