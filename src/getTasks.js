const AWS = require("aws-sdk"); ///modulo q requiere nodejs para conectarse con AWS

const getTasks = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient(); //ejecutamos una instancia de DynamoDB

    const result = await dynamodb.scan({ TableName: "TaskTable" }) //scan es como el SELECT FROM de sql
        .promise(); //convertimos await en una promesa

    const tasks = result.Items; //resul tiene un objeto Items q es lo q vamos a retornar

    return {
        status: 200,
        body: {
            tasks,
        },
    };
};

module.exports = {
    getTasks,
};