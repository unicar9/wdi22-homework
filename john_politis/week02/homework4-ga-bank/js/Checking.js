/**
  * Author: John Politis
  * Date :   26/05/2017
  * Description : Define the Checking Account.This is a subclass of Account
  */
function Checking(id,name,amount) {
    Account.call(this,id,name,amount);
}

Savings.prototype = new Account();
