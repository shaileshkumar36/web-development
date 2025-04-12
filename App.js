// const student = {
//     name: "shailesh kumar",
//     age: 20,
//     rolleNo: 3333,
//     ad : this,
//     fun : function () {
//         console.log("hello form function:" + this.name);
//     },
//     fun2 : () => (console.log("hello form function:" + this)), 
//     //fun3 : (a +b) => (a*b)
// };
// // console.log(student.name);
// // student.fun();
// // student.fun2();
// // console.log(student.ad);
// // fun3(3,3,);
// student.fun2();


// accas the element or change the value using the class name

// let small  = document.getElementsByClassName("oldImg");
// for(let i =0;i<small.length;i++){
//     small[i].src = "c:\Users\shail\Downloads\spiderMan";
//     console.log(small[i]);
// }



// // Navigation bar
// // accas the element or change the value using the id name
// let sm = document.querySelectorAll(".box");
// sm.children;
// console.log(sm);

// let a = document.querySelector('ul');
// a.childElementCount;
// console.log(a);

// let image = document.querySelector('img');
// image.previousElementSibling.style.color = "green";


// // add mew element in the dom

// let newh = document.createElement("h2");
// console.dir(newh);
// newh.innerText = "hellow i am new headin how are you doing"; 
// let body = document.querySelector('body'); // accas the parent element
// body.appendChild(newh);
// console.log(newh);

// body.prepend(newh); // add the element at the start of the body ;

// body.append(newh.innerText ="last element");

// let btn = document.createElement("button");
// btn.innerHTML = "New BUtton";
// let p = document.querySelector('p');
// p.insertAdjacentElement('beforebegin',btn);
