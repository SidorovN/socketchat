class Users {
  constructor() {
    this.users = []
  }
  add(user) {
    this.users.push(user)
  }
  get(id) {
    return this.users.find(user=> user.id === id)
  }
  remove(id) {
    const user = this.get(id)

    if(user) {
      this.users.filter(user=>user.id == id)
    }
    return user
  }
  getUserByRoom(room) {
    return this.users.filter(user=>user.room == room)
  }
}

const users = new Users()

const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const m = (name, text, id) => ({ name, text, id })

io.on('connection',socket => {
  socket.on('userJoined', (data, cb) => {
    if (!data.name || !data.room) {
      return cb('Данные некорректны')
    }

    socket.join(data.room)
    users.remove(socket.id)
    
    users.add({
      id: socket.id,
      name: data.name,
      room: data.room
    })
    cb({ userId: socket.id })    
    socket.emit('newMessage', m('admin', `Добро пожаловать, ${data.name}.`))
    socket.broadcast
      .to(data.room)
      .emit('newMessage', m('admin', `Пользователь ${data.name} зашел.`))
  })
    socket.on('sendMessage',(data,callback)=> {
      const user = users.get(data.id)
      if (user) {
        io.to(user.room).emit('newMessage', m(user.name,data.text,data.id))
        callback()
      } 
    })
  console.log('Io connected')

})

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  server.listen(port, ()=> {
      consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  })
  
}
start()
