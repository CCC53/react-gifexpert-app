import React from 'react'
import { GifGridItem } from './gifgriditem';
import { useFetchGif } from '../hooks/useFetchGif';

export const GifGridComponent = ({category}) => {
    const {loading, data:images} = useFetchGif(category);

    return (
        <div>
            <h3>{category}</h3>
            {
                <div className="card-grid">
                {
                    loading && <p>Loading...</p>
                }
                {
                    images.map(image => {
                        return <GifGridItem key={image.id} {...image}/>
                    })
                }
            </div>
            }
        </div>
    );
}
