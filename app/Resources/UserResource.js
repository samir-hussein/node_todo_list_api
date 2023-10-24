const ListResource = require("./ListResource");

const resource = {
    single: (record) => {
        return {
            user_id: record._id,
            name: record.name,
            email: record.email,
            lists: record.lists.length > 0 ? ListResource.collection(record.lists) : null
        }
    },

    collection: (records) => {
        const newResource = [];

        for (const record of records) {
            newResource.push({
                user_id: record._id,
                name: record.name,
                email: record.email
            });
        }

        return newResource;
    }
}

module.exports = resource;