function savedata(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let section = document.getElementById("section").value;

    let percentage= (num2/num1)*100;
    

if(percentage>=75){
    alert("You are eligible to give your exam Your current attendance percentage is "+percentage);
}
else{
    alert("You are not eligible to give exam Your current attendance percentage is "+percentage+ "Attend as many lecture as you can");
    alert("Attend as many lecture as you can")
}

localStorage.setItem("name", name);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);
    localStorage.setItem("dob", dob);
    localStorage.setItem("section", section);
    localStorage.setItem("num2",num1);
    localStorage.setItem("num1",num2);
}