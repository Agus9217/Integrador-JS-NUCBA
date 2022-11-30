// 👉 Que se rendericen ciertas partes de la página (carrito, productos, etc.) desde Js.
//
// 👉 Que se utilicen buenas prácticas a la hora de estructurar y organizar el código (buena organización del código en general, por ejemplo, buenos nombres de variables, funciones y parámetros).
//
// 👉 Deberá tener al menos una funcionalidad en la que capture datos de una parte de la página y cree un componente HTML en base a eso (Por ejemplo, una funcionalidad de agregar un producto al carrito, que tome los datos de dicho producto para renderizarlo en el mismo).
//
// 👉 Deberá utilizar localStorage, para persistir datos en el sitio.
//
// 👉 En caso de que lo deseen, podrán usar algún framework de CSS para el estilado de la página.
//
// 👉 El Sitio deberá ser una landing page totalmente responsive, en la que deberá haber una sección de productos y una página  de login ( como referencia para organizarse, pueden tomar la estructura del Nucba NFT y agregar la página de login y registro).
//
// 👉 El sitio debe ser responsivo y tener menú hamburguesa (funcional, realizado con js) en las resoluciones (mobile, tablet, etc.) que corresponda.
//
// 👉 Deberá tener la funcionalidad de filtrar por categorías. (productos o noticias).
//
// 👉 OPCIONAL: Si conocen alguna API de Productos/Noticias que quieran utilizar en lugar de traer los datos  desde un archivo de JS, pueden hacerlo.
//
// 👉 Deberán entregar el repositorio de Github, con el Vercel de la página vinculado.


const trendingNews = document.getElementById('trendingNews')
const newsCategories = document.getElementById('newsCategories')
const firstGroup = document.getElementById('firstGroup')
const navBar = document.getElementById('navbar')
const btnMenu = document.getElementById('btn-menu')
const preloader = document.getElementById('preloader')
const newsVideosColumn = document.getElementById('newsVideoColumn')
const Storage = window.localStorage

