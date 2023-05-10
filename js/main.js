import topics from './data/topics.js'

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

const switchTheme = function () {
	return () => {
		localStorage.setItem(
			'isDark',
			JSON.stringify(!JSON.parse(localStorage.getItem('isDark')))
		)

		let isDark = JSON.parse(localStorage.getItem('isDark'))
		setTheme(isDark)
	}
}

checkLocalStorage()

let themeBtn = document.getElementById('theme-btn')
let _switchTheme = switchTheme()
themeBtn.addEventListener('click', _switchTheme)

const topicsSection = document.querySelector('.web-topics')
const topicsContainer = document.querySelector('.topics-container')

const header = document.createElement('h1')
header.textContent = `"${topics.length}" Web Topics Found`
topicsSection.prepend(header)

topics.forEach(topic => {
	const div = document.createElement('div')
	div.className = 'topic'

	const img = document.createElement('img')
	img.src = topic.img
	img.loading = 'lazy'

	const info = document.createElement('div')
	info.className = 'info'

	const head = document.createElement('div')

	const title = document.createElement('p')
	title.textContent = topic.title

	const tool = document.createElement('h4')
	tool.textContent = topic.tool

	head.appendChild(title)
	head.appendChild(tool)

	info.appendChild(head)

	const footer = document.createElement('div')
	footer.className = 'footer'

	const starsCotainer = document.createElement('div')
	starsCotainer.className = 'stars-container'

	starsCotainer.innerHTML = `
			<ion-icon name="star"></ion-icon>
			<ion-icon name="star"></ion-icon>
			<ion-icon name="star"></ion-icon>
			<ion-icon name="star"></ion-icon>
			<ion-icon name="star"></ion-icon>
		`

	const author = document.createElement('p')
	author.className = 'text-muted'

	author.textContent = `Author: ${topic.author}`

	footer.appendChild(starsCotainer)
	footer.appendChild(author)

	info.appendChild(footer)

	div.appendChild(img)
	div.appendChild(info)

	topicsContainer.appendChild(div)
})
