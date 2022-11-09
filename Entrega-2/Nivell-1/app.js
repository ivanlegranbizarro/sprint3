/* Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres d' un arxiu params.json. */

const fs = require( 'fs' );
const path = require( 'path' );
params = JSON.parse( fs.readFileSync( path.join( __dirname, 'params.json' ), 'utf8' ) );

class Calculadora {
  constructor ( ) {
    this.a = params.a;
    this.b = params.b;
  }

  suma () {
    return this.a + this.b;
  }

  resta () {
    return this.a - this.b;
  }

  multiplica () {
    return this.a * this.b;
  }
}

const calculadora = new Calculadora();

console.log( `La suma de ${ params.a } i ${ params.b } és ${ calculadora.suma() }` );