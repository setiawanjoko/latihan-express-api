import Client from 'pg/lib/client';

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'semangat45.',
    database: 'company'
})

export default client;