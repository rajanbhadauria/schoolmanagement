var feeModel = require('../models/feeModel');
var bodyParser = require('body-parser');

module.exports = function(app)
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));  

    app.post('/save-fee-structure', function(req, res){
        var post = req.body;
        if(isNaN(post.item_amount))
            return res.status(422).send({title: 'Invalid Data', error: {message: 'Item Amount must be a vaild number.'}});
        data = {};
        data.item_name = post.item_name;
        data.item_amount = post.item_amount;
        
        if(post._id)
        {
            feeModel.feeStructure.findByIdAndUpdate(post._id, data,
                function(err, feeStrus){
            if(err)
                throw err;         
                return res.status(200).send(feeStrus);
            });
        }
        else
        {
            data.is_deleted = false;
            feeStr = new feeModel.feeStructure(data);
            feeStr.save().then(function(feeStrus){                
                return res.status(200).send(feeStrus);
            });
        }
    });

    // delete fee structure
    app.post('/delete-fee-structure', function(req, res){
        var post = req.body; 
        data  = {};      
        data.is_deleted = post.is_deleted;        
        feeModel.feeStructure.findByIdAndUpdate(post._id, data,
          function(err, feeStrus){
                if(err)
                    throw err;         
                    return res.status(200).send(feeStrus);
                });
    });


    app.get('/get-feestructures', function(req, res){        
        feeModel.feeStructure.find({is_deleted: false}, { }, { sort: { '_id' : -1 } })
        .select('_id item_name item_amount')
        .exec(function(err, feestr){
            if(err) throw err;
            return res.status(200).send(feestr);
        });        
    });
}

    