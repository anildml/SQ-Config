#!/bin/sh
docker exec -it sq_db sh -c "mongorestore -u dmlroot -p guzelliginbesparaetmez --archive=/db.dump"
