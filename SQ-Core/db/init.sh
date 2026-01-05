#!/bin/sh

docker compose up -d
docker exec -it mongodb mongorestore -u dmlroot -p guzelliginbesparaetmez --archive=/db.dump