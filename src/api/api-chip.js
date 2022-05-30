import React, { useEffect } from "react";

export const ChipApi = ({ setTodos }) => {

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=75e866c4604ea7aec93849337a458853`).then((respone) =>
            respone.json().then((results) => {
                setTodos(results.genres);
            })
        );
    }, []);
};