#!/bin/sh
run_in_container()
{
    docker exec -it sq_dashboard $1
}

docker compose up -d
run_in_container "npm i -g @angular/cli"
run_in_container "npm i"
run_in_container "ng serve --port 12281"
