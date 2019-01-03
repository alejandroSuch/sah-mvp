# SAH MVP

## Downloading

```
git clone https://github.com/alejandroSuch/sah-mvp.git
```

## Running

### 1. Just running

In order to run, you must have Docker and `docker-compose` command. You also need to have the permissions to deploy dockerized apps on port 80.

Launch this command inside `sah-mvp` directory:

```
sh run.sh 1.1.4
```

And then navigate to http://localhost.

Here, pre-built docker images will be used. The startup time will depend on your bandwidth.

### 2. Building and running

You can opt for building the images on your computer. To do this, execute this command under the `sah-mvp` directory:

```
sh build-and-run.sh
```

And then navigate to http://localhost.

This process is much slower than the previous because images are built on the fly.

## Services

### API

Spring Boot REST API with two endpoints
- One to get properties
- One to create properties (used by initializer)

Uses an in-memory database to store all the information

### Initializer

Reads the XML from the feed and POSTs the needed data to the API

### Frontend

Responsive Angular frontend to consume data from the API. Layout varies on mobile and desktop devices.

### Proxy

API and frontend are accessed through a nginx proxy. If you add the following line to your `/etc/hosts` file

```
127.0.0.1	www.spot-a-room.com
```

You can access the app by browsing to to http://www.spot-a-room.com.
