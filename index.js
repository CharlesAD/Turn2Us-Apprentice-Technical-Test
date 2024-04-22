document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    const feedback = document.getElementById('feedback');
    if (age >= 18) {
        window.location.href = "success.html"; 
    }else {
        feedback.textContent = "You must be at least 18 years old to qualify.";
        feedback.style.color = "red";
    }
});
