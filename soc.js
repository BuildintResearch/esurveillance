const net = require('net');
// const insert = require('./data') 
const moment = require('moment-timezone');
const express = require('express')
const con = require("./config");

function test(data) {
  var panelID = data.split(',')[5]
  var hh = data.split(',')[7].substring(0,2)
  var mm = data.split(',')[7].substring(2,4)
  var ss = data.split(',')[7].substring(4,6)
  var dd = data.split(',')[8].substring(0,2)
  var MM = data.split(',')[8].substring(2,4)
  var yy = data.split(',')[8].substring(4,6)
  var panelTimeUTC = new Date('20' + yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss)
  var panelTimeIST = new Date(panelTimeUTC.getTime() + (5 * 60 + 30) * 60000)
  var date = new Date(panelTimeIST);
  var formattedDate = moment(date).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');
  var macid = data.split(',')[9]
  var z1 = data.split(',')[10].split('!')[0] 
  var z2 = data.split(',')[10].split('!')[1] 
  var z3 = data.split(',')[10].split('!')[2] 
  var z4 = data.split(',')[10].split('!')[3] 
  var z5 = data.split(',')[10].split('!')[4] 
  var z6 = data.split(',')[10].split('!')[5] 
  var z7 = data.split(',')[10].split('!')[6] 
  var z8 = data.split(',')[10].split('!')[7] 
  var z9 = data.split(',')[10].split('!')[8] 
  var z10 = data.split(',')[10].split('!')[9] 
  var z11 = data.split(',')[10].split('!')[10] 
  var z12 = data.split(',')[10].split('!')[11] 
  var z13 = data.split(',')[10].split('!')[12] 
  var z14 = data.split(',')[10].split('!')[13] 
  var z15 = data.split(',')[10].split('!')[14] 
  var z16 = data.split(',')[10].split('!')[15] 
  var z17 = data.split(',')[10].split('!')[16] 
  var z18 = data.split(',')[10].split('!')[17] 
  var z19 = data.split(',')[10].split('!')[18] 
  var z20 = data.split(',')[10].split('!')[19] 
  var z21 = data.split(',')[10].split('!')[20] 
  var z22 = data.split(',')[10].split('!')[21] 
  var z23 = data.split(',')[10].split('!')[22] 
  var z24 = data.split(',')[10].split('!')[23] 
  var z25 = data.split(',')[10].split('!')[24] 
  var z26 = data.split(',')[10].split('!')[25] 
  var z27 = data.split(',')[10].split('!')[26] 
  var z28 = data.split(',')[10].split('!')[27] 
  var z29 = data.split(',')[10].split('!')[28] 
  var z30 = data.split(',')[10].split('!')[29] 
  var z31 = data.split(',')[10].split('!')[30] 
  var z32 = data.split(',')[10].split('!')[31]

  con.query(`insert into esurveillance (panel_id, time, macid, zone1_status, zone2_status, zone3_status, zone4_status, zone5_status, zone6_status, zone7_status, zone8_status, zone9_status, zone10_status, zone11_status, zone12_status, zone13_status, zone14_status, zone15_status, zone16_status, zone17_status, zone18_status, zone19_status, zone20_status, zone21_status, zone22_status, zone23_status, zone24_status, zone25_status, zone26_status, zone27_status, zone28_status, zone29_status, zone30_status, zone31_status, zone32_status) values ('${panelID}', '${formattedDate}', '${macid}', '${z1}', '${z2}', '${z3}', '${z4}', '${z5}', '${z6}', '${z7}', '${z8}', '${z9}', '${z10}', '${z11}', '${z12}', '${z13}', '${z14}', '${z15}', '${z16}', '${z17}', '${z18}', '${z19}', '${z20}', '${z21}', '${z22}', '${z23}', '${z24}', '${z25}', '${z26}', '${z27}', '${z28}', '${z29}', '${z30}', '${z31}', '${z32}') ON DUPLICATE KEY update panel_id = '${panelID}',time = '${formattedDate}', macid = '${macid}', zone1_status = '${z1}', zone2_status = '${z2}', zone3_status = '${z3}', zone4_status = '${z4}', zone5_status = '${z5}', zone6_status = '${z6}', zone7_status = '${z7}', zone8_status = '${z8}', zone9_status = '${z9}', zone10_status = '${z10}', zone11_status = '${z11}', zone12_status = '${z12}', zone13_status = '${z13}', zone14_status = '${z14}', zone15_status = '${z15}', zone16_status = '${z16}', zone17_status = '${z17}', zone18_status = '${z18}', zone19_status = '${z19}', zone20_status = '${z20}', zone21_status = '${z21}', zone22_status = '${z22}', zone23_status = '${z23}', zone24_status = '${z24}', zone25_status = '${z25}', zone26_status = '${z26}', zone27_status = '${z27}', zone28_status = '${z28}', zone29_status = '${z29}', zone30_status = '${z30}', zone31_status = '${z31}', zone32_status = '${z32}'`, (err, result) =>{
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
    })
}

const server = net.createServer((socket) => {
  console.log('Client connected');
  
    
      setTimeout(function() {
        socket.on('data',(data) => {
          console.log(`${socket.remoteAddress}:${socket.remotePort}`)
          console.log(`Received data from client ${data}`);
          var str = data.toString();
          var cstr = str.split(',');
          //socket.write(`$1lB,16,1,cstr[23],\n`);
          socket.write(`$1lv,4,\n`)
          console.log(`Received data from client ${data}`);
          console.log('waiting')
        if(cstr[0] == '#1v'){
          test(str)
        }
      });
  }, 15000);

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(5501, () => {
  console.log('Server started on port 5501');
});