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
    cb({ userId: socket.id })
    socket.emit('newMessage', m('admin', `Добро пожаловать, ${data.name}.`))
    socket.broadcast
      .to(data.room)
      .emit('newMessage', m('admin', `Пользователь ${data.name} зашел.`))
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
