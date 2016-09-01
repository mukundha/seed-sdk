var request = require('request')
var q = require('q')
var baseurl = 'http://amer-demo1-test.apigee.net/seed'

//TODO: add auth, externalize API, add doc

function sdk(){
}
module.exports = sdk

sdk.storeTestData = function(data){
	var d = q.defer()
	request({
		uri: baseurl+ '/testdatasets',
		body: data,
		json: true,
		method:'POST'
	}, function(error, response ,body){
		if(error) q.reject(error)
		else q.resolve(body)
	})
	return d.promise;
}