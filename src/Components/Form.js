import React, { Component } from 'react';
import StatsService from '../services/StatsService';

// import { Route } from 'react-router-dom';


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    service = new StatsService();


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {

        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

        this.service.listPlayerDetails(this.state.value)
            .then((response) => {
                var playerInfo = response.stats;
                var theKills = playerInfo.kills_solo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var theRatio = Math.round(playerInfo.winrate_solo) + "%"
                var theScore = playerInfo.score_solo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var theMatch = playerInfo.matchesplayed_solo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                this.setState({
                    soloKills: theKills,
                    soloWinRate: theRatio,
                    soloScore: theScore,
                    soloMatches: theMatch,
                })

            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;