var gaBank = {

    accounts: {
      checking: 0,
      savings: 0
    },

    deposit: function (account, amount) {
      this.accounts[account] += amount;
      console.log(this.accounts[account]);
    },

    withdraw: function (account, amount) {
      var total = this.accounts.checking + this.accounts.savings;
      var other = total - this.accounts[account];

      if (this.accounts[account] >= amount) {
        this.accounts[account] -= amount;
      } else if (total >= amount) {
        other = total - amount;
        this.accounts[account] = 0;
      } else {
        alert("Insufficient funds!")
        return;
      }

      if (account === "checking") {
        this.accounts.savings = other;
      }

      if (account === 'savings') {
        this.accounts.checking = other;
      }

      console.log(this.accounts.checking);
      console.log(this.accounts.savings);
    },

    // sWithdraw: function (amount) {
    //   var cCurrent = this.accounts.checking;
    //   var sCurrent = this.accounts.savings;
    //
    //   if (sCurrent >= amount) {
    //     sCurrent -= amount;
    //   } else if ((sCurrent + cCurrent) >= amount) {
    //     cCurrent = cCurrent - (amount - sCurrent);
    //     sCurrent = 0;
    //   } else {
    //     return;
    //   }
    //
    //   this.accounts.checking = cCurrent;
    //   this.accounts.savings = sCurrent;
    //   console.log(this.accounts.savings);
    //   console.log(this.accounts.checking);
    // }

  };

$(document).ready(function () {

  var $cAmount = $("#checking-amount").val();
  var $sAmount = $("#savings-amount").val();

  $("#checking-amount").on("change keyup paste click", function(){
      if ($cAmount !== $(this).val()) {
        $cAmount = $(this).val();
        return $cAmount;
      }
  });

  $("#savings-amount").on("change keyup paste click", function(){
      if ($sAmount !== $(this).val()) {
        $sAmount = $(this).val();
        return $sAmount;
      }
  }); // capture every user input

  $("#checking-deposit").on("click", function() {
    gaBank.deposit("checking", Number($cAmount));
    updateUI();
  });

  $("#savings-deposit").on("click", function() {
    gaBank.deposit("savings", Number($sAmount));
    updateUI();
  });

  $("#checking-withdraw").on("click", function() {
    gaBank.withdraw("checking", Number($cAmount));
    updateUI();
  });

  $("#savings-withdraw").on("click", function() {
    gaBank.withdraw("savings", Number($sAmount));
    updateUI();
  }); // 4 clicks

  var updateUI = function () {
    $("#savings-balance").html("$" + gaBank.accounts.savings);
    $("#checking-balance").html("$" + gaBank.accounts.checking);

    if (gaBank.accounts.checking === 0) {
      $("#checking-balance").addClass("zero");
    } else {
      $("#checking-balance").removeClass("zero");
    }

    if (gaBank.accounts.savings === 0) {
      $("#savings-balance").addClass("zero");
    } else {
      $("#savings-balance").removeClass("zero");
    }

  }; // display balance and change color

  updateUI();

});// end of ready
