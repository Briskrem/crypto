const app = require('./app')

const server = app.listen(3002, ()=>{
    console.log('connected on port 3002')
})

module.exports = server