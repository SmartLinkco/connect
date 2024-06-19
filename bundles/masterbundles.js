document.addEventListener('DOMContentLoaded', function () {
    var trigger = document.getElementById('trigger');
    var sidebar = document.getElementById('sidebar');
    var mtnPortal = document.getElementById('mtn_networks');
    var atPortal = document.getElementById('at_networks');
    var atBigPortal = document.getElementById('atBig_networks');
    
    trigger.addEventListener('click', function () {
        sidebar.style.left = '0';
    });

    // Close the sidebar if clicked outside
    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !trigger.contains(event.target)) {
            sidebar.style.left = '-250px';
        }
    });

    mtnPortal.addEventListener('click', function () {
        window.location.href = 'mtnportal.html';
    });

    atPortal.addEventListener('click', function () {
        window.location.href = 'atportal.html';
    });

    atBigPortal.addEventListener('click', function () {
        window.location.href = 'atBigportal.html';
    });
});

function saveBundle(size, price) {
    const bundles = [] //JSON.parse(localStorage.getItem('bundles')) || [];
    bundles.push({ size, price });
    localStorage.setItem('bundles', JSON.stringify(bundles));
    alert(`${size} bundle for $${price} has been added.`);
}

function sendData() {
    const data = document.getElementById('inputField').value;
    window.location.href = `mtnpricelist.html?data=${encodeURIComponent(data)}`;
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const data = getQueryParam('data');
if (data) {
    document.getElementById('displayData').innerText = `Processing Data to: ${decodeURIComponent(data)}`;
    document.getElementById('displayNumber').innerText = `${decodeURIComponent(data)}`;
    //document.getElementById('gig_number_show').innerText = `${size}`;

} else {
    document.getElementById('displayData').innerText = 'No data received.';
}

var openPromptButton = document.getElementById('openPromptButton');

openPromptButton.onclick = function() {
    document.getElementById('overlay').style.display = 'flex';
};

document.getElementById('cancelButton').onclick = function() {
    document.getElementById('overlay').style.display = 'none';
};

document.getElementById('continueButton').onclick = function() {
    document.getElementById('overlay').style.display = 'none';
    alert('Continuing...');
};