<template>
    <div class="section container">
        <div class="section-title">Contact <span class="text-orange">Me</span></div>

        <div class="row">
            <!--left side-->
            <div class="col">
                <div class="floating-card">
                    <div class="row mb-3">
                        <div class="col"><input class="form-control" type="text" placeholder="name"></div>
                        <div class="col"><input class="form-control" type="email" placeholder="email"></div>
                    </div>
                    <div class="row my-3">
                        <div class="col"><input class="form-control" type="text" placeholder="phone"></div>
                        <div class="col"><input class="form-control" type="text" placeholder="website"></div>
                    </div>
                    <div class="row my-3">
                        <div class="col">
                            <textarea class="form-control" name="message" id="contact-message" cols="30" rows="10" placeholder="Your Message"></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <div class="btn-orange">Send Message</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--right side-->
            <div class="col">
                <div class="floating-card mb-4">
                    <div class="row">
                        <div class="col-3 contact-info">
                            <i class="fal fa-map-marker-alt"></i>
                        </div>
                        <div class="col-9 text-left">
                            <h5 class="font-weight-bold">Location:</h5>
                            <p>Chandler, AZ 85286<br>United States of America</p>
                        </div>
                    </div>
                </div>

                <div class="floating-card mb-4">
                    <div class="row">
                        <div class="col-3 contact-info">
                            <i class="fal fa-envelope"></i>
                        </div>
                        <div class="col-9 text-left">
                            <h5 class="font-weight-bold">Email:</h5>
                            <p><a href="mailto:adpace@hotmail.com">adpace@hotmail.com</a></p>
                        </div>
                    </div>
                </div>

                <div class="floating-card mb-4">
                    <div class="row">
                        <div class="col-3 contact-info">
                            <i class="fal fa-phone-alt"></i>
                        </div>
                        <div class="col-9 text-left">
                            <h5 class="font-weight-bold">Phone:</h5>
                            <p><a href="tel:14802210532">480.221.0532</a></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped lang="scss">
    .contact-info i {
        font-size: 16px;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        position: absolute;
        left: 20px;
        top: 10px;
        background: #000;
        border-radius: 50%;
        color: #fff;
    }

    .floating-card a {
        color: black !important;
    }
</style>
