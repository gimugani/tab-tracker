const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationContollerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
    app.post('/register', 
        AuthenticationContollerPolicy.register,
        AuthenticationController.register)

    app.post('/login', 
        AuthenticationController.login)
}
