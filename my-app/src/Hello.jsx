function Hello(){

    function getName(n){
        return n;
    }
    const name = "Kunal Sah";

    const checkHandle = () =>{
        alert("Button clicked!");
    }

    const handleEvent = (event) =>{
        // console.log(event.target.value);
        alert("Input changed: " + event.target.value);
        return console.log(event.target.value);
    }

    return (
        <div>
            <h1>Hello, {getName(name)}</h1>
            <p>This is a simple React component.</p>

            <button onClick={checkHandle} style={{ backgroundColor: 'blue', color: 'white' }}>Clickme</button>

            <br />
            <input type="text" placeholder="Type something..." onChange={handleEvent} />

        </div>
    );
}

export default Hello;