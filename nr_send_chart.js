var process_name = 'nr-send-chart'
var process_version = '1.0'
var mailgun_api_key = process.env.MAILGUN_API_KEY
var mailgun_api_domain = process.env.MAILGUN_API_DOMAIN
var email_destination = process.env.EMAIL_DESTINATION

console.log(mailgun_api_domain, mailgun_api_key)
const mailgun = require("mailgun-js");
const mg = mailgun({apiKey: mailgun_api_key, domain: mailgun_api_domain});
const data = {
	from: `Log Stats <api@${mailgun_api_domain}>`,
	to: `${email_destination}`,
	subject: 'Log counts last 7 days',
    text: 'Log counts last 7 days',
    attachment: './chart.png'
};
mg.messages().send(data, function (error, body) {
    console.log(body);
});