const API_KEY = 'WSrOMYCMGGRxhUKZNxLAFV2QLxblG6yG'
const API_URL = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${API_KEY}`
const API_URL_VIDEO = 'https://api.dailymotion.com/videos?channel=sport&limit=50&flags=verified'

const getNewsArray = Storage.getItem('News')
const parseNewsArray = JSON.parse(getNewsArray) || []
const getVideosArray = Storage.getItem('Videos')
const parseVideosArray = JSON.parse(getVideosArray) || []

const fetchApiReq = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()
  Storage.setItem('News', JSON.stringify(data.results)) 
}

const fetchApiVideo = async () => {
  const res = await fetch(API_URL_VIDEO)
  const data = await res.json()
  Storage.setItem('Videos', JSON.stringify(data.list))
}

const preloaderInit = () => {
  setTimeout(() => {
    preloader.style.display = 'none'
  }, 2500);
}

if (Storage.length === 0) {
  setTimeout(() => {
    window.location.reload()
  }, 3000);
} 

const sortArray = (array, func) => {
  const shuffledArray = array.sort(() => 0.5 - Math.random());
  func(shuffledArray) 
}

const renderHtml = (data) => {
  const sliceTrendingArray = data.slice(0,5)
  sliceTrendingArray.map((item) => {
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

  const sliceNewsCategoriesArray = data.slice(7,19)
  sliceNewsCategoriesArray.map((item) => {
    const subSection = item.subsection
    const createDivNewsCategories = document.createElement('a')
    createDivNewsCategories.href = item.short_url
    createDivNewsCategories.target = '_blank'
    createDivNewsCategories.rel = 'noreferrer nofollow noopener'
    createDivNewsCategories.className = "newsCategoriesGroup"
    createDivNewsCategories.innerHTML = `
    <img src="${item.multimedia[0].url}" alt="">
    <div class="newsCategoriesGroupText">
      <span class="newsCategoriesDate">${subSection.toUpperCase()} / ${item.published_date}</span>
      <span class="newsInfo">${item.title}</span>
    </div>
    `
    newsCategories.appendChild(createDivNewsCategories)
  })

  const sliceFirstGroupArray = data.slice(22,27)
  sliceFirstGroupArray.map((item) => {
    const subSection = item.subsection
    const createDivFirstGroup = document.createElement('a')
    createDivFirstGroup.href = item.short_url
    createDivFirstGroup.target = '_blank'
    createDivFirstGroup.rel = 'noreferrer nofollow noopener'
    createDivFirstGroup.className = 'firstGroup'
    createDivFirstGroup.innerHTML = `
    <div class="firstGroup">
    <img src="${item.multimedia[0].url}" alt="">
    <div class="firstGroupText">
      <span class="firstCategoryDate">${subSection.toUpperCase()} / ${item.published_date}</span>
      <span class="firstInfo">${item.title}</span>
    </div>
    </div>
    `
    firstGroup.appendChild(createDivFirstGroup)
  })
}

const renderHtmlVideo = (data) => {
  console.log(data[0])
  const createNewsVideoColumn = document.createElement('a')
  createNewsVideoColumn.className = 'newsVideosColumn'
  createNewsVideoColumn.href = `http://www.dailymotion.com/video/${data[0].id}`
  createNewsVideoColumn.target = '_blank'
  createNewsVideoColumn.rel = 'noreferrer nofollow noopener'
  createNewsVideoColumn.innerHTML = `
            <img src='http://www.dailymotion.com/thumbnail/video/${data[0].id}'>
            <div class="newsVideosGroupText">
              <span class="newsVideosDate">Entertainment / 3 years ago</span>
              <span class="newsVideoInfo">${data[0].title}</span>
            </div>

`
  const sliceNewsVideos = data.slice(1,4)
  sliceNewsVideos.map((item) => {
    console.log(item)
    createNewsVideoColumnTwo = document.createElement('a')
    createNewsVideoColumnTwo.className = 'newsVideosColumn'
    createNewsVideoColumnTwo.innerHTML = `
            <div class="newsVideosGroup">
              <img src="http://www.dailymotion.com/thumbnail/video/${item.id}" alt="">
              <div class="newsVideosGroupTextColumn">
                <span class="newsVideosGroupTextColumnInfo">item.title</span>
              </div>
            </div>
`
  newsVideosColumn.appendChild(createNewsVideoColumnTwo)
  })


  newsVideosColumn.appendChild(createNewsVideoColumn)
}

sortArray(parseNewsArray, (func) => {
  renderHtml(func)
})

sortArray(parseVideosArray, (func) => {
  renderHtmlVideo(func)
})

const showNavbar = () => {
  btnMenu.addEventListener('click', ()=> {
    navBar.classList.toggle('visibility')
  })
}

const init = () => {
  window.addEventListener('DOMContentLoaded', () => {
    fetchApiReq()
    fetchApiVideo()
    showNavbar()
    preloaderInit()
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
// {/* <div class="firstGroup">
//   <img src="/assets/img/bosque-1.jpeg" alt="">
//   <div class="firstGroupText">
//     <span class="firstCategoryDate">Entertainment / 3 years ago</span>
//     <span class="firstInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, maxime. Ex neque distinctio aspernatur</span>
//   </div>
// </div>  */}
//
//
// <video src="/assets/video/personas-video-1.mp4" autoplay loop muted></video>
            // <div class="newsVideosGroupText">
            //   <span class="newsVideosDate">Entertainment / 3 years ago</span>
            //   <span class="newsVideoInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, maxime. Ex neque distinctio aspernatur</span>
            // </div>
//

            // <div class="newsVideosGroup">
            //   <img src="/assets/img/persona-1.jpeg" alt="">
            //   <div class="newsVideosGroupTextColumn">
            //     <span class="newsVideosGroupTextColumnDate">Entertainment / 3 years ago</span>
            //     <span class="newsVideosGroupTextColumnInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, maxime. Ex neque distinctio aspernatur</span>
            //   </div>
            // </div>
