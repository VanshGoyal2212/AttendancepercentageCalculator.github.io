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


 function Calculate() {

            let num1 = Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);

            let nta = ((3 * num1) - (4 * num2));
            let lucb = ((4 * num2 / 3) - num1);

            let percentage = (num2 / num1) * 100;

            if (percentage >= 75) {
                document.getElementById('result').innerHTML =
                    "You can bunk " + Math.floor(lucb) +" lectures"+" OR "+(Math.floor(lucb)/8)+" days";
            }
            else {
                document.getElementById('result').innerHTML =
                    "You have to attend " + Math.ceil(nta) +" lectures"+" OR "+(Math.ceil(nta)/8)+" days";
            }
        }