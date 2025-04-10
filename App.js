const student = {
    name: "shailesh kumar",
    age: 20,
    rolleNo: 3333,
    ad : this,
    fun : function () {
        console.log("hello form function:" + this.name);
    },
    fun2 : () => (console.log("hello form function:" + this)),
    

    //fun3 : (a +b) => (a*b)
};
// console.log(student.name);
// student.fun();
// student.fun2();
// console.log(student.ad);
// fun3(3,3,);
student.fun2();

