const switchTheme = function () {
	const root = document.querySelector(':root')
	let isDark = false

	return () => {
		isDark = !isDark

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
}

let themeBtn = document.getElementById('theme-btn')
let _switchTheme = switchTheme()
themeBtn.addEventListener('click', _switchTheme)
