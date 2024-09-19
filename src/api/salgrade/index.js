import express from "express";
const router = express.Route();

router.get('/salgrade', (req, res) => {
    // TODO: handler untuk mendapatkan semua salgrade
})

router.get('/salgrade/:grade', (req, res) => {
    // TODO: handler untuk mendapatkan salgrade dengan grade tertentu
})

router.post('/salgrade', (req, res) => {
    // TODO: handler untuk menambahkan salgrade baru
    // Ketentuan salgrade
    // Menerima 2 parameters losal dan hisal
    // TODO: lakukan validasi data via aplikasi
    // losal tidak dibawah 0
    // hisal tidak lebih kecil daripada losal
    // TODO: lakukan validasi data via database
    // tidak ada baris yang mana losal baru ada di antara losal dan hisal lama
    // tidak ada baris yang mana hisal baru ada di antara losal dan hisal lama
    // TODO: insert salgrade baru jika data sudah valid
})

router.put('/salgrade/:grade', (req, res) => {
    // TODO: lakukan validasi via aplikasi
    // losal tidak dibawah 0
    // hisal tidak lebih kecil daripada hisal
    // TODO: lakukan validasi data via database
    // tidak ada baris yang mana losal baru ada di antara losal dan hisal lama
    // tidak ada baris yang mana hisal baru ada di antara losal dan hisal lama
    // TODO: update salgrade jika data sudah valid
})

router.delete('/salgrade/:grade', (req, res) => {
    // TODO: lakukan validasi via database
    // pastikan salgrade dengan grade tersebut ada
    // TODO: hapus salgrade dengan grade tersebut jika data sudah valid
})

export default router