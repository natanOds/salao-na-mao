const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:admin123@cluster0.st3z7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
             

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(URI).then(() => console.log('DB is up!')).catch(() => console.log(err));