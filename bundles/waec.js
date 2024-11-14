var waecChecker = document.getElementById('checker');
var placementChecker = document.getElementById('placement');

function bece(){
    window.location.href='beceChecker.html';
}

function wassce(){
    window.location.href='wassceChecker.html';
}

waecChecker.addEventListener('click', function () {
    window.location.href = 'waecChecker.html';
});

placementChecker.addEventListener('click', function () {
    window.location.href = 'placementChecker.html';
});