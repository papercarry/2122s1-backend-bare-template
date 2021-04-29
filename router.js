const { app } = require('./app');

// var message = function (req, res, next){
//     console.log('Welcome to our queue system, the following are the supported APIs')
//     console.log()
// }

var message = {
    message: 'Welcome to our queue system, the following are the supported APIs',
    apis: [{
        name: 'Enqueue',
        endpoint: '/queue',
        method: 'POST',
    },
    {
        name: 'Dequeue',
        endpoint: '/queue',
        method: 'DELETE'
    }
    ]
}


app.get('/', function (req, res) {
    res.send(message);
});

module.exports = app; // this should always be the last line

