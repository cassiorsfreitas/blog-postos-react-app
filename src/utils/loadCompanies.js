const companies = {
    init: {
        name: "All",
        tag: "all",
        url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=50983daeea314c298f4ab9a183e078c0',
    },

    list: [
        {
            id: 1,
            name: "Apple",
            tag: "apple",
            url: 'https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
            visible: false
        },
        {
            id: 2,
            name: "Google",
            tag: "google",
            url: 'https://newsapi.org/v2/everything?q=Google&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
            visible: false
        },
        {
            id: 3,
            name: "Microsoft",
            tag: "microsoft",
            url: 'https://newsapi.org/v2/everything?q=Microsoft&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
            visible: false
        },
        {
            id: 4,
            name: "Facebook",
            tag: "facebook",
            url: 'https://newsapi.org/v2/everything?q=Facebook&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
            visible: false
        },
        {
            id: 5,
            name: "Amazon",
            tag: "amazon",
            url: 'https://newsapi.org/v2/everything?q=Amazon&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
            visible: false
        },
        {
            id: 6,
            name: "Intel",
            tag: "intel",
            url: 'https://newsapi.org/v2/everything?q=Intel&sortBy=popularity&apiKey=50983daeea314c298f4ab9a183e078c0',
            visible: false
        }
    ],

    visible: false
}

function loadCompanies() {

    return companies
}

export default loadCompanies