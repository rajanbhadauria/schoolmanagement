var bcrypt = require('bcrypt');
var model = require('../models/adminModel');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var config = require('../config');
var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'postmaster@rudraweb.in', // generated ethereal user
        pass: '624341393073679c1f20136be0d1c773-21e977f8-8ab6bb5b' // generated ethereal password
    }
});

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    
    
    app.get('/verifyemail/:email', function(req, resp, next){
        model.Admin.findOne({ 'email': req.params.email }, function (err, admin) {
            if (err) return handleError(err);
            if(admin != null)
                resp.send(JSON.stringify(admin));
            else
                resp.send ( { admin: null});
          });
      
    });

    app.post('/saveuser', function(req, resp, next){
        let dpcy_password;
        post = req.body;
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(post.password, salt, function(err, hash) { 
                post.password = hash;  
                post.is_active = true;
                post.is_verified = false;    
                admin = new model.Admin(post);               
                admin.save().then(function(user){                    
                    bcrypt.hash(post.email, salt, function(err, token) {
                        verifyEmailcode = new model.VerifyCode({user_id: user._id, token: token});
                        verifyEmailcode.save();
                        link="http://"+req.get('host')+"/verify?id="+token;
                        var mailOptions = {
                            from: 'School Management System <info@rudraweb.in>', 
                            to: post.email,
                            subject: 'School Admin Verification Email', 
                            html : "Hello "+post.name+",<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
                        };
                        smtpTransport.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                return console.log(error);
                            }
                                            
                        });  
                          
                     });
                    resp.send(JSON.stringify({success: true}));
                }).catch(next);    
            });
           
        });    
            
    });

    app.post('/login', function(req, res, next){
        post = req.body;
        model.Admin.findOne({email: post.email}, function(err, user){
        if(err)
           return res.status('422').send({title: 'Unknown Error', error:{message: 'Unknown Error Occurred', errorObj: err}});
        if(!user)
            return res.status('401').send({title: 'Login Failed', error: {message: 'Invalid email Or Password'}});
        if(!bcrypt.compareSync(post.password, user.password))
           return  res.status('401').send({title: 'Login Failed', error: {message: 'Invalid email Or Password'}});
        
        if(!user.is_verified)
           return  res.status('401').send({title: 'Login Failed', error: {message: 'Your Email is not verified.'}});
        
        var token = jwt.sign({user: user}, config.getSecrectKey(), {expiresIn:1440 });

        res.status(200).send({
                    message: 'You are loged in successfully.',
                    token: token,
                    userId: user._id,
                    name: user.name,
                    session_id: post.session_id
                });

        }).catch(next);
       
    });

    app.get('/verify', function(req, resp, next){
        model.VerifyCode.findOne({'token': req.query.id}, function(error, user){
            if(error)
                return resp.status('422').send({title: error.code, error: {message: error.errmsg}} );
            if(!user)
            return resp.status('422').send({title: 'Token Not Found', error: {message: 'Token Not found or your email is already verified.'}} );
            model.Admin.findOne({'_id': user.user_id}, function(error, usr){
                usr.is_verified = true;
                usr.save();
            });
            user.remove();
            resp.send(JSON.stringify({success: true}));
        });
        
    });

 
    app.use(function (err, req, res, next) {
        res.status(422).send({title: err.code, error: {message: err.errmsg}});
      });
}