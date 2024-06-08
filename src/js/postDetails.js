import axios from "axios";
import { mapState } from "vuex";

export default {
    name: "PostDetails",

    data() {
        return {
            post: {},
            viewCount: "",
            publicPath: process.env.BASE_URL,
            postCommentText: "",
            comments: {},
            // commentMaxLength: 100
        };
    },

    computed: {
        ...mapState(["userData"]),
    },

    methods: {
        // comment
        comment() {
            // console.log("click");
            if (this.postCommentText.trim() != "") {
                let comment = {
                    user_id: this.userData.id,
                    post_id: this.$route.params.postId,
                    post_comment: this.postCommentText,
                };
                axios
                    .post("http://127.0.0.1:8000/api/comment/create", comment).then(response => {
                        console.log(response.data.comment);
                        this.postCommentText = "";
                        window.location.reload();
                    });

            }

        },

        // retrieve all comments
        getComments() {
            let post = {
                postId: this.$route.params.postId,
            };
            axios.post("http://127.0.0.1:8000/api/comments", post)
                .then(response => {
                    this.comments = response.data.comments;
                });
        },
        
        

        showPostDetails() {
            let post = {
                postId: this.$route.params.postId,
            };

            axios
                .post("http://127.0.0.1:8000/api/post/details", post)
                .then((response) => {
                    // console.log(response.data.post);
                    if (response.data.post.image != null) {
                        // db image
                        let image =
                            "http://127.0.0.1:8000/storage/postImage/" +
                            response.data.post.image;

                        response.data.post.image = image;
                    } else {
                        // default image, if there is no post image
                        response.data.post.image =
                            "http://127.0.0.1:8000/storage/default-image/defaultImage.png";
                    }

                    this.post = response.data.post;
                })
                .catch((err) => console.log(err));
        },

        viewCountLoad() {
            let data = {
                postId: this.$route.params.postId,
                userId: this.userData.id,
            };
            axios
                .post("http://127.0.0.1:8000/api/post/viewCount", data)
                .then((response) => {
                    this.viewCount = response.data.post.length;
                    // console.log(viewCount);
                });
        },

        back() {
            // history.back();
            this.$router.push({ name: "home" });
        },
    },

    mounted() {
        this.showPostDetails();
        this.viewCountLoad();
        this.getComments();
        // this.postId = this.$route.params.postId;

        // console.log(this.postId);
    },

    beforeMount() {
        this.getComments();
    },
};
