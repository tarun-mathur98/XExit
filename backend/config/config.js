const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL),
      {
        useNewUrlParser: true, // Parses MongoDB connection strings
        useUnifiedTopology: true, // Enables the new server discovery and monitoring engine
      };
    console.log("DB connected");
  } catch (error) {
    console.log("Error in connecting DB", error.message);
  }
};

module.exports = connectMongoDB;

// `mongodb+srv://tarunmathur098:XExit@123@xexit.gglsb.mongodb.net/resignation_management`
// process.env.MONGODB_URL
