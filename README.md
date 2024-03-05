# Build Flutter app and push that builded folder here

A new Flutter project.

## Getting Started

# To build and host on server do the following steps

### STEP 1

```flutter build web```

### STEP 2

Then copy everything inside /build/web  folder(not including build/web) and zip them into a new folder.

### STEP 3

Then go to your Linux machine where you want to deploy the flutter app. I will name it 'FlutterApps'. 

Now cd to your folder and create another folder inside it. Name it 'crib4uinspect' (or any other name you want)

### STEP 4

create a two files in web.dbestech.com named as 'app.js' and 'package.json'

Now copy the below code in 'app.js'

```
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'crib4uinspect')));


module.exports = app;

```


Copy the below code in 'package.json'

```
{
  "name": "flutter-web-app",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "morgan": "~1.9.1"
  }
}
```


### STEP 5

In the same folder run the below command to install the necessary dependencies.
(You need Node.js installed in your system)
```
npm install

```

### STEP 6

Move your zip folder in the STEP 2 and put into 'crib4uinspect' folder. You can ftp to upload the file. Next unzip the folder.

### STEP 7

Run the below command in your Linux terminal

```
node app.js

```

### STEP 8

You can visit the browser 'http://127.0.0.1:8022/' (if running on local system) or 
'https://<your_mapping_host_port>/' 