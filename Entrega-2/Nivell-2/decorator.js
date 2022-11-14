/* Crea un Decorator en un arxiu que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, aplicant diferents conversions que usin el Decorator del punt anterior. */

const data = require( './currency_conversions.json' );

class Decorator {
  constructor ( article ) {
    this.article = article;
  }

  obtenirArticle () {
    return this.article;
  }

  construirDivisa () {
    const article = this.article;
    const divisa = article.divisa;
    const divisaArticle = divisa + '_EUR';
    return divisaArticle;
  }

  convertiraEuros () {
    try {
      const article = this.article;
      const divisaArticle = this.construirDivisa();
      const coeficient = data[ divisaArticle ];
      const preu = article.preu;
      const preuEuros = Math.round( preu * coeficient * 100 ) / 100;
      console.log( `El preu de l'article: "${ article.nom }" en euros és: ${ preuEuros }€` );
    } catch ( error ) {
      console.log( error );
    }
  }
}



module.exports = Decorator;
