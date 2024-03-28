let prom = new Promise((resolved, rejected) => {

    console.log("Please wait for 2 second..")

    setTimeout(() => {
        if (5 > 2) {
            console.log("True,  5 is greater than 2")
        } else {
            console.log("False, 5 is not less than 2")
        }
    }, 2000)


});

prom
    .then((result) => {
        console.log("Promise fullfilled", result)
    })
    .catch((result) => {
        console.log("Catch error", result)
    })



// Way 2 :-  

let prom2 = new Promise((resolved, rejected) => {
    var a = 5;
    var b = 6;

    setTimeout(() => {
        if (a == b) {
            console.log("True")
        } else {
            console.log("False")
        }
    }, 2000)
})

prom2
    .then((result) => {
        console.log("Promise Fullfilled", result)
    })
    .catch((result) => {
        console.log("Error", result)
    });




var a = [1, 2, 3];
var b = a.reduce((acc, val) => {
    return acc + val
});
console.log(b);