// let btn = document.querySelector("button");//  select eh button  
// console.dir(btn);// print the btn obj

// function sayHello() {//function 
//     alert("shailesh why you clik botuun"); // only this one run
//     console.log("hi sir ");//this not run 
// }


// //btn.onclick = sayHello;//onclick event give the function 


// let btns = document.querySelectorAll("button"); // // all button select 
// for(but of btns){
//     // but.onclick = sayHello; // not () lick function giva
//     // but.onmouseenter = function (){
//     //     console.log("you entered a button");
//     // };
//     but.addEventListener("click",sayHello);
//     but.addEventListener("click",function (){
//         console.log("shilesh kuamt");
//     });
// }


// let form = document.querySelector("form");
// form.addEventListener("submit",function (event){  //event submit having  
//     // console.log("form is sumbit");
//     // alert("form submitted");
//     event.preventDefault();
//     console.dir(form);

//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

// })

let inp = document.querySelector('#text');
let p = document.querySelector("p");
inp.addEventListener("input",function (){
    console.log(inp.value);
    p.innerText = inp.value;
})
