import React, { Component } from 'react';
import StatsService from '../services/StatsService';

class Solo extends Component {
    state = {
        playerStats: {},
        soloKills: '',
        soloWinRate: '',
        soloScore: '',
        soloMatches: '',
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
                theKills = playerInfo.kills_solo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                theRatio = Math.round(playerInfo.winrate_solo) + "%"
                theScore = playerInfo.score_solo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                theMatch = playerInfo.matchesplayed_solo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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
            // box boxOne 
            <div className="box boxOne item-b">
                <div className="soloDiv">
                    <h1 className="title">SOLO</h1>
                    <hr></hr>
                    <h3 className="matches">Matches: {this.state.soloMatches}</h3>
                    <h3 className="wins">Win Rate: {this.state.soloWinRate}</h3>
                    <h3 className="kills">Kills: {this.state.soloKills}</h3>
                    <h3 className="score">Score: {this.state.soloScore}</h3>

                </div>
            </div>

        );
    }

}

export default Solo;