$(document).ready(function() {
  //alert("jQuery, reporting for duty, sir!");
  $("#vacationPlanner").submit(function(event) {
    event.preventDefault();
    var activityTypeInput = $("input:radio[name=activityType]:checked").val();

    if(activityTypeInput==="inside") {
      $("#day1am").text("Museum of Flight");
      $("#day1pm").text("Space Needle");
      $("#day2am").text("Pittock Mansion");
      $("#day2pm").text("Museum of Contemporary Craft");
      $("#day3am").text("Columbia River Maritime Museum");
      $("#day3pm").text("Oregon Film Museum");
      $("#day4am").text("Palace of Fine Arts Theater");
      $("#day4pm").text("Japanese Tea Garden");
      $("#day5am").text("Cathedral of Our Lady of the Angels");
      $("#day5pm").text("Universal Studios");
      $("#day6am").text("USS Midway Museum");
      $("#day6pm").text("San Diego Natural History Museum");
    } else {
      $("#day1am").text("Woodland Park Zoo");
      $("#day1pm").text("Chihuly Garden and Glass");
      $("#day2am").text("Lan Su Chinese Garden");
      $("#day2pm").text("Forest Park");
      $("#day3am").text("Sea Lion Caves");
      $("#day3pm").text("Darlingonia State Natural Site");
      $("#day4am").text("Crissy Field");
      $("#day4pm").text("Muir Woods National Monument");
      $("#day5am").text("Little Tokyo");
      $("#day5pm").text("Santa Monica State Beach");
      $("#day6am").text("Balboa Park");
      $("#day6pm").text("SeaWorld");
    }

    $("#vacationPlanner").hide();
    $("#recommendations").show();

  });
});
