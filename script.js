/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  
  
   
  function PrintDeveloperbyMap() {
    arr.map(function(employee){
      if(employee.profession=="developer"){
        console.log(employee);
      }
    });
  }
  
  function PrintDeveloperbyForEach() {
    arr.map(function(employee){
      if(employee.profession=="developer"){
        console.log(employee);
      }
    });
    
  }
  
  function addData() {
    var employeeObj = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(employeeObj);
    console.log(arr);
  }
  
  function removeAdmin() {
    
   arr.forEach(function(item,index){
     if(item.profession == "admin"){
      arr.splice(index,1);
     }
   })
    
  
    console.log(arr);
  }
  
  function concatenateArray() {
    
    let arr1= [
    { id: 5, name: "sunil", age: "22", profession: "developer" },
    { id: 6, name: "suji", age: "20", profession: "developer" },
    { id: 7, name: "advik", age: "19", profession: "developer" },
  ]
    var finalArr=[];
  
    arr.forEach(function(item) { finalArr.push(item)});
    arr1.forEach(function(item){
      finalArr.push(item);
    })
    console.log(finalArr);
  }