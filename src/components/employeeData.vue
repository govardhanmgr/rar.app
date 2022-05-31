<template>
    <table>
        <tr>
            <td>Employee num</td>
            <td> First name</td>
            <td>Last name</td>
            <td> Email</td>
            <td>Contact number</td>
            <td> Current Role </td>
            <td> Client name </td>
            <td> Entity </td>
            <td> Action </td>
        </tr>
        <tr>
            <td> 1007 </td>
            <td> Anusha </td>
            <td> Raavi</td>
            <td> raavi.anusha693@gmail.com</td>
            <td> 213-453-4219</td>
            <td> HR Manager </td>
            <td> UPS </td>
            <td>Averon solutions </td>
            <td> <button> Add </button></td>
            <td> <button> Remove </button></td>
            <select name="selection" id="selection">
   <option value="Select">Select</option>
    <option value="Admin">admin</option>
    <option value="Business analyst">business analyst</option>
    <option value="HR Manager">HR Manager</option>
    <option value="Payroll admin">payroll admin</option>
    <option value="HR analyst">HR analyst</option>
    <option value="Payroll analyst">Payroll analyst</option>
    <option value="Excutive boards">excutive boards</option>
    
  </select>
  <input id ="Save" type="button" value="Save" >
        </tr>


    </table>
</template>

<script>
    export default {
        name: 'employeeData',
    }
</script>