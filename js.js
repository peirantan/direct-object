// Toggle Bios
let bios = document.getElementsByClassName("bio")
for (i = 0; i < bios.length; i++) {
	let currentBio = bios[i]
	currentBio.addEventListener("click", function() {
		this.classList.toggle("active")
	})
}