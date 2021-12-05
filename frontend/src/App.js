import './App.css';

function App() {

  function fib(){

    var x=0;
    var y=1;
    var pom=0;
    var num= document.querySelector('input').value;

    console.log(num);

    for(var i=1; i<num; i++){
      pom=y;
      y=x+y;
      x=pom;
    }

    document.getElementById("tu").innerHTML = y;
  }
  return (
    <div className="App">
      <header className="App-header">

            <p> Wpisz numer wyrazu ciagu Fibonacciego </p>
            <input type="text" id="num" onblur="getVal()"/>
            <button  onClick={fib}> Oblicz</button>

        <p id="tu"> Wynik </p>
      </header>
    </div>
  );

  
}


export default App;
