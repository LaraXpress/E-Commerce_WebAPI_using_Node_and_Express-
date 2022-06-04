const {Category} = require('../models/category')
const express = require('express');
const router = express.Router();

router.get('/', async (req,res)=>{
    const categoryList = await Category.find();
    if(!categoryList){
        res.status(201).json({success:false});
    }
    res.send(categoryList);
})

router.post('/', async (req,res)=>{
    let category = new Category({
        name:req.body.name,
        icon:req.body.icon,
        color:req.body.color
    })
    category = await category.save();
    if(!category){
        return res.status(404).send('Sorry!, Category can not be added!');
    }
    res.send(category);
})

router.delete('/:id', (req,res)=>{
    Category.findByIdAndRemove(req.params.id).then(category=>{
        if(category){
            return res.status(200).json({success:true,message:'Category successfully deleted!'})
        }else{
            return res.status(404).json({success:false,message:'Category failed to delete!'})
        }
    }).catch(err=>{
        return res.status(404).json({success:false,err:error})
    })
})

router.get('/:id', async(req,res)=>{
    const category = await Category.findById(req.params.id);
    if(!category){
        return res.status(404).send('Sorry!, Category with ID can not be found!');
    }
    res.send(category);
})

router.put('/:id', async (req,res)=>{
    const category =  await Category.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        color:req.body.color,
        icon:req.body.icon
    },{new:true})
    if(!category){
        return res.status(404).send('Sorry!, Category can not be updated!');
    }
    res.send(category);
})
module.exports = router;
