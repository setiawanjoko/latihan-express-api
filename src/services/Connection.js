import pg from 'pg';
import config from '../commons/config.js';

const { Client } = pg
const client = new Client({
    host: config.postgresql.host,
    user: config.postgresql.user,
    port: config.postgresql.port,
    password: config.postgresql.pass,
    database: config.postgresql.db
})

export default client;