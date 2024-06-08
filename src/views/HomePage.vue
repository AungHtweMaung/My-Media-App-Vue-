<template>
    <!-- Whats New Start -->
    <section class="whats-news-area pt-50 pb-20">



        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="row justify-content-end mt-2 mb-5">
                        <button class="btn btn-sm mr-4" @click="home()">Home</button>
                        <button class="btn btn-sm mr-4" v-if="!isLoggedIn" @click="login()">Login</button>
                        <button class="btn btn-sm mr-4" v-if="!isLoggedIn" @click="register()">Register</button>
                        <button class="btn btn-sm" v-if="isLoggedIn" @click="logout()">Logout</button>
                    </div>



                    <div class="row d-flex justify-content-between">
                        <div class="col-lg-3 col-md-3">
                            <div class="section-tittle mb-30">
                                <h3>Whats New </h3>
                                <!-- <h2 v-if="userData">{{ userData.name }}</h2> -->
                                <div v-if="userData">
                                    <h1>{{ userData.name }}</h1>
                                    <h1>{{ userData.email }}</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9">
                            <div class="properties__button">
                                <!--Nav Button  -->
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a @click="searchCategory('')" class="nav-item nav-link active"
                                            id="nav-home-tab" data-toggle="tab" role="tab" aria-controls="nav-home"
                                            aria-selected="true">All</a>
                                        <a v-for="(item, index) in categoryList" v-bind:key="index"
                                            @click="searchCategory(item.title)" class="nav-item nav-link"
                                            id="nav-profile-tab" data-toggle="tab" href="" role="tab"
                                            aria-controls="nav-profile" aria-selected="false">{{ item.title }}</a>

                                    </div>
                                </nav>
                                <!--End Nav Button  -->
                            </div>
                        </div>
                    </div>
                    <h1 v-if="!isLoggedIn">You don't have permission to see.</h1>
                    <div v-if="isLoggedIn">
                        <div class="row align-items-center justify-content-end mb-3">
                            <input type="text" class="form-control col-3" v-on:keyup.enter="searchPost()"
                                v-model="searchKey">
                            <i class="fas fa-search ml-3" v-on:click="searchPost()" style="font-size: 23px;"></i>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <!-- Nav Card -->
                                <div class="tab-content" id="nav-tabContent">
                                    <!-- card one -->
                                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                        aria-labelledby="nav-home-tab">
                                        <div class="whats-news-caption">
                                            <div class="row justify-content-start">
                                                <div class="col-12 d-flex justify-content-center align-items-center"
                                                    style="height: 500px;" v-if="postList.length < 1">
                                                    <h1 class="text-danger border border-5 border-dark p-3">There is no
                                                        post
                                                    </h1>
                                                </div>

                                                <div v-else v-for="(post, index) in postList" :key="index"
                                                    class="col-lg-4 col-md-6">
                                                    <div class="single-what-news mb-100" @click="postDetails(post.id)">
                                                        <div class="what-img">
                                                            <img :src="post.image" alt="" />
                                                        </div>
                                                        <div class="">
                                                            <span class="color1">{{ post.title }}</span>
                                                            <h4>
                                                                <p>{{ post.description }} ...</p>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- End Nav Card -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Whats New End -->

    <!--Start pagination -->
    <!-- <div class="pagination-area pb-45 text-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="single-wrap d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start">
                                <li class="page-item">
                                    <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span></a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" href="details.html">01</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html">02</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html">03</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html"><span
                                            class="flaticon-arrow right-arrow"></span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- End pagination  -->
</template>


<script src="../js/homePage.js"></script>
