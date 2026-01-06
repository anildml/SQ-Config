use schema;

db.createCollection("node");

db.node.drop();

db.node.find();

db.conversations.createIndex({
    included_users: 1
}, {
    background: false,
    sparse: false
});

db.node.getIndexes();

db.runCommand({
    collMod: "node",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "created_at", "updated_at", "name", "parents", "children", "state_list", "operation_ids"],
            properties: {
                conversation_type: {
                    enum: ['ONE-TO-ONE', 'GROUP']
                },
                _id: {
                    bsonType: "id",
                },
                created_at: {
                    bsonType: "date",
                },
                updated_at: {
                    bsonType: "date",
                },
                name: {
                    bsonType: "name",
                },
                parents: {
                    bsonType: "array"
                },
                children: {
                    bsonType: "array"
                },
                state_list: {
                    bsonType: "array"
                },
                operation_ids: {
                    bsonType: "array"
                }
            }
        }
    }
});

db.createCollection("operation");

db.operation.drop();

db.operation.find();

db.conversations.createIndex({
    included_users: 1
}, {
    background: false,
    sparse: false
});

db.operation.getIndexes();

db.runCommand({
    collMod: "operation",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "created_at", "updated_at", "name", "update_schemas", "node_id"],
            properties: {
                conversation_type: {
                    enum: ['ONE-TO-ONE', 'GROUP']
                },
                _id: {
                    bsonType: "id",
                },
                created_at: {
                    bsonType: "date",
                },
                updated_at: {
                    bsonType: "date",
                },
                name: {
                    bsonType: "name",
                },
                update_schemas: {
                    bsonType: "array"
                },
                node_id: {
                    bsonType: "array"
                }
            }
        }
    }
});




db.conversations.find()

db.messages.find()
