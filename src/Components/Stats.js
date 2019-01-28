// import React, { Component } from 'react';
// import Axios from 'axios';
// import { Route } from 'react-router-dom';
// import Solo from './Solo';
// import Duo from './Duo';
// import Squad from './Squad';

// class Stats extends Component {

//     state = {
//         playerName: '',
//         playerID: '',
//     }

//     componentWillMount() {
//         this.fetchUserID();
//     }

//     fetchUserID = () => {
//         Axios.get("https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=Ninja")
//             .then((response) => {
//                 this.setState({ playerName: response.data.username }, () => {
//                 })

//                 this.setState({ playerID: response.data.uid }, () => {
//                 })
//                 console.log("RESPONSE", response)
//             })

//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     render() {

//         return (
//             <div className="Ninja">
//                 {this.state.playerName}
//                 <Route component={Solo} />
//                 <Route component={Duo} />
//                 <Route component={Squad} />
//             </div>
//         );
//     }
// }

// export default Stats;