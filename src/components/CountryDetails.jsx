/*
export default function CountryDetails({country}){
    return(
        <div>
            <h1>{country.name}</h1>
            <img 
                src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
                alt="" width="100px" height="auto"
            />
        </div>
    );
};
*/

import  {Link} from 'react-router-dom'

export default function CountryDetails({country, countriesList}){
    return(
        <div className="col-7">
            <img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" style={{"width": "300px", 'max-height': '300px' }}/>
            <h1>{country.name}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{"width": "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {country.borders.map((border) => (
                            <li><Link to={`/${border}`} >
                        
                            {countriesList.filter((country) =>
                                (country.alpha3Code  ===  border)
                            )[0].name}
                            
                            </Link></li>
                        ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    );
};