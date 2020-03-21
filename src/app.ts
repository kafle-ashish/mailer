import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';

import mailer from './app/routes';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use('/mailer', mailer);
app.use('/', (req, res) => res.status(200).json({ status: 'Online!' }));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});

module.exports = app;
