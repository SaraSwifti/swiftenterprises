const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const reportRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// We need to fetch contents of file and then we have to convert into binary using Binary class. that code looks like this. These are the files for trying to save a PDF in mongo
// const data = fs.readFileSync(file_path);
// const insert_data = {};
// insert_data.file_data = Binary(data);

// Now we are ready to store this data into db using the following code.These are the files for trying to save a PDF in mongo
// var collection = db.collection(‘files’);
// collection.insert(insert_data, function (err, result) { };
 
// This section will help you get a list of all the records.
// reportRoutes.route("/record").get(function (req, res) {
//  let db_connect = dbo.getDb("SwiftEnterprises");
//  db_connect
//    .collection("investreports")
//    .find({})
//    .toArray(function (err, result) {
//      if (err) throw err;
//      res.json(result);no
//    });
// });
 
// This section will help you get a single record by id. 
// reportRoutes.route("/record/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("investreports")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });
 
// This section will help you create a new record.
reportRoutes.route("/report/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
  //  pdf: req.body.pdf,
   pdfFileName: req.body.pdfFileName,

 };
 db_connect.collection("reports").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
// reportRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level,
//    },
//  };
//  db_connect
//    .collection("investreports")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });
 
// This section will help you delete a record
// reportRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("investreports").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 
module.exports = reportRoutes;
