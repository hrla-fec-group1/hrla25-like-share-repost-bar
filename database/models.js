const connection = require ('./');
const mongoose = require ('mongoose');

const songsSchema = mongoose.Schema (
 {
    songName: {type: String},
    artist: {type: String},
    likeCount: {type: Number},
    playsCount: {type: Number},
    repostCount: {type: Number}
},
{
    timestamps: false
}
)

const Songs = mongoose.model('Songs', songsSchema)

module.exports = { Songs };