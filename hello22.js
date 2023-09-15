function validateForm() {
    var fName = document.forms["myForm"]["fname"].value;
    var mInitial = document.forms["myForm"]["initial"].value;
    var lName = document.forms["myForm"]["lname"].value;
    var eMail = document.forms["myForm"]["email"].value;
    if (fName == "" || mInitial == "" || lName == "" || eMail == "") {
      alert("All fields are required.");
      if(fName == ""){
        emptyFname();
      }
      else{
        resetFname();
      }
      if (mInitial == ""){
        emptymInitial();
      }
      else{
        resetmInitial();
      }
      if (lName == ""){
        emptylName();
      }
      else{
        resetlName();
      }
      if (eMail == ""){
        emptyeMail();
      }
      else{
        reseteMail();
      }
      return false;
    }
    else{
        alert("Success!");
        return true;
    }
  }

  function emptyFname(){
    var empty = document.getElementById('fname');
    empty.classList.add('changed');
  }

  function resetFname(){
    var empty = document.getElementById('fname');
    empty.classList.remove('changed');
  }

  function emptymInitial(){
    var empty = document.getElementById('initial');
    empty.classList.add('changed');
  }

  function resetmInitial(){
    var empty = document.getElementById('initial');
    empty.classList.remove('changed');
  }

  function emptylName(){
    var empty = document.getElementById('lname');
    empty.classList.add('changed');
  }

  function resetlName(){
    var empty = document.getElementById('lname');
    empty.classList.remove('changed');
  }

  function emptyeMail(){
    var empty = document.getElementById('email');
    empty.classList.add('changed');
  }

  function reseteMail(){
    var empty = document.getElementById('email');
    empty.classList.remove('changed');
  }

  function resetAll(){
    var empty = document.getElementById('fname');
    empty.classList.remove('changed');
    var empty2 = document.getElementById('initial');
    empty2.classList.remove('changed');
    var empty3 = document.getElementById('lname');
    empty3.classList.remove('changed');
    var empty4 = document.getElementById('email');
    empty4.classList.remove('changed');
    
  }

  
  