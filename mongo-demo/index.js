const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB...."))
  .catch(err => console.log("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    author: "Jethro",
    tags: ["Angular", "Frontend"],
    isPublished: true
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
    // Pagination
    const pageNumber = 2;
    const pageSize = 10;


    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt less than
    // lte (less than or equal to)
    // in
    // nin not in
  const courses = await Course
    
    //.find({ price: {$gte: 10, $lte: 20 } })
    // .find({ price: { $in: [10, 15, 20] } })
    // .find()
    // .or([ {autor: "Jethro"}, { isPublished: true }])
    // .and([])

    // Starts with Jethro
//     .find({ author: /^Mosh/ })
    
//     // Ends with Glaudin
//     .find({ author: /Glaudin$/i })

//     // Contains Jethro
// .find({ author: /.*Mosh.*/ })
    .find({ author: "Jethro", isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(page)
    .sort({ name: 1 })
    // .select({ name: 1, tags: 1 })
    .count();
  console.log(courses);
}

getCourses();
