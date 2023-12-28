import {app} from './app'


app.listen({
    host:'0.0.0.0',
    port:3333
}).then((address) => {
    console.log(`HTTP Server is Running on ${address} 🚀`)
}) 