## The Lord of The Rings SDK

### Overview
The goal is to provide a simple and efficient way for developers to access data from the API. The SDK will handle the authentication process using an access token, and provide three methods for retrieving data from the API

### Key Components
The SDK will consist of the following components:

Access Token Management: The SDK will handle the authentication process using an access token. The token will be used to access the API and retrieve data.

Methods for Retrieving Data: The SDK will provide three methods for retrieving data from the API in a format that is easy to work with. The methods are:

`getMovies()`: List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies.

`getSingleMovie(movieId)`: Request one specific movie.

`getMovieQuotes()`: Request all movie quotes for one specific movie (only working for the LotR trilogy).

### File Structure
The file structure of the SDK has been organized in a modular way to allow for easy maintenance and future updates. The following is an overview of the file structure:

```
- src
  - models
    - requests (interfaces for API requests)
    - responses (interfaces for API responses)
  - lotr-sdk.ts (entry point for the SDK)
```

The models folder contains all interfaces for the API requests and responses. Currently, there is only one class, LOTR, to handle all data retrieval methods, as there are only three methods supported. In the future, these could be separated into different classes based on the type of data being requested, to improve the modularity and maintainability of the SDK.

The entry point for the SDK is the lotr-sdk.ts file, which exports the necessary components and provides a simple way to use the SDK in your project.
