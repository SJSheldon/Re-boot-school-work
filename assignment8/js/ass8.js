$(document).ready(function() {

    var name = "Steve";
    console.log(name);


    var myArray = ["Steve", "Mirta", "Kieron", "Patrick"];
    console.log(myArray);


    //button0
    document.getElementById("myname").addEventListener("click", function() {
        console.log(name);
    });

    //button 1
    document.getElementById("hi").addEventListener("click", function() {
        console.log("hello" + name);
    }, false);

    //button 2
    document.getElementById("array").addEventListener("click", function() {
        console.log(myArray[1]);
    }, false);

    //button 3
    document.getElementById("count").addEventListener("click", function() {
        for (i = 1; i < 11; i++) {
            console.log(i);
        }
    });


    //button 4
    document.getElementById("arrayname").addEventListener("click", function() {
        for (i = 0; i < myArray.length; i++) {
            console.log(myArray[i]);
        }
    });

    //button5
    document.getElementById("P").addEventListener("click", function() {
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i].substring(0, 1) === "P") {
                console.log(myArray[i])
            }
        }
    }, false);

    //button 6
    document.getElementById("honk").addEventListener("click", function() {
            car.honk();
        })
        //button7
    document.getElementById("each").addEventListener("click", function() {
        $("li").each(function(index) {
            console.log(index + ": " + $(this).text());
        });
    })


    var car = {
        doors: 4,
        honk: function() {
            console.log("honk");
        }
    };




    $("#hi").hover(function() {
        $(".button1").css("color", "purple");

    });


});
