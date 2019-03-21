```js
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Model = mongoose.model;

let userSchema = Schema({
  name: String,
  age: String,
  state: String,
  country: String
});

//Virtual Property
userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});
userSchema.virtual("fullName").set(function (name) {
  let str = name.split(" ");
  this.firstName = str[0];
  this.lastName = str[1];
});

//Instance Methods
userSchema.methods.getInitials = function () {
  return this.firstName[0] + this.lastName[0];
};

//Static Methods
userSchema.statics.getUsers = function () {
  return new Promise((resolve, reject) => {
    this.find((err, docs) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      resolve(docs);
    });
  });
};

//Hooks
userSchema.pre("save", cb);

//Plugins
userSchema.plugin(cb);

let UserModel = Model("User", userSchema);

//READ
User.find({ name: "YOUR_NAME" })
  .then(doc => {
    console.log(doc);
  })
  .catch(err => {
    console.log(err);
  });

//CREATE
let Newuser = new User(user);
Newuser.save()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

//INSERT MANY
let Newuser = new User(user);
let Newuser1 = new User(user);
let Newuser2 = new User(user);
User.create([Newuser, Newuser1, Newuser2])
  .then(data => {
    resolve(data);
  })
  .catch(err => {
    reject(err);
  });

//UPDATE
User.findOneAndUpdate({ _id: id }, { $set: { name: user.name } }, { new: true })
  .then(docs => {
    if (docs) {
      resolve({ success: true, data: docs });
    } else {
      reject({ success: false, data: "no such user exist" });
    }
  })
  .catch(err => {
    reject(err);
  });

//REMOVE
User.findOneAndRemove({ _id: id })
  .then(docs => {
    if (docs) {
      resolve({ success: true, data: docs });
    } else {
      reject({ success: false, data: "no such user exist" });
    }
  })
  .catch(err => {
    reject(err);
  });

```