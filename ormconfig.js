module.exports = {
    "url": process.env.DATABASE_URL,
    "type": "postgres",
    "entities": [
       "./dist/models/*.js"
    ],
    "migrations": [
       "./dist/database/migrations/*.js"
    ],
    "name": "default",
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