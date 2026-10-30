function fn_ValForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;
    var sMsg = "";
    var umurAngka;
    var info = "";
    var pilihan = "";
    var polaEmail = /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9_.-]*[a-z0-9]\.[a-z0-9]{2,4}$/;

    if (nama == "") {
        sMsg += "\n* Anda belum mengisi Nama";
    }

    if (email == "") {
        sMsg += "\n* Anda belum mengisi Email";
    } else if (!polaEmail.test(email)) {
        sMsg += "\n* Format Email tidak valid";
    }

    if (umur == "") {
        sMsg += "\n* Anda belum mengisi Umur";
    } else if (isNaN(Number(umur))) {
        sMsg += "\n* Umur harus berupa angka";
    } else {
        umurAngka = Number(umur);
        if (umurAngka < 17 || umurAngka > 65) {
            sMsg += "\n* Umur harus antara 17 sampai 65 tahun";
        } else if (umurAngka <= 25) {
            info = "Paket Pelajar";
        } else {
            info = "Paket Umum";
        }
    }

    if (kategori == "") {
        sMsg += "\n* Anda belum memilih Paket Member";
    } else {
        switch (kategori) {
            case "S":
                pilihan = "Silver";
                break;
            case "G":
                pilihan = "Gold";
                break;
            case "P":
                pilihan = "Platinum";
                break;
            default:
                sMsg += "\n* Pilihan Paket Member tidak valid";
        }
    }

    if (sMsg != "") {
        alert("Peringatan:" + sMsg);
        return false;
    }

    alert("Terima kasih " + nama + " ! Anda terdaftar di paket " + pilihan + " (" + info + ").");
    return true;
}