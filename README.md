# Geolocation - API

An API developed in TypeScript, using MongoDB, created as a solution for partners management.

## Features

1. Save in a database a partner defined by all the fields represented by the JSON and rules below:

```json
    {
  "id": 1, 
  "tradingName": "Distribuidora X",
  "ownerName": "Jeycimar",
  "document": "1432132123891/0001",
  "coverageArea": { 
    "type": "MultiPolygon", 
    "coordinates": [
      [[[30, 20], [45, 40], [10, 40], [30, 20]]], 
      [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]
    ]
  },
  "address": { 
    "type": "Point",
    "coordinates": [-46.57421, -21.785741]
  }
}
```
 The address field follows the GeoJSON Point format (https://en.wikipedia.org/wiki/GeoJSON). The coverageArea field follows the GeoJSON MultiPolygon format (https://en.wikipedia.org/wiki/GeoJSON).

2. Load all partners:
    Return all partners loaded in database. 

2. Load partner by id:
    Return a specific partner by its id with all the fields presented above.

3. Search partner:
    Given a specific location (coordinates long and lat), search the nearest partner which the coverage area includes the location.

## Usage

To start the server, we need to compile using `yarn build`, and subsequently, use `yarn start` to initialize the server. Additionally, it's also possible to use `yarn dev` for the development environment.
