# Northcoders News API

## Background

This is an API I have built for the purpose of accessing application data programmatically. The intention here is to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end architecture. 

I am using postgreSQL db, accessed via Node.js' postgres library.

## Info for cloners

Hi there, please find the link to the hosted version of the app below.

https://alexs-nc-be-project.cyclic.app/api

Details on the available endpoints are provided - to view the raw data in a more readable way, please download the chrome JSON Formatter extension.

https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en

To clone and run locally:

1. git clone https://github.com/AlexMSm/nc-backend-project.git

2. Install dependencies - npm i 

- Note this was built using node v18.9 and postgres v8.7.3 

3. Create two files '.env.test' and '.env.development' containing the lines 'PGDATABASE=nc_news_test' and 'PGDATABASE=nc_news' respectively, in the top level folder.

4. Set up the database: 'npm setup-dbs'

5. Seed the database: 'npm seed'

6. Run test suits: npm run test

7. Run server: npm run start - use an API client like insomnia to post to the server on local host 9090


# Any issues please don't hestitate to get in touch!
