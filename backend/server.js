const express = require("express");
const db = require("mongoose");
var cors = require("cors");
var ObjectId = require("mongodb").ObjectId;
const app = express();
app.use(express.json());
db.set("strictQuery", false);
app.use(cors());

//************mongodb connect */
db.connect("mongodb+srv://Sudheesh_Patwardhan:sudheesh@cluster0.ba3oosc.mongodb.net/test", {
  useNewURLParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

var conn = db.connection;

//**************insert data to database */

app.post("/ins", function (req, res) {
  const fdata = req.body.fdata;
  conn.collection("sudheesh23").insertOne(fdata, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("inserted");
      res.status(202).send("success");
    }
  });
});
app.listen(4000, () => {
  console.log("server running at 4000");
});

//***************get data from database  */

app.get("/", (req, res) => {
  conn
    .collection("sudheesh23")
    .find({})
    .toArray((err, result) => {
      if (err) res.status(400).send("error fetching data");
      res.json(result);
    });
});

// *********** delete data ***********
app.post("/delete", (req, res) => {
  console.log(req.body.id);
  let id = req.body.id;
  conn
    .collection("sudheesh23")
    .deleteOne({ _id: ObjectId(id) })
    .then((err) => {
      if (err) {
        console.log("record not deleted");
      } else {
        console.log("deleted");
        res.status(204).send("success");
      }
    });
});

// get data for updated
app.post("/get", (req, res) => {
  let id = req.body.id;
  console.log(id);
  conn
    .collection("sudheesh23")
    .find({ _id: ObjectId(id) })
    .toArray((err, result) => {
      if (err) res.status(400).send("error fetching data");
      res.json(result);
      console.log(result);
    });
});

//******update data *********************/
app.post("/update", (req, res) => {
  console.log(req.body);
  let id = req.body._id;
  let name = req.body.name;
  let content = req.body.content;
  let date = req.body.date;
  let fee = req.body.fee;
  console.log(id);
  console.log(name);
  console.log(content);
  console.log(date);
  console.log(fee);
  conn
    .collection("sudheesh23")
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { name: name, content: content, date: date, fee: fee } }
    )
    .then((err) => {
      if (err) {
        console.log("record not updateed");
        console.log(err);
      } else {
        console.log("updated");
        res.status(204).send("success");
      }
    });
});
