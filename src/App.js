import './App.css';
import Countris from './components/Countris/Countris';
function App() {
  return (
    <div className="App">
      <Countris></Countris>
    </div>
  );
}







/* function LoadCountris() {
  const [countris, setCountris] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountris(data))
  }, [])
  return (
    <div>
      <h1>Travling around the world !!</h1>
      <h4>Countris Available : {countris.length}</h4>
      {countris.map(country => <CountryInformation flag={country.flag} name={country.name} capital={country.capital}></CountryInformation>)}
    </div>
  )
}
function CountryInformation(props) {
  return (
    <div className=''>
      <div className='country'>
        <img src={props.flag} alt="" />
        <h2>Name : {props.name}</h2>
        <h4>Capital : {props.capital}</h4>
      </div>
    </div>
  )
}
 */
export default App;
