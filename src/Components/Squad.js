import React, { Component } from 'react';
import StatsService from '../services/StatsService';

class Squad extends Component {
    state = {
        playerID: '',
        squadKills: '',
        squadWinRate: '',
        squadScore: '',
        squadMatches: '',
    }

    service = new StatsService();

    componentWillMount() {
        var playerInfo;
        this.service.listPlayerDetails()
            .then((response) => {
                playerInfo = response.stats;

                this.setState({
                    squadKills: playerInfo.kills_squad,
                    squadWinRate: playerInfo.winrate_squad,
                    squadScore: playerInfo.score_squad,
                    squadMatches: playerInfo.matchesplayed_squad
                })
            })
    }

    render() {

        return (
            // box boxThree 
            <div className="box boxThree item-d">
                <div className="squadDiv">
                    <h1 className="title">SQUAD</h1>
                    <hr></hr>
                    <h3 className="matches">Matches: {this.state.squadMatches}</h3>
                    <h3 className="wins">Win Rate: {this.state.squadWinRate}</h3>
                    <h3 className="kills">Kills: {this.state.squadKills}</h3>
                    <h3 className="score">Score: {this.state.squadScore}</h3>

                </div>
            </div>

        );
    }

}

export default Squad;