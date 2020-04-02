const {describe} = require('riteway');
const {formatPlace, formatPrice} = require('./sogral-scraper');

const given = 'some samples';
const should = 'return the expected output';

describe('formatPlace', async (assert) => {
  const nameSamples = [
    "mahdia",
    "El Azizia",
    "CONSTANTINE /PALMA", "CONSTANTINE/ ALI MENDJELI", "CONSTANTINE/SAHRAOUI TAHAR", 
    "ANNABA/AZZABA",
  ];

  assert({
    given,
    should,
    actual: nameSamples.map(formatPlace),
    expected: [
      "MAHDIA",
      "EL AZIZIA",
      "CONSTANTINE / PALMA", "CONSTANTINE / ALI MENDJELI", "CONSTANTINE / SAHRAOUI TAHAR", 
      "ANNABA / AZZABA",
    ]
  });

});

describe('formatPrice', async (assert) => {
  const priceSamples = ["1830 DA DA", "340.00 DA", "150 DA"];

  assert({
    given,
    should,
    actual: priceSamples.map(formatPrice),
    expected: [1830, 340, 150]
  });

});
