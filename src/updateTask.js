const uuid = require("uuid");
const AWS = require("aws-sdk");

const updateTask = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient(); //Nos conectamos 
    const { id } = event.pathParameters; //extraemos el id del event q es como el body de httpRequest

    //la utilidad de la destructuracion de ECMAScript//
    const { title, description, createdAt } = JSON.parse(event.body); //usamos JSON.parse() para convertirlo a objeto///

    await dynamodb
        .update({
            TableName: "TaskTable",
            Key: { id },
            UpdateExpression: "set title = :title, description = :description, createdAt = :createdAt",
            ExpressionAttributeValues: {
                ":title": title,
                ":description": description,
                ":createdAt": createdAt,
            },
            ReturnValues: "ALL_NEW",
        })
        .promise();

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "task updated",
        }),
    };
};

module.exports = {
    updateTask,
};