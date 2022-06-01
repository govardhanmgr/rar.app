<template>

    <h1 class="wel">Welcome Back, Lahari </h1>
    <table id="rep" align="right" >
        <tr class="rep" >
            
                <td>
                    <button class="rep1">
                        Total Active Employee
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
</template>

<script>
    export default {
        name: 'DashPage'
    }

</script>

<style>
    
 table#rep {
    display: inline-table ;
    padding: 10px;
    font-size: medium;
    font-style: normal;
    border: 3px solid;
    border-color: black;
    border-radius: 10px;
    padding-right:0px;
    table-layout: auto;
    margin-top: 0px;
    margin-right: 50px;
    margin-bottom: 10px;
    background-color:hsla(0, 95%, 92%, 0.478);

    
}

tr.rep {
    padding: 0px;

   
    
}

button.rep1 {
    background-color:hsla(0, 95%, 92%, 0.425);
    font-size: large;
    color: black;
    padding: 20px 20px;
    margin: 1px 5px ;
    border: solid hsla(0, 95%, 92%, 0.478);
    border-radius: 15px;
    cursor: pointer;
    width: 380px;
    opacity: 0.9px;
    text-align: left;
    

}

button.rep2 {
    background-color:hsla(0, 95%, 92%, 0.478);
    font-size: medium;
    color: #000000;
    padding: 20px 20px;
    margin: 1px 5px ;
    border: solid hsla(0, 95%, 92%, 0.478);
    border-radius: 15px;
    cursor: pointer;
    width: 100px
    

}
h1.wel {
    margin-left:200px;
}

</style>