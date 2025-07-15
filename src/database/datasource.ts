import { User } from "src/user/entities/user.entity";
import { DataSource } from "typeorm";
import { Init1750725458642 } from "./migrations/1750725458642-init";
import { Init1752115550924 } from "./migrations/1752115550924-init";
import { Init1752345232784 } from "./migrations/1752345232784-init";
import { Init1752345431467 } from "./migrations/1752345431467-init";
import { Init21752345749837 } from "./migrations/1752345749837-init2";
import { OpinionEntity } from "src/opinion/entities/opinion.entity";
import { Init21752391486475 } from "./migrations/1752391486475-init2";
import { TokenEntity } from "src/user/entities/token.entity";
import { Init21752621183156 } from "./migrations/1752621183156-init2";



export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "123456",
    database: "event-db",
    entities:[
        User,
        OpinionEntity,
        TokenEntity
    ],
    migrations:[Init21752621183156]
})