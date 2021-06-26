import { createConnection, Connection } from 'typeorm';

class TypeORMConnection {
    async connection() {
        return await (await createConnection())
            .createQueryBuilder()
            .softDelete();
    }
}

const conect = new TypeORMConnection().connection();
