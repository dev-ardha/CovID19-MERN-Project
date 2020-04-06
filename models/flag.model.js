const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const flagSchema = new Schema({
    flag: {
        countryName: { type: String },
    },
}, {
    timestamps: true,
});

const Flag = mongoose.model('Flag', flagSchema);

module.exports = Flag;