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
                theKills = playerInfo.kills_squad.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                theRatio = Math.round(playerInfo.winrate_squad) + "%"
                theScore = playerInfo.score_squad.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                theMatch = playerInfo.matchesplayed_squad.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                this.setState({
                    squadKills: theKills,
                    squadWinRate: theRatio,
                    squadScore: theScore,
                    squadMatches: theMatch,
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