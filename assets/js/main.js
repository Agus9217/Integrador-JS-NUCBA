const API_URL = 'https://api.dailymotion.com/videos?channel=sport&limit=50&flags=verified'

const apiFetchReq = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    filterList(data)
}

const filterList = (data) => {
    const result = data.list
    result.map(item => console.log(item))
}

apiFetchReq()