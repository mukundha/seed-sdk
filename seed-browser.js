function getTestData(org,env,sample,cb){
	var ql = "select * where organization='" + org + "' and environment='" + env + "' and sample='" + sample + "'"
	var baseurl = 'https://amer-demo1-test.apigee.net/seed'

	jQuery.ajax({
		url:baseurl+'/testdatasets?ql=' + ql,
	}).done(function(data){
		cb(data)
	})
}