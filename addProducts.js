const AWS = require('aws-sdk');

// Configure AWS SDK with your credentials and region
AWS.config.update({
  region: 'us-east-1',
});

// Create a DynamoDB instance
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Define the array of items you want to add
const itemsToAdd = [
    {
        description: "Short Product Description1",
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
        price: 24,
        title: "ProductOneOne",
      },
      {
        description: "Short Product Description7",
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
        price: 15,
        title: "ProductTitle",
      },
      {
        description: "Short Product Description2",
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
        price: 23,
        title: "Product",
      },
      {
        description: "Short Product Description4",
        id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
        price: 15,
        title: "ProductTest",
      },
      {
        description: "Short Product Descriptio1",
        id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
        price: 23,
        title: "Product2",
      },
      {
        description: "Short Product Description7",
        id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
        price: 15,
        title: "ProductName",
      },
  ];
  
  // Create an array of Put requests for batch writing
  const batchWriteParams = {
    RequestItems: {
      'Products': itemsToAdd.map(item => ({
        PutRequest: {
          Item: item,
        },
      })),
    },
  };
  
  // Perform the batch write operation
  dynamodb.batchWrite(batchWriteParams, (err, data) => {
    if (err) {
      console.error('Error adding data to DynamoDB:', err);
    } else {
      console.log('Data added successfully:', data);
    }
  });
