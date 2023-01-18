// File System
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// Cek folder data
// Jika belum ada maka akan dibuatkan folder baru
const dPath = './data';
!fs.existsSync(dPath) ? fs.mkdirSync(dPath) : '';

// Cek file json
// Jika belum ada maka akan dibuatkan file json baru
const datPath = './data/contacts.json';
!fs.existsSync(datPath) ? fs.writeFileSync(datPath,'[]','utf-8') : '';

// Simpan
const saveContact = (name, email, phoneNumber) => {
  const contact = { name, email, phoneNumber };
  const myFile = fs.readFileSync('data/contacts.json', 'utf-8');
  const datContact = JSON.parse(myFile);

  // Cek nama tidak boleh sama
  const duplicate = datContact.find((contact) => contact.name === name);
  if (duplicate) {
    console.log(chalk.red.inverse.bold('Kontak sudah terdaftar, Gunakan nama lain!'));
    return false;
  }

  // Cek Email apa sudah benar penulisannya
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold('Email anda tidak valid!'));
      return false;
    }
  }

  // Cek nomor hp
  if(phoneNumber) {
     if(!validator.isMobilePhone(phoneNumber, 'id-ID')) {
          console.log(chalk.red.inverse.bold('Nomor HP anda tidak valid!'));
          return false;
     }
  }

  datContact.push(contact);

  fs.writeFileSync('data/contacts.json', JSON.stringify(datContact, null, 2));

  console.log(chalk.green.inverse.bold('Terima kasih karena sudah memasukkan data anda 😊'));
}

module.exports = { saveContact };
