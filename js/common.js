const setTheme = isDark => {
	const root = document.querySelector(':root')

	const theme = {
		'--bg_default': isDark ? '#1a1a1a' : '#fff',
		'--bg_body': isDark ? '#282828' : '#f0f9ff',
		'--lines-color': isDark ? '#000' : '#ddd',
		'--body-text': isDark ? '#ededed' : '#333'
	}

	for (let v in theme) {
		root.style.setProperty(v, theme[v])
	}
}

const checkLocalStorage = () => {
	let isDark = localStorage.getItem('isDark')
		? JSON.parse(localStorage.getItem('isDark'))
		: false

	setTheme(isDark)
}

const switchTheme = () => {
	return () => {
		const isDark = JSON.parse(localStorage.getItem('isDark'))

		localStorage.setItem('isDark', !isDark)

		setTheme(!isDark)
	}
}

checkLocalStorage()

let themeBtn = document.getElementById('theme-btn')
let _switchTheme = switchTheme()
themeBtn.addEventListener('click', function () {
	_switchTheme()
})

const favBtn = document.getElementById('fav-btn')

favBtn.addEventListener('click', () => {
	const favSec = document.querySelector('.favorites')

	favSec.classList.toggle('show')
})
