function sumbitButton(){
  var fullName = '';
  var emailAddress = '';


  fullName =document.getElementById( 'fullName').value;
  emailAddress =document.getElementById( 'emailAddress').value;


  console.log('Full Name:' +  fullName);
  console.log('Email Address:' +  emailAddress);


  if (fullName ==''|| emailAddress =='') {
      alert ( 'input this missing field' )
  }  
  else{
      alert('thanks' )
  }

}