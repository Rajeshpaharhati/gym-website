document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('sub').addEventListener('click', function() {
    document.querySelector('#plans').scrollIntoView({
        behavior: 'smooth'
    });
});

// document.getElementById('membershipForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const gender = document.querySelector('input[name="gender"]:checked')?.value;

//     if (name && email && phone && gender) {
//         alert(`Thank you, ${name}! Your membership request has been submitted.`);
//         this.reset();
//     } else {
//         alert('Please fill out all fields.');
//     }
// });