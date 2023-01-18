const yargs = require("yargs");
const datContact = require("./contact");

// Builder Yargs
yargs
  .command({
    command: "add",
    describe: "Menambahkan kontak baru",
    builder: {
      name: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      phoneNumber: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      datContact.saveContact(argv.name, argv.email, argv.phoneNumber);
    },
  })
  .demandCommand();

// Menampilkan Data Nama dan No HP Contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua Nama dan No HP contact",
  handler() {
    datContact.listContact();
  },
});

// Menampilkan Detail Contact
yargs.command({
  command: "detail",
  describe: "Menampilkan detail contact berdasarkan nama",
  builder: {
    name: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    datContact.detailContact(argv.name);
  },
});

yargs.parse();
