
$(document).ready(function() {

  $(".start").click(function () {
    var Timer;
    var TotalSeconds;
    CreateTimer("timer", 30)
    function CreateTimer(TimerID, Time) {
      Timer = document.getElementById(TimerID);
      TotalSeconds = Time;
      UpdateTimer()
    }

    function Tick() {
      if (TotalSeconds == 0) {
        var name = $("#start_line input").val();
        var correct = $("#total_right").text();
        var incorrect = $("#total_wrong").text();
        var op = $("#operator").text();
        var lev = $("#level").text();
        
        //use jQuery to add each element needed for data
        $.ajax({
          type: "POST",
          url: "/users",
          data: "name="+name+"&right="+correct+"&wrong="+incorrect+"&operator="+"a"+"&level="+lev,
          success: function(){
          alert("success");
          }
        });
        return false;
        
      }
      TotalSeconds -= 1;

      UpdateTimer();
    }

    function UpdateTimer() {
      Timer.innerHTML = TotalSeconds;
      setTimeout(Tick, 1000);
    }
  })()
})