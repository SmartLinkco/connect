document.addEventListener('DOMContentLoaded', function() {
  // Retrieve bundles from localStorage
  const bundles = JSON.parse(localStorage.getItem('bundles')) || [];
  
  // Assuming you want to display the first item's amount
  if (bundles.length > 0) {
      const amount = bundles[0].amount;
      document.getElementById('amount').value = amount;
  }
});

function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_live_b115ad14040e0e8b3e0c5f09cbbad902565b5b6b', // Replace with your public key
    email: document.getElementById("email-address").value,
    currency: 'GHS',
    amount: amount * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    // onClose: function(){
    //   alert('Window closed.');
    // },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}

// document.addEventListener('DOMContentLoaded', function() {
//   // Retrieve bundles from localStorage
//   const bundles = JSON.parse(localStorage.getItem('bundles')) || [];
  
//   // Assuming you want to display the first item's amount
//   if (bundles.length > 0) {
//       const amount = parseFloat(bundles[0].amount); // Convert amount to float if necessary
//       document.getElementById('amount').value = amount.toFixed(2); // Display amount in input field
//   }
// });

// function payWithPaystack(e) {
//   e.preventDefault();

//   let handler = PaystackPop.setup({
//       key: 'pk_live_b115ad14040e0e8b3e0c5f09cbbad902565b5b6b', // Replace with your public key
//       email: document.getElementById("email-address").value,
//       currency: 'GHS',
//       amount: document.getElementById("amount").value * 100,
//       ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference
//       callback: function(response){
//           let message = 'Payment complete! Reference: ' + response.reference;
//           alert(message);
//       }
//   });

//   handler.openIframe();
// }

