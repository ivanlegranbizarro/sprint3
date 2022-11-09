/* Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions).
Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands inicials en cadascuna de les operacions. */

class Middlewares {
  constructor () {
    this.middlewares = [];
  }

  add ( middleware ) {
    this.middlewares.push( middleware );
  }
}

const middlewares = new Middlewares();

const aCub = middlewares.add( ( a ) => {
  return a * a;
  next();
} );

const aQuadrat = middlewares.add( ( a ) => {
  return a * a * a;
  next();
} );

const bCub = middlewares.add( ( b ) => {
  return b * b;
  next();
} );

const bQuadrat = middlewares.add( (  b ) => {
  return b * b * b;
  next();
} );

const divide = middlewares.add( (  a, b ) => {
  return a / b;
  next();
} );
