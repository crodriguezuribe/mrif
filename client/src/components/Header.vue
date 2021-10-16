<template>
        <div>
        <!-- Start Body Header -->
        <header class="flex-container">
            <!-- Start Header Logo -->
            
            <div id="header-logo">
                <router-link to="/"><img src="../assets/img/blank.png"  width="50px" height="50px" /></router-link>
            </div>
            
            <!-- End Header Logo -->

            <!-- Start Header Title -->
            <div id="header-title" style="flex-grow: 1">
                <h2>Mini Relational Image Finder - MRIF</h2>
            </div>
            <!-- End Header Title -->

            <!-- Start Header Menu -->
            <div id="header-nav">
                <nav>
                    <div>
                        <router-link to="/">Home</router-link>&nbsp;|
                        <router-link to="/about">Sobre Nosotros</router-link>&nbsp;|
                        <router-link to="/services">Servicios</router-link>&nbsp;|
                        <router-link to="/faq">Preguntas Frecuentes</router-link>&nbsp;|
                        <router-link to="/contact">Contáctanos</router-link>&nbsp;|
                        <router-link to="/registry" class="show" onclick="document.getElementById('id01').style.display='block'">Ingresa</router-link>
                    </div>
                </nav>
            </div>
            <!-- End Header Menu -->
        </header>
        <!-- End Body Header -->
        </div>
</template>

<script>
    // Get the modal
    var modal = document.getElementById('id01');
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
</script>

<style>
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

header {
    margin: 5px auto 0 auto;
    width: 80%;
    border-radius: 10px;
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: #C3C3C3;
    box-shadow: 0px 4px 4px 2px #C3C3C3;
    min-width: 980px;
    top: 0;
    
}

header #header-nav {
    margin: 0;
    padding: 1.4em;
    text-align: right;
}

#header-logo {
    flex-grow: 1;
    background-image: url("../assets/img/logo_gray.png");
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 64px;
}

#header-logo:hover {
    flex-grow: 1;
    background-image: url("../assets/img/logo_black.png");
    background-size: 64px;
    background-repeat: no-repeat;
    background-position: center;
}

#header-title {
    flex-grow: 1;
    text-align: left;
    min-width: 450px;
}

#header-nav {
    flex-grow: 1;
    text-align: right;
    min-width: 450px;
}

#header-nav > div {
    color: black;
    margin: 60px;
    opacity: 0.6;
}
</style>