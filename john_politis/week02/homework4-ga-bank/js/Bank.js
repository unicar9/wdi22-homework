/**
  * Author: John Politis
  * Date :   26/05/2017
  * Description :
  */
function Bank() {
    var accounts = [];                          /* the bank will hold a list of customer accounts   */

    /**
      * Author: John Politis
      * Date :   26/05/2017
      * Description : Load up some dummy data
      */
    function init() {

        var data = {type: "Savings", id: "", name: "", amount: 0.0 };

        for (var i = 0; i < 100; i++) {
            data.amount = Math.floor(1 + (Math.random() * 1000));
            data.type = "Savings";
            data.id = 'Savings-00" + i';
            data.name ='TestCustomer-00'+i;
            accounts.push(AccountFactory.create(data));

            data.amount = Math.floor(1 + (Math.random() * 1000));
            data.type = "Checking";
            data.id = 'Checking-00" + i';
            accounts.push(AccountFactory.create(data));
        }
    }
    /**
      * Author: John Politis
      * Date :   26/05/2017
      * Description : Returns the Account by Querying the AccountId
      */
    this.getAccountById = function(id) {
        var acc;

        for (var key in accounts) {
            if (accounts[key].getAccountId() === id ) {
            acc = accounts[key];
            break;
            }
        }

        if (acc === undefined) throw "Account not found";

        return acc;
    }
    /**
      * Author: John Politis
      * Date :   26/05/2017
      * Description : Locates all the accounts held by a customer
      */
    this.getAccountsByCustomerName = function(customerName) {
        var allAccounts = [];
        accounts.forEach(function(e){
            if (e.getName() === customerName)  allAccounts.push(e);
        });

        return allAccounts;
    }
    /**
      * Author: John Politis
      * Date :   26/05/2017
      * Description : Locates all the accounts held by a customer
      */
    this.getAccountByType = function(name,typeOfAccount) {
        var allAccounts = [];

        this.getAccountsByCustomerName(name).forEach(function(e){
            switch (typeOfAccount) {
                case 'Savings':
                    if (e instanceof Savings)   allAccounts.push(e);
                    break;
                case 'Checking':
                    if (e instanceof Checking)  allAccounts.push(e);
                    break;
                default:
            }
        });

        return allAccounts;
    }
    /**
      * Author: John Politis
      * Date :   26/05/2017
      * Description : Initialize the Banks System
      */
    init();
}
