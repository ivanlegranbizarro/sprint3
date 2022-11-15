const amqp = require( 'amqplib/callback_api' );


amqp.connect( 'amqp://localhost', ( error0, connection ) => {
  if ( error0 ) {
    throw error0;
  }
  connection.createChannel( ( error1, channel ) => {
    if ( error1 ) {
      throw error1;
    }
    let queue = 'hello';

    channel.assertQueue( queue, {
      durable: false
    } );
    channel.consume( queue, ( msg ) => {
      console.log( `Hola, estic llegint el missatge: ${ msg.content.toString() }` );
    }, {
      noAck: true
    } );
  } );
} );
