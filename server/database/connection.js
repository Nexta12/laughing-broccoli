const mongoose = require('mongoose');
const connectDB = async ()=>{
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`Server connected to Database`)
    } catch (error) {
        
    }
}

module.exports = connectDB