
var anagramChecker = {

    anagramsList: ["enlists" ,"google" ,"inlets" ,"banana","eltsin","silent","tinsel"],

    sort: function(a) {

        return a.split('').sort();

    },

    anagram: function(word) {

        var res = [];
        for(var i = 0; i < this.anagramsList.length; i++ ) {
            if ( this.sort(word.toLowerCase()).join() === this.sort(this.anagramsList[i]).join() ) {
                res.push(this.anagramsList[i]);
            }
        }
        return res;
    }

};


var word = "Listen";
var a = anagramChecker.anagram(word);

console.log("The anagram for " + word + " is [ " + a ," ]");
