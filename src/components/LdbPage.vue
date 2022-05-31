<template>
  <table align="center">
    <h2> Select the data you want load </h2>
  
  <select name="selection" id="selection" >
   <option value="Select">Select</option>
    <option value="Payroll">payroll</option>
    <option value="Client">Client</option>
    <option value="Timesheet">Timesheet</option>
    <option value="Employee expenses">Employee expenses</option>
    <option value="Employee data">Employee data</option>
    <option value="Immigration expenses">Immigration expenses</option>
    <option value="Management expenses">Management expenses</option>
  </select>
  <br><br>
  <input id="ldb" name="empexpense" type="file">
               
  <input id ="upload" type="button" value="upload" >
                
</table>
                
</template>
<script>
export default{
    name :'LDBPage',
}
</script>


<style>




#upload {
  text-align: center;
  color: blue;

  background-color: #4011fe; /* Green */
  border: solid white;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.LDB {
  text-align: center;
  color: black;
}


</style>
