# Cat Breed Search App

A simple express server application that returns the top 5 cat breeds that are child friendly, stranger friendly and dog friendly using https://api.thecatapi.com/.

## Getting Started

To run this project, follow these steps:
- Go to the root of this application and create a `.env` file.
- Copy everything from `.env.sample` into `.env` and replace the value of `CAT_API_KEY` with actual API kep from theCatAPI.com
- Go to terminal window and run `npm install` & `npm start` from root directory. The service should now be up at http://localhost:3000/
- Make requests to the endpoints
  - To get all breeds : http://localhost:3000/catbreeds/topfive?type=all
  - To get dog friendly breeds : http://localhost:3000/catbreeds/topfive?type=dog_friendly
  - To get stranger friendly breeds: http://localhost:3000/catbreeds/topfive?type=stranger_friendly
  - To get child friendly breeds : http://localhost:3000/catbreeds/topfive?type=child_friendly

### Testing

This is using `mocha` and `chai` for unit testing
- The tests can be run by using the command `npm test`.