var request = require('request')
var baseurl = 'http://amer-demo1-test.apigee.net/seed'

//TODO: add auth, externalize API, add doc

function sdk(){
}
module.exports = sdk

sdk.storeTestData = function(data){
	request({
		uri: baseurl+ '/testdatasets',
		body: data,
		json: true
	}, function(error, response ,body){
		console.log(body)
	})
}