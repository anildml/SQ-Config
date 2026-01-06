#!/bin/sh
cd ../../SQ-Core/
echo module download started
go mod download
echo module download finished
echo project build started
go build -o app
echo project build finished
