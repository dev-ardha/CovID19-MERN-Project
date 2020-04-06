import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class Chart extends Component {
    constructor(){
        super()

        this.state = {
          globalData: [],
          isLoaded: false
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
                isLoaded: true
            })
        })
        .catch(err => {
            console.log(err);
        }); 
    }

    componentDidMount() {
        this.fetchCurrencyData();
    }

    render () {
        const { globalData, isLoaded } = this.state;
        const countryStat = globalData['countries_stat']

        if(!isLoaded){
            return(
                <div></div>
            )
        }
        else{
            const data = {
                "chart": {
                    "caption": "10 Negara dengan Kasus Terbanyak",
                    "numberSuffix": "K",
                    "theme": "fusion",
                },
                "data": [
                    {
                        "label": countryStat[0]['country_name'],
                        "value": countryStat[0]['cases'],
                        "color": "#FF4F5A",
                    },
                    {
                        "label": countryStat[1]['country_name'],
                        "value": countryStat[1]['cases'],
                        "color": "#FF4F5A"
                    },
                    {
                        "label": countryStat[2]['country_name'],
                        "value": countryStat[2]['cases'],
                        "color": "#FF4F5A",
                    },
                    {
                        "label": countryStat[3]['country_name'],
                        "value": countryStat[3]['cases'],
                        "color": "#FF4F5A",
                    },
                    {
                        "label": countryStat[4]['country_name'],
                        "value": countryStat[4]['cases'],
                        "color": "#FF4F5A",
                    },
                    {
                        "label": countryStat[5]['country_name'],
                        "value": countryStat[5]['cases'],
                        "color": "#FF4F5A",
                    },
                    {
                        "label": countryStat[6]['country_name'],
                        "value": countryStat[6]['cases'],
                        "color": "#FF4F5A",
                    },
                    {
                        "label": countryStat[7]['country_name'],
                        "value": countryStat[7]['cases'],
                        "color": "#FF4F5A",
                    },
                    {
                        "label": countryStat[8]['country_name'],
                        "value": countryStat[8]['cases'],
                        "color": "#FF4F5A",
                    },
                    {
                        "label": countryStat[9]['country_name'],
                        "value": countryStat[9]['cases'],
                        "color": "#FF4F5A",
                    },
                ]
            }

            const chartConfigs = {
                type: 'column2d',
                width: '80%',
                height: 400,
                dataFormat: 'json',
                dataSource: data,
            };

            return <ReactFC {...chartConfigs} />;
        }
    }
}

export default Chart 