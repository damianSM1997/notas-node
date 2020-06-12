const { Schema, model } = require('mongoose');
const bccryp = require('bcryptjs');

const UserSchema = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

//parte para cifrarlo con bcryp
UserSchema.methods.encryPassword = async password => {
    //parte para generar un random por asi decirlo xd
    // tomara tiempo por eso tiene que ser procesado de forma acincrona
    const solt = await bccryp.genSalt(10);

    return await bccryp.hash(password, salt);
}

UserSchema.methods.matchPassword = async function(password) {
    await bccryp.compare(password, this.password);
}



module.exports.model('User', UserSchema);