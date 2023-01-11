function Update() {
	console.log('up')
	let fullHeight = document.querySelectorAll('.full-height')
	fullHeight.forEach((e) => {

		if(window.innerHeight > 800)
			e.style.minHeight = window.innerHeight
	})
}

window.onresize = Update

window.onload = function () {
	Update()
}