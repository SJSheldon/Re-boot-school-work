var name = "Steve";
console.log(name);


var myArray = ["Steve", "Mirta", "Kieron", "Patrick"];
console.log(myArray[1]);

document.getElementById("hi").addEventListener("click", function() {
    console.log("hello" + " Steve");
}, false);


document.getElementById("array").addEventListener("click", function() {
    console.log(myArray[1]);
}, false);

for (i = 0; i < myArray.length; i++) {
    if (myArray[i] === "P") {
        for (var j = i; j < (myArray.length + i); j++) {
            console.log(myArray[i])
        }
    }
}


document.getElementById("P").addEventListener("click", function() {
    console.log(myArray[i]);
}, false);

for (i = 1; i <= 10; i++); {
    console.log(i)
}
document.getElementById("for").addEventListener("click", function() {
    console.log(i);
}, false);

for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

document.getElementById("arrayname").addEventListener("click", function() {
    console.log(myArray[i]);
}, false);

var car = {
    doors: 4,
    honk: function() {
        console.log("honk");
    }
};
