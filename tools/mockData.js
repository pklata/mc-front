const buildings = [
  {
    "id": 1,
    "country": "Polska",
    "address": "Spokojna 36",
    "zip_code": "96-515",
    "city": "Granice",
    "county": "mazowieckie"
  },
  {
    "id": 2,
    "country": "Polska",
    "address": "Graniczna 17",
    "zip_code": "96-515",
    "city": "Granice",
    "county": "mazowieckie"
  },
  {
    "id": 3,
    "country": "Polska",
    "address": "Wschodnia 1",
    "zip_code": "96-515",
    "city": "Granice",
    "county": "mazowieckie"
  },
  {
    "id": 4,
    "country": "Polska",
    "address": "Południowa 34",
    "zip_code": "96-515",
    "city": "Granice",
    "county": "mazowieckie"
  },
  {
    "id": 5,
    "country": "Polska",
    "address": "Zachodnia 5",
    "zip_code": "96-515",
    "city": "Granice",
    "county": "mazowieckie"
  }
];

const locals = [
  {
    "id": 1,
    "number": 1,
    "description": "mieszkanie",
    "buildingId": 1
  },
  {
    "id": 2,
    "number": 1,
    "description": "mieszkanie",
    "buildingId": 2
  },
  {
    "id": 3,
    "number": 2,
    "description": "mieszkanie",
    "buildingId": 2
  },
  {
    "id": 4,
    "number": 3,
    "description": "mieszkanie",
    "buildingId": 2
  },
  {
    "id": 5,
    "number": 4,
    "description": "mieszkanie",
    "buildingId": 2
  },
  {
    "id": 6,
    "number": 5,
    "description": "mieszkanie",
    "buildingId": 2
  },
  {
    "id": 7,
    "number": 6,
    "description": "mieszkanie",
    "buildingId": 2
  },
  {
    "id": 8,
    "number": 7,
    "description": "mieszkanie",
    "buildingId": 2
  },
  {
    "id": 9,
    "number": 8,
    "description": "mieszkanie",
    "buildingId": 2
  },
  {
    "id": 10,
    "number": 9,
    "description": "mieszkanie",
    "buildingId": 2
  },
  {
    "id": 11,
    "number": 10,
    "description": "mieszkanie",
    "buildingId": 2
  },
  {
    "id": 12,
    "number": 1,
    "description": "mieszkanie",
    "buildingId": 3
  },
  {
    "id": 13,
    "number": 2,
    "description": "mieszkanie",
    "buildingId": 3
  },
  {
    "id": 14,
    "number": 3,
    "description": "mieszkanie",
    "buildingId": 3
  },
  {
    "id": 15,
    "number": 1,
    "description": "mieszkanie",
    "buildingId": 5
  },
  {
    "id": 16,
    "number": 2,
    "description": "mieszkanie",
    "buildingId": 5
  },
  {
    "id": 17,
    "number": 3,
    "description": "mieszkanie",
    "buildingId": 5
  },
  {
    "id": 18,
    "number": 4,
    "description": "mieszkanie",
    "buildingId": 5
  },
  {
    "id": 19,
    "number": 5,
    "description": "mieszkanie",
    "buildingId": 5
  },
  {
    "id": 20,
    "number": 6,
    "description": "mieszkanie",
    "buildingId": 5
  },
  {
    "id": 21,
    "number": 7,
    "description": "mieszkanie",
    "buildingId": 5
  },
  {
    "id": 22,
    "number": 8,
    "description": "mieszkanie",
    "buildingId": 5
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  buildings,
  locals
};
