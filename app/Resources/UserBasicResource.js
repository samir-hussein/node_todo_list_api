const resource = {
    single: (record) => {
        return {
            user_id: record._id,
            name: record.name,
            email: record.email,
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