

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Tnuew06OX1MWoWO5ym3rRKfJX5J7XRqc&q=${ encodeURI(category) }&limit=10`;       
    console.log(url);
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}     