let mydata = JSON.parse(books);

for (let i = 0 ; i < mydata.length; i++) {

    document.getElementById('results').innerHTML += `<div class= ${mydata[i].read} \> <img src="book_cover.png"> <h4> Book title: ${mydata[i].title} </h4> <h5> Author: ${mydata[i].author} </h5> </div>`;

}