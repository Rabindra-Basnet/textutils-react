import { sculptureList } from "../assets/data";
import {useState} from 'react'

export default function Showdata() {

    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false);

    let sculpture = sculptureList[index];
    const handleClick = () =>{  
        setIndex(index + 1);
        // try {
        //     if(index >= sculpture.length){
        //         setIndex(index + 1);
        //     }    
        // } catch (error) {
        //     alert('The index assigned is at last: ' + index)
        // }  
      
    }
    const handleMoreClick = () =>{
        setShowMore(!showMore);
    }



  return (
    <>
    <button className="m-3" onClick={handleClick}>
        Next
    </button>
    <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
    </h2>
    <h3>
        ({index + 1}) of {sculptureList.length}
    </h3>
   
    <img className="container m-3 wrapper h-50" src={sculpture.url} alt={sculpture.alt} />
    <button className=" border-2 rounded-2 m-2 " onClick={handleMoreClick}>
        {showMore ? 'Hide':'Show'} details
    </button>
    {showMore &&  <p>{sculpture.description}</p>}
    </>
  )
}
