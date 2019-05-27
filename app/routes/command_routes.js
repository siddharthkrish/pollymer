module.exports = function (app, db) {
  app.post('/pollymer', (req, res) => { // You'll create your note here.    
    res.send('creating new poll: ' + req.body)
  });
};