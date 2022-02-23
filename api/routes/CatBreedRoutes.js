const { CatBreedServiceAgent } = require('../../serviceAgents/CatBreedSearchServiceAgent');
const { CatBreedService } = require('../../services/CatBreedSearchService');
const { QUERY_TYPES } = require('../common/constants');

const CatBreedRoutes = ({ logger }) => {
    const getTopFiveCatBreeds = async (req, res) => {
        const { type } = req.query;
        const breeds = await CatBreedServiceAgent({ logger }).getCatBreeds();
        let response;
        switch (type.toLowerCase()) {
        case QUERY_TYPES.CHILD_FRIENDLY:
            response = CatBreedService().getTopFiveChildFriendlyBreeds(breeds);
            break;
        case QUERY_TYPES.DOG_FRIENDLY:
            response = CatBreedService().getTopFiveDogFriendlyBreeds(breeds);
            break;
        case QUERY_TYPES.STRANGER_FRIENDLY:
            response = CatBreedService().getTopFiveStrangerFriendlyBreeds(breeds);
            break;
        default:
            response = CatBreedService().getTopFiveAllBreeds(breeds, 5);
        }

        res.send(response);
    };

    return { getTopFiveCatBreeds };
};

module.exports = { CatBreedRoutes };
