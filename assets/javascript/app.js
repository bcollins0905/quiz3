function check(){
var question1 = document.container.question1.value;
var question2 = document.container.question2.value;
var question3 = document.container.question3.value;
var correct = 0;

if (question1 == "Sacramento") {
	correct++;
}

if (question2 == "California") {
	correct++;
}

if (question3 == "In the United States of America") {
	correct++;
}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You Got " + correct + "Correct";
	document.getElelmentById("timer").innerHTML = "Time Left:" + timer;

};




var number = 100;

    var intervalId;

    $("#stop").on("click", stop);

    $("#resume").on("click", run);

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#show-number").html("<h2>" + number + "</h2>");

      if (number === 0) {

        stop();

        alert("Time Up!");
      }
    }

    function stop() {

      clearInterval();
    }

    run();
