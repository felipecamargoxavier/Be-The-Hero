const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const {email, name, city, uf, whatsapp} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            email,
            name, 
            whatsapp,
            city, 
            uf
        });

        //console.log(data);

        return response.json({ id });
    }
};