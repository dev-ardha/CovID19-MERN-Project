import React, { Component } from 'react'

import Chart from '../Chart'
import ScrollTop from '../ScrollTop'
import axios from 'axios'

class Global extends Component {
    constructor(){
        super()

        this.onChangeCountry = this.onChangeCountry.bind(this);

        let today = new Date();
        let year, month, day;
        let bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

        year = today.getFullYear();
        month = today.getMonth()
        day = today.getDate()
        
        let date = day + ' ' + ( bulan[month] ) + ' ' + year;

        this.state = {
          globalData: [],
          isLoaded: false,
          isLoaded2: false,
          dateNow: date,
          flags: '',
          
          countries: {},
          country: {
            
          },
          countryValue: '0',

        }
    }

    fetchCurrencyData = () => {
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "b6f6cb1b67msh93658cfafaa04f1p167a46jsn98089a58a64b"
            }
        })
        .then(response => response.json()) // Getting the actual response data
        .then(data => {         
            this.setState({
                globalData: data,
                isLoaded2: true,
                country: data['countries_stat'][0],
            })
        })
        .catch(err => {
            console.log(err);
        }); 
    }

    componentDidMount() {
        this.fetchCurrencyData();

        axios.get('/api/flags/')
        .then(response => {
          this.setState({
            flags: response.data,
            isLoaded: true,
          })
        })
        .catch((err)=> console.log(err))
    }

    onChangeCountry(e) {
        this.setState({
          country: this.state.globalData['countries_stat'][e.target.value],
          countryValue: e.target.value,
        })
    }
    
    render() {
        let { globalData, isLoaded, dateNow, country, countryValue, flags, isLoaded2 } = this.state;
        
        const globalStat = globalData['countries_stat']

        if(!isLoaded || !isLoaded2){
            return (
                <div className="content">
                    <div className="container global-data">
                        <div className="loading justify-center"></div>
                    </div>
                </div>
            )
        }
        else{
            // let flag = require('../../images/flags/'+country['country_name']+'.png')

            // const countryName = country['country_name'];

            let flag = flags[0].flag[country['country_name']];

            const affectedCountry = globalStat.length - 2;
            console.log(affectedCountry)

            return (
                <div className="content">
                    <div className="container selection-wrapper">
                        <div className="selection">
                        <select
                            className="country-select"
                            required
                            value={countryValue}
                            onChange={this.onChangeCountry}
                        >
                            {globalStat.map((value, index) =>{
                                return (
                                    <option
                                    value={index}
                                    key={index}
                                    className="selected-country"
                                    >{value.country_name}</option>
                                )
                            })}
                        </select>
                        <div className="country-detail mb-1">
                            <div className="country-detail-wrapper">
                                <div className="flag-wrapper">
                                    <div className="country-flag">
                                        <img src={flag} alt="flag"/>
                                    </div>
                                </div>
                                <div className="country-info">
                                    <h2 className="headline text-center text-grey">{country['country_name']}</h2>
                                    <div className="country-update">
                                        <div className="new new-cases">+{country['new_cases']} New Cases</div>
                                        <div className="new new-death">+{country['new_deaths']} New Death</div>
                                    </div>
                                </div>
                            </div>
                            <div className="update-wrapper update-selected">
                            <div className="card update-active">
                                <h3 className="text-warning">{country['active_cases']}</h3>
                                <p className="explanation">Aktif</p>
                            </div>
                            <div className="card update-cured">
                                <h3 className="text-primary">{country['total_recovered']}</h3>
                                <p className="explanation">Sembuh</p>
                            </div>
                            <div className="card update-death">
                                <h3 className="text-danger">{country['deaths']}</h3>
                                <p className="explanation">Meninggal</p>
                            </div>
                            <div className="card update-total">
                                <h3 className="text-grey">{country['cases']}</h3>
                                <p className="explanation">Total</p>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="container global-data">
                        <Chart/>
                        <h2 className="headline mt-4">Situasi Virus Corona Saat Ini</h2>
                        <p className="text-center subheadline">Data per tanggal {dateNow}</p>
                        <table className="global-data-table">
                            <tbody>
                                <tr>
                                    <th>Negara</th>
                                    <th>Aktif</th>
                                    <th>Sembuh</th>
                                    <th>Meninggal</th>
                                    <th>Total</th>
                                </tr>
                                {globalStat.map((value, index) =>{
                                return (
                                    <tr key={index}>
                                        <td>{value.country_name}</td>
                                        <td>{value.active_cases}</td>
                                        <td>{value.total_recovered}</td>
                                        <td>{value.deaths}</td>
                                        <td>{value.cases}</td>
                                    </tr>
                                )
                                })}
                            </tbody>
                        </table>
                        <p className="subheadline affected">Affected Countries &amp; Territories: {affectedCountry}</p>
                        <ScrollTop/>
                    </div>
                </div>
            )
        }
    }
}

export default Global
