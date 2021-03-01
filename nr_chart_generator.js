var process_name = 'nr-chart-generator'
var process_version = '1.0'
var nerdgraph_api_key = 'NRAK-8N8GM91CORR5UKODJ6UD0F3CY3W' //process.env.NERDGRAPH_API_KEY
var account_id = process.env.ACCOUNT_ID

var request = require('request');

var nerdgraph_query = `
{
    actor {
      account(id: ${account_id}) {
        nrql(query: "SELECT count(*) FROM Log since 7 days ago timeseries", timeout: 5) {
          staticChartUrl(chartType: AREA, format: PNG, height: 600, width: 700)
        }
      }
    }
  }
`

single_line_query = nerdgraph_query.trim();

var url = `https://api.newrelic.com/graphql?query=${single_line_query}`
console.log(url)

request.get({
    url: url,
    json: true,
    data: nerdgraph_query,
    headers: { 'Api-Key': nerdgraph_api_key, 'Content-type': 'application/json'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      //Retrieve the URL
      console.log('Status:', res.statusCode);
      var image_url = data['data']['actor']['account']['nrql']['staticChartUrl'];
      console.log(`Generated chart image: ${image_url}`);
      // Now dowload it
      const https = require('https');
      const fs = require('fs');
      const file = fs.createWriteStream("chart.png");
      https.get(image_url, function(response) {
        response.pipe(file);
      });
      console.log("Downloaded to chart.png!")
    }
});
