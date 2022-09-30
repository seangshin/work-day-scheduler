var currentDayEl = $("#currentDay");
var tableEl = $(".table");
var timeTable = [$("#9amInput"), $("#10amInput")];

var entries = [];

function init() {
  displayTime();
  //Get data from localstorage if it exists
  var oldEntries = JSON.parse(localStorage.getItem("oldEntries"));
  //Set global variable entries equal to data pulled from local storage
  if(oldEntries!=null) {
    for(var i=0; i<oldEntries.length; i++) {
      if(oldEntries[i]!=null) {
        entries[i]=oldEntries[i];
        console.log(entries[i]);
      }
    }
  }
  displayOldEntries();
} init();
//Function to display the time using moment.js
function displayTime() {
  var today = moment().format("dddd, MMM DD, YYYY");
  currentDayEl.text(today);
}
//Function to display old entries from local storage 
function displayOldEntries() {
  for(var i=0; i<entries.length; i++) {
    if(entries[i]!=null) {
      timeTable[i].val(entries[i]);
    }
  }
}
//Event listener for clicks on the save button, which will event bubble the table
//the target property of the event object is used to check which save is clicked
tableEl.on("click", function(event) {
  if($(event.target).attr("id")=="9amBtn") {
    console.log("you clicked save button 9am");//debug
    entries[0] = timeTable[0].val();
    console.log(entries[0]);
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
  if($(event.target).attr("id")=="10amBtn") {
    console.log("you clicked save button 10am");//debug
    entries[1] = timeTable[1].val();
    console.log(entries[1]);
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
})