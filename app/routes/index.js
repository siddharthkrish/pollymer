const commandRoutes = require('./command_routes');
const homeRoutes = require('./home');

module.exports = function (app, db) {
  commandRoutes(app, db);
  homeRoutes(app, db);
}