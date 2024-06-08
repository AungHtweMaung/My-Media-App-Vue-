<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="row justify-content-center mt-2 ">
                        <button class="btn btn-sm mr-4" @click="home()">Home</button>
                        <button class="btn btn-sm mr-4" v-if="!tokenStatus" @click="login()">Login</button>
                        <button class="btn btn-sm mr-4" v-if="!tokenStatus" @click="register()">Register</button>
                        <button class="btn btn-sm" v-if="tokenStatus">Logout</button>
                    </div>
                </div>

                <div class="col-lg-7 my-5">
                    <div class="card shadow-sm p-3">
                        <div class="card-body">
                            <div>
                                <h2 class="mb-4 text-center">Register</h2>

                                <div v-if="error_message" class="alert alert-danger" role="alert">
                                    {{ error_message }}
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" v-model="userData.name" class="form-control" id="name"
                                        placeholder="Enter your Name">
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" v-model="userData.email" class="form-control" id="email"
                                        placeholder="Enter your email">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" v-model="userData.password" id="password"
                                        class="form-control" placeholder="Enter your password">

                                </div>
                                <div>
                                    <button type="button" @click="userRegister()" class="btn bg-dark">Register</button>
                                    <!-- <button class="btn " @click="check()">check</button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../js/register.js"></script>
