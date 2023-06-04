import React from 'react'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b61721bcfamsh4b513ab422717b9p11e498jsn75a3abb22510',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game', options)
    .then(response => response.json())
    .then(data => {
        const article = [];
    })

    .catch(err => console.error(err));
export default function movies() {
    return (
        <div className="container ">
            <div className="row">
                {articles.map((element) => {
                    return <div className=" col-md-4 col-sm-6 col-12" key={element.url}>
                        <div className="card">
                            <img src={!element.i.imageUrl ? "https://talksport.com/wp-content/uploads/sites/5/2022/06/TALKSPORT-LANDSCAPE-DE-JONG-UNITED.jpg?strip=all&quality=100&w=1500&h=1000&crop=1" : imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text ">{description}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
