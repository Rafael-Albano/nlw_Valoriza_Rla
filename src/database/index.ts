import { createConnection, Connection } from 'typeorm';

class TypeORMConnection {
    async connection() {
        return await createConnection();
    }
}

const conect = new TypeORMConnection().connection();
