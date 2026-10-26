export const serviceTowns = [
  "Luton",
  "Dunstable",
  "Houghton Regis",
  "Flitwick",
  "Ampthill",
  "Leighton Buzzard",
  "Linslade",
  "Harpenden",
  "Hitchin"
];

export const serviceAreaGroups = [
  {
    "title": "Towns around our Luton base",
    "places": [
      "Luton",
      "Dunstable",
      "Houghton Regis",
      "Flitwick",
      "Ampthill",
      "Leighton Buzzard",
      "Linslade",
      "Harpenden",
      "Hitchin"
    ]
  },
  {
    "title": "Villages towards the north",
    "places": [
      "Upper Sundon",
      "Streatley",
      "Toddington",
      "Harlington",
      "Barton-le-Clay",
      "Westoning"
    ]
  },
  {
    "title": "Villages towards the south and west",
    "places": [
      "Chaul End",
      "Caddington",
      "Slip End",
      "Kensworth",
      "Totternhoe",
      "Whipsnade",
      "Studham",
      "Eaton Bray",
      "Edlesborough",
      "Tilsworth",
      "Hockliffe",
      "Markyate",
      "Flamstead"
    ]
  }
];

export const serviceAreas = serviceAreaGroups.flatMap(group => group.places);

export const localServiceAreaCopy = "Form & Frame is based in Luton, fitting kitchens and bespoke joinery in Dunstable, Houghton Regis and nearby towns and villages. Local projects include wardrobes, alcove units, TV and media units, under-stairs storage, bookcases and home offices. Send your project postcode and scope so we can confirm travel, access and installation arrangements before booking.";
