// function greeter(person: string) {
//     return "Hello, " + person;
// }
//
// let user = "Jane User";
//
// document.body.innerHTML = greeter(user);
document.getElementById("date").innerHTML += new Date();

//vue

function myFunction() {
    var x = document.getElementById("textfieldinput").innerHTML;
    document.getElementById("par").innerHTML = "You wrote: " + x;
    //alert ("Hello World!");
}

function submit() {
  console.log("hello");
}

new Vue({
    el: '#app',
    data: {
        user: 'sample-user'
    }
});
