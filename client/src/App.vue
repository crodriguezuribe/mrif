<template>
<div>
    <Header />
    <LogIn />
    <Main />
    <Footer />
</div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import LogIn from './components/LogIn.vue'
export default {
    name: 'App',

    data: () => ({
        //
    }),

    components: {
        Header,
        Main,
        Footer,
        LogIn,
    }
};
</script>

<style>
:root {
    --fontsize: 14pt;
}

/* :root #cont {
    display: none;
}
:root .show:focus + .hide {
    display: inline;
}
:root .show:focus + .hide + #cont {
    display: block;
} */

*,
::after,
::before {
    box-sizing: border-box;
    
}

html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: var(--fontsize);
    line-height: 1.5;
    text-align: justify;
}

body {
    background-color: #e5e5e5;
}

h1 {
    margin: 0;
    padding-top: .6em;
    padding-bottom: .3em;
    text-align: left;
    color: black;
    font-size: 24pt;
    opacity: 0.6;
}

h2,
h3,
h4,
h5,
h6 {
    margin-top: 0;
    padding-top: .6em;
    padding-bottom: .3em;
    color: black;
    margin-bottom: .5rem;
    opacity: 0.6;
}

p ul li{
  text-align: justify;
  color: black;
  font-size: 18px;
  opacity: .6;
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

.flex-container {
    display: flex;
    align-items: stretch;
    border-radius: 10px;
}

.flex-container div {
    border-radius: 10px;
    /* background-color: lightBlue; */
    margin: 2px;
    /* font-size: 20px; */
}
</style>
