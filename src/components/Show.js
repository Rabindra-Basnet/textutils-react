import { sculptureList } from "../assets/data";
import { useState } from 'react'

export default function Showdata() {

    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false);

    let sculpture = sculptureList[index];
    const handleClick = () => {
        setIndex(index + 1);
        // try {
        //     if(index >= sculpture.length){
        //         setIndex(index + 1);
        //     }    
        // } catch (error) {
        //     alert('The index assigned is at last: ' + index)
        // }  

    }
    const handleMoreClick = () => {
        setShowMore(!showMore);
    }



    return (
        <>
            <div className="d-flex flex-column m-3">
                <h1 className="text-center bg-body-secondary my-1">Info Page</h1>
                <h2 className="text-center text-primary">
                    <i>{sculpture.name}</i>
                    by {sculpture.artist}
                </h2>
                <h3 className="text-center text-primary">
                    ({index + 1}) of {sculptureList.length}
                </h3>
                <img className="m-2 h-25 w-25 object-fit-contain" src={sculpture.url} alt={sculpture.alt} />
                {showMore && <p className="m-2 p-2">{sculpture.description}</p>}
                <div className=" h-50 w-50 d-flex  m-2 ">
                    <button className=" btn-secondary my-0 p-0" onClick={handleMoreClick}>
                        {showMore ? 'Hide' : 'Show'}
                    </button>
                    <button className="m-3 w-auto rounded bg-primary" onClick={handleClick}>
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}
