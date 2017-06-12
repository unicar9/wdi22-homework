/**
  * Author: John Politis
  * Date :   26/05/2017
  * Description : Define the Accounts Object
  */
function Account(id,name,amount) {

    var balance = Number(amount) || 0.0 ;       //internal only, should not be exposed
    var id = id;                        //Account no
    var accName = name;                 //Store the customers name

    /**
     * Author: John Politis
     * Date :   26/05/2017
     * Description :
     */
    this.getName = function(){
        return accName;
    }
    /**
     * Author: John Politis
     * Date :   26/05/2017
     * Description :
     */
    this.getBalance = function(){
        return balance;
    }
   /**
    * Author: John Politis
    * Date :   26/05/2017
    * Description :
    */
    this.deposit = function(amount){
        balance = Number(balance) + Number(amount);
    }
    /**
      * Author: John Politis
      * Date :   26/05/2017
      * Description :
      */
    this.getAccountId = function() {
        return id;
    }
    /**
      * Author: John Politis
      * Date :   26/05/2017
      * Description :
      */
    this.withdraw = function(amount) {
        var amt = balance - amount;

        if ( amt < 0 )  throw "Insufficient funds for Withdraw Transaction";
        balance = amt;

        return  balance;
    }
}
