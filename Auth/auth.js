var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
const user = require('../Model/uesr')
const worker = require('../Model/worker')

module.exports = function(passport) {
   
    passport.use(
        new JwtStrategy(
            {
                secretOrKey: "test 1234",
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
                
            },
            function(jwt_payload, done) {
                console.log(jwt_payload)
                adminModel.findOne({_id:jwt_payload.userId},function(err,user){
                     if(err){
                        return done(null,false)
                     }
                     if(user){
                        return done(null,user)
                     }
                     else{
                        return done(null,false)
                     }
                })
                   
            }
        )   
    )    
}