//The Reduce function aspects a callback function 
let salesData = [
    {product : 'Laptop' , price : 1200 },
    {product : 'Mobile' , price : 800 },
    {product : 'Headphones' , price : 150 },
    {product : 'Keyboard' , price : 80 },
];
let totalSales = salesData.reduce((acc , sales ) => acc + sales.price,0);
console.log(totalSales);


