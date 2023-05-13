import topics from './data/topics.js'

const topicsSection = document.querySelector('.web-topics')
const topicsContainer = document.querySelector('.topics-container')

const header = document.createElement('h1')
header.textContent = `"${topics.length}" Web Topics Found`
topicsSection.prepend(header)

topics.forEach(topic => {
	const anchor = document.createElement('a')
	anchor.href = '/'
	anchor.className = 'topic'

	const img = document.createElement('img')
	img.src = `./images/${topic.imgFile}`
	img.loading = 'lazy'

	const info = document.createElement('div')
	info.className = 'info'

	const head = document.createElement('div')

	const title = document.createElement('p')
	title.textContent =
		topic.title.length > 30 ? topic.title.slice(0, 30) + '...' : topic.title

	const tool = document.createElement('h4')
	tool.textContent =
		topic.tool.length > 30 ? topic.tool.slice(0, 25) + '...' : topic.tool

	head.appendChild(title)
	head.appendChild(tool)

	info.appendChild(head)

	const footer = document.createElement('div')
	footer.className = 'topics-footer'

	const starsCotainer = document.createElement('div')
	starsCotainer.className = 'stars-container'

	let noNotFilledStars = 5 - Math.ceil(topic.rating)

	for (var i = topic.rating; i >= 1; i--) {
		starsCotainer.innerHTML += `<ion-icon name="star"></ion-icon>`
	}

	if (i > 0) {
		starsCotainer.innerHTML += `<ion-icon name="star-half"></ion-icon>`
	}

	for (let i = 0; i < noNotFilledStars; i++) {
		starsCotainer.innerHTML += `<ion-icon name="star-outline"></ion-icon>`
	}

	const author = document.createElement('p')
	author.className = 'text-muted'

	author.textContent = `Author: ${topic.author}`

	footer.appendChild(starsCotainer)
	footer.appendChild(author)

	info.appendChild(footer)

	anchor.appendChild(img)
	anchor.appendChild(info)

	anchor.href = `pages/details.html?id=${topic.id}`

	topicsContainer.appendChild(anchor)
})
