import dotenv from "dotenv"

dotenv.config()

export default {
    app: {
        host: process.env.APP_HOST || 'localhost',
        port: process.env.APP_PORT || 3000
    },
    postgresql: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || 'postgres',
        pass: process.env.DB_PASS || 'postgres',
        db: process.env.DB_NAME || 'company'
    }
}