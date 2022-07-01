function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tabcontentb, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  tabcontentb = document.getElementsByClassName(cityName);
  for (i = 0; i < tabcontentb.length; i++) {
    tabcontentb[i].style.display = "block";
}
evt.currentTarget.className += " active";
}


/*
function compare_lname( a, b )
  {
  if ( a.lname.toLowerCase() < b.lname.toLowerCase()){
    return -1;
  }
  if ( a.lname.toLowerCase() > b.lname.toLowerCase()){
    return 1;
  }
  return 0;
}

students.sort(compare_lname);
console.log(students)
*/