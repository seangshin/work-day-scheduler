var currentDayEl = $("#currentDay");
var tableEl = $(".table");

var oldEntries = [];

function init() {
  displayTime();
} init();

function displayTime() {
  var rightNow = moment().format("dddd, MMM DD, YYYY");
  currentDayEl.text(rightNow);
}

tableEl.on("click", function(event) {
  if($(event.target).attr("id")=="9amBtn") {
    console.log("you clicked save button 9am");
  }
})