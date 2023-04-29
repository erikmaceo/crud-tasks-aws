
const AWS = require('aws-sdk'); 
const { v4 } = require('uuid'); 

const createUser = async (event) => {
  
  const {username, password} = JSON.parse(event.body);  
  const id = v4(); 

  const dynamodb = new AWS.DynamoDB.DocumentClient();

    const newUser = {
        id,
        username,
        password
    }

    await dynamodb.put({
        TableName: 'UserTable',
        Item: newUser
    }).promise() 
  
  
    return {
        status: 200,
        body: JSON.stringify(newUser)
    }

};

module.exports = {createUser}