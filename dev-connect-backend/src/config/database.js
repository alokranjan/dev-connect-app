const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://alokdeveloper:yZKpk9Xy4DpbjH9S@clusternamastenode1.bh3jfqi.mongodb.net/devConnect?retryWrites=true&w=majority&appName=ClusterNamasteNode1"
  );
};

module.exports = {connectDB};

