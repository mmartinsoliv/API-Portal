import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const port = 3333

app.listen(port, () => console.log('Server is running'))