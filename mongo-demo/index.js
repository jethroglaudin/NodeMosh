const mongoose = require("mongoose");
const DB = require("./config/keys");

mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB...."))
  .catch(err => console.log("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
     required: true,
     minlength: 5,
     maxlength: 255,
    },
    category: {
      type: String,
      require: true,
      enum: ['web', 'mobile', 'network']
    },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () { return this.isPublished; },
    min: 10,
    max: 200
  }
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    category: '-',
    author: "Josh",
    tags: ["Angular", "Frontend"],
    isPublished: true,
    price: 15
  });

  try {
   
    const result = await course.save();
    console.log(result);
  }

  catch(ex) {
    console.log(ex.message)
  }
}

createCourse();

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
  const courses = await Course.find();

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
  // .find({ author: "Jethro", isPublished: true })
  // .skip((pageNumber - 1) * pageSize)
  // .limit(page)
  // .sort({ name: 1 })
  // .select({ name: 1, tags: 1 })
  // .count();
  console.log(courses);
}

// getCourses();

async function updateCourse(id) {
  // Query First
  // findbyId()
  // Modify its properties
  // save()

  //    const course = await Course.findById(id);
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "William ",
        isPublished: false
      }
    },
    { new: true }
  );
  //    if(!course) return;

  //    course.isPublished = true;
  //    course.author = "Another Author"
  //    course.set({
  //        isPublished: true,
  //        author: 'Another Author'
  //    })

  //    const result = await course.save();
  console.log(course);
}
//
// updateCourse("5e1caaded181e51c8a29da1d")

async function removeCourse(id) {
  //    const result = await Course.deleteOne({ _id: id });
  const course = await Course.findByIdAndDelete(id);
  console.log(course);
  //    console.log(result);
}
// removeCourse("5e1caaded181e51c8a29da1d")
