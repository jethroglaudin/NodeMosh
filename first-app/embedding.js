const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function addAuthor(courseId, author){
  const course = await Course.findById(courseId)
  course.authors.push(author)
  course.save()
}

async function removeAuthor(courseId, authorId){
  const course = await Course.findById(courseId)
  const author = await Author.findById(authorId)
  author.remove();
  course.save();
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId){
  const course = await Course.update({ _id: courseId }, {
    $unset: {
      'author': ''
    }
  })
  // course.author.name = "Jethro Glaudin";
  // course.save();
}
// createCourse('Node Course', [
//   new Author({ name: 'Mosh' }),
//   new Author({ name: 'John' })
// ]);
// updateAuthor('5e2db379c69b902eecf228a0')

addAuthor('5e2dc83cb2b86832bfe7309d', new Author({ name: 'Amy' }))
