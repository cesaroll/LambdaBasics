console.log('Starting read function');


const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});

exports.handle = function(e, ctx, callback) {

    // In Dynamo DB Scan searches all the table, it is expensive
    
    let scanningParameters = {
        TableName: 'guesstbook',
        Limit: 100
    }

    docClient.scan(scanningParameters, function(err, data) {

        if(err) {
            callback(err, null);
        } else {
            callback(null, data);
        }

    });

    // In DynamoDB Query can only be done in the primary and secundary key
    /*
    var params = {
        TableName: 'guesstbook',
        Key: {
            "date": 2322432432423
        }
    }

    docClient.get(params, function(err, data) {
        if(err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });*/
    
}
