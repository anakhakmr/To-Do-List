
module.exports=getDate;
function getDate()
{
  var today = new Date();
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return(today.toLocaleDateString("en-US", options));
  //console.log(day) //Saturday, September 17, 2022
}



// module.exports=getDay;
// function getDay()
// {
//   var today = new Date();
//   var options = {
//   weekday: 'long'
//
//   };
//   return(today.toLocaleDateString("en-US", options));
//   //console.log(day) //Saturday, September 17, 2022
// }
