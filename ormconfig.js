console.log('process.env.DATABASE_URL = ', process.env.DATABASE_URL)
module.exports = {
    "url": process.env.DATABASE_URL,
    "type": "postgres",
    "entities": [
       "./dist/models/*.js"
    ],
    "migrations": [
       "./dist/database/migrations/*.js"
    ],
    "ssl": true,
    "extra": {
    "ssl": {
    "rejectUnauthorized": false
      }
    },
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
 }