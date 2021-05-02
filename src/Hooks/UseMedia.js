import React from 'react'

export const UseMedia = (media) => {
    debugger
    console.log('use-media', media)
    const [match, setMatch] = React.useState(null)

    React.useEffect(()=>{
        function changeMatch(){
            const { matches }  =window.matchMedia(media);
            setMatch(matches)
        }
         changeMatch();
        window.addEventListener('resize', changeMatch)
        return ()=> {
        window.removeEventListener('resize', changeMatch)
        }
    },[media])
    return (
         match
    )
}
