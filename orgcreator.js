const org = require('./orgmodal')

var organisation = new org({
    name:'test1'
})

organisation.save().then((data)=>console.log(data))