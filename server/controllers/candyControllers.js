import mongoose from "mongoose"
import Tag from "../models/tags.js"
import Candy from "../models/candy.js"
import fs from 'fs'
import { Console } from "console"


export const getCandies = async (req, res) => {
    try {
        Candy.find().exec((err, data) => {
            if (err) return console.log(err);
            res.json(data)
        })
    } catch (error) {
        if (error) return console.log(err)
    }
}

export const postCandy = async (req, res) => {
    const candy = req.body
    const dulce = new Candy(candy)

    const candyTags = candy.tags.split(', ')

    const tagsOnDB = await Tag.find({})

    const tagsDB = []

    tagsOnDB.map((e) => tagsDB.push(e.name))

    candyTags.map((tag) => {
        if (tagsDB.indexOf(tag) == -1) {
            const tagToSave = new Tag({name: tag})
            tagToSave.save()
        }

    })

    

    try {
        dulce.save()
        Console.log('Post Submited!')
        res.json(dulce)
    } catch (error) {
        if (error) return console.log(err)
    }
}


export const findCandy = async (req, res) => {
    const text = req.query.text;

    try {
        const conicidencias = await Candy.find({$text:{$search: text}})

        res.json(conicidencias)
    } catch (error) {
        return console.log(error)
    }
    return 
}