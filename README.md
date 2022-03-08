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
3) NgInx as a reverse proxy server using the 8080 port redirecting to the node application (port 3000 inside the Docker network)