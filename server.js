const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

console.log("server.js1")

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

console.log("server.js2")

const sess = {
  secret: 'Super secret secret',
  // 1000ms/s * 60s/min * 60mins/hr * 24hr/day = 86,400,000ms/day (expires in a day)
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 1000 * 60 * 30,
    expiration: 1000 * 60 * 60 * 24
  })
};

console.log("server.js3")

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

console.log("server.js4")

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});
