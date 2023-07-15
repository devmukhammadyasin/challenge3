import React from "react";
import Card from "./Card"
import movies from "./movies";


const App = () => {
    return (
        <div>
            <h1 className="heading">🔗 My movies</h1>

            {movies.map((movie, index) => (
                <div key={index}>
                    <Card
                        name={movie.name}
                        imgUrl={movie.imgUrl}
                        alt={movie.name}
                        liked={movie.liked}
                        year={movie.year}
                    />
                </div>
            ))}
        </div>
    );
};

export default App;