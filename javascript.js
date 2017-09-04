function substitute() {
  var myValue = document.getElementById('visitor').value;
  var thankYou = "Thank you for visiting my site, " + myValue + "! It's nice to meet you!";


  if (myValue.length == 0)  {
    alert('Name field required!');
    return;
    }

  /*if (myValue.length >= 2)  {
    alert(thankYou);
    return;
  }*/

    var form = document.getElementById('contactmain');
    form.innerHTML = thankYou
  }
