use Beauty_salon
db.createCollection("hairstyles")
db.hairstyles.insertMany([
    {
        Name: "Fade Haircut",
        Price: 100,
        Gender: "Male"
    
    },
    {
        Name: "Taper Haircut",
        Price: 80,
        Gender: "Female"
    },
    {
        Name: "Buzzcut",
        Price: 120,
        Gender: "Male"
        
    },
    {
        Name: "French Crop",
        Price: 110,
        Gender: "Female"
    },
    {
        Name: "Crew Cut",
        Price: 150,
        Gender: "Male"
    
    },
    {
        Name: "UnderCut",
        Price: 90,
        Gender: "Male",
    },
    {
        Name: "LongShoty TopSides",
        Price: 50,
        Gender: "Female",
    }
])


// db.hairstyles.find({}, {Price: 0} )
// db.hairstyles.updateMany( {}, {$inc: {Price:1} } )
db.hairstyles.deleteMany({ Gender: "Male" })
