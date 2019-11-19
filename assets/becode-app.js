/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name :     
Date :  
Contact information : 
What does this script do ? 
...
*/
(() => {
  //get data in array
  
  let dateArray = [];

  for (let i = 5; i < 16; i++) {
  let date = {
  country: stockCountry(i),
  year: stockYear(i),
  data: stockData(i)
  };
  
  function stockCountry() {
    let countryArray = [];
    for (let c = 0; c < 35; c++) {
      let country = document.getElementsByTagName("td")[c * 12].innerHTML;
      console.log(c * 12);
      console.log("h" + country);
      countryArray.push(country);
      
    }
    return countryArray;
  }

  function stockYear(i) {
  let year = document.getElementsByTagName("th")[i].innerHTML;
  return year;
  }
  
  function stockData() {
  let dataArray = [];
  for (let j = 0; j < 35; j++) {
  let value = document.getElementsByTagName("td")[i - 4 + j * 12].innerHTML;
  let usableValue = value.replace(",", ".");
  let treatedValue = parseFloat(usableValue);
  dataArray.push(treatedValue);
  }
  return dataArray;
  }
  dateArray.push(date);
  }
  console.log(dateArray);
    // create svg
    d3.select("h3")
    .select("span")
    .append("svg")
    .style("width","500" + "px")
    .style("height","250" + "px")


})();

  


// div tableau2
//       d3.selectAll("h4")
//         .select("#Homicides")
//         .append("p")
//         .text("stairway to heaven")



//var
    // let tableau1 = #table1

    

    //  //get dates
  //  let getData = d3.select("#table1")
  //                  .select('tbody')
  //                  .select('tr')
  //                  .selectAll('th');
  //  console.log(getData.nodes()[2].textContent);

  //   //position du graphique tableau1
  // d3.select("h3")
  //   .select("span")
  //   .append("svg")
  //   .style("width","500" + "px")
  //   .style("height","250" + "px")