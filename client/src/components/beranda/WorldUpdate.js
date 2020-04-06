import React, { Component } from 'react'
import axios from 'axios'

class WorldUpdate extends Component {

    constructor(props){

        super(props);

        this.state = {
            data: [],
            affectedCountry: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",

            "headers":{
            "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":"b6f6cb1b67msh93658cfafaa04f1p167a46jsn98089a58a64b"
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
        const { data, isLoaded } = this.state;

        if(!isLoaded){
            return (
                <div>
                    <h2 className="text-center headline">#DuniaMelawanCorona</h2>
                    <div className="update-wrapper">
                        <div className="card update-active">
                            <h3 className="text-warning">0</h3>
                            <p className="explanation">Kasus Total</p>
                        </div>
                        <div className="card update-cured">
                            <h3 className="text-primary">0</h3>
                            <p className="explanation">Sembuh</p>
                        </div>
                        <div className="card update-death">
                            <h3 className="text-danger">0</h3>
                            <p className="explanation">Meninggal</p>
                        </div>
                        <div className="card update-total">
                            <h3 className="text-grey">0</h3>
                            <p className="explanation">Kasus Baru</p>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h2 className="text-center headline">#DuniaMelawanCorona</h2>
                    <div className="update-wrapper">
                        <div className="card update-active">
                            <h3 className="text-warning">{data.total_cases}</h3>
                            <p className="explanation">Kasus Total</p>
                        </div>
                        <div className="card update-cured">
                            <h3 className="text-primary">{data.total_recovered}</h3>
                            <p className="explanation">Sembuh</p>
                        </div>
                        <div className="card update-death">
                            <h3 className="text-danger">{data.total_deaths}</h3>
                            <p className="explanation">Meninggal</p>
                        </div>
                        <div className="card update-total">
                            <h3 className="text-grey">{data.new_cases}</h3>
                            <p className="explanation">Kasus Baru</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default WorldUpdate;