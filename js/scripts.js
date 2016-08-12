$(document).ready(function() {
  //alert("jQuery, reporting for duty, sir!");
  $("#vacationPlanner").submit(function(event) {
    event.preventDefault();
    var activityTypeInput = $("input:radio[name=activityType]:checked").val();

    if(activityTypeInput==="inside") {
      $("#day1am").html("<img src='img/' class='img-reponsive' alt=''><h4>Museum of Flight</h4>");
      $("#day1pm").html("<img src='img/' class='img-reponsive' alt=''><h4>Space Needle</h4>");
      $("#day2am").html("<img src='img/' class='img-reponsive' alt=''><h4>Pittock Mansion</h4>");
      $("#day2pm").html("<img src='img/' class='img-reponsive' alt=''><h4>Museum of Contemporary Craft</h4>");
      $("#day3am").html("<img src='img/columbiarivergorge.jpg' class='img-reponsive' alt='photo of columbia river gorge'><h4>Columbia River Maritime Museum</h4>");
      $("#day3pm").html("<img src='img/' class='img-reponsive' alt=''><h4>Oregon Film Museum</h4>");
      $("#day4am").html("<img src='img/' class='img-reponsive' alt=''><h4>Palace of Fine Arts Theater</h4>");
      $("#day4pm").html("<img src='img/' class='img-reponsive' alt=''><h4>Japanese Tea Garden</h4>");
      $("#day5am").html("<img src='img/' class='img-reponsive' alt=''><h4>Cathedral of Our Lady of the Angels</h4>");
      $("#day5pm").html("<img src='img/universalstudios.jpg' class='img-reponsive' alt='photo of universal studios'><h4>Universal Studios</h4>");
      $("#day6am").html("<img src='img/' class='img-reponsive' alt=''><h4>USS Midway Museum</h4>");
      $("#day6pm").html("<img src='img/' class='img-reponsive' alt=''><h4>San Diego Natural History Museum</h4>");
    } else {
      $("#day1am").html("<img src='img/woodlandparkzoo.jpg' class='img-reponsive' alt='photo of woodland park zoo'><h4>Woodland Park Zoo</h4>");
      $("#day1pm").html("<img src='img/' class='img-reponsive' alt=''><h4>Chihuly Garden and Glass</h4>");
      $("#day2am").html("<img src='img/' class='img-reponsive' alt=''><h4>Lan Su Chinese Garden</h4>");
      $("#day2pm").html("<img src='img/' class='img-reponsive' alt=''><h4>Forest Park</h4>");
      $("#day3am").html("<img src='img/' class='img-reponsive' alt=''><h4>Sea Lion Caves</h4>");
      $("#day3pm").html("<img src='img/' class='img-reponsive' alt=''><h4>Darlingonia State Natural Site</h4>");
      $("#day4am").html("<img src='img/' class='img-reponsive' alt=''><h4>Crissy Field</h4>");
      $("#day4pm").html("<img src='img/muirwoods.jpg' class='img-reponsive' alt='photo of muir woods'><h4>Muir Woods National Monument</h4>");
      $("#day5am").html("<img src='img/littletokyo.jpg' class='img-reponsive' alt='photo of little tokyo'><h4>Little Tokyo</h4>");
      $("#day5pm").html("<img src='img/' class='img-reponsive' alt=''><h4>Santa Monica State Beach</h4>");
      $("#day6am").html("<img src='img/' class='img-reponsive' alt=''><h4>Balboa Park</h4>");
      $("#day6pm").html("<img src='img/seaworld.jpg' class='img-reponsive' alt='photo of sea world'><h4>SeaWorld</h4>");
    }

    $("#vacationPlanner").hide();
    $("#recommendations").show();

  });
});
