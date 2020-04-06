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

    async unique(request, response) {
        const id = request.body;

        const item = await connection('items')
            .where('id', id)
            .select('*')
            .first();
        
        return response.json(item);
    },
}