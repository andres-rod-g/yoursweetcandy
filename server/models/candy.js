import mongoose from 'mongoose'

const candy = new mongoose.Schema ({
    name: String,
    tags: [String],
    description: String, 
    image: String
})
candy.index({'$**': 'text'});

const Candy = mongoose.model('Candy', candy)

export default Candy