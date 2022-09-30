var currentDayEl = $("#currentDay");
var tableEl = $(".table");
var timeTable = [$("#9amInput"), $("#10amInput"), $("#11amInput"), $("#12pmInput"), $("#1pmInput"), $("#2pmInput"), $("#3pmInput"), $("#4pmInput"), $("#5pmInput")];
var clearBtnEl = $("#clearBtn")

var entries = [];
var currentTime = moment();

//Function to initialize the application
function init() {
  displayTime();
  past();
  future();
  present();
  pullOldEntries();
  displayOldEntries();
} init();
//Function to display the time using moment.js
function displayTime() {
  var today = moment().format("dddd, MMM DD, YYYY");
  currentDayEl.text(today);
}
//Function to update background color if schedule time is past current time
function past() {
  for(var i=0; i<timeTable.length; i++) {
    if (currentTime.isAfter(moment((i + 9 + ":00"), "H:mm"))) {
      timeTable[i].addClass("bg-secondary text-white");
    }
  }
}
//Function to update background color if schedule time is after current time
function future() {
  for(var i=0; i<timeTable.length; i++) {
    if (currentTime.isBefore(moment((i + 9 + ":00"), "H:mm"))) {
      timeTable[i].addClass("bg-success text-white");
    }
  }
}
//Function to update background color if current time is within schedule time
function present() {
  if(currentTime.hour>=0 && currentTime.hour<=8) {
    timeTable[currentTime.hour()-9].addClass("bg-danger text-white");
  }
}
//Function to pull old entries
function pullOldEntries() {
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
  for(var i=0; i<timeTable.length; i++) {
    if($(event.target).attr("id")==i+9+"Btn") {
      entries[i] = timeTable[i].val();
      localStorage.setItem("oldEntries", JSON.stringify(entries));
    }
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