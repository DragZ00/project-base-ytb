const mongoose = require('mongoose');

const schema = mongoose.Schema({

    role_id:{type: mongoose.SchemaTypes.ObjectId, required: true},
    user_id:{type: mongoose.SchemaTypes.ObjectId, required: true},

},{
    versionKey: false,
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class User_Roles extends mongoose.Model {
    
}

schema.loadClass(User_Roles);
module.exports = mongoose.model('user_roles', schema);   // 'user_roles' is the collection name in MongoDB