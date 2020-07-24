const connection = require('../database/connection');

module.exports = {
    async genderIndex(request, response) {
        const { gender } = request.body;

        const items = await connection('items')
            .where('gender', gender)
            .select('*');
        
        return response.json(items);
    },

    async unique(request, response) {
        const { id } = request.params;

        const item = await connection('items')
            .where('id', id)
            .select('*')
            .first();
        
        return response.json(item);
    },

    async create(request, response) {
        try {
            const { imageUrl, description, size, category, gender, price } = request.body;

            await connection('items').insert({
                imageUrl,
                description,
                size,
                category,
                gender,
                price
            });

            return response.status(204).send();
        } catch (err) {
            response.status(500).send(err);
        }
    }
}
