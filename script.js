// 1. كود السلايدر (لازم يكون بره عشان يشتغل أول ما تحرك إيدك)
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

if (priceRange && priceValue) {
    priceRange.addEventListener('input', function() {
        priceValue.textContent = this.value;
    });
}

// 2. كود إرسال الفورم (بيشتغل بس لما تدوس Submit)
document.getElementById('rentalForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    const arrivalDate = new Date(data.arrival);
    const leaveDate = new Date(data.leave);

    if (arrivalDate >= leaveDate) {
        alert("Leaving date must be later than arrival date ❌");
        return; 
    }

    if (!data.user_email.includes('@')) {
        alert("Please enter a valid Gmail 📧");
        return;
    }

    fetch('http://localhost:3000/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        alert('We will contact you soon ✅');
        console.log('Saved to DB:', json);
    })
    .catch(err => {
        alert("Please try again later ⚠️");
        console.error(err);
    });
});