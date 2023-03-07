const {getRows} = require('../database/query');

exports.authLogin = async (username,password) => {
 //   if(username=="bdpamked" && password == "U;qibKs[2KC607"){
    console.log("token1", username, " ", password)
    global.studentuser = username
    process.env.DB_PASSWORD=password
return [{user:username},{password:password}];
//}
}

