<template>
        <div>
        <!-- Start Body Main -->
        <main class="flex-container">
            <div class="main">
                <router-view/>
            </div>
        </main>
        <!-- End Body Main -->
        </div>
</template>

<script>
/* MAIN */
</script>

<style>
main  {
    margin: 10px auto 0 auto;
    width: 80%;
    flex-grow: 10;
    min-height: 73vh;
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: #C3C3C3;
    box-shadow: 0px 4px 4px 2px #C3C3C3;
    min-width: 980px;
}

.main {
    width: 100%;
    min-height: 80%;
    background-color: #FFF;
    padding: 1%;
}
</style>