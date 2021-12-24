// Toggle Bios
document.addEventListener("click", function(e) {
	var buy_popup = document.getElementById("buy_popup")
	if (e.target.matches(".name")) {
		e.target.parentElement.classList.toggle("active")
	}
	else if (e.target.matches(".open_buy")) {
		buy_popup.classList.add("active")
	}
	else if (e.target.matches(".buy_popup_dismiss") || e.target === buy_popup) {
		buy_popup.classList.remove("active")
	}
})

// Dark Mode
const date = new Date()
const hr = date.getHours()

function determineMode() {
	if ((hr > 18) || (hr < 5)) {
		document.documentElement.dataset.theme = "dark"
	} else {
		document.documentElement.dataset.theme = "light"
	}
}

window.onload = determineMode
