#!/bin/sh
go mod download
go build -o app
bash ./app