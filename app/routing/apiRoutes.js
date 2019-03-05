// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendTable = require("../data/friend");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendTable array)
  // ---------------------------------------------------------------------------

  app.post("/api/surveyResults", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    let compatibility = 100;
    let newfriend =""
     let compatibilityArray = [parseInt(req.body.film),parseInt(req.body.dog),parseInt(req.body.cat),parseInt(req.body.smanimal),parseInt(req.body.house),parseInt(req.body.painting),parseInt(req.body.novel),parseInt(req.body.food),parseInt(req.body.shark),parseInt(req.body.sshark)]
     for(i in friendTable){
         let difference = 0;
         for (j in compatibilityArray){
            difference += Math.abs(friendTable[i].scores[j] - compatibilityArray[j]);
            console.log(difference);
            if (difference<compatibility){
                difference = compatibility;
                newfriend = friendTable[i].name;
                console.log(newfriend);
            }
         }
         
     }
    res.json(newfriend);
  });

  
};
