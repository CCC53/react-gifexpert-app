import { useState, useEffect } from "react"
import { getImages } from "../helpers/getImages";

export const useFetchGif = (category) => {
    const [state, setstate] = useState({data:[], loading:true});

    useEffect(() => {
        getImages(category).then(images => {
            setstate({
                data: images,
                loading: false
            });
        });
    }, [category]);

    return state;
}
