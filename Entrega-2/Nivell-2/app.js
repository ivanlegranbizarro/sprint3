/* Crea un Decorator en un arxiu que retorni una funció. Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises inicials, aplicant diferents conversions que usin el Decorator del punt anterior. */

const Article = require( './articles' );
const Decorator = require( './decorator' );

// articles
const article1 = new Article( 'article1', 10, 'USD' );
const article2 = new Article( 'article2', 20, 'GBP' );
const article3 = new Article( 'article3', 30, 'JPY' );

// decorators
const decorator1 = new Decorator( article1 );
const decorator2 = new Decorator( article2 );
const decorator3 = new Decorator( article3 );

decorator1.convertiraEuros();
decorator2.convertiraEuros();
decorator3.convertiraEuros();


