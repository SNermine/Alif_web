const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    
    
    image:{
        type:String,
        default:"https://res.cloudinary.com/ebniecolo/image/upload/v1566554496/users/default.jpg"
    },
    
   
   
});


module.exports = Shop = mongoose.model('shop',ShopSchema);
