const mongoose = require('mongoose');



const dbConnection = async() => {

    try {
        //await mongoose.connect( 'mongodb+srv://smongec:Enchestes070799*@cluster0.bwsen.mongodb.net/hospitaldb' , {
        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}


module.exports = {
    dbConnection
}