

/**
 * User controller
 * Model will be here
 */

const User = require('../models/user');

const showCreateForm = (req, res) => {
    res.render('create');
}

const createUser = (req, res) => {
    const user = new User(req.body);

    user.save()
    .then((result) => {
        res.render('create', {
            success: true
        });
    })
    .catch((error) => {
        res.render('create', {
            success: false
        })
    })
}

const userList = (req, res) => {
    User.find()
    .then((result) => {
        res.render('read', {
            userList: result
        })
    })
    .catch((error) => {
        console.log(error);
    })
}

const userDelete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id)
    .then((result) => {
        res.json({
            redirect: '/user/list'
        })
    })
    .catch((error) => {
        console.log(error);
    })
}

const userEdit = (req, res) => {
    const id = req.params.id;

    User.findById(id)
    .then((result) => {
        res.render('update', {
            userData: result
        });
    })
    .catch((error) => {
        console.log(error);
    })
}

const userUpdate = (req, res) => {

    const myQuery       = {_id: req.body._id};
    const newValues     = {$set: req.body};
    
    
    User.updateOne(myQuery, newValues)
    .then((result) => {
        User.find()
        .then((r) => {
            res.render('read', {
                success: true,
                userList: r
            })
        })

    })
    .catch((error) => {
        res.render('read', {
            success: false
        })
    })
}

module.exports = {
    showCreateForm,
    createUser,
    userList,
    userDelete,
    userEdit,
    userUpdate
}