const companies = {
    init: {
        name: "All",
        tag: "all",
        url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=50983daeea314c298f4ab9a183e078c0',
        visible: true
    },
    
    list: [
        {
            id: 1,
            name: "Apple",
            tag: "apple",
            url: 'https://newsapi.org/v2/everything?q=Apple&from=2021-04-11&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
            visible: false
        },
        {
            id: 2,
            name: "Google",
            tag: "google",
            url: 'https://newsapi.org/v2/everything?q=Google&from=2021-04-11&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
            visible: false
        }
    ]
}

function loadList() {
    return companies
}

export default loadList