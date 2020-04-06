import React, { Component } from 'react'
import axios from 'axios';

class Update extends Component {
    constructor(props){

        super(props);

        let today = new Date();
        let year, month, day;
        let bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

        year = today.getFullYear();
        month = today.getMonth()
        day = today.getDate()
        
        let date = day + ' ' + ( bulan[month] ) + ' ' + year;

        this.state = {
            dateNow: date,
            data: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":"b6f6cb1b67msh93658cfafaa04f1p167a46jsn98089a58a64b"
            },"params":{
            "country":"Indonesia"
            }
            })
        .then(data => {         
            this.setState({
                data: data.data,
                isLoaded: true
            })
        })
        .catch(err => {
            console.log(err);
        }); 
      }

    render() {

        const {isLoaded, data, dateNow} = this.state;

        const latestStat = data.latest_stat_by_country;

        if(!isLoaded){
            return(
            <div className="update">
                    <div className="container">
                        <h2 className="headline">Situasi Virus Corona di Indonesia</h2>
                        <div className="update-wrapper">
                            <div className="card update-active">
                                <div className="loading"></div>
                            </div>
                            <div className="card update-cured">
                                <div className="loading"></div>
                            </div>
                            <div className="card update-death">
                                <div className="loading"></div>
                            </div>
                            <div className="card update-total">
                                <div className="loading"></div>
                            </div>
                        </div>
                        <p className="explanation text-center">Data per tanggal {dateNow}</p>
                    </div>
                </div>
            )
        }

        else{
            return (
                <div className="update">
                    <div className="container">
                        <h2 className="headline">Situasi Virus Corona di Indonesia</h2>
                        <div className="update-wrapper">
                            <div className="card update-active">
                                <h3 className="text-warning">{latestStat[0].active_cases}</h3>
                                <p className="explanation">Aktif</p>
                            </div>
                            <div className="card update-cured">
                                <h3 className="text-primary">{latestStat[0].total_recovered}</h3>
                                <p className="explanation">Sembuh</p>
                            </div>
                            <div className="card update-death">
                                <h3 className="text-danger">{latestStat[0].total_deaths}</h3>
                                <p className="explanation">Meninggal</p>
                            </div>
                            <div className="card update-total">
                                <h3 className="text-grey">{latestStat[0].total_cases}</h3>
                                <p className="explanation">Total</p>
                            </div>
                        </div>
                        <p className="explanation text-center">Data per tanggal {dateNow}</p>
                    </div>
                </div>
            )
        }
    }
}

export default Update;