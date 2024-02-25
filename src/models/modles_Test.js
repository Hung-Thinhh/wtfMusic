const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    name: String,
    title: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });
// Sử dụng model để tạo một bài viết mới
// const newPost = new BlogPost({
//     name: 'John Doe',
//     title: 'My First Blog Post',
//   });
  
  // Lưu bài viết vào cơ sở dữ liệu
//   newPost.save()
//     .then(savedPost => {
//       console.log('Saved post:', savedPost);
//     })
//     .catch(error => {
//       console.error('Error saving post:', error);
//     });
module.exports= mongoose.model('BlogPost', BlogPost);