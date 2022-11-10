const API_URL = 'https://api.dailymotion.com/videos?channel=sport&limit=50&flags=verified'

const apiFetchReq = async () => {
  const res = await fetch(API_URL)
  const data = await res.json()
  sliceList(data.list)
}

function sliceList(data) {
  const result = data.slice(0, 10)
  filterObj(result)
}

const filterObj = (data) => {
  console.log(data)
}






const init = () => {
  apiFetchReq()
}

init()