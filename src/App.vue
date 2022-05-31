<template>
<div>
<img width="190" height="75" src="@/assets/logo.png" alt="" align="left">
<div align="right">
<img width="60" height="60" src="@/assets/profile.png" alt="" id="profile" align="">
    <table align="right" id="prof">
        <tr><label>Lahari Kolipara</label></tr>
        
        <tr><label>Admin</label></tr>
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




</script>

<style>
body {
  margin: 0;
  background: white;
  
}

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
    border-color: rgb(225, 79, 79);
    opacity: 0.9px;
    width: 150px;
    margin-top: 150px;
    margin-bottom: 15px;
}

button.left {
    background-color: rgb(134, 255, 255);
    font-size: medium;
    color: rgb(2, 2, 2);
    padding: 1px 20px;
    padding-bottom: 50px;
    margin: 1px 0px ;
    margin-bottom: 50px;
    border: 2px solid;
    border-radius: 15px;
    cursor: pointer;
    border-color: rgb(0, 0, 0);
    width: 200px;
    height: 70px;
    opacity: 0.9px;
}

.lt {
    display: inline-table ;
    padding-top: 0px;
    

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

 .profile {
    padding-right: 0px;
    padding-top: 10px;
    margin-right: 30px;
}


#otpt {
    margin-top: 50px;
    margin-left: 10px;

    border-left: 100%;

}

#profile {
    margin-right: 0px;
}

table#prof {
    padding-left: 5px;
}



</style>
