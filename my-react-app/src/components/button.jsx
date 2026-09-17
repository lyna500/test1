import {useState} from "react";

const Title = () => {
    const [count, setCount]= useState(0);
     const [titre, setTitre]= useState("hello world");
    
    return (
    <div>
        <h1>(titre)</h1>
        <p>ceci est composant react tout simple.</p>
        <p>{count}</p>
       
         <button onClick={() => {
            setCount(count + 1)

         }}> click sur moi</button>
    </div>
    )

}
export default Title;
