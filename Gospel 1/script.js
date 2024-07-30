function barbers(){
    window.location.href ='barbers.html';
}

function facebook(){
    window.location.href ='https://www.facebook.com/share/QzcptwQENjskEg7K/?mibextid=LQQJ4d';
}

function instagram(){
    window.location.href ='https://www.instagram.com/gospel1debarber?igsh=MXdtbGtodW00ZXVlZQ==';
}

function home(){
    window.location.href ='gospel1barbershop.html';
}

function tiktok(){
    window.location.href ='https://www.tiktok.com/@gospel1debarber?is_from_webapp=1&sender_device=pc';
}

function snapchat(){
    window.location.href ='https://snapchat.com/t/UQx0OMIE';
}

function bookAppointment(){
    window.location.href ='https://form.jotform.com/gospel1hairstudio/gosple-1-hair-studio';
}

function redirectToServices() {
    window.location.href = 'gospel1barbershop.html#servicess';
}

document.getElementById('bAppointment').addEventListener('click', bookAppointment);

document.getElementById('appointments').addEventListener('click', bookAppointment);

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