const { describe, it } = require('mocha');
const { expect } = require('chai');
const { CatBreedService } = require('./CatBreedSearchService');

const breeds = [{
    child_friendly: 5,
    dog_friendly: 5,
    stranger_friendly: 5,
    name: 'Cat Breed A',
}, {
    child_friendly: 5,
    dog_friendly: 5,
    stranger_friendly: 5,
    name: 'Cat Breed B',
}, {
    child_friendly: 4,
    dog_friendly: 5,
    stranger_friendly: 5,
    name: 'Cat Breed C',
}, {
    child_friendly: 4,
    dog_friendly: 5,
    stranger_friendly: 5,
    name: 'Cat Breed D',
}, {
    child_friendly: 4,
    dog_friendly: 5,
    stranger_friendly: 5,
    name: 'Cat Breed E',
}, {
    child_friendly: 4,
    dog_friendly: 5,
    stranger_friendly: 5,
    name: 'Cat Breed F',
}, {
    child_friendly: 4,
    dog_friendly: 5,
    stranger_friendly: 4,
    name: 'Cat Breed G',
}];

const catBreedService = CatBreedService();
describe('CatBreedService', () => {
    describe('getTopFiveAllBreeds', () => {
        it('should return only top 2 breeds since the other breeds have unequal weightings', () => {
            expect(catBreedService.getTopFiveAllBreeds(breeds, 5).length).to.equal(2);
        });
    });
    
    describe('getTopFiveChildFriendlyBreeds', () => {
        it('should return 2 breeds', () => {
            expect(catBreedService.getTopFiveChildFriendlyBreeds(breeds).length).to.equal(2);
        });
    });

    describe('getTopFiveDogFriendlyBreeds', () => {
        it('should return 5 breeds', () => {
            expect(catBreedService.getTopFiveDogFriendlyBreeds(breeds).length).to.equal(5);
        });
    });

    describe('getTopFiveStrangerFriendlyBreeds', () => {
        it('should return 5 breeds', () => {
            expect(catBreedService.getTopFiveStrangerFriendlyBreeds(breeds).length).to.equal(5);
        });
    });

});
