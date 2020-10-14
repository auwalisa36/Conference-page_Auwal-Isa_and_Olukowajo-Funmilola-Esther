const purchaseButton = document.querySelector("#purchasebut");
purchaseButton.addEventListener("click",function(){
    
    let name = document.querySelector("#fullName").value;
    let email = document.querySelector("#emailAddress").value;
    let noOfPasses = document.querySelector("#numberOfPasses").value;
    let comment = document.querySelector("#comment").value;
    console.log(name, email, noOfPasses, comment);
     
    if (name == "" || email == "" || noOfPasses == "" || comment == ""){
        alert("all fields required");
        return;
    }
    else {
      alert("Thanks");
        } })

