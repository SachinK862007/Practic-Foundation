const checkbox = document.getElementById("sk");
const visa = document.getElementById("sk1");
const master = document.getElementById("sk2");
const rupay = document.getElementById("sk3");
const button = document.getElementById("sk4");
const subs = document.getElementById("sk5");
const payment = document.getElementById("sk6");

button.onclick = function(){
    if(checkbox.checked){
        subs.textContent = `Subscription Confirmed !`

        if(visa.checked){
            payment.textContent = `You Paid Through Visa`
        }
        else if(master.checked){
            payment.textContent = `You Paid Through MasterCard`
        }
        else if(rupay.checked){
            payment.textContent = `You Paid Through RuPay`
        }
        else{
            payment.textContent = `You Paid Through other UPI`
        }
    }
    else{
        subs.textContent = `You did not Subscribe!`
        payment.textContent = `Pay To Subscription`
    }
}