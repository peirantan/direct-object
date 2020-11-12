// Toggle Bios
document.addEventListener("click", function(e) {
	if (e.target.matches(".name")) {
		e.target.parentElement.classList.toggle("active")
	}
})

// Dark Mode
const date = new Date()
const hr = date.getHours()

function determineMode() {
	if ((hr > 18) && (hr < 5)) {
		document.documentElement.dataset.theme = "dark"
	} else {
		document.documentElement.dataset.theme = "light"
	}
}

window.onload = determineMode
