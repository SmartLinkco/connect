document.addEventListener('DOMContentLoaded', function () {
    var trigger = document.getElementById('trigger');
    var sidebar = document.getElementById('sidebar');
    var mtnPortal = document.getElementById('mtn_networks');
    var atPortal = document.getElementById('at_networks');
    var atBigPortal = document.getElementById('atBig_networks');
    const mobileMode = window.matchMedia("(max-width: 640px)");
    
    // Close the sidebar if clicked outside
    
    function handleSidebar() {
        if (mobileMode.matches) {
            sidebar.style.left = '-250px'; // Hide sidebar initially in mobile mode

            // Show sidebar when trigger is clicked
            trigger.addEventListener('click', function () {
                sidebar.style.left = '0';
            });

            // Hide sidebar when clicking outside of it
            document.addEventListener('click', function (event) {
                if (!sidebar.contains(event.target) && !trigger.contains(event.target)) {
                    sidebar.style.left = '-250px';
                }
            });
        } else {
            // Ensure the sidebar is always visible in non-mobile mode
            sidebar.style.left = '0';
        }
    }

    // Run the function once initially
    handleSidebar();

    // Listen for changes in viewport size
    mobileMode.addListener(handleSidebar);

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

function home(){
    window.location.href='masterbundles.html';
}

const bundles = [];
function saveBundle(size, amount) {
    //const bundles = []; //JSON.parse(localStorage.getItem('bundles')) || [];
    bundles.push({ size, amount });
    localStorage.setItem('bundles', JSON.stringify(bundles));
    localStorage.setItem('bundlePrice', bundles.amount);
    //alert(`${size} bundle for $${amount} has been added.`);
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('gig_number_show').innerText =`${size}`;
    document.getElementById('amount').innerText =`${amount}`;
}

function saveValue() {
    // Get the value of the element with the id "myIdField"
    var number = document.getElementById("displayNumber").value;
    console.log("Value saved:", number);
}

function sendData(type) {
    const data = document.getElementById('inputField').value;
    localStorage.setItem('storedValue', data);
    if(type == 'mtn'){
        window.location.href = `mtnpricelist.html?data=${encodeURIComponent(data)}`;
    //window.location.href = `paystack.html?data=${encodeURIComponent(data)}`;
    } else if (type == 'at'){
        window.location.href = `atPricelist.html?data=${encodeURIComponent(data)}`;
    } else {
        window.location.href = `atBigPricelist.html?data=${encodeURIComponent(data)}`;
    }
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const data = getQueryParam('data');
if (data) {
    document.getElementById('displayData').innerText = `Processing Data to: ${decodeURIComponent(data)}`;
    document.getElementById('displayNumber').innerText = `${decodeURIComponent(data)}`;
    //document.getElementById('beneficiaryNumber').value = `${decodeURIComponent(data)}`;
    //document.getElementById('gig_number_show').innerText = `${size}`;

} else {
    document.getElementById('displayData').innerText = 'No data received.';
    document.getElementById('beneficiaryNumber').innerText = 'No data received.';
}


// var openPromptButton = document.getElementById('openPromptButton');

// openPromptButton.onclick = function() {
//     document.getElementById('overlay').style.display = 'flex';
// };

document.getElementById('cancelButton').onclick = function() {
    document.getElementById('overlay').style.display = 'none';
};


//paystacks api

// function payWithPaystack(e) {
//   e.preventDefault();

//   let handler = PaystackPop.setup({
//     key: 'pk_live_b115ad14040e0e8b3e0c5f09cbbad902565b5b6b', // Replace with your public key
//     email: document.getElementById("email-address").value,
//     currency: 'GHS',
//     amount: document.getElementById("amount").value * 100,
//     ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
//     // label: "Optional string that replaces customer email"
//     // onClose: function(){
//     //   alert('Window closed.');
//     // },
//     callback: function(response){
//       let message = 'Payment complete! Reference: ' + response.reference;
//       alert(message);
//     }
//   });

//   handler.openIframe();
// }

