const API_URL = 'https://api.dailymotion.com/videos?channel=sport&limit=50&flags=verified'

const trendindNews = document.getElementById('trendingNews')

const apiFetchReq = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()
  sliceList(data.list)
}

function sliceList(data) {
  const result = data.slice(0, 5)
  filterObj(result)
}

const filterObj = (data) => {
  data.map(item => {
    renderTrending(item)
  })
}

const renderTrending = (data) => {
 const createDiv = document.createElement('div')
 createDiv.innerHTML = `
 <img src="http://www.dailymotion.com/thumbnail/video/${data.id}" alt="">
 <div class="trendingGroup">
   <div>
     <span class="trendingCategoryDate">Entertainment / 3 years ago</span>
     <span class="trendingInfo">${data.title}</span>
   </div>
 </div>
 `  
 trendindNews.appendChild(createDiv)
}


const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    apiFetchReq()
  })
}

init()