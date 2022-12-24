let alarmHour = prompt('Enter hour: '),
    alarmMin = prompt('Enter min: '),
    alarmAM = prompt('am / pm : '),
    clockCheckInterval;

// unstringify.
alarmHour = JSON.parse(alarmHour);
alarmMin = JSON.parse(alarmMin);

if (typeof(alarmHour) == 'number' && typeof(alarmMin) == 'number') {
  if (alarmAM == "pm") alarmHour += 12;
  
   clockCheckInterval = setInterval(() => {
      if (alarmHour == new Date().getHours() && alarmMin == new Date().getMinutes()) {
          alert('Playing...');
          let coolSound = new Audio('C:\Do-Not-Look\haugh.mp3');
          coolSound.play();
          clearInterval(clockCheckInterval);
      }
  }, 1e3); // 1 sec repeat.
  
}

else alert('Please enter a number!');
