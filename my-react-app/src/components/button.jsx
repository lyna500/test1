
import { useState, useEffect } from "react";

const Title = () => {
    const [count, setCount] = useState(0);
    const [titre, setTitre] = useState("hello world");

    const ApiCall = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        const data = await response.json();

        console.log(data);
        setTitre(data.body);
    };

    useEffect(() => {
        ApiCall();
    }, []);

    return (
        <div className="gearge">
            <h1 id="patrick" className="geaorge">
                {titre}
            </h1>

            <p>Ceci est un composant React très simple.</p>

            <p className="geaorge">{count}</p>

            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Clique sur moi
            </button>
        </div>
    );
};

export default Title;

