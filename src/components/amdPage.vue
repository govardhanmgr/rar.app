<template>
    <table id ="amd" align="center">
        <tr>
            <td> <nav> <route-link to="/activeEmplydata"><button class='amd'> Active employee data </button> </route-link></nav></td>
            <td> <route-link to="/orgnData"><button class='amd'>  Organization data </button></route-link></td>
        </tr></table>
        <router-view/>

</template>

<script>
    export default {
        name: 'amdPage',
    }
</script>

<style>
    table.amd {
        position: absolute;
    }

    button.amd {
        width: 200px;
        height: 100px;
        font-size: large;
        border: solid;
        border-radius: 15px;
        margin: 50px;
        cursor: pointer;
        background-color:rgba(104, 251, 112, 0.525);
        margin-top: 100px;

    }
</style>