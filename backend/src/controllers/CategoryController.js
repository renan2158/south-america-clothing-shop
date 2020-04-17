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
        const { search, gender } = request.body;

        const items = await connection('items')
            .where('gender', gender)
            .andWhere('desciption', 'like', '%'.concat(search).concat('%'))
            .andWhere('desciption', 'like', search.concat('%'))
            .andWhere('desciption', 'like', '%'.concat(search))
            .select('*');

        return response.json(items);
    },
}
