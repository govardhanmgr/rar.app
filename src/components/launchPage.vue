<template>
<div id="top">
<img width="200" height="75" src="@/assets/logo.png" alt="" align="left" id="top">
<div id="profi" align="right">
<img width="60" height="60" src="@/assets/profile.png" alt="" id="profile" align="center">
    <table align="right" id="prof">
        <tr><td><label>Lahari Kolipara</label></td></tr>
        <tr><td><label>Admin</label></td></tr>
    </table>
</div>
</div>
<form class="left"> 
    <table class="lt" align="left">
    <tr>
        <td>
            <router-link to="/DashPage"><button class="left">Dashboard</button></router-link>

        </td>
    </tr>
    <tr>
        <td>  
            <router-link to="/LDBPage"> <button class="left">Load Data in Batch </button></router-link>
        </td>

    </tr>
    <tr>
        <td>
            <router-link to="/amdPage"><button class="left">Amend Details</button></router-link>
        
        </td>
    </tr>
    <tr>
        <td> 
            <router-link to="/ReportPage"><button class="left">Reporting Portal</button></router-link>
        
        </td>
    </tr>
    <tr>
        <td>
            <button id="log">LogOut</button>
           
   
        </td>
        
    </tr>

    </table>
  
    <div id="otpt">
      <router-view/>
    </div>

    
</form>

</template>
<script>
export default {
    name: 'launchPage',
}
</script>
<style>


.logo {
    cursor: pointer;
    
}

button#log {
    background-color: rgb(234, 231, 231);
    height: 50px;
    font-size:medium;
    border: 10px;
    border-radius: 15px;
    cursor: pointer;
    opacity: 0.9px;
    width: 200px;
    margin-top: 180px;
    margin-bottom: 15px;
    position: fixed;
}

button.left {
    background-color: rgb(134, 255, 255);
    font-size: large;
    color: rgb(2, 2, 2);
    padding: 1px 20px;
    padding-bottom: 10px;
    margin: 1px 0px ;
    margin-bottom: 2px;
    border: 2px solid;
    border-radius: 15px;
    cursor: pointer;
    border-color: rgb(0, 0, 0);
    width: 200px;
    height: 80px;
    opacity: 0.9px;
}

.lt {
    display: inline-table ;
    padding-top: 25px;
    position: fixed;
    

}

form.left {
    width:100%;
    padding-top: 0;
    padding-right: 0px;
    padding-left: 25px;
    color: rgb(18, 18, 18);
    margin-top: 0px;
    background: white;
    display: inline-block; 
    margin-bottom: 15px;
    border-radius: 10px;

}

 


#otpt {
    margin-top: 50px;
    margin-left: 10px;

    border-left: 100%;

}

#profile {
    margin-right: 0px;
    position: static;
}

table#prof {
    padding-left: 20px;
    margin-left: 0px;
}

img#top {
    position: fixed;
    margin-left: 20px;
}

div#profi {
    margin-right: 40px;
}


</style>