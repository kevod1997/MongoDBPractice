// var db = db.getSiblingDB("city"); 
// /* En que vecindario estoy parado (Según mis coordenadas GPS: -73.93414657, 
// 40.82302903 ) */ 
// var neighborhood = db.neighborhoods.findOne({ 
//  geometry: { 
//  $geoIntersects: { 
//  $geometry: { type: "Point", coordinates: [ -73.93414657, 40.82302903 ] } 
//  } 
//  } 
// }) 
// /* Que cantidad de restaurants se encuentran dentro de ese barrio (Polígono) */ 
// var restaurants = db.restaurants.find( 
//     { location: { 
//     $geoWithin: { 
//     $geometry: neighborhood.geometry 
//     } 
//     } 
//    }) 
//    print('\nCantidad de restaurants dentro de ese barrio: ' + restaurants.count()) 
//    var orden = 0 
//    while(restaurants.hasNext()) { 
//    print(++orden,'. ', restaurants.next().name) 
//    }

var db = db.getSiblingDB("city"); 
var neighborhood = db.neighborhoods.findOne({ 
geometry: { 
$geoIntersects: { 
$geometry: { type: "Point", coordinates: [ -73.93414657, 40.82302903 ] } 
} 
} 
}) 
var restaurants = db.restaurants.find( 
    { location: { 
    $geoWithin: { 
    $geometry: neighborhood.geometry 
    } 
    } 
    }) 
    let output = [] 
    while(restaurants.hasNext()) { 
    let restaurant = restaurants.next() 
    restaurant.type = "Feature" 
    restaurant.properties = {} 
    let id = restaurant._id.valueOf() 
    restaurant._id = { "$oid" : id } 
    restaurant.geometry = {...restaurant.location } 
    delete restaurant.location 
    output.push(restaurant) 
    } 
    printjson(output)