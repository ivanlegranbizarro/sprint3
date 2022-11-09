/* Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. */


class Middleware {
  constructor ( target ) {
    this.target = target;
    this.middlewares = [];
    this.req = {};

    const prototype = Object.getPrototypeOf( this.target );
    Object.getOwnPropertyNames( prototype ).forEach( fn => {
      if ( fn !== "constructor" ) return this.createFn( fn );
    } );
  }
  use ( middleware ) {
    this.middlewares.push( middleware );
  }
  executeMiddleware ( i = 0 ) {
    if ( i < this.middlewares.length ) {
      this.middlewares[ i ].call( this, this.req, () =>
        this.executeMiddleware( i + 1 )
      );
    }
  }
  createFn ( fn ) {
    this[ fn ] = args => {
      this.req = args;
      this.executeMiddleware();
      return this.target[ fn ].call( this, this.req );
    };
  }
}


const fs = require( 'fs' );
const path = require( 'path' );
params = JSON.parse( fs.readFileSync( path.join( __dirname, 'params.json' ), 'utf8' ) );

class Calculadora {
  add ( { a = params.a, b = params.b } ) {
    return parseInt( a + b );
  }
  subtract ( { a = params.a, b = params.b } ) {
    return parseInt( a - b );
  }
  multiply ( { a = params.a, b = params.b } ) {
    return parseInt( a * b );
  }
}



const calculator = new Calculadora();

console.log( calculator.add( {} ) );
console.log( typeof ( calculator.add( {} ) ) );

const app = new Middleware( calculator );

app.use( ( req, next ) => {
  req.a = req.a * req.a;
  console.log( `a: ${ req.a }` );
  req.b = req.b * req.b;
  console.log( `b: ${ req.b }` );
  next();
} );

app.use( ( req, next ) => {
  req.a = req.a * req.a * req.a;
  console.log( `a: ${ req.a }` );
  req.b = req.b * req.b * req.b;
  console.log( `b: ${ req.b }` );
  next();
} );

app.use( ( req, next ) => {
  req.a = req.a / 2;
  console.log( `a: ${ req.a }` );
  req.b = req.b / 2;
  console.log( `b: ${ req.b }` );
  next();
} );



console.log( app.add( { a: 5, b: 10 } ) );
console.log( app.subtract( { a: 10, b: 6 } ) );
console.log( app.multiply( { a: 2, b: 3 } ) );

console.log( app.add( {} ) );
console.log( app.subtract( {} ) );
console.log( app.multiply( {} ) );


