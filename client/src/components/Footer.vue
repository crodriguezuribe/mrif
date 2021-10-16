<template>
        <div>
        <!-- Start Body Footer -->
        <footer class="flex-container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <!-- Start Footer Void -->
            <div id="footer-void">
                <p>
                    &nbsp;
                </p>
            </div>
            <!-- End Footer Void -->

            <!-- Start Footer Menu -->
            <div id="footer-nav">
                <nav>
                    <p>
                        <router-link to="/" v-scroll-to="'#header-logo'">Home</router-link>&nbsp;|
                        <router-link to="/about" v-scroll-to="'#header-logo'">Sobre Nosotros</router-link>&nbsp;|
                        <router-link to="/services" v-scroll-to="'#header-logo'">Servicios</router-link>&nbsp;|
                        <router-link to="/faq" v-scroll-to="'#header-logo'">Preguntas Frecuentes</router-link>&nbsp;|
                        <router-link to="/contact" v-scroll-to="'#header-logo'">Contáctanos</router-link>
                    </p>
                </nav>
                <nav>
                    <p>
                        <router-link to="/sitemap" v-scroll-to="'#header-logo'">Mapa del Sitio</router-link>&nbsp;|
                        <router-link to="/tnc" v-scroll-to="'#header-logo'">Términos y Condiciones</router-link>
                    </p>
                </nav>
            </div>
            <!-- End Footer Menu -->

            <!-- Start Footer Social -->
            <div id="footer-social">
                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                </ul>
                <div class="first-line">
                    <div id="facebook" v-scroll-to="'#header-logo'"></div>
                    <div id="instagram" v-scroll-to="'#header-logo'"></div>
                    <div id="twitter" v-scroll-to="'#header-logo'"></div>
                    <div id="youtube" v-scroll-to="'#header-logo'"></div>
                    <div id="pinterest" v-scroll-to="'#header-logo'"></div>
                    <div id="messenger" v-scroll-to="'#header-logo'"></div>
                    <div id="whatsapp" v-scroll-to="'#header-logo'"></div>
                    <div id="vimeo" v-scroll-to="'#header-logo'"></div>
                    <div id="linkedin" v-scroll-to="'#header-logo'"></div>
                    <div id="skype" v-scroll-to="'#header-logo'"></div>
                    <div id="snapchat" v-scroll-to="'#header-logo'"></div>
                    <div id="dribbble" v-scroll-to="'#header-logo'"></div> 
                </div> 
            </div>        
            <!-- End Footer Social -->
            
        </footer>
        <!-- End Body Footer -->
        </div>
</template>

<script>

</script>

<style>
p ul li{
  text-align: justify;
  color: black;
  font-size: 18px;
}

a {
    color: black;
    opacity: 0.6;
    text-decoration: none;
    
}

a:hover {
    opacity: 1;
    text-decoration: underline;
}

a:active {
    opacity: 1;
    text-decoration: underline;
}


footer {
    margin: 10px auto 0 auto;
    width: 80%;
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: #C3C3C3;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 2px #C3C3C3;
    text-align: center !important;
    background-position: center !important;
    bottom: 0;
    min-width: 980px;
    padding-top: 10px;
}

#footer-void {
    flex-grow: 1;
}

#footer-nav {
    flex-grow: 1;
}

#footer-social {
    flex-grow: 1.5;
    margin-right: 28px;
    display: flex;
    ;
}

#facebook {
    flex-grow: 1;
    background-image: url("../assets/img/facebook.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
    /* background-color: #000; */
}

#instagram {
    flex-grow: 1;
    background-image: url("../assets/img/instagram.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

#twitter {
    flex-grow: 1;
    background-image: url("../assets/img/twitter.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

#youtube {
    flex-grow: 1;
    background-image: url("../assets/img/youtube.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

#pinterest {
    flex-grow: 1;
    background-image: url("../assets/img/pinterest.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

#messenger {
    flex-grow: 1;
    background-image: url("../assets/img/fbmessenger.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

#whatsapp {
    flex-grow: 1;
    background-image: url("../assets/img/whatsapp.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

#vimeo {
    flex-grow: 1;
    background-image: url("../assets/img/vimeo.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

#linkedin {
    flex-grow: 1;
    background-image: url("../assets/img/linkedin.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

#skype {
    flex-grow: 1;
    background-image: url("../assets/img/skype.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

#snapchat {
    flex-grow: 1;
    background-image: url("../assets/img/snapchat.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}

#dribbble {
    flex-grow: 1;
    background-image: url("../assets/img/dribbble.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: center;
}
</style>