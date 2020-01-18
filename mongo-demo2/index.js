const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Hey we're connect to mongoDB!!"))
  .catch(err => console.log("Could not connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const Course = mongoose.model("Course", courseSchema);
  const course = new Course({
    name: "Angular Course",
    author: "Jethro Williams",
    tags: ["angular, frontend"],
    isPublished: false
  });

  const result = await course.save();
  console.log(result);
}

//   createCourse();

async function getCourses() {
  const courses = await Course
    // .find({ price: { $gte: 10, $lte: 20 }})
    // .find({ price: { $in: [10, 15, 20] } })
    //.find({ author: "Jethro", isPublished: true })
    // .find()
    // .or([ { author: "Mosh "}, { isPublished: true}])
    // .and([ {} ])
    .find({ author: /^Jethro/ })
    .find({ author: /Glaudin$/i })

    // Contains Mosh
.find({ author: /.*Mosh.*/ }) // .* means we can have zero or more characters before or after "mosh"
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

// getCourses();


async function updateCourse(id) {
    // Query First
    // findbyId()
    // Modify its properties 
    // save()

//    const course = await Course.findById(id);
   const course = await Course.findByIdAndUpdate(id, {
       $set: {
           author: "William ",
           isPublished: false
       }
    }, { new: true });
//    if(!course) return;


//    course.isPublished = true;
//    course.author = "Another Author"
//    course.set({
//        isPublished: true,
//        author: 'Another Author'
//    })

//    const result = await course.save();
   console.log(course)
}
// 
// updateCourse("5e1caaded181e51c8a29da1d")

async function removeCourse(id) {
 
//    const result = await Course.deleteOne({ _id: id });
   const course = await Course.findByIdAndDelete(id);
   console.log(course)
//    console.log(result);


}
removeCourse("5e1caaded181e51c8a29da1d")