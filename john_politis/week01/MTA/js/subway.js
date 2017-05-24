/**
  * Author: John Politis
  * Date :   20/05/2017
  * Description : describes the connection between multiple stations
  */
var Edge = function (n) {
    this.edgeNo = n;            //defines the lines that the station as
    this.child = null;          //not used yet
    this.cost = 0;              // keep a track of the number of hops
};

/**
  * Author: John Politis
  * Date :   20/05/2017
  * Description :
  */
var Station = function (name, line, edges ) {
    this.name  = name;
    this.edges = edges;
    this.line  = line;
    this.visited = false;

};

/**
  * Author: John Politis
  * Date :   22/05/2017
  * Description : Maintain a resuts list of the final paths
  */
var ResultsContainser = function () {
    this.routes = [];

    /**
      * Author: John Politis
      * Date :   22/05/2017
      * Description : add the station onto the list. Also if the station is already there then skip it
      *               as we don't want duplicates
      */
    this.add = function(r) {

        if (this.routes.indexOf(r) === -1)     this.routes.push(r);
    }
    /**
      * Author: John Politis
      * Date :   22/05/2017
      * Description :
      */
    this.pop = function() {
        this.routes.pop();
    }

};

var subway = {

    /* define all the stations */
    stations:[],

    /* setup a Results stack that contains the visited outcome of the stations */
    result: {},

    /**
      * Author: John Politis
      * Date :   20/05/2017
      * Description : load up all the stations
      */
    init: function() {

        this.stations.push(new Station("Time Square",["N"], [ new Edge(1) ]));
        this.stations.push(new Station("34th",["N"], [ new Edge(2), new Edge(0) ] ));
        this.stations.push(new Station("28th",["N","6"],[ new Edge(1) ,new Edge(4) , new Edge(5)]));
        this.stations.push(new Station("Grand Central",["6"], [ new Edge(4) ] ));
        this.stations.push(new Station("33rd",["6"], [ new Edge(2), new Edge(3)]  ));
        this.stations.push(new Station("23rd",["N","6"],[new Edge(6),new Edge(2)]   ));
        this.stations.push(new Station("Union Central",["N","6","L"],[new Edge(5),new Edge(10),new Edge(9),new Edge(8),new Edge(7)]  ));
        this.stations.push(new Station("6th",["L"],  [new Edge(8),new Edge(6) ]   ));
        this.stations.push(new Station("8th",["N","L"], [new Edge(6),new Edge(7)]    ));
        this.stations.push(new Station("Astor Place",["6"], [new Edge(6)]   ));
        this.stations.push(new Station("3rd",["L"], [new Edge(6),new Edge(11)]   ));
        this.stations.push(new Station("1st",["L"], [new Edge(10)]   ));

        this.result = new ResultsContainser();

    },
    /**
      * Author: John Politis
      * Date :   20/05/2017
      * Description : locate the station of interest
      */
    getStation: function(station) {

        for ( key in this.stations) {
            if ( this.stations[key].name === station)   return this.stations[key];
        }

        return false;
    },
    haveVisitedStation: function(v){
        return v.visited;

    },
    matchStation: function(v,d) {

        if ( v.name === d.name ) {
            return true;
        }

        return false;
    },
    matchLine: function(v,d){
        for ( var i in v.line ) {
            for ( var j in d.line) {
                if (  v.line[i] === d.line[j] )  return true;
            }
        }

        return false;

    },
    /**
      * Author: John Politis
      * Date :   21/05/2017
      * Description : searches for the station and returns the index within the
      *               array
      */
    getIndexByName: function(name){

        for( var i in this.stations) {
            if ( this.stations[i].name === name) {
                return i;
            }
        }

        return null;
    },
    isJunctin: function(v,d) {
        return v.edges.length > 1 ? d : v;
    },
    /**
      * Author: John Politis
      * Date :   21/05/2017
      * Description : We keep checking as we pass each station , looking
      *               if we have reaced our destination.
      * v = passing station
      * d = our destination
      */
    traverse: function(v,d) {

        v.visited = true;
        if (this.matchStation(v,d) && this.matchLine(v,d))  {
            //console.log("Station has been found:::" + v.name);
            return true;                     //check if we have arrived
        }

        var n = null;
        for (var i in v.edges) {                                    //try all paths from our current station
            n = this.stations[v.edges[i].edgeNo];                   //get our next station
            //console.log("searching for ::" , d.name,"Current: " , v.name , "   Next:: " + n.name  );
            this.result.add(v.name);                                //possible outcome so save the station
            if (!this.haveVisitedStation(n)) {
                if (this.traverse(n,d))   return true;              //check for one solution for now, so we stop the process
                //console.log("backtracking To::" , n.name );
                this.result.pop();                                  //no good failed outcome remove the station
            }
        }
    },
    /**
      * Author: John Politis
      * Date :   20/05/2017
      * Description : locates a route from the source to the destination station
      */
    getRoute: function(v , d){
        this.traverse(v, d);
    },
    /**
      * Author: John Politis
      * Date :   20/05/2017
      * Description :
      */
    planTrip: function(start , dest){

        console.log("Planning your trip from " + start + "  to  " + dest );

        /* locate and validate stations */
        var objStart = this.getStation(start);
        var objDest = this.getStation(dest);

        if ( !objStart && !objDest ) {
            console.log("Invalid station(s)");
            return;
        }

        if (start === dest) {
            console.log("Get Off Now!!!!");
            return;
        }

        this.getRoute(objStart ,objDest);
    },
    /**
      * Author: John Politis
      * Date :   21/05/2017
      * Description :
      */
    render: function() {
        console.log("========= Subway Journey Planner ============");
        console.log();

        for (var key in this.result.routes ) {
            console.log(this.result.routes[key]);
        }
        console.log();
        console.log("========= Thank you for using the Journey Planner !!!! =========");
    }

};


//************************ Start our System *********************

subway.init();
subway.planTrip("1st","Time Square");
subway.render();
