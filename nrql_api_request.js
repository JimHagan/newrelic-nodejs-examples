var process_name = 'nrql-api-request'
var process_version = '1.0'
var query_key = process.env.QUERY_KEY
var account_id = process.env.ACCOUNT_ID
var log_query = encodeURIComponent('FROM Log SELECT COUNT(*) SINCE 1 day ago')

var request = require('request');

var url = `https://insights-api.newrelic.com/v1/accounts/${account_id}/query?nrql=${log_query}`;

request.get({
    url: url,
    json: true,
    headers: { 'X-Query-Key': query_key }
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      console.log(`Number of logs in last 7 days: ${data['results'][0]['count']}`)
    }
});

