$(document).ready(function() {

  $(".start").click(function () {
    var Timer;
    var TotalSeconds;
    CreateTimer("timer", 10)
    function CreateTimer(TimerID, Time) {
      Timer = document.getElementById(TimerID);
      TotalSeconds = Time;
      UpdateTimer();
    }
    function postScore(name, correct, incorrect, op, lev){
      $.ajax({
          type: "POST",
          url: "/users",
          datatype: "JSON",
          data: { name: name, right: correct, wrong: incorrect, operator: op, level: lev},
          success: function(data){
            $("#rank_score").text(data.right);
            //displayData(data);
          }
      });
    }
    function displayData(x) {
        console.log(x)
        $("#rank_score").text(x);
    }
    function passOperator(x) {
      if (x == "+")
        { op = "a" }
      else if (x == "-")
        { op = "b" }
      else if (x == "*")
        { op = "c" }
      else if (x == "-")
        { op = "d" }
    }
    function Tick() {
      if (TotalSeconds == 0) {
        var name = $("#start_line input").val();
        var correct = $("#total_right").text();
        var incorrect = $("#total_wrong").text();
        var lev = $("#level").text();
        var op = $("#operator").text();
        passOperator(op);
        postScore(name, correct, incorrect, op, lev);
        
        
        return false;
        
      }
      TotalSeconds -= 1;

      UpdateTimer();
    }

    function UpdateTimer() {
      Timer.innerHTML = TotalSeconds;
      setTimeout(Tick, 1000);
    }
  })
});