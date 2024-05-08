function tampilkanWaktuSaatIni() {
    var waktuSekarang = new Date();
    var jam = waktuSekarang.getHours();
    var menit = waktuSekarang.getMinutes();
    var detik = waktuSekarang.getSeconds();

    // Format waktu agar dua digit
    jam = padZero(jam);
    menit = padZero(menit);
    detik = padZero(detik);

    var waktuFormatted = jam + ":" + menit + ":" + detik;
    document.getElementById("waktu").textContent = "Anda mengakses di jam: " + waktuFormatted;
}

function padZero(angka) {
    return (angka < 10 ? "0" : "") + angka;
}

tampilkanWaktuSaatIni();

setInterval(tampilkanWaktuSaatIni, 1000);