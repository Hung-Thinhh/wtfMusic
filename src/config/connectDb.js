const mongoose = require('mongoose');

function connect() {
  try {
    mongoose
      .connect(
        "mongodb+srv://wtfmusic:wtfmusic2024@cluster0.psz9xf9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => console.log("Connected!"));
  } catch (error) {
      console.log("Failed to connect")
  }
}
module.exports = {connect}
