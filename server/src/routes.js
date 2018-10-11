const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')
const AuthenticationContollerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register', 
        AuthenticationContollerPolicy.register,
        AuthenticationController.register)
    app.post('/login', 
        AuthenticationController.login)
    app.get('/songs',
        SongsController.index)
    app.post('/songs',
        SongsController.post)
}
