document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
        const currentDay = new Date(today);
        currentDay.setDate(today.getDate() + i);
        const dayOfWeek = daysOfWeek[currentDay.getDay()];
        const month = monthNames[currentDay.getMonth()];
        const date = currentDay.getDate();
        document.getElementById(`day-${i}`).textContent = `${dayOfWeek} ${date} ${month}`;
    }
});

function goBackHome(){
    window.location.href ='gospel1barbershop.html';
}

document.getElementById('cancel').addEventListener('click', goBackHome);

document.getElementById('bookAppointment').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent any default action if it's a form submission
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('confirmationPopup').style.display = 'block';
});

document.getElementById('goBackHomeButton').addEventListener('click', function() {
    window.location.href = 'gospel1barbershop.html'; // Replace with the actual home page URL
});