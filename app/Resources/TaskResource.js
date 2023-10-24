const resource = {
    single: (record) => {
        return {
            task_id: record._id,
            name: record.name,
            description: record.description,
            status: record.status,
            start_date: record.start_date,
            end_date: record.end_date
        }
    },

    collection: (records) => {
        const newResource = [];

        for (const record of records) {
            newResource.push({
                task_id: record._id,
                name: record.name,
                description: record.description,
                status: record.status,
                start_date: record.start_date,
                end_date: record.end_date
            });
        }

        return newResource;
    }
}

module.exports = resource;