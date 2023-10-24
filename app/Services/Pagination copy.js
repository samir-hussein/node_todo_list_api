async function Pagination(req, model, limit = 2) {
    let currentPage = req.query.page ?? 1;
    currentPage = parseInt(currentPage);

    return await model.paginate({}, { limit: limit, page: currentPage }, (err, result) => {
        const next = currentPage + 1;
        const prev = currentPage - 1;
        if (!next || next > result.pages) {
            result.next = null;
        } else {
            req.query.page = next;
            let query = JSON.stringify(req.query);
            query = query.replaceAll(/[{}"]/g, "");
            query = query.replaceAll(":", "=");
            query = query.replaceAll(",", "&");
            query = query.replaceAll("\\", "'");
            result.next = `${req.protocol}://${req.get('host')}${req.baseUrl}${req.path}?${query}`;
        }

        if (!prev || prev <= 0) {
            result.prev = null;
        } else {
            req.query.page = prev;
            query = JSON.stringify(req.query);
            query = query.replaceAll(/[{}"]/g, "");
            query = query.replaceAll(":", "=");
            query = query.replaceAll(",", "&");
            query = query.replaceAll("\\", "'");
            result.prev = `${req.protocol}://${req.get('host')}${req.baseUrl}${req.path}?${query}`;
        }
    })
};

// module.exports = schema => {
//     schema.statics.pagination = Pagination;
// };

module.exports = Pagination;