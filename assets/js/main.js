const trendingNews = document.getElementById('trendingNews')
const newsCategories = document.getElementById('newsCategories')
const firstGroup = document.getElementById('firstGroup')
const navBar = document.getElementById('navbar')
const btnMenu = document.getElementById('btn-menu')

const API_KEY = '?api-key=WSrOMYCMGGRxhUKZNxLAFV2QLxblG6yG'
const API_URL = `https://api.nytimes.com/svc/topstories/v2/sports.json${API_KEY}`

const fetchApiReq = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()
  filterList(data.results)
}

const filterList = (data) => {
  const shuffledArray = data.sort(() => 0.5 - Math.random());
  renderTrending(shuffledArray)
  renderNewsCategories(shuffledArray)
  renderFirstGroup(shuffledArray)
}

const renderTrending = (data) => {
  const sliceArray = data.slice(0,6)
  sliceArray.map((item) => {
    const subSection = item.subsection
    const createDivTrending = document.createElement('div')
    createDivTrending.innerHTML = `
    <img src="${item.multimedia[0].url}" alt="">
    <div class="trendingGroup">
      <div>
        <span class="trendingCategoryDate">${subSection.toUpperCase()} / ${item.published_date}</span>
        <a href="${item.short_url}" target="_blank" rel="noreferrer nofollow noopener" class="trendingInfo">${item.title}</a>
      </div>
    </div>
    `
    trendingNews.appendChild(createDivTrending)
  })
}

const renderNewsCategories = (data) => {
  const sliceArray = data.slice(7,21)
  sliceArray.map((item) => {
    const subSection = item.subsection
    const createDivNewsCategories = document.createElement('div')
    createDivNewsCategories.className = "newsCategoriesGroup"
    createDivNewsCategories.innerHTML = `
    <img src="${item.multimedia[0].url}" alt="">
    <div class="newsCategoriesGroupText">
      <span class="newsCategoriesDate">${subSection.toUpperCase()} / ${item.published_date}</span>
      <a href="${item.short_url}" target="_blank" rel="noreferrer nofollow noopener" class="newsInfo">${item.title}</a>
    </div>
    `
    newsCategories.appendChild(createDivNewsCategories)
  })
}

const renderFirstGroup = (data) => {
  console.log(data)
  const sliceArray = data.slice(22,27)
  sliceArray.map((item) => {
    const subSection = item.subsection
    const createDivFirstGroup = document.createElement('div')
    createDivFirstGroup.className = 'firstGroup'
    createDivFirstGroup.innerHTML = `
    <div class="firstGroup">
    <img src="${item.multimedia[0].url}" alt="">
    <div class="firstGroupText">
      <span class="firstCategoryDate">${subSection.toUpperCase()} / ${item.published_date}</span>
      <a href="${item.short_url}" target="_blank" rel="noreferrer nofollow noopener" class="firstInfo">${item.title}</a>
    </div>
    </div>
    `
    firstGroup.appendChild(createDivFirstGroup)
  })
}

const showNavbar = () => {
  btnMenu.addEventListener('click', ()=> {
    navBar.classList.toggle('visibility')
  })
}

showNavbar()






const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    fetchApiReq()
  })
}

init()








// news trending

  // <img src="" alt="">
  // <div class="trendingGroup">
  //   <div>
  //     <span class="trendingCategoryDate"></span>
  //     <a href="" target="_blank" rel="noreferrer nofollow noopener" class="trendingInfo"></a>
  //   </div>
  // </div>
  



//news categories
 
  // <img src="" alt="">
  // <div class="newsCategoriesGroupText">
  //   <span class="newsCategoriesDate"></span>
  //   <a href="" target="_blank" rel="noreferrer nofollow noopener" class="newsInfo">hghg</a>
  // </div>
  
// first Group
{/* <div class="firstGroup">
  <img src="/assets/img/bosque-1.jpeg" alt="">
  <div class="firstGroupText">
    <span class="firstCategoryDate">Entertainment / 3 years ago</span>
    <span class="firstInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, maxime. Ex neque distinctio aspernatur</span>
  </div>
</div>  */}
