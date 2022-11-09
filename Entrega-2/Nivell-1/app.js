/* Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON.
Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final. */


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