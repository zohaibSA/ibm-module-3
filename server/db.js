const mongoose = require('mongoose');

// Replace '<db_username>', '<db_password>', '<db_name>', and '<cluster_url>' with your actual MongoDB details
const mongoURI = 'mongodb://root:zohaibsaddiq:NzgyMi16b2hhaWJz@127.0.0.1:2701/doc_appointment?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
