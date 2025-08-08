const mongoose = require('mongoose');

const schema = mongoose.Schema({

    role_id:{type: mongoose.SchemaTypes.ObjectId, required: true},
    permission : { type: String, required: true },
    created_by: {type: mongoose.SchemaTypes.ObjectId, required: true},

},{
    versionKey: false,
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class Roles_Privileges extends mongoose.Model {
    
}

schema.loadClass(Roles_Privileges);
module.exports = mongoose.model('roles_privileges', schema);    // 'roles_privileges' is the collection name in MongoDB