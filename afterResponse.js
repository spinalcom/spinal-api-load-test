module.exports = {
    printStatus: (requestParams, response, context, ee) => {
      console.log(`Response status: ${response.statusCode}`);
      return response; // Make sure to return the response for further processing if needed
    }
  }