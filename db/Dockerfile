FROM mongo:8.2.3

WORKDIR /db
VOLUME ./data/db /data/db
VOLUME ./data/configdb /data/configdb
VOLUME ./db/.dump /db.dump

ENV MONGO_INITDB_ROOT_USERNAME=dmlroot
ENV MONGO_INITDB_ROOT_PASSWORD=guzelliginbesparaetmez

RUN mongorestore -u dmlroot -p guzelliginbesparaetmez --archive=/db.dump

EXPOSE 12879

RUN mongod