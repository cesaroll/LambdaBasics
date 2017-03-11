console.log('Starting function');


const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});

exports.handle = function(e, ctx, callback) {

    console.log('Inside main function');

    var params = {
        TableName: 'guesstbook',
        Item: {
            date: Date.now(),
            message: "I love your website 2!"
        }
    };

    docClient.put(params, function (err, data){
        if(err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
    
}
