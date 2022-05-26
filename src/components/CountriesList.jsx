import { Link } from "react-router-dom";
/*
export default function CountriesList(props) {

    console.log(props.countries[0].alpha3code)

    return(
        <div>
            <ul>
                {props.countries.map((country) => (
                    <li><Link to={`/${country.alpha3Code}`}>{country.name} </Link></li>
                ))}
            </ul>
        </div>
    );
};
*/

export default function CountriesList(props) {

    console.log(props.countries[0].alpha3code)

    return(
        <div className="col-5" style={{"max-height": "90vh", "overflow": "scroll"}}>
            <div className="list-group">
                {props.countries.map((country) => (
                    <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                        <img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} style={{'width': '120px'}} alt=''/>
                        <p>{country.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};