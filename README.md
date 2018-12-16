# SAH MVP

## Downloading

```
git clone https://github.com/alejandroSuch/sah-mvp.git
```

## Running

In order to run, you must have Docker and `docker-compose` command. You also need to have the permissions to deploy dockerized apps on port 80.

Launch this command inside `sah-mvp` directory:

```
sh run.sh
```

And then navigate to http://localhost.

On first execution, it will take around 5 minutes for all to be ready. So please be patient. This happens because everything gets compiled from the sources you have downloaded to guarantee the executed code is the same you are viewing.

## Services

### API

Spring boot REST API with two endpoints
- One to get properties ()
- One to create properties (used by initializer)

### Inializer

Reads the XML from the feed and POSTs the needed data to the API

### MySQL

MySQL server to store the data

### Frontend

Simple Angular frontend to consume data from the API

## Troubleshooting

Depending on your bandwith, it's possible the initializer could end with a timeout before the API is ready. In that case, you should launch `docker-compose up` a second time with all compiled. This can be noticeable because the frontend shows no results.

