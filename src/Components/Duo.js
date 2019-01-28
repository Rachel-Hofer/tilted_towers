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
        this.getAllStats();
    }

    getAllStats() {
        var playerInfo;
        var theKills;
        var theRatio;
        var theScore;
        var theMatch;

        this.service.listPlayerDetails()
            .then((response) => {
                playerInfo = response.stats;
                theKills = playerInfo.kills_duo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                theRatio = Math.round(playerInfo.winrate_duo) + "%"
                theScore = playerInfo.score_duo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                theMatch = playerInfo.matchesplayed_duo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                this.setState({
                    duoKills: theKills,
                    duoWinRate: theRatio,
                    duoScore: theScore,
                    duoMatches: theMatch,
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