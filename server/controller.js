const { Songs } = require ('../database/models');

const controller = {
    get: (req, res) => {
        Songs.find({}, (err, songs) => {
            if (err) {
                console.error(err)
            } else {
                res.status(200).send(songs)
            }
        })
    },
    post: (req, res) => {
       const { songName,
                artist,
                likeCount,
                playsCount,
                repostCount
            } = req.body;
        
        new Songs (req.body)
            .save((err, newSong) => {
                if (err) {
                    console.error(err)
                } else {
                    res.status(201).send(newSong)
                }
            })
    },
    incrementPatchLikes: (req, res) => {
            const id = req.params.id
            console.log('************', id)
            
            Songs.findByIdAndUpdate({_id : id}, { $inc: {likeCount: 1 }})
              .then( function (song) {
                console.log('incremented count')
                res.send(song)
              })
            
    },

    incrementRepostLikes: (req, res) => {
        const id = req.params.id
            console.log('************', id)
            
            Songs.findByIdAndUpdate({_id : id}, { $inc: {repostCount: 1 }})
              .then( function (song) {
                console.log('incremented count')
                res.send(song)
              })
            
    },

    getPatchLikes: (req, res) => {
            const id = req.params.id
            console.log('************', id)
        
            Songs.findById({_id : id})
                .then( function (song) {
                console.log('incremented count')
                res.send(song)
          })


    },

    delete: (req, res) => {
        const { name } = req.query;
        Songs.destroy({
            where: { name }
        })
        .then(data => res.status(203).send('deleted'))
        .catch((err) => console.error(err))
    }  

}

module.exports = controller;