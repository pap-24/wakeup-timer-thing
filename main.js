let alarmHour = prompt('Ώρα: '),
    alarmMin = prompt('Λεπτά: '),
    alarmAM = prompt('π.μ. ή μ.μ. : '),
    clockCheckInterval; // για την επανάληψη

try {
    alarmHour = JSON.parse(alarmHour);
    alarmMin = JSON.parse(alarmMin);
}
catch (error) {
    alert('Κάτι δεν πήγε σωστά..');
}

let sound = new Audio('mp3 url here');
if (typeof (alarmHour) == 'number' && typeof (alarmMin) == 'number') {
    if (["pm", "μ.μ.", "μ.μ", "μμ", "μμ."].includes(alarmAM)) alarmHour += 12; // Βάλε 12ωρο άν είναι μμ

    clockCheckInterval = setInterval(() => {
        // Συνεχόμενα διάβαζε την ώρα μέχρι να γίνει η ζητούμενη του χρήστη.
        if (alarmHour == new Date().getHours() && alarmMin == new Date().getMinutes()) {
            sound.loop = true;
            sound.play();
            clearInterval(clockCheckInterval); // Σπάσε την επανάληψη
        }
    }, 1e3); // 1 sec repeat.

}

else alert('Ρε αριθμό σου ζήτησα');
