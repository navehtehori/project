//the name of the page should be 'sql_querys' instead createdb



//a crud function that insert user name and league name from the sign up form
const sql1 = require('./db');
const signUp = function (req,res){
    if(!req.body){
        res.status(400).send({
            message: "error"
        });
        return;
    }
    const newUser = {
        "UserName": req.body.login_txt,
        "League": req.body.league_txt
    };
    sql1.query("INSERT INTO Gambling SET ?", newUser, (err)=>{
        if(err){
            console.log("error: ", err);
            res.status(400).send({message: "error in adding user: " + err});
            return;
        }
        res.send("added");

    })

}
module.exports = {signUp};





//a function that insert into Gambling table the gimble of the user in the homes level
// const sql2 = require('./db');
// const addHomesGimble = function (req,res){
//     if(!req.body){
//         res.status(400).send({
//             message: "error"
//         });
//         return;
//     }
//     const HomeGimble = {
//         "home1place1": req.body.home1place1,
//         "home1place2": req.body.home1place2,
//         "home2place1": req.body.home2place1,
//         "home2place2": req.body.home2place2,
//         "home3place1": req.body.home3place1,
//         "home3place2": req.body.home3place2,
//         "home4place1": req.body.home4place1,
//         "home4place2": req.body.home4place2,
//         "home5place1": req.body.home5place1,
//         "home5place2": req.body.home5place2,
//         "home6place1": req.body.home6place1,
//         "home6place2": req.body.home6place2,
//         "home7place1": req.body.home7place1,
//         "home7place2": req.body.home7place2,
//         "home8place1": req.body.home8place1,
//         "home8place2": req.body.home8place2
//     };
//     sql2.query("INSERT INTO Gambling SET ?", HomeGimble, (err)=>{
//         if(err){
//             console.log("error: ", err);
//             res.status(400).send({message: "error in adding user: " + err});
//             return;
//         }
//         res.send("added");

//     })

// }
// module.exports = {addHomesGimble};








//a function that insert into Gambling table the gimble of the user in the knockout level
// const sql2 = require('./db');
// const addknockoutGimble = function (req,res){
//     if(!req.body){
//         res.status(400).send({
//             message: "error"
//         });
//         return;
//     }
//     const knockoutGimble = {
//         "knockout1": req.body.knockout1,
//         "knockout2": req.body.knockout2,
//         "knockout3": req.body.knockout3,
//         "knockout4": req.body.knockout4,
//         "knockout5": req.body.knockout5,
//         "knockout6": req.body.knockout6,
//         "knockout7": req.body.knockout7,
//         "knockout8": req.body.knockout8
//     };
//     sql2.query("INSERT INTO Gambling SET ?", knockoutGimble, (err)=>{
//         if(err){
//             console.log("error: ", err);
//             res.status(400).send({message: "error in adding user: " + err});
//             return;
//         }
//         res.send("added");

//     })

// }
// module.exports = {addknockoutGimble};





//a function that insert into Gambling table the gimble of the user in the quatrer final level
// const sql2 = require('./db');
// const addquatrerGimble = function (req,res){
//     if(!req.body){
//         res.status(400).send({
//             message: "error"
//         });
//         return;
//     }
//     const quatrerGimble = {
//         "quatrer1": req.body.quatrer1,
//         "quatrer2": req.body.quatrer2,
//         "quatrer3": req.body.quatrer3,
//         "quatrer4": req.body.quatrer4
//     };
//     sql2.query("INSERT INTO Gambling SET ?", quatrerGimble, (err)=>{
//         if(err){
//             console.log("error: ", err);
//             res.status(400).send({message: "error in adding user: " + err});
//             return;
//         }
//         res.send("added");
//     })
// }
// module.exports = {addquatrerGimble};




//a function that insert into Gambling table the gimble of the user in the semi final level
// const sql2 = require('./db');
// const addsemiGimble = function (req,res){
//     if(!req.body){
//         res.status(400).send({
//             message: "error"
//         });
//         return;
//     }
//     const semiGimble = {
//         "semi1": req.body.semi1,
//         "semi2": req.body.semi2
//     };
//     sql2.query("INSERT INTO Gambling SET ?", semiGimble, (err)=>{
//         if(err){
//             console.log("error: ", err);
//             res.status(400).send({message: "error in adding user: " + err});
//             return;
//         }
//         res.send("added");
//     })
// }
// module.exports = {addsemiGimble};




//a function that insert into Gambling table the gimble of the user in the final level
// const sql2 = require('./db');
// const addfinalGimble = function (req,res){
//     if(!req.body){
//         res.status(400).send({
//             message: "error"
//         });
//         return;
//     }
//     const finalGimble = {
//         "final": req.body.final
//     };
//     sql2.query("INSERT INTO Gambling SET ?", finalGimble, (err)=>{
//         if(err){
//             console.log("error: ", err);
//             res.status(400).send({message: "error in adding user: " + err});
//             return;
//         }
//         res.send("added");
//     })
// }
// module.exports = {addfinalGimble};




//the following querys are adding points to the totalpoints of the user if the gimble of all stage are equal to the realresault of this stage
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home1place1 = realresult.home1place1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home1place2 = realresult.home1place2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home2place1 = realresult.home2place1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home2place2 = realresult.home2place2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home3place1 = realresult.home3place1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home3place2 = realresult.home3place2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home4place1 = realresult.home4place1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home4place2 = realresult.home4place2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home5place1 = realresult.home5place1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home5place2 = realresult.home5place2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home6place1 = realresult.home6place1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home6place2 = realresult.home6place2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home7place1 = realresult.home7place1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home7place2 = realresult.home7place2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home8place1 = realresult.home8place1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.home8place2 = realresult.home8place2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.knockout1 = realresult.knockout1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.knockout2 = realresult.knockout2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.knockout3 = realresult.knockout3)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.knockout4 = realresult.knockout4)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.knockout5 = realresult.knockout5)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.knockout6 = realresult.knockout6)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.knockout7 = realresult.knockout7)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.knockout8 = realresult.knockout8)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.quatrer1 = realresult.quatrer1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.quatrer2 = realresult.quatrer2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.quatrer3 = realresult.quatrer3)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.quatrer4 = realresult.quatrer4)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.semi1 = realresult.semi1)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.semi2 = realresult.semi2)";
// var query = "UPDATE Gambling SET totalpoints = totalpoints + 1 WHERE EXISTS (SELECT * FROM gambling WHERE gambling.final = realresult.final)";
// connection.query(query, function(error, results, fields) {
//     if (error) throw error;
//     console.log('Query executed successfully');
//   });
  
//      connection.end();