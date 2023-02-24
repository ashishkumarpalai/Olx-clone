const express = require("express")
const { ProductModel } = require("../model/product.model")

const productRouter = express.Router()

productRouter.get("/", async (req, res) => {
    let query=req.query
    const products = await ProductModel.find(query)
    res.send(products)
})
//================home page data start============
productRouter.get("/homepage", async (req, res) => {
    const products = await ProductModel.find().limit(20)
    res.send(products)
})
//=================home page data end=============
productRouter.get("/search/:key",async(req,res)=>{
    console.log(req.params.key)
    let data=await ProductModel.find({
        "$or":[
            {"category":{$regex:req.params.key}},
            {"model":{$regex:req.params.key}},
            {"km":{$regex:req.params.key}}
        ]
    })
    res.send(data)
})
//===============================sorting start=====
productRouter.get("/lth", async (req, res) => {
    let query=req.query
    const products = await ProductModel.find(query).sort({"price":1})
    res.send(products)
})
productRouter.get("/htl", async (req, res) => {
    let query=req.query
    const products = await ProductModel.find(query).sort({"price":-1})
    res.send(products)
})
//===============================sorting end=========

productRouter.post("/create", async (req, res) => {
    const payload = req.body
    //single product its show user id
    const note = new ProductModel(payload)
    await note.save()

    // multiple data add but its doesnot show the id
    // const note = await ProductModel.insertMany(payload)
    res.send({ "msg": "Note created" })
})

productRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id
    const payload = req.body
    const note = await ProductModel.findOne({ "_id": id })
    const userID_in_note = note.user
    const userID_making_req = req.body.user
    try {
        if (userID_making_req !== userID_in_note) {
            res.send({ "msg": "You are not authorized" })
        } else {
            await ProductModel.findByIdAndUpdate({ _id: id }, payload)
            res.send({ "msg": `Note with id${id} has been updated` })
        }

    } catch (err) {
        console.log(err)
        res.send({ "msg": "Something went wrong", "error": err.message })
    }
})

productRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    const note = await ProductModel.findOne({ "_id": id })
    const userID_in_note = note.user
    const userID_making_req = req.body.user
    try {
        if (userID_making_req !== userID_in_note) {
            res.send({ "msg": "You are not authorized" })
        } else {
            await NoteModel.findByIdAndDelete({ _id: id })
            res.send({ "msg": `Note with id${id} has been updated` })
        }

    } catch (err) {
        console.log(err)
        res.send({ "msg": "Something went wrong", "error": err.message })
    }
})

module.exports = {
    productRouter
}