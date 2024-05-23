import { User } from "./models/user.js";

const User = await User1.findByPk(1);
export class Application {
    user = null;

    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            this.init();
        });
        console.log("Application created");
    }

    init() {
        this.updateHTML();
        document.querySelector("#main-header .login").addEventListener("click", (event) => {
            event.preventDefault();
            this.showLoginDialog();
        });

        document.querySelector("#main-header .logout").addEventListener("click", (event) => {
            event.preventDefault();
            this.showLogoutDialog();
        });

        document.querySelector("#main-header .register").addEventListener("click", (event) => {
            event.preventDefault();
            this.showRegisterDialog();
        });

        document.querySelector("#login-submit").addEventListener("click", (event) => {
            event.preventDefault();
            const username = document.querySelector("#login-username").value;
            const password = document.querySelector("#login-password").value;
            this.login(username, password);
            document.querySelector("#login-dialog").close();
        });

        document.querySelector("#logout-submit").addEventListener("click", (event) => {
            event.preventDefault();
            this.logout();
            document.querySelector("#logout-dialog").close();
        });

        document.querySelector("#register-submit").addEventListener("click", (event) => {
            event.preventDefault();
            const username = document.querySelector("#register-username").value;
            const email = document.querySelector("#register-email").value;
            const password = document.querySelector("#register-password").value;

            this.register(username, email, password);
            document.querySelector("#register-dialog").close();
        });

        console.log("Application intialized");
    }

    updateHTML() {
        if(this.user) {
            // Update links when user is logged in
            document.querySelector("#main-header .login").style.display = "none";
            document.querySelector("#main-header .logout").style.display = "inline";
            document.querySelector("#main-header .register").style.display = "none";
            document.querySelector("#main-header .profile").style.display = "inline";
        } else {
            // Update links when user is not logged in
            document.querySelector("#main-header .login").style.display = "inline";
            document.querySelector("#main-header .logout").style.display = "none";
            document.querySelector("#main-header .register").style.display =
                "inline";
            document.querySelector("#main-header .profile").style.display = "none";

        }
    }

    showLoginDialog() {
        const loginDialog = document.querySelector("#login-dialog");
        loginDialog.showModal();
    }

    showLogoutDialog() {
        const logoutDialog = document.querySelector("#logout-dialog");
        logoutDialog.showModal();
    }

    showRegisterDialog() {
        const registeDialog = document.querySelector("#register-dialog");
        registeDialog.showModal();
    }

    async register(username, email, password) {
        const user = await User.register(username, email, password);
        if(!user){
            alert('Register failed');
            return; // @TODO Show error message
        } 
        this.user = user;
        
        this.updateHTML();
    }

    async login(username, password) {
        const user = await User.login(username, password);
        if(!user){
            alert('Login failed');
            return; // @TODO Show error message
        } 
        this.user = user;
        
        this.updateHTML();
    }

    logout() {
        this.user = null;
        this.updateHTML();
    }
}
