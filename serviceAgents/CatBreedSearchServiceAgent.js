const { default: axios } = require('axios');

const CatBreedServiceAgent = ({ logger }) => {
    const apiConfig = {
        headers: {
            'x-api-key': process.env.CAT_API_KEY ? process.env.CAT_API_KEY : '',
        },
    };

    const getCatBreeds = async () => {
        const url = process.env.CAT_API_BASE_URL
            ? `${process.env.CAT_API_BASE_URL}${'/breeds'}` : 'https://api.thecatapi.com/v1/breeds';

        try {
            const { data } = await axios.get(url, apiConfig);
            return data;
        } catch (err) {
            logger.error('Error retrieving the results from the Cat API ',
                err.message);
            throw new Error(err.message);
        }
    };

    return { getCatBreeds };
};

module.exports = { CatBreedServiceAgent };
