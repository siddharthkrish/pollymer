module.exports = function (app, db) {
  app.post('/command', (req, res) => { // You'll create your note here.
    console.log( req.body )
    res.send(`will be sending this poll ${req.body.user_name}, "${req.body.text}"`)
  });
};