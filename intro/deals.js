let deals = [
    { name : 'Prestige Mixer Grinder', price : 6990.00, discount : 36  },
    { name : 'Redmi Note 11 Pro', price : 15199.00, discount : 26  },
    { name : 'Crucial X6 1TB SSD', price : 7299.00, discount : 49  },    
    { name : 'Shaker Bottle', price : 79.00, discount : 82 },
    { name : 'AT Backpack', price : 749.00, discount : 67 },
    { name : 'Havells Kettle', price : 1398.00, discount : 53  },
    { name : 'Mamaearth Lotion', price : 399.00, discount : 50  },
    { name : 'Borosil Dinner Set', price : 1699.00, discount : 51  },
    { name : 'GM Power Strip', price : 399.00, discount : 32  },
    { name : 'Doctor Ortho Slippers', price : 339.00, discount : 43  },
    { name : 'Ajanta Wall Clock', price : 399.00, discount : 14  },
    { name : 'Lifelong Skipping Rope', price : 59.00, discount : 80  },
    { name : 'Butterfly Vegetable Cutter', price : 289.00, discount : 68 }
];

// console.log(deals);

let pname = prompt("Enter Product Name")

let filteredDeals = deals.filter((deal) => deal.name == pname)

console.log(filteredDeals);

let phtml = `Product Name : ${filteredDeals[0].name} is priced at Rs. ${filteredDeals[0].price}`;
document.write(phtml);

