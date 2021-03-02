# newrelic-nodejs-examples

## Purpose

These scripts are intended to give you a good example performing the following use cases

- Given an NRQL query retrieve the raw JSON response for that query
- Given a NRQL query create and download a chart depicting that query (as a PNG file)

## Script Overview

- *nrql_api_request.js* Gets raw JSON response from NRQL query
- *nr_chart_generator.js* Creates and downloads a chart for a given NRQL query
- *nr_send_chart.js* Send email with image attachment using mailgun API


## Main Prerequisites

You will have to set the following environment variables

- *QUERY_KEY* REST API Query Key

- *ACCOUNT_ID* NR Account ID

- *NERDGRAPH_API_KEY* New Relic Graphql(Nerdgraph) API Key

You may also have to install some dependencies for example `request`

Use the command `npm install request`

## If you are using nr_send_chart

- You will need to create or have a mailgun account enabled
- You'll need to make sure that your destination emails are allowed to receive emails from mailgun
- Install the mailgun node library with command `npm install mailgun-js`
- Set the following enviroment variables:
    + *MAILGUN_API_KEY*
    + *MAILGUN_API_DOMAIN*
    + *EMAIL_DESTINATION*

