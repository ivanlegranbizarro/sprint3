/* Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. */



const sum = ( req, res, next ) => {
  const { a, b } = JSON.parse( req.params.values );
  const result = a + b;
  console.log( result );
  next();
};

console.log( 'Suma:' );
sum( { params: { values: '{"a": 2, "b": 3}' } }, {}, () => { } );

const rest = ( req, res, next ) => {
  const { a, b } = JSON.parse( req.params.values );
  const result = a - b;
  console.log( result );
  next();
};

console.log( 'Resta:' );
rest( { params: { values: '{"a": 2, "b": 3}' } }, {}, () => { } );

const multiply = ( req, res, next ) => {
  const { a, b } = JSON.parse( req.params.values );
  const result = a * b;
  console.log( result );
  next();
};

console.log( 'Multiplicació:' );
multiply( { params: { values: '{"a": 2, "b": 3}' } }, {}, () => { } );


const divide = ( req, res, next ) => {
  const { a, b } = JSON.parse( req.params.values );
  const result = a / b;
  console.log( result );
  next();
};

console.log( 'Divisió:' );
divide( { params: { values: '{"a": 2, "b": 3}' } }, {}, () => { } );