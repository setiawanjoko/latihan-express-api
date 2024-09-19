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

router.post("/", async (req, res) => {
  const { losal, hisal } = req.body;
  if (!losal || !hisal) {
    console.log("checkpoint 1", req.body)
    return res.sendStatus(400);
  }
  if (losal < 0) {
    console.log("checkpoint 2", req.body)
    return res.sendStatus(400);
  }
  if (hisal < losal) {
    console.log("checkpoint 3", req.body)
    return res.sendStatus(400);
  }

  await client.query(
    `SELECT * FROM salgrade WHERE (losal < ${losal} AND hisal > ${losal}) OR (losal < ${hisal} AND hisal > ${hisal})`,
    (err, result) => {
      if (err) {
        console.log("checkpoint 4", req.body)
        return res.sendStatus(err.message);
      }
      if (result.rowCount > 0) {
        console.log("checkpoint 5", req.body)
        return res.sendStatus(400);
      } else {
        console.log("checkpoint 6", req.body)
        return res.send(result.rows);
      }
    }
  );
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
