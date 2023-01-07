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