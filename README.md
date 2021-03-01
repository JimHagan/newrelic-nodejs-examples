# newrelic-nodejs-examples

## Purpose

These scripts are intended to give you a good example performing the following use cases

- Given an NRQL query retrieve the raw JSON response for that query
- Given a NRQL query create and download a chart depicting that query (as a PNG file)

## Script Overview

- *nrql_api_request.js* Gets raw JSON response from NRQL query
- *nr_chart_generator.js* Creates and downloads a chart for a given NRQL query


## Prerequisites

You will have to set the following environment variables

*QUERY_KEY* REST API Query Key
*ACCOUNT_ID* NR Account ID
*NERDGRAPH_API_KEY* New Relic Graphql(Nerdgraph) API Key

You may also have to install some dependencies for example `request`

Use the command `npm install request`
