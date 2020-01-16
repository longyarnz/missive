export default class Store {
    constructor(email, password) {
        this.email = email;
        this.email = email;
        this.userIsSaved = false;
        this.addUser(email, password);
    }

    addUser(email, password) {
        let db = localStorage.MISSIVE_USERS;
        db = db ? JSON.parse(db) : [];
        db.push({ email, password });
        localStorage.MISSIVE_USERS = JSON.stringify(db);
        this.userIsSaved = true;
    }
    
    removeUser(email) {
        let db = localStorage.MISSIVE_USERS;
        db = db ? JSON.parse(db) : [];
        db.filter(e => e.email !== email);
        localStorage.MISSIVE_USERS = JSON.stringify(db);
    }
    
    static checkUser(email) {
        const db = localStorage.MISSIVE_USERS;
        return db ? db.includes(email) : false;
    }
    
    static logUser(email, password) {
        let db = localStorage.MISSIVE_USERS;
        db = db ? JSON.parse(db) : [];
        return db.some(e => e.email === email && e.password === password);
    }
}