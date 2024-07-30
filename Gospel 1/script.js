function appointment(){
    window.location.href ='appointment.html';
}

function barbers(){
    window.location.href ='barbers.html';
}

function redirectToServices() {
    window.location.href = 'gospel1barbershop.html#servicess';
}

document.getElementById('bAppointment').addEventListener('click', function(event) {
    document.getElementById('bookMain').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('appointments').addEventListener('click', function() {
    document.getElementById('bookMain').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('closeBookMain').addEventListener('click', function() {
    document.getElementById('bookMain').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('cancel').addEventListener('click', function() {
    document.getElementById('bookMain').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

function goBackHome() {
    // Add your redirect logic here
    window.location.href = 'index.php'; // Example redirect
}

//document.getElementById('appointments').addEventListener('click', appointment);
document.getElementById('barbers').addEventListener('click', barbers);