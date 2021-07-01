////console.log(typeof(employees))
var info = JSON.parse(employees);
console.table(info);
//console.log(info);

for (let i =0 ; i<info.length;i++)
{
    document.getElementById("demo").innerHTML+= `
    
      
    <tr>
      <th scope="row"></th>
      <td>${info[i].Unique_ID}</td>
      <td>${info[i].First_Name}</td>
      <td>${info[i].Email_address}</td>
      <td>${info[i].Job_Title}</td>
      <td>${info[i].Salary}</td>
    </tr>
    `
};
