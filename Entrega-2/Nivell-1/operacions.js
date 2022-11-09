/* Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. */



const sum = ( req, res, next ) => {
  const { a, b } = JSON.parse( req.params.values );
  const result = a + b;
  console.log( result );
  next();
};


const rest = ( req, res, next ) => {
  const { a, b } = JSON.parse( req.params.values );
  const result = a - b;
  console.log( result );
  next();
};

const multiply = ( req, res, next ) => {
  const { a, b } = JSON.parse( req.params.values );
  const result = a * b;
  console.log( result );
  next();
};



const divide = ( req, res, next ) => {
  const { a, b } = JSON.parse( req.params.values );
  const result = a / b;
  console.log( result );
  next();
};



module.exports = {
  sum,
  rest,
  multiply,
  divide
};
