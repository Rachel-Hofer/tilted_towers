import React, { Component } from 'react';
import StatsService from '../services/StatsService';

class Duo extends Component {
    state = {
        playerID: '',
        duoKills: '',
        duoWinRate: '',
        duoScore: '',
        duoMatches: '',
    }

    service = new StatsService();

    componentWillMount() {
        var playerInfo;
        this.service.listPlayerDetails()
            .then((response) => {
                playerInfo = response.stats;

                this.setState({
                    duoKills: playerInfo.kills_duo,
                    duoWinRate: playerInfo.winrate_duo,
                    duoScore: playerInfo.score_duo,
                    duoMatches: playerInfo.matchesplayed_duo
                })
            })
    }

    render() {

        return (
            // box boxTwo 
            <div className="box boxTwo item-c">
                <div className="duoDiv">
                    <h1 className="title">DUO</h1>
                    <hr></hr>
                    <h3 className="matches">Matches: {this.state.duoMatches}</h3>
                    <h3 className="wins">Win Rate: {this.state.duoWinRate}</h3>
                    <h3 className="kills">Kills: {this.state.duoKills}</h3>
                    <h3 className="score">Score: {this.state.duoScore}</h3>

                </div>
            </div>

        );
    }

}

export default Duo;