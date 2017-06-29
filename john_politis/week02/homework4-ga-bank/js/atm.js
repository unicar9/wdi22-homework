/**
  * Author: John Politis
  * Date :   26/05/2017
  * Description : General Assembly Banking System
  */
$(document).ready(function(){

    var app  = {};              //defines our app namespace
    app.bank = {};
    app.ui   = {};

    app.bank = new Bank();

    var checkingAccount;
    var savingsAccount;

    /**
      * Author: John Politis
      * Date :   28/05/2017
      * Description : overdraft facility
      */
    app.bank.overdraft = function(p, s, amt ) {

        var pb = checkingAccount[0].getBalance();
        var sb = savingsAccount[0].getBalance();

        if ( pb >= amt) {
            p.withdraw(amt);
        }
        else if (pb < amt && (sb + pb ) >= amt ) {
            p.withdraw(pb);
            s.deposit(pb);
            s.withdraw(amt);
        }
    }

    /**
      * Author: John Politis
      * Date :   28/05/2017
      * Description : Provide an interface between the front end and the back Bank modules
      *               This will connect the visual components and exposes an equivalent api
      *
      */
    app.ui.savings = {
        /**
          * Author: John Politis
          * Date :   28/05/2017
          * Description :
          */
        update: {
            status : function(info) {
                $('#account-savings-status').text(info);
            }
        },
        /**
          * Author: John Politis
          * Date :   28/05/2017
          * Description :
          */
        clear: {
            /**
              * Author: John Politis
              * Date :   28/05/2017
              * Description :
              */
            status: function(){
                $('#account-savings-status').text("");
            },
            /**
              * Author: John Politis
              * Date :   28/05/2017
              * Description :
              */
            input: function(){
                $('#savings-amount').val("");
            }
        },
        /**
          * Author: John Politis
          * Date :   28/05/2017
          * Description :
          */
        amount:function(){

            var amt = $('#savings-amount').val();

            if(isNaN(parseFloat( amt )))    return 0.0;

            return parseFloat(amt);
        },
        /**
          * Author: John Politis
          * Date :   28/05/2017
          * Description :
          */
        display: function(amt){
            $('#savings-balance').text('$'+ amt);
        },
        /**
          * Author: John Politis
          * Date :   28/05/2017
          * Description :
          */
        //TODO - implement this
        render: function(p,s){

        },
        /**
          * Author: John Politis
          * Date :   28/05/2017
          * Description :
          */
        backgroundColour: function(colour){
            if ('RED' === colour) {
                $('#savings').css({ backgroundColor : 'red' });
            }
            else {
                $('#savings').css({ backgroundColor : '#6C9A74' });
            }
        },
        /**
          * Author: John Politis
          * Date :   28/05/2017
          * Description : Registers the event handlers.This is basically the start of the controller
          *               code and it basically connects the front end to the back end.
          */
        eventHandlers: function(){
            /**
              * Author: John Politis
              * Date :   27/05/2017
              * Description :
              */
            $('#savings-deposit').on('click', function(){

                var amt = app.ui.savings.amount();

                checkingAccount[0].deposit(parseFloat( amt ).toFixed(2));
                var balance = checkingAccount[0].getBalance();

                app.ui.savings.clear.input();
                app.ui.savings.display(balance);
                app.ui.savings.clear.status();
                app.ui.savings.backgroundColour( (balance === 0 ? 'RED' : 'GREEN') );

            });
            /**
              * Author: John Politis
              * Date :   27/05/2017

              * Description : The overdraft for the savings is not implemented.
              */
            //TODO - implement overdraft
            $('#savings-withdraw').on('click', function(){
                var amt = app.ui.savings.amount();
                try {
                        checkingAccount[0].withdraw(parseFloat( amt ).toFixed(2));

                } catch (e) {
                    app.ui.savings.update.status(e);

                } finally {

                    var balance = checkingAccount[0].getBalance();
                    app.ui.savings.display(balance);
                    app.ui.savings.clear.input();
                    app.ui.savings.backgroundColour( (balance === 0 ? 'RED' : 'GREEN') );

                }
            });
        }
    };
    /**
      * Author: John Politis
      * Date :   28/05/2017
      * Description : Provide an interface between the front end and the back Bank modules
      *               This will connect the visual components and exposes an equivalent api
      *
      */
    app.ui.checking = {
        update: {
            status : function(info) {
                $('#account-checking-status').text(info);
            }
        },
        clear: {
            status: function(){
                $('#account-checking-status').text("");
            },
            input: function(){
                $('#checking-amount').val("");
            }
        },
        amount:function(){

            var amt = $('#checking-amount').val();

            if(isNaN(parseFloat( amt )))    return 0.0;

            return parseFloat(amt);
        },
        display: function(amt){
            $('#checking-balance').text('$'+ amt);
        },
        /**
          * Author: John Politis
          * Date :   28/05/2017
          * Description :
          */
        render: function(p,s){

            app.ui.checking.display(p);
            app.ui.checking.clear.input();
            app.ui.savings.display(s);
            app.ui.checking.backgroundColour( (p === 0 ? 'RED' : 'GREEN') );
            app.ui.savings.backgroundColour( (s === 0 ? 'RED' : 'GREEN') );
        },
        backgroundColour: function(colour){
            if ('RED' === colour) {
                $('#checking').css({ backgroundColor : 'red' });
            }
            else {
                $('#checking').css({ backgroundColor : '#6C9A74' });
            }
        },
        eventHandlers: function(){
            /**
              * Author: John Politis
              * Date :   27/05/2017
              * Description : set up the handlers
              */
            $('#checking-deposit').on('click', function(){

                var amt = app.ui.checking.amount();

                checkingAccount[0].deposit(parseFloat( amt ).toFixed(2));
                var balance = checkingAccount[0].getBalance();
                app.ui.checking.clear.input();
                app.ui.checking.display(balance);
                app.ui.checking.clear.status();
                app.ui.checking.backgroundColour( (balance === 0 ? 'RED' : 'GREEN') );

            });
            /**
              * Author: John Politis
              * Date :   27/05/2017
              * Description : set up the handlers
              */
            $('#checking-withdraw').on('click', function(){

                var p = checkingAccount[0];
                var s = savingsAccount[0];
                var amt = app.ui.checking.amount() ;

                try {
                    app.bank.overdraft(p , s, amt);

                } catch (e) {
                    app.ui.checking.update.status(e);
                } finally {
                    p = checkingAccount[0];
                    s = savingsAccount[0];
                    app.ui.checking.render(p.getBalance() ,s.getBalance() );
                }
            });
        }
    };
    /**
     *  enable the handlers
     */
    app.ui.checking.eventHandlers();
    app.ui.savings.eventHandlers();
    /**
     * The UI does not support any way of entering an account so we will grab a dummy account
     * from our bank.
     *
     *  Get the first Account ( Checking and Savings for our test run)
     */
    checkingAccount = app.bank.getAccountByType("TestCustomer-001",'Checking');
    savingsAccount  = app.bank.getAccountByType("TestCustomer-001",'Savings');
    /**
    * Show the initial balance the accounts have
    */
    app.ui.checking.display(checkingAccount[0].getBalance());
    app.ui.savings.display(savingsAccount[0].getBalance());


});
