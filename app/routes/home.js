const path = require('path');

module.exports = function (app, db) {
  app.get('/', (req, res) => { // You'll create your note here.
    console.log(req.body)
    var options = {
      root: path.join(__dirname, '../pages')
    }
    res.sendFile('home.html', options);
  });
}