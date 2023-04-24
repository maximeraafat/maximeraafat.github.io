function calculateAge(year, month, day) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getUTCMonth() + 1;
  var currentDay = currentDate.getUTCDate();

  var age = currentYear - year;
  if (currentMonth < month) {
    return --age;
  } else if (currentMonth > month) {
    return age;
  } else if (currentMonth == month) {
    if (currentDay >= day) {
      return age;
    } else {
      return --age;
    }
  }
}

document.write( calculateAge(1998, 06, 18) );
