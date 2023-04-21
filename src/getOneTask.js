const AWS = require("aws-sdk");

const getOneTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters; // usamos la destructuracion de javascript para obtener el id //

  const result = await dynamodb
    .get({
      TableName: "TaskTable",
      Key: {
        // aqui podemos buscar a traves de un title o description tambien//
        //en este caso buscaremos por el id //
        id 
     },
    })
    .promise();

  const task = result.Item;

  return {
    status: 200,
    body: task,
  };
};

module.exports = {
  getOneTask,
};