import express from 'express'
import cors from 'cors'


import './database/connection'

import router from './routes'

const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

export default app