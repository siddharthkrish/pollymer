module.exports = function (app, db) {
  app.get('/', (req, res) => { // You'll create your note here.
    console.log(req.body)
    res.send("the following commands are supported \n\
    /command body: JSON")
  });
}