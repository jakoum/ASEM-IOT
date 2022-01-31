var SerialPort=require("serialport");
const parsers=SerialPort.parsers;
const Readline = SerialPort.parsers.Readline;
const mongoose=require("mongoose");
const mongo = require('mongodb');
const User1=require("./models/descripModel");
const client = new mongo.MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db;
var mytables;
client.connect(() => {
  db = client.db('node');
  mytables = db.collection('mytables');
});



const parser = new Readline();
const express=require("express");
const { jsonp } = require("express/lib/response");




var port =new SerialPort('COM4',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});
port.pipe(parser); 
port.on("open",(stream) => {
      console.log('someone connected!');
   
  });
 var i=1;
parser.on('data', data =>{ 
  console.log(data);
 
   

   
 client.connect(() => {
        db = client.db('node');
        mytables = db.collection('mytables');
        ASEM = db.collection('ASEM');
      });
    
         
          ASEM.insertOne({"_id":data,"description":`student with ${data} is present`, "date":new Date()})


})
