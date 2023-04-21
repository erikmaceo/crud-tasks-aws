const AWS = require('aws-sdk'); // Import the AWS SDK for Node.js
const { v4 } = require('uuid'); // Import the uuid package

const addTask = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient(); // Create a DynamoDB client service object connection

    //lo q voy a esperar//
    const {title, description} = JSON.parse(event.body); // Get the title and description from the request body
    const date = new Date();
    const createdAt = date.toJSON(); // Get the current date
    const id = v4(); // Generate a unique id
    
    const newTask = { // pasamos los datos q vamos a guardar en la base de datos
        id,
        title,
        description,
        createdAt,
    }

    await  dynamodb.put({  // The put() method creates a new item, or replaces an old item with a new item
        TableName: 'TaskTable', // The name of the table to add the item to
        Item: newTask // The item to add to the table 
    }).promise()//aki guardamos en la base de datos

    return {
       status: 200,
       body: JSON.stringify(newTask) // The response body 
    }

}

module.exports = { addTask }        