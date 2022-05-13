import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import 'animate.css';

export const GifGrid = ({ category }) => {

    //data:images es para renombrar 
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__flash"> { category } </h3>

            { loading && 'Loading...' } 
            
            <div className="card-grid">
                
                { images.map( img => (
                    <GifGridItem 
                        key= {img.id}
                        { ...img }
                    />
                ))}
                
            </div>

        </>
    )
}
