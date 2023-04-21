'use strict';


module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hola Mundo successfully',
        input: event,
      },
      null,
      2
    ),
  };

}

module.exports.helloUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '!!Hola Mundo desde Get!!',
        input: event,
      },
      null,
      2
    ),
  };

}





