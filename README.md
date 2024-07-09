# Docker

## "Go" Directory

Optimizing an Image using Golang (less than 2MB)

[Link Docker Hub](https://hub.docker.com/r/fabiolnh/docker_desafio_go)

```bash
docker pull fabiolnh/docker_desafio_go:latest
```

## Docker-Compose

1) Starting a MySQL Database creating a Database and a Table with a "init" file
2) A Node Application that connects to the Database, inserts a value into the table and prints it on the browser
3) NgInx as a reverse proxy server using the 8080 port redirecting to the node application (Port 3000 inside the Docker network)


## Insteresting commands:

- ENTRYPOINT VS RUN:
```
  Dockerfile: CMD sleep 5
  $ docker run test sleep 10
  Command at startup: sleep 10

  Dockerfile ENTRYPOINT ["sleep"]
  $ docker run test 10
  Command at startup: sleep 10

  Dockerfile ENTRYPOINT ["sleep"] CMD ["5"]
  $ docker run test
  Command at startup: sleep 5
  $ docker run test 10
  Command at startup: sleep 10

  OBS: You can override the entrypoint in the docker run command:
  $ docker run --entrypoint sleep2 test 10
  Command at startup: sleep2 10

```
