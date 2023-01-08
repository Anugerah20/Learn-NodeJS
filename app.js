const yargs = require('yargs');
const datContact = require('./contact'); 

// Menyimpan Data
const qu = async () => {
     const name = await datContact.writeQuestion('Masukkan nama anda : ');
     const email = await datContact.writeQuestion('Masukkan email anda : ');
     const phoneNumber = await datContact.writeQuestion('Masukkan Nomor HP anda : ');

     datContact.saveContact(name, email, phoneNumber);
}

qu();
