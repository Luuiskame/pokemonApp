const PORT = 3001
// getting server initalized in app js
const server = require('./src/app.js');

// database file from js
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`)
    // console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
