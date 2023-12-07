const express = require('express');
const app = express();
const port = 3000;

const usersRouter = require('./routes/users');
const studentsRouter = require('./routes/students');
const articlesRouter = require('./routes/articles');

const errorMdwares = require('./middlewares/app.middlewares');

function logger(req, res, next) {
  console.log(req.method, req.originalUrl);

  next();
}

app.use('/', express.json());
app.use('/users', logger, usersRouter);
app.use('/students', logger, studentsRouter);
app.use('/articles', logger, articlesRouter);

app.get('/', (req, res) => {
  res.send('Hello world');

  res.json({
    "data": [],
    "message": 'Hello world'
  })
});

app.use(errorMdwares.errorHandler);

app.listen(port, () => {
  console.log(`server listening on ${port}...`);
});
