import mongoose from 'mongoose'

const tag = new mongoose.Schema ({
    name: String
})

const Tag = mongoose.model('Tag', tag)

export default Tag