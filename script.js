// function sumbitButton(){
//   var fullName = '';
//   var emailAddress = '';


//   fullName =document.getElementById( 'fullName').value;
//   emailAddress =document.getElementById( 'emailAddress').value;


//   console.log('Full Name:' +  fullName);
//   console.log('Email Address:' +  emailAddress);


//   if (fullName ==''|| emailAddress =='') {
//       alert ( 'input this missing field' )
//   }  
//   else{
//       alert('thanks' )
//   }

// }



const name = document.querySelector("#fullName");
const email = document.querySelector("#emailAddress");
const comment = document.querySelector("#comment");
const purchaseButton = document.querySelector("#purchasebut");
// const displayName = document.querySelector(".pname");
// const displayAge = document.querySelector('.pyears');

purchaseButton.addEventListener("click",function(e){
    e.preventDefault();

    let name = document.querySelector("#fullName").value;
    let email = document.querySelector("#emailAddress").value;
    let comment = document.querySelector("#comment").value;
    console.log(name, email, comment);
     
    if (name == "" || email == "" || comment == ""){
        alert("all fields required");
        return;
    }
    else {
      alert("thanks");
        } 

