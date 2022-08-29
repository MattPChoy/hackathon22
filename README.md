# Coffee App "CafMap" [UQCS Hackathon 2022]
A little tool that allows friends to find new spots to meet! Simply create a new CafMap and send out the invite link. Add your location, and we'll build a **CafMap**, suggesting the best locations nearby. Use the filters to select the best location according to your tastes, and settle on a location with your friends using the live chat feature.

![image](https://user-images.githubusercontent.com/51275997/187138864-7578b77a-600b-40f1-b6f1-31b3a3a72471.png)

[View Live Demo](https://www.youtube.com/watch?v=rg8NlIms5RQ)

# Key Contributors
[Matt](https://github.com/MattPChoy)
[Captian](https://github.com/CaptianDynamite)
[Mik](https://github.com/MikStap)
[Jack](https://github/com/Jackappaarel)

# Setup
Run the app by running ``node index.js listen 3000`` this will start the server on port 3000

A ``.env`` file must be present in the top level directory. If this file contains an option labelled ``TEST_API=1``,
then the test apis will be enabled, these allow access into a lot of what would be considered sensitive information, so 
only have this option present when the application is running in development mode. If this option is not present; i.e.,
the file does not contain a key ``TEST_API`` then the server will not accept requests on the ``/test_api``API.

Go to ./docs/api.html for more information about the backend server and its API.

# Server Setup
```bash
git clone https://github.com/MattPChoy/hackathon22.git cafmap
cd cafmap
./install.sh <mongo database srv link> # Set up server after cloning repository
sudo node index.js listen 80           # Run server
```

# Google Maps Window
The Google Maps window was based on [this project](https://www.youtube.com/watch?v=wfH-W7oXEo8) and requires the configuration of an API key (credit card required, but free trial available).
