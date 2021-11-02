let expedia = [
    { flight: 'Barcelona', price: 100 },
    { flight: 'Tahiti', price: 300 },
    { flight: 'Dubai', price: 250 },
    { flight: 'Chicago', price: 250 },
    { flight: 'Oslo', price: 250 },
    { flight: 'Seattle', price: 250 }
]


function priceSort(allTheFlights) {
    return allTheFlights.sort((a, b) => a.price - b.price || a.flight.localeCompare(b.flight))
    // return allTheFlights.sort(function (a, b) {
    //     //Sort by Price


    //     // return b.flight.localeCompare(a.flight)

    //     // return a.price.length - b.price.length

    //     if (a.price < b.price) {
    //         return -100
    //     }
    //     if (b.price < a.price) {
    //         return 100
    //     }
    //     //If you have gotten this far the prices are equal 
    //     // if (a.flight > b.flight) {
    //     //     return 1
    //     // }

    //     // if (a.flight < b.flight) {
    //     //     return -1
    //     // }

    //     return a.flight.localeCompare(b.flight)

    //     return 0
    // })
}


