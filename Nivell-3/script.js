/* Escriu una aplicació que creï diferents objectes Usuari/ària. L'aplicació podrà crear diferents Temes i subscriure els usuaris/es a ells. Quan un Usuari/ària afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema. També ho mostraran per consola cadascun dels Usuaris/es que estiguin subscrits al Tema (rebran el missatge). Crea un Tema amb un Usuari/ària i un altre amb dos i mostra la recepció dels missatges pels usuaris/es. Utilitza el mòdul events. */

class Publicador {
  constructor() {
    this.subscriptors = []
  }


  subscribe(subscriptor) {
    this.subscriptors.push(subscriptor);
  }


  unsubscribe(subscriptor) {
    this.subscriptors = this.subscriptors.filter(
      (item) => item !== subscriptor
    );
  }


  notify(event) {
    this.subscriptors.forEach((item) => {
      item.buzon.call(item, event);
    });
  }
}


class Subscriptor {
  constructor(id) {
    this.id = id;
    console.log("Se ha creado el subscriptor #: " + id);
  }
  buzon(edicion) {
    console.log(
      "Subscriptor # " + this.id + " recibió una nueva edición: " + edicion
    );
  }
}
