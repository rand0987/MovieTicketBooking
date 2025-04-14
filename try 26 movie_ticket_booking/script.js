let box = document.getElementsByClassName('box');
let seatsCount = document.querySelector('.seats-count');
let totalPrice = document.querySelector('.total-price');
let ele = document.querySelectorAll('.box');
let btn = document.querySelector('.btn-book');
let txt = document.querySelector('.amt');
let successPage = document.getElementById('successPage');
let continueButton = document.getElementById('continueButton');
let successSeats = document.querySelector('.success-seats');
let successAmount = document.querySelector('.success-amount');
let count = 0;
let selectedSeats = [];

for(let i = 0; i < box.length; i++) {
    let row = Math.floor(i / 15) + 1;
    let col = i % 15 + 1;
    box[i].setAttribute('data-seat', `${String.fromCharCode(64 + row)}${col}`);
    
    box[i].addEventListener('click', () => {
        box[i].classList.toggle('selected');
        txt.innerHTML = "";
        
        if(box[i].classList.contains('selected')) {
            count++;
            selectedSeats.push(box[i].getAttribute('data-seat'));
        } else {
            count--;
            const index = selectedSeats.indexOf(box[i].getAttribute('data-seat'));
            if (index > -1) {
                selectedSeats.splice(index, 1);
            }
        }
        
        seatsCount.innerHTML = count;
        totalPrice.innerHTML = count * 150;
    });
}

btn.addEventListener('click', () => {
    if(count == 0) {
        txt.innerHTML = "Please select at least one seat";
    } else {
        successSeats.innerHTML = selectedSeats.join(', ');
        successAmount.innerHTML = `₹${count * 150}`;
        successPage.style.display = 'block';
    }
});

continueButton.addEventListener('click', () => {
    successPage.style.display = 'none';
    
    for(let i = 0; i < box.length; i++) {
        if(ele[i].classList.contains('selected')) {
            box[i].classList.remove('selected');
        }
    }
    
    count = 0;
    selectedSeats = [];
    seatsCount.innerHTML = 0;
    totalPrice.innerHTML = 0;
    txt.innerHTML = "";
});