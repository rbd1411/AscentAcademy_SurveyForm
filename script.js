function validateForm() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var gender = document.getElementById("gender").value;
	var email = document.getElementById("email").value;
	var feedback = document.getElementById("feedback").value;

	if (name === "" || age === "" || gender === "" || email === "" || feedback === "") {
		alert("All fields are required.");
		return false;
	}

	if (!validateEmail(email)) {
		alert("Please enter a valid email address.");
		return false;
	}

	if (feedback.length > 500) {
		alert("Feedback should not exceed 500 characters.");
		return false;
	}

	return true;
}

function validateEmail(email) {
	var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return pattern.test(email);
}
