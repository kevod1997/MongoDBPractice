var db = db.getSiblingDB("city"); 
/* En que vecindario estoy parado (Según mis coordenadas GPS: 
-73.93414657, 40.82302903 ) */ 
var neighborhood = db.neighborhoods.findOne({ 
 geometry: { 
 $geoIntersects: { 
 $geometry: { type: "Point", coordinates: [ -73.93414657, 
 40.82302903 ] } } 
 } 
}) 
//printjson(neighborhood) 
print('\nVecindario en el que estoy ahora: "' + neighborhood.name + '"')



