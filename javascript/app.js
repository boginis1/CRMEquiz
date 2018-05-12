$(document).ready(function() {
    // Handler for .ready() called.

    var selection;

    var triviaQandA = [{
            "question": "A hotel’s pricing strategy should consider:",
            "answers": ["A. Room type demand and length of stay", "B. Market Position", "C. Room Costs", "D. All of the above", "E. A and B Only"],
            "correct": "D. All of the above",
            "response": "All of those factors should be considered when creating a pricing strategy."
        },
        {
            "question": "When a hotel discounts, it:",
            "answers": ["A. Always increases demand", "B. Can shift market share", "C. May dilute existing business", "D. A & B only", "E. B & C only"],
            "correct": "E. B & C only",
            "response": "Discounting pricing can shift market share but may also dilute existing business."
        },
        {
            "question": "Which measure is used to determine OTA channel distribution costs?",
            "answers": ["A. The margin and/or commission due to the channel owner", "B. Credit card and franchise fee expenses", "C. GDS pass through fee", "D. Cost per reservation through the CRO", "E. Hotel fixed labor charges"],
            "correct": "A. The margin and/or commission due to the channel owner",
            "response": "The margin and/or commission due to the channel owner is the measure we use to determine cost."
        },
        {
            "question": "Which forecast provides a realistic picture of probable occupied rooms that a hotel can use for budget comparison purposes and to identify variances?",
            "answers": ["A. Demand Forecast", "B. Strategic Forecast", "C. Revenue Forecast", "D. Operational Forecast", "E. All of the above"],
            "correct": "C. Revenue Forecast",
            "response": "The revenue forecast would be the best answer for this snapshot."
        },
        {
            "question": " Which is a true statement about forecasting?",
            "answers": ["A. Forecasting is a science.", "B. Revenue and demand forecasts are used for the same purpose.", "C. Forecasting must be done by market segment", "D. Forecasting weather and other market conditions only apply to operational forecasts.", "E. None of the above"],
            "correct": "C. Forecasting must be done by market segment",
            "response": "Forecasting must be done by the market segment is the only completely true statement."
        }

        
            

    ];

    var questionIndex = 0;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var timeOutAnswer = 0;

    //Timer program
    var interValID;
    var timeLeft = 20
    var counter = 0;
    var timer = $("#timer");

    function timeIt() {
        
        timer.html("<h2>You have " + (timeLeft - counter) + " seconds left</h2>");
        if (counter == timeLeft) {
            timer.html("<h2>Your time is up!</h2>");
            clearInterval(interValID);
            $("#response").show();
            $("#response").html("You ran out of time. " + selection.response);
            timeOutAnswer++;
            checkEnd();
        }
        counter++
    }


    $("#startGame").click(function() {
        timer.html("<h2>Starting timer...</h2>")
        getQuestion();
    });

    function showProgress() {
        var currentQuestionNumber = questionIndex + 1;
        var element = $("#progress");
        element.text("Question " + currentQuestionNumber + " of " + triviaQandA.length);

    }

    function getQuestion() {
        //var a = 0;

        $("#startTheGame").hide();
        $("#startGame").hide();
        $("#response").hide();
        $(".grid").show();
        interValID = setInterval(timeIt, 1000);
        selection = triviaQandA[questionIndex];
        $("#question").html(selection.question);
        console.log(question);

        for (var i = 0; i < selection.answers.length; i++) {
            btn = $("button#btn" + [i]).text(selection.answers[i]);


        }
        showProgress();
    }


    $("button").click(function() {
        var choice = $(this).text();



        checkAnswer(choice);

    });



    function checkAnswer(choice) {

        if (choice === selection.correct) {
            correctAnswer++
            $("#response").show();
            $("#response").html("Way to go!  You are correct! " + selection.response);

        } else {
            wrongAnswer++
            $("#response").show();
            $("#response").html("Oops, you are incorrect! " + selection.response);
        }

        
        
        clearInterval(interValID);

        checkEnd();


    }

    function showResults() {
        $(".grid").hide();
        $("#results").show();
        $("#results").html("# of Correct Answers = " + correctAnswer + " | " + "# of Incorrect Answers = " + 
            wrongAnswer + " | " + "  # of Timed Out = " + timeOutAnswer );
        $("#resultsTwo").show();
    }

    function checkEnd() {
            questionIndex++;
            if (questionIndex === (triviaQandA.length)){

            showResults();
            } else  {
                counter=0;
                
                setTimeout(getQuestion, 3000);

            }
    }

});