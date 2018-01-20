'use strict'

var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Comment = require('./model/comments')
var Item = require('./model/items')
var User = require('./model/users')


var app = express()
var router = express.Router()

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://cbarter:CampusBarterBois321!@ds155091.mlab.com:55091/mydb');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//adding the /comments route to our /api router
router.route('/comments')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Comment.find(function(err, comments) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(comments)
    });
  })
  //post new comment to the database
  .post(function(req, res) {
    var comment = new Comment();
    //body parser lets us use the req.body
    comment.text = req.body.text;
    comment.idNum = req.body.idNum;
    comment.status = req.body.status;
    comment.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Comment successfully added!' });
    });
  });

  router.route('/items')
    //retrieve all comments from the database
    .get(function(req, res) {
      //looks at our Comment Schema
      Item.find(function(err, items) {
        if (err)
          res.send(err);
        //responds with a json object of our database comments.
        res.json(items)
      });
    })
    //post new comment to the database
    .post(function(req, res) {
      var item = new Item();
      //body parser lets us use the req.body
      item.name = req.body.name;
      item.owner = req.body.owner;
      item.sold = req.body.sold;
      item.desc = req.body.desc;
      item.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'Item successfully added!' });
      });
    });

    router.route('/users')
      //retrieve all comments from the database
      .get(function(req, res) {
        //looks at our Comment Schema
        User.find(function(err, items) {
          if (err)
            res.send(err);
          //responds with a json object of our database comments.
          res.json(items)
        });
      })
      //post new comment to the database
      .post(function(req, res) {
        var user = new User();
        //body parser lets us use the req.body
        user.name = req.body.name;
        item.messages = req.body.messages;
        item.save(function(err) {
          if (err)
            res.send(err);
          res.json({ message: 'User successfully added!' });
        });
      });

  //Adding a route to a specific comment based on the database ID
  router.route('/comments/:comment_id')
  //The put method gives us the chance to update our comment based on the ID passed to the route
   .put(function(req, res) {
     Comment.findById(req.params.comment_id, function(err, comment) {
       if (err)
         res.send(err);
       //setting the new author and text to whatever was changed. If nothing was changed
       // we will not alter the field.
       (req.body.text) ? comment.text = req.body.text : null;
       (req.body.idNum) ? comment.idNum = req.body.idNum : null;
       (req.body.status) ? comment.status = req.body.status : null;

       //save comment
       comment.save(function(err) {
         if (err)
           res.send(err);
         res.json({ message: 'Comment has been updated' });
       });
     });
   })
   //delete method for removing a comment from our database
   .delete(function(req, res) {
     //selects the comment by its ID, then removes it.
     Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
       if (err)
         res.send(err);
       res.json({ message: 'Comment has been deleted' })
     })
   });

   router.route('/items/:item_id')
   //The put method gives us the chance to update our comment based on the ID passed to the route
    .put(function(req, res) {
        Item.findById(req.params.item_id, function(err, item) {
        if (err)
          res.send(err);
        //setting the new author and text to whatever was changed. If nothing was changed
        // we will not alter the field.
        (req.body.name) ? item.name = req.body.name : null;
        (req.body.owner) ? item.owner = req.body.owner : null;
        (req.body.sold) ? item.sold = req.body.sold : null;
        (req.body.desc) ? item.desc = req.body.desc : null;

        //save comment
        item.save(function(err) {
          if (err)
            res.send(err);
          res.json({ message: 'Item has been updated' });
        });
      });
    })
    //delete method for removing a comment from our database
    .delete(function(req, res) {
      //selects the comment by its ID, then removes it.
      Item.remove({ _id: req.params.item_id }, function(err, item) {
        if (err)
          res.send(err);
        res.json({ message: 'Item has been deleted' })
      })
    });

    router.route('/users/:user_id')
    //The put method gives us the chance to update our comment based on the ID passed to the route
     .put(function(req, res) {
         User.findById(req.params.user_id, function(err, user) {
         if (err)
           res.send(err);
         //setting the new author and text to whatever was changed. If nothing was changed
         // we will not alter the field.
         (req.body.name) ? user.name = req.body.name : null;
         (req.body.messages) ? user.messages = req.body.messages : null;

         //save comment
         user.save(function(err) {
           if (err)
             res.send(err);
           res.json({ message: 'User has been updated' });
         });
       });
     })
     //delete method for removing a comment from our database
     .delete(function(req, res) {
       //selects the comment by its ID, then removes it.
       User.remove({ _id: req.params.user_id }, function(err, user) {
         if (err)
           res.send(err);
         res.json({ message: 'User has been deleted' })
       })
     });
//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
