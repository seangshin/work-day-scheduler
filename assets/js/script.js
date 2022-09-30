var currentDayEl = $("#currentDay");
var tableEl = $(".table");
var timeTable = [$("#9amInput"), $("#10amInput"), $("#11amInput"), $("#12pmInput"), $("#1pmInput"), $("#2pmInput"), $("#3pmInput"), $("#4pmInput"), $("#5pmInput")];
var clearBtnEl = $("#clearBtn")

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
    entries[0] = timeTable[0].val();
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
  if($(event.target).attr("id")=="10amBtn") {
    entries[1] = timeTable[1].val();
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
  if($(event.target).attr("id")=="11amBtn") {
    entries[2] = timeTable[2].val();
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
  if($(event.target).attr("id")=="12pmBtn") {
    entries[3] = timeTable[3].val();
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
  if($(event.target).attr("id")=="1pmBtn") {
    entries[4] = timeTable[4].val();
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
  if($(event.target).attr("id")=="2pmBtn") {
    entries[5] = timeTable[5].val();
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
  if($(event.target).attr("id")=="3pmBtn") {
    entries[6] = timeTable[6].val();
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
  if($(event.target).attr("id")=="4pmBtn") {
    entries[7] = timeTable[7].val();
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
  if($(event.target).attr("id")=="5pmBtn") {
    entries[8] = timeTable[8].val();
    localStorage.setItem("oldEntries", JSON.stringify(entries));
  }
})
//Event listener for clicks on the clear button, which will clear the entries and local storage
clearBtnEl.on("click", function() {
  for(var i=0; i<timeTable.length; i++) {
    timeTable[i].val("");
    entries[i] = timeTable[i].val();
  }
  localStorage.setItem("oldEntries", JSON.stringify(entries));
})