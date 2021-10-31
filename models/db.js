const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true); // This prevents collection.ensureIndex deprecation warning
mongoose.set("useFindAndModify", false); // This prevents current mongoose deprecation warning


mongoose.connect("mongodb://localhost:27017/myCovidApp", { useNewUrlParser: true ,useUnifiedTopology: true}).then(() => {
    console.log('Database is connected');
})
