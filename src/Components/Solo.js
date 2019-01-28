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
        var playerInfo;
        this.service.listPlayerDetails()
            .then((response) => {
                playerInfo = response.stats;

                this.setState({
                    soloKills: playerInfo.kills_solo,
                    soloWinRate: playerInfo.winrate_solo,
                    soloScore: playerInfo.score_solo,
                    soloMatches: playerInfo.matchesplayed_solo,
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