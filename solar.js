document.querySelectorAll('nav a').forEach(anchor => {
 anchor.addEventListener('click', function(e){
 e.preventDefault();
 document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
 });
 });


 const form = document.getElementById('booking-form');
 form.addEventListener('submit', function(e){
 e.preventDefault();

let handler = PaystackPop.setup({
 key: 'pk_test_xxxxxxxx', 
 email: form.elements[1].value,
 amount: 50000, 
 currency: "NGN",
 ref: '' + Math.floor((Math.random() * 1000000000) + 1),
 callback: function(response){
 alert('Payment successful! Reference: ' + response.reference);
 form.reset();
 },
 onClose: function(){
 alert('Payment was not completed.');
 }
 });
 handler.openIframe();
 });
 