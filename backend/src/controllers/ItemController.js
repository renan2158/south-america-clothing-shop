const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const items = await connection('items')
            .select('*');
        
        return response.json(items);
    },

    async genderIndex(request, response) {
        const { gender } = request.params;

        const items = await connection('items')
            .where('gender', gender)
            .select('*');
        
        return response.json(items);
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