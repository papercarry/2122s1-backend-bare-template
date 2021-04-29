const { app } = require('./app');

const queueRoute = require('./routes/queue_route');
const dequeueRoute = require('./routes/dequeue_route');
const { ERROR_CODE, ...errors } = require('./errors');



var messagesent = function (req, res, next) {
    var message = {
        message: 'Welcome to our queue system, the following are the supported APIs',
        apis: [{
            name: 'Enqueue',
            endpoint: '/queue',
            method: 'POST',
        },
        {
            name: 'Dequeue',
            endpoint: '/dequeue',
            method: 'DELETE'
        }
        ]
    }
    console.log(message);
    next();
}

app.use(messagesent)

app.use('/queue', queueRoute);

app.use('/dequeue',dequeueRoute);

app.get('/', function (req, res) {
    res.send();
});

// 404
app.use((req, res, next) => next(new errors.UrlNotFoundError(`${req.method} ${req.originalUrl} Not Found`)));

// error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    // Console.error for quick debugging using console
    console.error(error); // eslint-disable-line no-console

    // Extract information
    let status = 500;
    let code = ERROR_CODE.UNEXPECTED_ERROR;
    let message = 'Unexpected Error!';
    const reason = error.message;

    // Special case of errors
    if (error instanceof errors.UrlNotFoundError) {
        status = 404;
        code = ERROR_CODE.URL_NOT_FOUND;
        message = `Resource not found`;
    }

    const payload = { code, error: message, reason };

    // Log and respond accordingly.
    return res.status(status).json(payload);
});

module.exports = app; // this should always be the last line

