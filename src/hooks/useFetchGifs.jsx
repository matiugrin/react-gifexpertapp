// el use nos indica de que es un hook

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';
import 'animate.css';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=>{
        
        getGifs( category )
            .then( imgs => {         
                setState({ data:imgs, loading:false });
            })

    }, [category]);

    return state;

}
