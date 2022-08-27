#!/usr/bin/bash

if [ $# -lt 1 ]
then
  echo "Too few arguments provided. First argument must be the mongodb database link."
  echo "Run this script with the argument help for more information"
  exit 1
fi
if [ "$1" = "help" ]
then
  echo "The first argument must be the mongodb database link."
  echo "The optional second parameter is \"test\" which will enable the /test_api/ series of API endpoints."
  exit 0
fi

npm i || exit
cd ./frontend || exit
npm i || exit
npm run build || exit
cd ../
touch .env
echo "MONGO_API_KEY=$1" > .env

if [ $# -eq 2 ]
then
  echo "TEST_API=1" >> .env
fi

echo "Server successfully initialised, run 'node index.js listen <port_number>' to start the webserver!"
exit 0