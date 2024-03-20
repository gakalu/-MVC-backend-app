const express=require('express');
const usercontroller=require('./controller')

const router=express.Router();
router.get('/',usercontroller.getAll);
module.exports=router;
