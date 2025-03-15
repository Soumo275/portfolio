function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
	event.preventDefault();
	let name = document.getElementById('name').value.trim();
	let email = document.getElementById('email').value.trim();
	let message = document.getElementById('message').value.trim();
	let formMessage = document.getElementById('formMessage');

	if (name === "" || email === "" || message === "") {
		formMessage.textContent = "All fields are required!";
		formMessage.style.color = "red";
		formMessage.classList.remove("hidden");
	} else {
		formMessage.textContent = "Message sent successfully!";
		formMessage.style.color = "green";
		formMessage.classList.remove("hidden");
		this.reset();
	}
});
