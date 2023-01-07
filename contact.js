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

// Simpan
const saveContact = (name, email, phoneNumber) => {
     const contact = { name, email, phoneNumber };
     const myFile = fs.readFileSync('data/contacts.json','utf-8');
     const datContact = JSON.parse(myFile);

     datContact.push(contact);

     fs.writeFileSync('data/contacts.json', JSON.stringify(datContact, null, 2));

     console.log('Terima kasih sudah memasukkan data..');

     rl.close();
}

module.exports = { writeQuestion, saveContact };
