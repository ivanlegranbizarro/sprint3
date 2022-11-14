function convertToEuros ( article ) {
  return function () {
    const conversions = require( './currency_conversions.json' );
    const convertirDivisa = article.divisa + '_EUR';
    const preuConvertit = article.preu * conversions[ convertirDivisa ];
    const preuRedondejat = Math.round( preuConvertit * 100 ) / 100;
    console.log( `El preu de l'article ${ article.nom } en euros és ${ preuRedondejat }€` );
  };
}


module.exports = convertToEuros;
