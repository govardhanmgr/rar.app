<template>
  <table align="center" id="LDB">
    <h1> Select the data you want load </h1>
  
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
               
  <input id ="upload" type="button" value="Upload" >
                
</table>
                
</template>
<script>
export default{
    name :'LDBPage',
}
</script>


<style>




input#upload {
  text-align: center;
  color: blue;

  background-color: #4011fe; 
  border: solid white;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: solid;
  display: inline-block;
  font-size: 16px;
}
table.LDB {
  text-align: center;
  color: black;
}


</style>
