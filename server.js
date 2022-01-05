const express = require('express')
const app = express()

const routesReport = require('rowdy-logger').begin(app)

app.use(require('morgan')('tiny'))
app.use(require('cors')())
app.use(express.json())

const userRoutes= require('./routes/userRoutes')
app.use('/users', userRoutes)

const eventRoutes= require('./routes/eventRoutes')
app.use('/events', eventRoutes)

const PORT = process.env.PORT ||3001

app.listen(PORT, () => {
        console.log(`server listening on${PORT}`)
        // routesReport.print()
})