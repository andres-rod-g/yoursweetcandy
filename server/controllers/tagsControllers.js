import Tag from "../models/tags.js"

export const getTags = async (req, res) => {
    try {
        Tag.find().sort({name: 'asc'}).exec((err, tags) => {
            if ( err ) return console.log(err);
            res.json(tags)
        })
    } catch (error) {
        return console.log(error)
    }
}
