const TaskResource = require("./TaskResource");

const resource = {
    single: (record) => {
        return {
            list_id: record._id,
            name: record.name,
            description: record.description,
            tasks: record.tasks ? TaskResource.collection(record.tasks) : null
        }
    },

    collection: (records) => {
        const newResource = [];

        for (const record of records) {
            newResource.push({
                list_id: record._id,
                name: record.name,
                description: record.description,
                tasks: record.tasks ? TaskResource.collection(record.tasks) : null
            });
        }

        return newResource;
    }
}

module.exports = resource;