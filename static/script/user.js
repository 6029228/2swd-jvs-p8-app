import { NOW, TIME } from "sequelize";

export class User {
    username;
    password;

    constructor(data = {}) {
        this.username = data.username;
        this.password = data.password;
        this.email = data.email;
        this.createdAt = TIME(NOW);
        
    }

    
}