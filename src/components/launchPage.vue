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
        <td>
            <button class="left">Dashboard</button>
        </td>
    </tr>
    <tr>
        <td>  
            
            <router-link to="/LdbPage">  <button class="left">Load Data in Batch </button>
            
            </router-link>
            <router-view/>
        </td>

    </tr>
    <tr>
        <td>
            <button class="left">Portal Access for Data Mgmt</button> 
            
        </td>
    </tr>
    <tr>
        <td> 
             <button class="left">Reporting Portal</button>
        </td>
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
                    <button class="rep1">
                        Total Active Employee Count
                    </button>
                </td>
                <td>
                    <button class="rep2">
                        22
                    </button>
                </td>
        </tr>
        

        <tr class="rep">
            <td>
                <button class="rep1">
                Outstanding Receivable Collections
                </button>
            </td>
            <td>
                <button class="rep2">
                1.2 M
                </button>
            </td>
        </tr>


        
        <tr class="rep">
                <td>
                    <button class="rep1">
                    Payroll Expense YTD
                    </button>
                </td>
                <td>
                    <button class="rep2">
                    4.8 M
                    </button>
                </td>
        </tr>


        <tr class="rep">
            <td>
                <button class="rep1">
                Employee Expense Non Deductable YTD
                </button>
            </td>
            <td>
                <button class="rep2">
                4.2 M
                </button>
            </td>
        </tr>


        <tr class="rep">
            <td>
                <button class="rep1">
                Management Expense YTD
                </button>
            </td>
            <td>
                <button class="rep2">
                128 K
                </button>
            </td>
        </tr>

        <tr class="rep">
            <td>
                <button class="rep1">
                Operational Cost YTD
                </button>
            </td>
            <td>
                <button class="rep2">
                68 K
                </button>
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
    border: 2px solid;
    border-radius: 15px;
    cursor: pointer;
    border-color: rgb(0, 0, 0);
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

table#rep {
    display: inline-table ;
    padding-top: 30px;
    font-size: large;
    font-style: normal;
    border: 3px solid;
    border-color: black;
    border-radius: 10px;
    padding-right:0px;
    table-layout: auto;
    margin-top: 30px;
    margin-right: 50px;

    
}

tr.rep {
    padding: 10px;

   
    
}

button.rep1 {
    background-color: hwb(0 100% 0%);
    font-size: medium;
    color: #000000;
    padding: 20px 20px;
    margin: 1px 5px ;
    border-radius: 15px;
    cursor: pointer;
    outline-color: transparent;
    

}

button.rep2 {
    background-color: hwb(0 100% 0%);
    font-size: medium;
    color: #000000;
    padding: 20px 20px;
    margin: 1px 5px ;
    border-radius: 15px;
    cursor: pointer;
    outline-color: transparent;
    width: 100px
    

}




</style>