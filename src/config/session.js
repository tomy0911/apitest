const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + ".env"),
});

const MongoStore = require("connect-mongo");
const adavancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const options = {
  store: MongoStore.create({
    mongoUrl:
      process.env.SESSION ||
      "mongodb+srv://admin:admin@cluster0.2t9dj.mongodb.net/Cluster0?retryWrites=true&w=majority",
    mongoOptions: adavancedOptions,
  }),
  secret: "secreto",
  resave: false,
  saveUninitialized: false,
};

module.exports = { options };
