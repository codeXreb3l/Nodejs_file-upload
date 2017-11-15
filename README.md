# Nodejs_file-upload
File upload (image files) with Nodejs

## This application can be embeded to your project for uploading image files
But first, follow these steps-

**Step 1**: Open up your command line and run `npm install`
 This will download all the necessary packages onto your machine.

If you have mongoDB up and running already skip the next step:

**Step 2**: Initialize mongoDB with mongoose in your app.js file with
   `mongoose.connect("mongodb://localhost/Picture_Upload", ({useMongoClient: true}));
    mongoose.promise =  global.Promise; `

**Step 3**: Run your application after embedding this code.

### We are using MongoDB only to store the file path and not upload the file itself.
