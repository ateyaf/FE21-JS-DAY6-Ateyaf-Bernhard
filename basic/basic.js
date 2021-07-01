
var Sandw = JSON.parse(sandwiches);
var Fries = JSON.parse(fries);
var Total = JSON.parse(totals);
//console.log(Fries);
document.getElementById("demo").innerHTML = `
My favorite sandwich is ${Sandw.sandwich} 
which has approximately ${Sandw.calories} 
calories,<br>
along with it I enjoy eating ${Fries.fries_size} 
 which have about ${Fries.calories} 
 <br> So in total I will enter to my body ${Total.total_fat}
`;
//console.log(Sandw.sandwich);