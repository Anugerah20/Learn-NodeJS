// File System
const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// Cek folder data
// Jika belum ada maka akan dibuatkan folder baru
const dPath = "./data";
!fs.existsSync(dPath) ? fs.mkdirSync(dPath) : "";

// Cek file json
// Jika belum ada maka akan dibuatkan file json baru
const datPath = "./data/contacts.json";
!fs.existsSync(datPath) ? fs.writeFileSync(datPath, "[]", "utf-8") : "";

// Efisien
const simpleContact = () => {
  const myFile = fs.readFileSync("data/contacts.json", "utf-8");
  const datContact = JSON.parse(myFile);
  return datContact;
};

// Simpan
const saveContact = (name, email, phoneNumber) => {
  const contact = { name, email, phoneNumber };
  const datContact = simpleContact();

  // Cek nama tidak boleh sama
  const duplicate = datContact.find((contact) => contact.name === name);
  if (duplicate) {
    console.log(
      chalk.magenta.inverse.bold(
        "Nama kontak sudah Digunakan, Gunakan nama lain!"
      )
    );
    return false;
  }

  // Cek Email apa sudah benar penulisannya
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.magenta.inverse.bold("Email anda tidak valid!"));
      return false;
    }
  }

  // Cek nomor hp
  if (phoneNumber) {
    if (!validator.isMobilePhone(phoneNumber, "id-ID")) {
      console.log(chalk.magenta.inverse.bold("Nomor HP anda tidak valid!"));
      return false;
    }
  }

  datContact.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(datContact, null, 2));

  console.log(
    chalk.cyan.inverse.bold("Terima kasih karena sudah memasukkan data anda 😊")
  );
};

// Menampilkan isi Nama dan No HP kontak
const listContact = () => {
  const datContact = simpleContact();
  console.log(chalk.blue.inverse.bold("Daftar Kontak Anda : "));
  // Melakukan Perulangan untuk menampilkan Nama dan No HP
  datContact.forEach((contact, el) => {
    console.log(`${el + 1}. ${contact.name} - ${contact.phoneNumber}`);
  });
};

// Menampilkan Detail berdasarkan Nama contact
const detailContact = (name) => {
  const datContact = simpleContact();

  // Kondisi Mencari data ada atau tidak
  const contact = datContact.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.cyan.inverse.bold(`${name} tidak ditemukan!`));
    return false;
  }

  // Jika nama ketemu maka tampilkan
  console.log(chalk.green.inverse.bold(contact.name));
  console.log(chalk.green.inverse.bold(contact.phoneNumber));
  if (contact.email) {
    console.log(chalk.green.inverse.bold(contact.email));
  }
};

// Menghapus Kontak berdasarkan Nama
const deleteContact = (name) => {
  const datContact = simpleContact();

  const storeContact = datContact.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase())

  if(datContact.length === storeContact.length) {
    console.log(chalk.cyan.inverse.bold(`${name} tidak ditemukan!`));
    return false;
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(storeContact, null, 2));

  console.log(chalk.green.inverse.bold(`Kontak ${name} berhasil dihapus!`));
}

module.exports = { saveContact, listContact, detailContact, deleteContact };
