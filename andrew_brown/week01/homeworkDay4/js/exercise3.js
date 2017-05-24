//
// validateCreditCard: function( ccNumber ) {
//
//   invalidCharacters: function( ccNumber ) {
//     ccNumber = ccNumber.replace(/\D/g,'');
//     console.log(ccNumber);
//   }
// }
//
// validateCreditCard('1111-111c-1111-1111');


var validateCreditCard = {

    ccNumber: '1111-111c-1111-1111',

    invalidCharacters: function( ccNumber ) {
    ccNumber = ccNumber.replace(/\D/g,'');
    console.log(ccNumber);
  }

}
