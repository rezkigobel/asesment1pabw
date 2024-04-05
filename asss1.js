var buku = [
    {"nama": "sherlock", "jumlah": 2},
    {"nama": "lupin", "jumlah": 2},
    {"nama": "aladin", "jumlah": 2}
];

function pinjamBuku() {
    var jumlah = parseInt(document.getElementById('jumlah').value);
    var bukuTerpilih = document.getElementById('buku').value;

    if (isNaN(jumlah) || jumlah <= 0) {
        alert('Masukkan jumlah buku yang valid.');
        return;
    }

    var bukuDitemukan = false;
    var jumlahTersedia = 0;

    for (var i = 0; i < buku.length; i++) {
        if (buku[i].nama === bukuTerpilih) {
            bukuDitemukan = true;
            jumlahTersedia = buku[i].jumlah;
            break;
        }
    }

    if (!bukuDitemukan) {
        alert('Buku tidak ditemukan.');
        return;
    }

    if (jumlah > jumlahTersedia) {
        alert('Jumlah buku tidak tersedia.');
    } else {
        alert('Silahkan ambil buku Anda.');
    }
}
