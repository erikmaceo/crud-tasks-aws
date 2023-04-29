const jwt = require('jsonwebtoken');

//const AWS = require('aws-sdk');


const login = async (event) => {       
   
   const {username, password} = JSON.parse(event.body);

    if(!validateUser(username, password)) {
        return {
            statusCode: 401,
            body: JSON.stringify({message: 'Credenciales Invalidas'})
        }
    }

    // Genera un token JWT con una clave secreta
    const token = jwt.sign({ username }, 'my-secret-key');

    return {
        statusCode: 200,
        body: JSON.stringify({token}) 
    }

}


function validateUser(user, pass) {

    if (user !== 'admin' || pass !== 'admin') {

        return false;
    }
    return true;
}


module.exports = { login }


