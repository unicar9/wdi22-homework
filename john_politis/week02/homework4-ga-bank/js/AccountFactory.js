/**
  * Author: John Politis
  * Date :   27/05/2017
  * Description : An account factory class for creating various types of accounts.
  *               Encapsulates the creation of objects.
  *               This is obviously the Factory design pattern principle
  */
AccountFactory = {

    create : function(acc){
   /**
    * Author: John Politis
    * Date :   27/05/2017
    * Description : Defines only the valid account types that are recoginized by the system
    */
    switch (acc.type) {
        // case "Account":
        //     return new Account(acc.id,acc.name,acc.amount);
        //     break;
        case "Savings":
            return new Savings(acc.id,acc.name,acc.amount);
            break;
        case "Checking":
            return new Checking(acc.id,acc.name,acc.amount);
            break;
        default:
            throw "Not a valid Account Type";
    }
  }
};
