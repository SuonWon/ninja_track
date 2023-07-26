import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [country, setCountry] = useState([]);
  const [selectCountry, setSelecteCountry] = useState(null);
  const [therapist, setTherapist] = useState([]);
  const [medium, setMedium] = useState([]);
  const [service, setService] = useState([]);

  const dummy = ['64af8a3c1f401705c1b4c9fd', '64af8a3c1f401705c1b4c9fc','64af8a3c1f401705c1b4c9fb']
  // getData();

  // getTherapist('64af8a3c1f401705c1b4c9fd');

  useEffect(() => {
    getData();
    if(selectCountry) {
      getTherapist(selectCountry);
    }
    
    console.log(selectCountry);
  }, [selectCountry])

  function getData() {
    getCountry();
    getMeidum();
    getService();
  }

  async function getCountry() {
    const country = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          query: `
          query ExampleQuery {
            getAllCountries {
              id
              country
              code
              currency
              currency_symbol
              flag
              status
              wallet_policy
              withdraw_fee
            }
          }
          `,
      })
    })

    const data = await country.json();

    setCountry(data.data.getAllCountries);
  }

  async function getMeidum() {
    
  }

  async function getService() {

  }

  async function getTherapist(countryId) {
    console.log(countryId);
    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          query: `
          query ExampleQuery($countryId: String!) {
            getTherapistsByCountry(countryId: $countryId) {
              id
              first_name
              middle_name
              last_name
              location
              country_id
            }
          }          
          `, 
          variables: {
              "countryId": countryId
            }
      })
    })

    const data = await response.json();

    setTherapist(data.data.getTherapistsByCountry);
  }

  // handleClick = () => {
  //   console.log('clicked');
  // }

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <select value={selectCountry} onChange={handleChange}>
          {
            country.length > 0 ? (
              country.map(({id, country}) => {
                return(<option value={id}>{country}</option>)
              })
            ) : null
            
          }
          
        </select>
      </header>
    </div>
  );
}

export default App;
