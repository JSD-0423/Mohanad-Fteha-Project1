import topics from './data/topics.js'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

const topicId = urlParams.get('id')

const topic = topics.find(e => e.id === +topicId)
const topicContainer = document.querySelector('.topic-container')

if (topic) {
	document.title = topic.tool
}
