// https://jsonplaceholder.typicode.com/us


async function fetchApi() {
    const getData = await fetch(`https://jsonplaceholder.typicode.com/users`);
    // console.log(getData);

    const getJsonData = await getData.json();
    // console.log(getJsonData);

    var getId = [];
    var x = '';
    for (i = 0; i <= 10; i++) {

        var data = getJsonData[i];
        getId.push(data);
    }

    getId.forEach((e) => {
        x = x + `<tr>
                    <td>${e.id}</td>
                    <td>${e.name}</td>
                </tr>`;

        document.getElementById('empDetail').innerHTML = x;
    })

    // console.log(address.street);  
    // console.table(id, name);

}
fetchApi();




// Some practice questions =====================
var a = [1, 2, 3];
var b = a.reduce((acc, val) => {
    return (acc + val) + 1
}, 0)
console.log(b);

/*
// acc + val + 1, which means
iteration1 : 0 + 1 + 1 = 2
iteration2 : 2 + 2 + 1 = 5
iteration3 : 5 + 3 + 1 = 9
*/

// How  to change background color of a body :

// let color = prompt("Please enter color");
// document.body.style.background = color;