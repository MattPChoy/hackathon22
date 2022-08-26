# Coffee App [UQCS Hackathon 2022]
Run the app by running ``node index.js listen 3000`` this will start the server on port 3000

A ``.env`` file must be present in the top level directory. If this file contains an option labelled ``TEST_API=1``,
then the test apis will be enabled, these allow access into a lot of what would be considered sensitive information, so 
only have this option present when the application is running in development mode. If this option is not present; i.e.,
the file does not contain a key ``TEST_API`` then the server will not accept requests on the ``/test_api``API.

Go to ./docs/api.html for more information about the backend server and its API.
