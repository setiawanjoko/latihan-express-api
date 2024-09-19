import express from "express";
import response from "../../responses/response.js";
import client from "../../services/Connection.js";
const router = express.Router();

router.get("/", (req, res) => {
  // TODO: handler untuk mendapatkan semua salgrade
  client.query("SELECT * FROM SALGRADE", (err, result) => {
    if (!err) response(200, result.rows, "get all from salgrade", res);
    else res.send(err.message);
  });
});

router.get("/:grade", (req, res) => {
  // TODO: handler untuk mendapatkan salgrade dengan grade tertentu
  let { grade } = req.params;
  client.query(
    `SELECT * FROM SALGRADE WHERE grade = ${grade}`,
    (err, result) => {
      if (!err)
        response(200, result.rows, `get grade ${grade} from salgrade`, res);
      else res.send(err.message);
    }
  );
});

router.post("/", (req, res) => {
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
});

router.put("/:grade", (req, res) => {
  // TODO: lakukan validasi via aplikasi
  // losal tidak dibawah 0
  // hisal tidak lebih kecil daripada hisal
  // TODO: lakukan validasi data via database
  // tidak ada baris yang mana losal baru ada di antara losal dan hisal lama
  // tidak ada baris yang mana hisal baru ada di antara losal dan hisal lama
  // TODO: update salgrade jika data sudah valid
});

router.delete("/:grade", (req, res) => {
  // TODO: lakukan validasi via database
  // pastikan salgrade dengan grade tersebut ada
  // TODO: hapus salgrade dengan grade tersebut jika data sudah valid
});

export default router;