<template>
    <div class="section">
        <div class="container">
            <div class="section-title">My <span class="text-orange">Resume</span></div>
            <div class="section-body">

                <div class="row">
                    <div class="col">
                        <div class="floating-card text-left">
                            <h4 class="text-orange font-weight-bold pb-2">Work</h4>
                            <div class="row">
                                <div class="col"><h5 class="font-weight-bold">Microchip Technology</h5></div>
                                <div class="col"><img style="height: 50px; width: 50px; margin-bottom: -30px;"
                                                      src="../assets/img/microchip_round_logo.png" alt=""></div>
                            </div>

                            <h6 class="font-italic font-weight-light">2017 - 2019</h6>
                            <h6 class="font-weight-semi-bold">Principal Software Engineer</h6>
                            <p>Designed all UI/UX for ecommerce site microchipdirect.com. Architected front end stack.
                                The
                                stack I used for this project is Vue.JS with Bootstrap 4 / Vue-Bootstrap. We used Vuex
                                for
                                state management, Axios for async calls and webpack for build automation. I used
                                FontAwesome
                                Pro for iconography and Greensock for .svg animations (which can be seen in the
                                navigation
                                menu). I chose git for version control and Azure for our CI/CD.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="floating-card text-left">
                            <h4 class="text-orange font-weight-bold pb-2">Education</h4>
                            <div class="row">
                                <div class="col"><h5 class="font-weight-bold">Florida State University</h5></div>
                                <div class="col"><img style="height: 50px; width: 50px; margin-bottom: -30px;"
                                                      src="../assets/img/FSU.png" alt=""></div>
                            </div>

                            <h6 class="font-italic font-weight-light">1993 - 1997</h6>
                            <h6 class="font-weight-semi-bold">Bachelors of Science</h6>
                            <p>Graduated with a computer science degree and was a regular Dean's List student</p>
                        </div>
                        <div class="floating-card text-left mt-3">
                            <h4 class="text-orange font-weight-bold pb-2">Accomplishments</h4>
                            <div class="row">
                                <div class="col"><h5 class="font-weight-bold">Phoenix Javascript Meetup</h5></div>
                                <div class="col"><img style="height: 50px; width: 50px; margin-bottom: -30px;"
                                                      src="../assets/img/Jkv-t1TZ_400x400.png" alt=""></div>
                            </div>

                            <h6 class="font-italic font-weight-light">2016</h6>
                            <h6 class="font-weight-semi-bold">Winner of JSVillage best web app competition</h6>
                            <p>created the UI for Neighborhood Intelligence, the winning App that finished 3rd in the state to the group
                                that won worlds in Spain.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <div class="btn-orange text-center mt-5">
                            <a href="https://www.dropbox.com/s/k59a3alaxorkvm4/Ari%20Pace%20Web%20Developer%20Resume.docx?dl=0">View
                                Complete Resume</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Resume"
    }
</script>

<style scoped lang="scss">
    a {
        color: white;

        &:hover {
            color: white;
            text-decoration: none;
        }
    }

    .section {
        background-color: #f3f3f3;
    }
</style>
