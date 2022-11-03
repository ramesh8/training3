// let options = {
//     method : 'POST',

// }

// fetch('https://reqres.in/api/users?page=2').then(res =>  res.json()).then(data=>showUsers(data));

// function showUsers(users){
//     // console.log(users);
//     users.data.map(user=>document.write(user.email+"<br/>"));
// }

let options = {
    method : 'POST',
    data : JSON.stringify({
        "name": "ramesh",
        "job": "dev"
    })
}
fetch('https://reqres.in/api/users',options).then(res=>res.json()).then(data=>console.log(data));


let newsurl = 'https://inshorts.deta.dev/news?category=science';

fetch(newsurl)
.then(res=>res.json())
.then(data=>showNews(data));

function showNews(articles){
    let news = articles.data;
    news.map(item => showItem(item))
}

function showItem({title, imageUrl, content}){
    let htmlstr = `
        <div class="article">
            <h1 class="title">${title}</h1>
            <img class="image" src="${imageUrl}" />
            <p class="content">${content}</p>
        </div>
    `;

    document.write(htmlstr);

}