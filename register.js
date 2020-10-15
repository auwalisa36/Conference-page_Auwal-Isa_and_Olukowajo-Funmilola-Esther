const purchaseButton = document.querySelector(".purchasebut")
purchaseButton.addEventListener("click",function(){
    
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let noOfPasses = document.querySelector(".numberOfPasses").value;
    let comment = document.querySelector(".comments").value;
    console.log(name, email, noOfPasses, comment);
     
    if (name == "" || email == "" || noOfPasses == "" || comment == ""){
        alert("all fields required");
        return;
    }
    else {
      alert("Thanks");
        } })

