const yargs = require('yargs');
const datContact = require('./contact'); 

// Menyimpan Data
// const qu = async () => {
//      const name = await datContact.writeQuestion('Masukkan nama anda : ');
//      const email = await datContact.writeQuestion('Masukkan email anda : ');
//      const phoneNumber = await datContact.writeQuestion('Masukkan Nomor HP anda : ');

//      datContact.saveContact(name, email, phoneNumber);
// }

// qu();

yargs.command({
     commad: 'add',
     describe: 'Menambahkan kontak baru',
     builder: {
          name: {
               describe: 'Nama lengkap',
               demandOption: true,
               type: 'string',
          },
          email: {
               describe: 'Email',
               demandOption: false,
               type: 'string',
          },
          phoneNumber: {
               describe: 'Nomor Handphone',
               demandOption: true,
               type: 'string',
          },
     },
     handler(argv) {
          datContact.saveContact(argv.name, argv.email, argv.phoneNumber);
     },
     
});

yargs.parse();
