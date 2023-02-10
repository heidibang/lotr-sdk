# The Lord of the Rings - SDK

This SDK can be used to consume data from [The One](https://the-one-api.dev/) API.

## Installation

`npm install @heidibang/lotr-sdk`

`import LOTR from @heidibang/lotr-sdk`

## Usage

In order to access the data from this API, an access token is required and can be created [HERE](https://the-one-api.dev/sign-up).

Once you have created your access token, you are now ready to use this SDK.

Initialize with the following:

```
const lotr = new LOTR({
  baseUrl: 'https://the-one-api.dev/v2',
  accessToken: <your-access-token>
});
```

## Methods

Currently the following methods are supported:

`getMovies()`

`getSingleMovies(movieId)`

`getMovieQuotes(movieId)`
