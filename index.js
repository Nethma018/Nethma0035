// Clear all the form fields after clicking Cancel Button
function resetForm() {
    document.getElementById("welcomeForm").reset();
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('stEmail').value;
    window.location.href = `home.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
}

function resetForm() {
    document.getElementById('welcomeForm').reset();
}