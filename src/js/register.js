import axios from "axios";
import { mapGetters } from "vuex";

export default {
    name: "RegisterPage",
    data() {
        return {
            userData: {
                name: "",
                email: "",
                password: "",
            },

            error_message: "",
        };
    },

    computed: {
        ...mapGetters(["storageToken"]),
    },

    methods: {
        home() {
            this.$router.push({ name: "home" });
        },

        // direct login page
        login() {
            this.$router.push({ name: "login" });
        },

        // direct register page
        register() {
            this.$router.push({ name: "register" });
        },

        userRegister() {
            axios
                .post("http://127.0.0.1:8000/api/user/register", this.userData)
                .then((response) => {
                    if (response.data.token != null) {
                        // console.log("token exists");
                        // store user info into vuex state
                        this.storeUserInfo(response);
                        this.home();
                    } else {
                        this.error_message = response.data.error_message;
                        console.log(this.error_message);
                    }
                });
        },

        storeUserInfo(response) {
            this.$store.dispatch("setUserData", response.data.user);
            this.$store.dispatch("setToken", response.data.token);
        },
    },
};
