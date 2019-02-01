import axios from 'axios';

class StatsService {

    constructor() {

        this.axios = axios;
    }


    listPlayerDetails = (input) => {

        return this.axios.get('https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=' + input)
            .then((response) => {

                return this.axios.get(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${response.data.uid}&platform=pc`)
                    .then(response => response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

}



export default StatsService;