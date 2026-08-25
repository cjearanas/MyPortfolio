/*DISPLAY QUIZ*/

async function displayQuiz(quizId) {

    try {

        const file =
            await getQuiz(
                quizId
            );


        const image =
            document.getElementById(
                quizId + "Image"
            );


        const message =
            document.getElementById(
                quizId + "Message"
            );


        if (!file) {

            image.style.display =
                "none";

            message.style.display =
                "block";

            return;

        }
        const imageURL =
            URL.createObjectURL(
                file
            );


        image.src =
            imageURL;


        image.style.display =
            "block";


        message.style.display =
            "none";

        image.onclick =
            function () {

                window.open(
                    imageURL,
                    "_blank"
                );

            };

    }
    catch (error) {

        console.error(
            "Error displaying quiz:",
            error
        );

    }

}
/*LOAD QUIZZES WHEN PAGE OPENS*/

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayQuiz("quiz1");

        displayQuiz("quiz2");

        displayQuiz("quiz3");

    }
);