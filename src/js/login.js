import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "LoginPage",
    data() {
        return {
            userData: {
                email: "",
                password: "",
            },
            // tokenStatus: false, // token ရှိမှ login ဖြစ်မှန်းသိမှာမလို့
            loginErrStatus: false,
            error_message: "",
        };
    },

    computed: {
        ...mapGetters(["storageToken", "storageUserData"]),
    },

    methods: {
        // actions from vuex
        // this.$store.dispatch('setToken') အောက်ကလို မရေးရင် ခုလိုရေးရမှာ
        // vue x မှာရေးထားတဲ့ actions တွေကို ကြေညာလိုက်တဲ့သဘောပဲ
        // ...mapActions(["setToken", "setUserData"]),

        // check() {
        //     console.log(this.getToken);
        //     console.log(this.getUserData);
        // },

        check() {
            console.log(this.storageToken);

            // console.log(this.$store.getters.storageToken);
            // console.log(this.$store.getters.storageUserData);
        },

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

        // user login operation
        userLogin() {
            axios
                .post("http://127.0.0.1:8000/api/user/login", this.userData)
                .then((response) => {
                    // console.log(response);
                    if (response.data.token != null) {
                        // this.setToken(response.data.token);
                        this.loginErrStatus = false;
                        this.storeUserInfo(response);
                        this.home();

                    } else {
                        this.error_message = response.data.error_message;
                        this.loginErrStatus = true;
                        localStorage.removeItem("token");
                        // console.log(this.error_message);
                    }
                })
                .catch((err) => console.log(err));
        },

        storeUserInfo(response) {
            this.$store.dispatch("setToken", response.data.token);
            this.$store.dispatch("setUserData", response.data.user);
        },
    },
};
