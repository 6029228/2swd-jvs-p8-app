//import { User } from "./user.js";
import { User as User1} from "../../app/models/user.js";


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
            this.login("admin", "admin");
            //, "test@outlook.com"
        });

        document.querySelector("#main-header .logout").addEventListener("click", (event) => {
            event.preventDefault();
            this.logout();
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
    // email
    login(username, password,) {
        this.user = new User({
            username: username,
            password: password,
            // email: email,
        });

        this.updateHTML();
    }

    logout() {
        this.user = null;
        this.updateHTML();
    }
}
