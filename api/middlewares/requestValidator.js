const { QUERY_TYPES } = require('../common/constants');

const validateRequest = (req, res, next) => {
    const { type } = req.query;

    switch (type.toLowerCase()) {
    case QUERY_TYPES.CHILD_FRIENDLY:
        return next();
    case QUERY_TYPES.DOG_FRIENDLY:
        return next();
    case QUERY_TYPES.STRANGER_FRIENDLY:
        return next();
    case QUERY_TYPES.ALL:
        return next();
    default:
        return res.status(400).json({
            error:
            'Breed Type should be either child_friendly, dog_friendly, stranger_friendly or all',
        });
    }
};

module.exports = { validateRequest };
