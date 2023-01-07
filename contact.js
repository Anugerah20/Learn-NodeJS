// File System
const { rejects } = require('assert');
const fs = require('fs');
const resolve = require('path');

const readline = require('readline');
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
});

// Cek folder data
// Jika belum ada maka akan dibuatkan folder baru
const dPath = './data';
!fs.existsSync(dPath) ? fs.mkdirSync(dPath) : '';

// Cek file json
// Jika belum ada maka akan dibuatkan file json baru
const datPath = './data/contacts.json';
!fs.existsSync(datPath) ? fs.writeFileSync(datPath,'[]','utf-8') : '';

// Pertanyaan
const writeQuestion = (quest) => {
     return new Promise((resolve, rejects) => {
          rl.question(quest, (name) => {
               resolve(name);
          });
     });
};