/*
Nama    : FARID NANDA SYAUQI
NIM     : F1D02310050
*/

import { dataClient } from "./data.js";
import chalk from "chalk";

// 1. map()
const hobi = dataClient.map((d) => (
    {
        nama: d.nama,
        usia: d.usia,
        hobi: d.hobi
    }
));
console.log(chalk.blue("Daftar Hobi"));
console.table(hobi);

// 2. filter()
const gajiAtasUmr = dataClient
    .filter((d) => d.penghasilan > 2700000)
    .map((d) => ({nama: d.nama, penghasilan: d.penghasilan}));
console.log(chalk.blue("Gaji di Atas UMR NTB"));
console.table(gajiAtasUmr);

// 3. reduce()
const rataUsia = dataClient.reduce((total, d) => total + d.usia, 0) / dataClient.length;
console.log(chalk.blue('Rata-rata Usia: '), rataUsia.toFixed(2));

// 4. find()
const isPraya = dataClient.find((d) => d.alamat.kota === "Praya");
let ketemu = isPraya ? chalk.green('Kota Praya: Ditemukan') : chalk.red('Kota Praya: Tidak Ditemukan');
console.log(ketemu);

// 5. some()
const noHobi = dataClient.some((d) => d.hobi.length === 0);
console.log(chalk.cyan('tidak punya hobi: ', noHobi));

// 6. every()
const semuaRemaja = dataClient.every((d) => d.usia >= 10 && d.usia <= 19);
console.log("semuanya remaja? : ", semuaRemaja);