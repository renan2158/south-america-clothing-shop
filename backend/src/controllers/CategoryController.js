const connection = require('../database/connection');

module.exports = {
    async categoryIndex(request, response) {
        const { gender, category } = request.body;

        const items = await connection('items')
            .where('gender', gender)
            .andWhere('category', category)
            .select('*');

        return response.json(items);
    },

    async searchIndex(request, response) {
        const { search } = request.body;

        const items = await connection('items')
            .where('description', 'like', '%'.concat(search).concat('%'))
            .orWhere('description', 'like', search.concat('%'))
            .orWhere('description', 'like', '%'.concat(search))
            .select('*');

        return response.json(items);
    },
}
