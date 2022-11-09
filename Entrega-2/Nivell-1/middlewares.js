/* Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final. */

class Middlewares {
  constructor () {
    this.middlewares = [];
  }

  add ( middleware ) {
    this.middlewares.push( middleware );
  }

  execute ( req, res, next ) {
    const { a, b } = JSON.parse( req.params.values );
    this.middlewares.forEach( middleware => {
      middleware( req, res, next, a, b );
    } );
  }
}

const middlewares = new Middlewares();

const aCub = middlewares.add( ( req, res, next, a, b ) => {
  const result = a * a;
  console.log( result );
  next();
} );

const aQuadrat = middlewares.add( ( req, res, next, a, b ) => {
  const result = a * a * a;
  console.log( result );
  next();
} );

const bCub = middlewares.add( ( req, res, next, a, b ) => {
  const result = b * b;
  console.log( result );
  next();
} );

const bQuadrat = middlewares.add( ( req, res, next, a, b ) => {
  const result = b * b * b;
  console.log( result );
  next();
} );

const divide = middlewares.add( ( req, res, next, a, b ) => {
  const result = a / b;
  console.log( result );
  next();
} );

module.exports = {
  middlewares
};