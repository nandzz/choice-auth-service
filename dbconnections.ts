import { Pool, Client } from 'pg'

class Database {

    public pool: Pool

    constructor() {
        this.start()
    }

    private start () {
        const pool = new Pool({
            user: process.env.DBUSERNAME,
            host: process.env.DBHOST,
            database: process.env.DBDATABASE,
            password: process.env.DBPASSWORD,
            port: process.env.DBPORT,
          })
          this.pool = pool

          pool.on('error', (err, client) => {
            console.error('Unexpected error on idle client', err)
            // process.exit(-1)
          })
          
    }
}

const DefaultDabase = new Database()

export { DefaultDabase }