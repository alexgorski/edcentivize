$(document).ready(function(){

  var right = new Array;
  var wrong = new Array;
  var x, y, z;
  var gear_level;
  var operator_level;

  $(".operator").click(function(){
    operator_level = $(this).attr("value");
    $(this).parent('div').children('span:first').replaceWith("<span id='operator'>"+operator_level+"</span>");
  });
  
  $(".gear").click(function(){
    gear_level = parseInt($(this).attr("value"));
    $(this).parent('div').children('span:first').replaceWith("<span id='level'>"+gear_level+"</span>");
  });
  
  $(this).on("focus", "input", function(){
    x = (Math.random()*gear_level*10)+1;
    y = (Math.random()*gear_level*10)+1;
    x = parseInt(x);
    y = parseInt(y);
    $(this).parent('td').children("span:first").replaceWith("<span>"+x+"</span>");
    $(this).parent('td').children("span:last").replaceWith("<span>"+y+"</span>");
    $(this).parent('td').children("span:nth-child(2)").replaceWith("<span>"+operator_level+"</span>");
  });
   
  $("table input").change(function(){
    z = parseInt($(this).val());
   switch (operator_level){
    case "+":
      if (z === (x + y))
        {
          $(this).css("color", "green");
          right.push(z);
          $("#total_right").replaceWith("<span id='total_right'>"+ right.length +"</span>");
        }
      else
        {
          $(this).css("color","red");
          wrong.push(z);
          $("#total_wrong").replaceWith("<span id='total_wrong'>"+ wrong.length +"</span>");
        };
      break;
    case "-":
      if (z === (x - y))
        {
          $(this).css("color", "green");
          right.push([x,y,z]);
          $("#total_right").replaceWith("<span id='total_right'>"+right.length+"</span>");
        }
      else
        {
          $(this).css("color","red");
          wrong.push([x,y,z]);
          $("#total_wrong").replaceWith("<span id='total_wrong'>"+wrong.length+"</span>");
        };
        break;
    case "*":
      if (z === (x * y))
        {
          $(this).css("color", "green");
          right.push([x,y,z]);
          $("#total_right").replaceWith("<span id='total_right'>"+right.length+"</span>");
        }
      else
        {
          $(this).css("color","red");
          wrong.push([x,y,z]);
          $("#total_wrong").replaceWith("<span id='total_wrong'>"+wrong.length+"</span>");
        };
        break;
    case "/":
    if (z === (x / y))
      {
        $(this).css("color", "green");
        right.push([x,y,z]);
        $("#total_right").replaceWith("<span id='total_right'>"+right.length+"</span>");
      }
    else
      {
        $(this).css("color","red");
        wrong.push([x,y,z]);
        $("#total_wrong").replaceWith("<span id='total_wrong'>"+wrong.length+"</span>");
      };
      break;
  }
});

    










var a, b, c;

  $("#subtraction").change(function(){
    a = $(this).find('input:eq(0)').val();
    b = $(this).find('input:eq(1)').val();

    a = parseFloat(a);
    b = parseFloat(b);
    c = a - b;
    $(this).find('input:eq(2)').val(c);
  });

var d, e, f;

  $("#multiplication").change(function(){
    d = $(this).find('input:eq(0)').val();
    e = $(this).find('input:eq(1)').val();

    d = parseFloat(d);
    e = parseFloat(e);
    f = d * e;
    $(this).find('input:eq(2)').val(f);
  });

var j, k, l;

  $("#division").change(function(){
    j = $(this).find('input:eq(0)').val();
    k = $(this).find('input:eq(1)').val();

    j = parseFloat(j);
    k = parseFloat(k);
    l = j / k;
    $(this).find('input:eq(2)').val(l);
  });

var m, n, o;

  $("#modulus").change(function(){
    m = $(this).find('input:eq(0)').val();
    n = $(this).find('input:eq(1)').val();

    m = parseFloat(m);
    n = parseFloat(n);
    o = j / k;
    $(this).find('input:eq(2)').val(o);
  });


});