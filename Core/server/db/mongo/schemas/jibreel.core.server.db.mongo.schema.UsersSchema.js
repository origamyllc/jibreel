'use strict';

module.exports = function(mongoose) {

  var db = mongoose.connection,
    Schema = mongoose.Schema,
    validate = require('mongoose-validator').validate,
    _ = require('lodash'),
    autoIncrement = require('mongoose-auto-increment');

  autoIncrement.initialize(db);

  var TYPE = 'UsersSchema';

  var schema = new Schema({
    username: {
      type: String,
      required: false
    },
    password: {
      type: String,
      required: true
    },
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    salt: {
      type: String,
      required: false,
      default: 'saltAndPeppa'
    },
    email: {
      type: String,
      required: true,
      default: 'abc@domain.com'
    }
  });

  /**
   * Methods
   */
schema.statics = {
      findByUserName: function(username, cb) {
        this.find({username: username}, cb);
      }
  };

  /**
   * Expose type to outside world.
   * @type {string}
   */
  schema.statics.TYPE = TYPE;

  return db.model(TYPE, schema);
};
