var employees = [ {name:"Ali", salary: 50000},
              {name:"Zoe", salary:75000},
              {name:"Jack", salary: 60000},
              {name:"Felix", salary: 35000}];

//let totalsalary = d3.sum(employees, (d) => d.salary);

//let totalsalary = employees.reduce((cur, prev) => cur + prev.salary, 0)

let totalsalary = d3.sum(employees.map((d) => d.salary))

console.log(totalsalary)

let car = [ {model:"500", price: 50000},
        {model:"600", price:75000},
        {model:"700", price: 60000},
        {model:"400", price: 35000}]

car = car.filter(d => d.price > 55000)

let m= d3.mean(car, (d)=> d.price)

console.log(m)

let container= d3.select("#container");

let cars = [
  {name:"toyota", price: 50000},
  {name:"BMW", price:75000},
  {name:"Tesla", price: 60000},
  {name:"Jeep", price: 35000}];

let join = container
  .selectAll("li")
  .data(cars);

join.enter()
  .append("li")
  .text( d=> d.name + " " + d.price )
