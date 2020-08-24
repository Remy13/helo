const bcrypt = require("bcryptjs")
module.exports= {
    getUser: async (req, res, next) =>{
        const {username, password} = req.query
        const db = req.app.get('db');
        db.get_user([username, password]).then(response=>{
            if(response.length > 0)
            {res.status(200).send({message: 'Success'})}
            else{res.status(401).send({message: 'User not found'})}
        }).catch(err=>console.log(err))
    },

    registerUser: async (req,res,next) =>{
        const {username, password} = req.body
        const db = req.app.get('db');
        const saltRounds = 10
        bcrypt.genSalt(saltRounds, function (err, salt) {
              if (err) {
                throw err
              } else {
                bcrypt.hash(password, salt, function(err, hash) {
                  if (err) {
                    throw err
                  } else {
                    console.log(hash)
                    //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
                    db.register_user([username, hash]).then(response=>{
                    console.log(response)
                        if(response.length > 0)
                        {res.status(200).send({message: 'Success', value: response})}
                        else{res.status(401).send({message: 'Unable to register'})}
                    }).catch(err=>console.log(err))
                    }
                })
              }
            })       
        }
}



