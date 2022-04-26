const dotenv = require('dotenv')
const mongoose = require('mongoose')
const Express = require('express')

const app = Express()
dotenv.config({path: './config.env'})
const PORT = process.env.PORT
const LOCAL_DATABASE = process.env.LOCAL_DATABASE
const DATABASE = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
)

const checkLoginMiddleware = require('./middlewares/checkLogin')
const {
  errorLogger,
  errorResponse,
  invalidPathHandler,
} = require('./middlewares/errorMiddleware')
const postRouter = require('./routes/post')

mongoose
  .connect(DATABASE)
  .then(() => console.log(`db connected`))
  .catch(error => console.log(error))

app.use(Express.json())
app.use(Express.urlencoded({extended: false}))
app.use(checkLoginMiddleware)

app.use('/post', postRouter)
app.use(errorLogger)
app.use(errorResponse)
app.use(invalidPathHandler)

app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`)
})
