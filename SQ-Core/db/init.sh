#!/bin/sh
docker exec -it mongodb sh -c "mongorestore -u dmlroot -p guzelliginbesparaetmez --archive=/db.dump"