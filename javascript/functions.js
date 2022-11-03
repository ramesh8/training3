// function print(gm, ga, name, time){
//     // console.log("Hello " + name);
//     // return "Hello " + name;

//     // let time = 13;
//     if(time<=12)
//     console.log(gm(name)); //callback function
//     else
//     console.log(ga(name)); //callback function
// }

// function sayGM(name){
//     return "Good Morning "+name;
// }

// function sayGA(name){
//     return "Good Afternoon "+name;
// }

// // let result = print("Kamesh");
// // console.log(result);

// let result = print(sayGM, sayGA, "Ramesh", 13);

// Promises

// success = resolve
// failure = reject

// let mypromise = new Promise((resolve, reject)=>{
//     //do some task
//     let a = 2, b = 2;
//     if(a == b){
//         resolve("Success");
//     } 
//     else
//     {
//         reject("Fail");
//     }
// });

// mypromise.then(msg=>console.log("Result: "+msg))
// .catch(err=>console.log("Error: "+err));

//fetch
fetch('https://api.spaceflightnewsapi.net/v3/articles')
.then(result => result.json())
.then(data => {
    console.log(data);
    data.map(item=>showArticle(item));
});
// .catch();

function showArticle(article){
    let htmlstr = `
    <div class="article">
        <h1 class="title">${article.title}</h1>
        <img src="${article.imageUrl}"/>
        <p>${article.summary}<p>
    </div>
    `;
    document.write(htmlstr);
}

// let options = {
//     method: 'POST',
//     data: {
//         "name": "morpheus",
//         "job": "leader"
//     }
// }
// fetch('https://reqres.in/api/users',options).then(res=>res.json()).then(data=>console.log(data));
// fetch('https://reqres.in/api/users/2').then(res=>res.json()).then(data=>console.log(data));


