const db = require("../config")
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middleware/AuthonticateUser')
class Users{
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, lastName,
        gender, emailAdd, profileUrl
        FROM Users;
        `
        db.query(query,
            (err, results)=>{
                if(err) throw err
                res.json({
                    status:res.statusCode,
                    results
                })
            }
            )
    };

    fetchUser(req, res){
        const query =`
        SELECT UserID, firstName, lastName,
        gender, emailAdd,profileURL
        FROM Users
        WHERE UserID = ${req.params.id};
        `
        db.query(query,(err, result)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,result
                })
            })
                }
    login(req, res) {
        const {emailAdd, userPass} = req.body
        // query
        const query =`
        SELECT firstName, lastName,
        gender, userDOB, emailAdd, userPass,
        profileUrl
        FROM Users
        WHERE emailAdd = ?;
        `
        db.query(query, [emailAdd,userPass],async (err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            }else {
                await compare(userPass,
                    result[0].userPass,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        const token =
                        createToken({
                            emailAdd,
                            userPass
                        })
                        // Save a token
                        res.cookie("LegitUser",
                        token, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or you have not registered"
                            })
                        }
                    })
            }
        })
    }
    async register(req, res){
        const data = req.body
        //encryption
        data.userPass = await hash(data.userPass,15)
        const user = {
            emailAdd:data.emailAdd,
            userPass:data.userPass
        }
        const query = `
        INSERT  INTO  Users
        SET ?;
        `
        db.query(query, [data],(err) => {
            if (err) throw err

            //token 

            let token = createToken(user)
            res.cookie("Actual.User", token,
            {
                maxAge: 360000,
                httpOnly: true
            });
            res.json({
                msg: "You are now registered."
            })
        })
    }
    updateUser(req, res) {
        const data = req.body
        if (data.userPass) {
            data.userPass = 
            hashSync(data.userPass, 15)
        }

        const query = `
        UPDATE Users
        SET?
        WHERE UserID = ?;
        `
        db.query(query,
            [req.body, req.params.id],
            (err)=>{
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg:'The user record was updated'
                })
            }
            )
    }
    deleteUser(req, res){
        const query = `
        DELETE FROM users
        WHERE userID = ${req.params.id};
        `
        db.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'User deleted from the list'
            })
        })
    }
}



module.exports = Users