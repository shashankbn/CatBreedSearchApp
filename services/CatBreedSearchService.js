const CatBreedService = () => {
    const getTopFiveChildFriendlyBreeds = (breeds) => {
        const topChildFriendlyBreeds = breeds.filter((cat) => cat.child_friendly === 5);
        return topChildFriendlyBreeds.slice(0, 5);
    };

    const getTopFiveDogFriendlyBreeds = (breeds) => {
        const topChildFriendlyBreeds = breeds.filter((cat) => cat.dog_friendly === 5);
        return topChildFriendlyBreeds.slice(0, 5);
    };

    const getTopFiveStrangerFriendlyBreeds = (breeds) => {
        const topChildFriendlyBreeds = breeds.filter((cat) => cat.stranger_friendly === 5);
        return topChildFriendlyBreeds.slice(0, 5);
    };

    // Get top records for All breeds with equal weighting
    const getTopFiveAllBreeds = (breeds, numOfResults) => {
        const topAllBreeds = [];
        let rating = 5;
        do {
            topAllBreeds.push(breeds.filter(
                (cat) => cat.child_friendly === rating
            && cat.dog_friendly === rating
            && cat.stranger_friendly === rating,
            ));
            rating -= 1;
        } while (rating > 0 || topAllBreeds.length < numOfResults);

        return topAllBreeds.flat().slice(0, numOfResults);
    };

    return {
        getTopFiveChildFriendlyBreeds,
        getTopFiveDogFriendlyBreeds,
        getTopFiveStrangerFriendlyBreeds,
        getTopFiveAllBreeds,
    };
};

module.exports = { CatBreedService };
