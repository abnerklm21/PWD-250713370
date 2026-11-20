var suhuSekarang = 24;

function ubahSuhu(perubahan) {
    var suhuBaru = suhuSekarang + perubahan;

    if (suhuBaru < 16 || suhuBaru > 30) {
        alert("Batas suhu AC tercapai! (Rentang 16°C - 30°C)");
        return;
    }

    suhuSekarang = suhuBaru;
    updateTampilan();
}

function setModeHujan() {
    suhuSekarang = 22;
    updateTampilan();
}
