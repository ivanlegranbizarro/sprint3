/* Construeix una aplicació que creï diversos Jugadors/es. Els jugadors/es podran ser afegits a un Joc, que mostrarà un marcador amb les puntuacions i el guanyador/a. L'aplicació ha de poder afegir o treure punts a cada jugador/a perquè el marcador canviï. La classe Marcador ha d'implementar un patró Singleton com a requisit indispensable */

class Jugador {
  constructor ( nom, puntuacio = 0 ) {
    this.nom = nom;
    this.puntuacio = puntuacio;
  }
  afegeixPunt ( punts ) {
    this.puntuacio += punts;
  }

  treuPunt ( punts ) {
    this.puntuacio -= punts;
  }
}

class Joc {
  constructor ( nomJoc ) {
    this.nomJoc = nomJoc;
    this.jugadors = [];
  }

  afegeixJugador ( jugador ) {
    this.jugadors.push( jugador );
  }

  treuJugador ( jugador ) {
    this.jugadors = this.jugadors.filter( j => j !== jugador );
  }
}

class Marcador {
  constructor ( joc ) {
    if ( Marcador._instance ) {
      return Marcador._instance;
    }
    this.joc = joc;
    Marcador._instance = this;
  }

  mostrarMarcador () {
    console.log( `Marcador del joc ${ this.joc.nomJoc }` );
    this.joc.jugadors.forEach( j => console.log( `${ j.nom }: ${ j.puntuacio }` ) );
  }
}


const joc = new Joc( 'Basket' );
const marcador = new Marcador( joc );
const jugador1 = new Jugador( 'Pep' );
const jugador2 = new Jugador( 'Maria' );
const jugador3 = new Jugador( 'Joan' );
const jugador4 = new Jugador( 'Anna' );

joc.afegeixJugador( jugador1 );
joc.afegeixJugador( jugador2 );
joc.afegeixJugador( jugador3 );
joc.afegeixJugador( jugador4 );

marcador.mostrarMarcador();