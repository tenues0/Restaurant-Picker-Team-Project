var searchForm = $('#search-form');
var searchBtn = $('.searchBtn');
// var searchQuery = ('#search-place');
var searchQueryTwo = $('#search-place');
var apiKey = "gJVmTi7vwWY--jKnwBsPJdLiPDsil3tcQzGmNEpsaoBkFKdkMwmTdiB_RCkLqnrExNMK-VW2twwvYqNssc1H8r25mJE0L-ZTnpq2xSa88h65tb8IzboCX_C1UHFrYnYx"

function getLocationResults(e) {
    e.preventDefault();

    var searchRequest = searchQueryTwo.val()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + apiKey);
    console.log(searchRequest);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?&limit=10&categories=parks,beaches&location=" + searchRequest, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            data.businesses.forEach(function (item) {
                    const searchResult = {
                        name: item.name,
                        address: item.location.address1,
                        picture: item.image_url,
                    }
                    localStorage.setItem(item.name, JSON.stringify(searchResult));
                })
                .catch(error => console.log('error', error));
        })
}

// function selectLocationFunction(e) {
//     e.preventDefault();
//     JSON.parse(window.localStorage.getItem("something to specify chosen location"))

//     fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" & limit = 10 & categories = parks, beaches & location = " + searchRequest, requestOptions)

//     }

searchForm.on('submit', getLocationResults);

selectLocation.on('click', selectLocationFunction);