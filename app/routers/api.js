var User = require('../models/user');
var Contact = require('../models/contact');
var jwt = require('jsonwebtoken');
var secret= 'raheel';

module.exports = function(router){
 var currentUser = String;
 var contact = [];
 
router.post('/users',function(req,res){
    var user = new User();
    user.username =req.body.username;
    user.password= req.body.password;
    user.email=req.body.email;
     
      user.save()
        
    
   
});



router.post('/auth',function(req,res){
     
      User.findOne({username: req.body.username}).select(' email password username ').exec(function(err,user){
                    
                      if(err) throw err            
        if(!user){
            console.log("User not found")
            res.json({success:false, message: 'no user found'})  
             }  
        else if(user) {
         var correctPass= user.comparePassword(req.body.password)
            if(!correctPass){
                console.log("incorrect password ")
                res.json({success:false,message: 'incorrect password'})   
         }
            else{
                  
               var token= jwt.sign({username: user.username, email:user.email},secret,{expiresIn:'1h'})
          
              res.json({success:true , message: 'Authenticate successful', token: token})
        }  
     }   
 })
});


router.post('/save',function(req,res){
       var user = new User();
       //var contact= new Contact();
       Contact.contact=req.body.contact;
       Contact.number= req.body.number;
        user.save({contact:[contact]});
        
         
              

       
});
 
         
         
     
         
jwt.sign({
  data: 'foobar'
}, 'secret', { expiresIn: '1h' });
           
    
    /*
    contact.contact=req.body.contact;
    contact.number= req.body.number;
    */
     router.use(function(req,res,next){
    
    var token= req.body.token || req.body.query || req.headers['x-access-token'];
   
    if(token){
    jwt.verify(token,secret,function(err,decoded){
        if(err){
            res.json({success:false, message:'token not found'})
        }
        else{
            req.decoded = decoded;
            next();    
    }    
})


    }
    
    else{
        res.json({success:false, message: 'no token'})
    }
    
 
})



router.post('/current',function(req,res){
  res.send(req.decoded);

})






 return router;

}