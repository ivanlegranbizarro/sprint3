const fs = require( 'fs' );
const path = require( 'path' );
const Calculadora = require( './calculadora' );
const Middleware = require( './middleware' );
params = JSON.parse( fs.readFileSync( path.join( __dirname, 'params.json' ), 'utf8' ) );


const calculadora = new Calculadora();
const app = new Middleware( calculadora );


app.use( ( req, next ) => {
  req.a = req.a * req.a;
  console.log( `Middleware 1: ${ req.a }` );
  req.b = req.b * req.b;
  console.log( `Middleware 1: ${ req.b }` );
  next();
} );

app.use( ( req, next ) => {
  req.a = req.a * req.a * req.a;
  console.log( `Middleware 2: ${ req.a }` );
  req.b = req.b * req.b * req.b;
  console.log( `Middleware 2: ${ req.b }` );
  next();
} );

app.use( ( req, next ) => {
  req.a = req.a / 2;
  console.log( `Middleware 3: ${ req.a }` );
  req.b = req.b / 2;
  console.log( `Middleware 3: ${ req.b }` );
  next();
} );

console.log( app.add( { a: params.a, b: params.b } ) );
console.log( app.subtract( { a: params.a, b: params.b } ) );
console.log( app.multiply( { a: params.a, b: params.b } ) );