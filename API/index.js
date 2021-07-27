var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var bodyParser = require('body-parser')
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/role', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("local");
    var query = req.query||{};
    dbo.collection("role").find(query).toArray(function(err, result) {
      if (err) throw err;
      res.send(result)
      db.close();
    });
  });
})

app.post('/role', async function (req, res) {
  MongoClient.connect(url, async function(err, db) {
    var dbo = db.db("local");
    var obj = { name: req.body.name};
    await dbo.collection("role").insertOne(obj, function(err, res) {
      console.log("1 document inserted");
      db.close();
    });
    res.send('OK')
  });
})

app.get('/menu', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
      var dbo = db.db("local");
      var query = req.query||{};
      dbo.collection("menu").find(query).project({path:0}).toArray(function(err, result) {
      if (err) throw err;
        res.send(result)
        db.close();
      });
    });
})

app.get('/permissions', function (req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
        var dbo = db.db("local");
        var query = req.query||{};
        dbo.collection("permissions").find(query).toArray(function(err, result) {
        if (err) throw err;
          res.send(result)
          db.close();
        });
      });
  })

  app.post('/permissions', async function (req, res) {
    console.log(111,req.body)
    MongoClient.connect(url, async function(err, db) {
      var dbo = db.db("local");
      var myquery = { roleId: req.body.roleId };
      await dbo.collection("permissions").deleteMany(myquery, function(err, res) {
        console.log(res + " document(s) deleted");
        db.close();
      });
      for(let item of req.body.menuList) {
        var obj = { roleId: req.body.roleId,menuId:item};
        await dbo.collection("permissions").insertOne(obj, function(err, res) {
          console.log("1 document inserted");
          db.close();
        });
      }
      res.send('OK')
    });
  })

  app.get('/router', function (req, res) {
    var query = req.query||{};
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("local");
      dbo.collection('permissions').aggregate([
        { "$project": { 
            "menuId": { "$toObjectId": "$menuId" },
            "roleId": "$roleId",
          },
        },
        { $lookup:
           {
             from: 'menu',
             localField: 'menuId',
             foreignField: '_id',
             as: 'menuData'
           }
         }
        ]).toArray(function(err, result) {
          db.close();
          let resArray=result.filter(res=>res.roleId===query.roleId).map(res=>res.menuData[0])
          res.send(resArray)
      });
    });
  })

app.listen(3000)