import axios from "axios";
import { mapActions } from "vuex/dist/vuex.cjs.js";
// import LoginView from "../views/LoginPage.vue";

export default {
    name: "HomePage",
    // components: {LoginView},
    data() {
        return {
            postList: [],
            categoryList: [],
            searchKey: "",
            userData: {},
            // tokenStatus: false,
        };
    },

    computed: {
        getstorageToken() {
            return this.$store.getters.storageToken;
        },

        isLoggedIn() {
            return localStorage.getItem('token') !== null;
        },

        // ...mapActions(['LOGOUT'])


    },

    methods: {    
        getUserData() {
            // this.userData = JSON.parse(localStorage.getItem("userInfo"));
            this.userData = JSON.parse(localStorage.getItem("userInfo"));

            
        },

        // localhost:8000 directs public dir from laravel
        getPostList() {
            axios.get("http://127.0.0.1:8000/api/posts").then((response) => {
                // taking actual image in the database from laravel api
                for (let i = 0; i < response.data.posts.length; i++) {
                    // console.log(response.data.post[i].description);
                    if (response.data.posts[i].image != null) {
                        // db image
                        let image =
                            "http://127.0.0.1:8000/storage/postImage/" +
                            response.data.posts[i].image;

                        response.data.posts[i].image = image;
                    } else {
                        // default image, if there is no post image
                        response.data.posts[i].image =
                            "http://127.0.0.1:8000/storage/default-image/defaultImage.png";
                    }
                }

                this.postList = response.data.posts;
                // for slicing description on home page
                this.descriptionSlice();
            });
        },

        getCategoryList() {
            axios
                .get("http://127.0.0.1:8000/api/categories")
                .then((response) => {
                    this.categoryList = response.data.categories;
                });
        },

        searchPost() {
            let searchData = { key: this.searchKey };

            axios
                .post("http://127.0.0.1:8000/api/search/post", searchData)
                .then((response) => {
                    for (let i = 0; i < response.data.posts.length; i++) {
                        if (response.data.posts[i].image != null) {
                            // db image
                            let image =
                                "http://127.0.0.1:8000/storage/postImage/" +
                                response.data.posts[i].image;

                            response.data.posts[i].image = image;
                        } else {
                            // default image, if there is no post image
                            response.data.posts[i].image =
                                "http://127.0.0.1:8000/storage/default-image/defaultImage.png";
                        }
                    }

                    this.postList = response.data.posts;
                    this.descriptionSlice();
                });
        },

        // filter with category
        searchCategory(searchKey) {
            let search = { key: searchKey };

            axios
                .post("http://127.0.0.1:8000/api/search/category", search)
                .then((response) => {
                    for (let i = 0; i < response.data.posts.length; i++) {
                        if (response.data.posts[i].image != null) {
                            // db image
                            let image =
                                "http://127.0.0.1:8000/storage/postImage/" +
                                response.data.posts[i].image;

                            response.data.posts[i].image = image;
                        } else {
                            // default image, if there is no post image
                            response.data.posts[i].image =
                                "http://127.0.0.1:8000/storage/default-image/defaultImage.png";
                        }
                    }

                    this.postList = response.data.posts;
                    this.descriptionSlice();
                })
                .catch((error) => console.log(error));

            // console.log(search);
        },

        // for slicing description we need
        descriptionSlice() {
            for (let i = 0; i < this.postList.length; i++) {
                let description_slice = this.postList[i].description.slice(1,200);
                this.postList[i].description = description_slice;
            }
        },

        // post details
        postDetails(id) {
            this.$router.push({
                name: "postDetails",
                params: {
                    postId: id,
                },
            });
        },

        home() {
            this.$router.push({ name: "home" });
        },
        login() {
            this.$router.push({ name: "login" });
        },

        register() {
            this.$router.push({ name: "register" });
        },

        logout() {
            this.$store.dispatch("logout");
            this.login();
        },

        // checkToeknExist() {
        //     if (this.getstorageToken != null && this.getstorageToken != "") {
        //         this.tokenStatus = true;
        //         // console.log("token exists", this.getstorageToken);
        //     } else {
        //         this.tokenStatus = false;
        //         // console.log("token doesn't exist");
        //     }
        // },
    },

    mounted() {
        // this.checkToeknExist();
        // this.getUserInfo;
        this.getUserData();
        this.getPostList();
        this.getCategoryList();
        
    },
};
