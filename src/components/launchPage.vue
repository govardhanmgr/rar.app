<template>
<div>
    <button class="logo">
        
        <img width="190px"  src="../assets/logo.png" alt="company logo">
     </button>
        
    <img class="profile" width="70px" height="70px" align="right" src="../assets/profile.png" alt="profile">

   
</div>

<div>
<form> 
    <table class="lt" align="left">
    <tr>
        <td><button class="left">Dashboard</button> </td>
    </tr>
    <tr>
        <td><button class="left">Load Data in Batch </button> </td>
    </tr>
    <tr>
        <td><button class="left">Portal Access for Data Mgmt</button> </td>
    </tr>
    <tr>
        <td><button class="left">Reporting Portal</button> </td>
    </tr>
    <tr>
        <td>
            <button id="log">LogOut</button>
        </td>
    </tr>
    </table>



    <table id="rep" align="right" >

        <tr class="rep" >
            <td>
                Total Active Employee Count
            </td>
            <td>
                22
            </td>
        </tr>

        <tr class="rep">
            <td>
                Outstanding Receivable Collections
            </td>
            <td>
                1.2 M
            </td>
        </tr>

        <tr class="rep">
            <td>
                Payroll Expense YTD
            </td>
            <td>
                4.8 M
            </td>
        </tr>

        <tr class="rep">
            <td>
                Employee Expense Non Deductable YTD
            </td>
            <td>
                4.2 M
            </td>
        </tr>

        <tr class="rep">
            <td>
                Management Expense YTD
            </td>
            <td>
                128 K
            </td>
        </tr>

        <tr class="rep">
            <td>
                Operational Cost YTD
            </td>
            <td>
                68 K
            </td>
        </tr>

    </table>
</form>
</div>  
</template>
<script>
export default {
    name: 'launchPage',
}
</script>
<style>
button.logo {
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
    margin: 1px 0px ;
    border: 10px;
    border-radius: 15px;
    cursor: pointer;
    border-color: rgb(160, 27, 27);
    width: 150px;
    height: 70px;
    opacity: 0.9px;
}
.lt {
    display: inline-table ;
    padding-top: 30px;
    

}
form {
    width:100%;
    padding-top: 0;
    padding-right: 10px;
    padding-left: 25px;
    color: rgb(18, 18, 18);
    margin-top: 0;
    background: white;
    display: inline-block; 
    margin-bottom: 15px;
    border-radius: 10px;

}

.profile {
    padding-right: 30px;
    padding-top: 10px;
}

table#rep {
    display: inline-table ;
    padding-top: 30px;
    font-size: large;
    font-style: normal;
    border: 10px;
    border-color: black;
    padding-right: 10px;

    
}

tr.rep {
    margin:100px;

   
    
}


</style>