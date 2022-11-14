/* Crea un Decorator en un arxiu que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, aplicant diferents conversions que usin el Decorator del punt anterior. */

const article1 = {
  nom: 'Article 1',
  preu: 100,
  divisa: 'USD'
};

const article2 = {
  nom: 'Article 2',
  preu: 200,
  divisa: 'GBP'
};

const article3 = {
  nom: 'Article 3',
  preu: 300,
  divisa: 'JPY'
};


// create a function decorator that returns a function that converts the price of an article to euros using the currency_conversions.json file

function convertToEuros ( article ) {
  return function () {
    const conversions = require( './currency_conversions.json' );
    const convertirDivisa = article.divisa + '_EUR';
    const preuConvertit = article.preu * conversions[ convertirDivisa ];
    const preuRedondejat = Math.round( preuConvertit * 100 ) / 100;
    console.log( `El preu de l'article ${ article.nom } en euros és ${ preuRedondejat }€` );
  };
}


convertToEuros( article1 )();
convertToEuros( article2 )();
convertToEuros( article3 )();
