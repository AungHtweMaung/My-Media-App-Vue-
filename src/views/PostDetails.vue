<template>
    <div>
        <main>
            <!-- About US Start -->
            <div class="about-area">
                <div class="container">
                    <!-- Hot Aimated News Tittle-->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="trending-tittle">
                                <strong>Trending now</strong>
                                <!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                                <div class="trending-animated">
                                    <ul id="js-news" class="js-hidden">
                                        <li class="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.
                                        </li>
                                        <li class="news-item">Spondon IT sit amet, consectetur.......</li>
                                        <li class="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <!-- Trending Tittle -->
                            <div class="about-right mb-90">
                                <div class="about-img">
                                    <img :src="post.image" alt="">
                                </div>
                                <div class="section-tittle mb-30 pt-30">
                                    <h3>{{ post.title }}</h3>
                                </div>
                                <div>
                                    <p>{{ post.description }}</p>
                                </div>
                                <!-- <div class="social-share pt-30">
                                    <div class="section-tittle">
                                        <h3 class="mr-20">Share:</h3>
                                        <ul>
                                            <li><a href="#"><img src="../../public/assets/img/news/icon-ins.png" alt=""></a>
                                            </li>
                                            <li><a href="#"><img src="../../public/assets/img/news/icon-fb.png" alt=""></a>
                                            </li>
                                            <li><a href="#"><img src="../../public/assets/img/news/icon-tw.png" alt=""></a>
                                            </li>
                                            <li><a href="#"><img src="../../public/assets/img/news/icon-yo.png" alt=""></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> -->
                            </div>
                            <!-- From -->
                            <div class="row">
                                <div class="col-lg-8">

                                    <span>
                                        <i class="fa fa-eye"></i>
                                        {{ viewCount }}
                                    </span>

                                    <div class="form-group mt-3">
                                        <button @click="back()" type="button"
                                            class="button button-contactForm boxed-btn">Back</button>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 my-3">
                                    <div v-if="comments.length > 0 ">
                                        <div v-for="(comment, index) in comments" :key="index">

                                            <div class="d-flex my-3">
                                                <img style="width: 50px; height: 50px;"
                                                    src="../../public/default-photo/default_user.png" alt="">
                                                <div class="ml-3">
                                                    <h3>{{ userData.name }}</h3>
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <p my="3">{{ comment.description }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8 my-3">
                                    <!-- we don't want reloading when form submitting -->
                                    <form v-on:submit.prevent="comment()">
                                        <div class="d-flex align-items-center">
                                            <img style="width: 50px; height: 50px;"
                                                src="../../public/default-photo/default_user.png" alt="">
                                            <h3 class="ml-3">{{ userData.name }}</h3>
                                        </div>

                                        <div class="my-3">
                                            <textarea v-model="postCommentText" v-on:keyup.enter="comment"
                                                class="form-control" :max-length="100"
                                                placeholder="Comments...."></textarea>
                                            <!-- Because of using submit event, btn type will be submit -->
                                            <button type="submit" class="btn btn-danger mt-3">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <!-- Section Tittle -->
                            <div class="section-tittle mb-40">
                                <h3>Follow Us</h3>
                            </div>
                            <!-- Flow Socail -->
                            <div class="single-follow mb-45">
                                <div class="single-box">
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="../../public/assets/img/news/icon-fb.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="../../public/assets/img/news/icon-tw.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="../../public/assets/img/news/icon-ins.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="../../public/assets/img/news/icon-yo.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- New Poster -->
                            <div class="news-poster d-none d-lg-block">
                                <img src="../../public/assets/img/news/news_card.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- About US End -->
        </main>
    </div>
</template>

<script src="../js/postDetails.js"></script>
