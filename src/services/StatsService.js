import axios from 'axios';

class StatsService {

    constructor() {
        // let service = axios.create({
        //     baseURL: 'https://fortnite-public-api.theapinetwork.com/prod09/users',
        //     withCredentials: true
        // });

        this.axios = axios;
    }


    listPlayerDetails = () => {

        return this.axios.get('https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=Ninja')
            .then((response) => {
                // console.log("ID", response.data.uid)
                return this.axios.get(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${response.data.uid}&platform=pc`)
                    .then(response => response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

export default StatsService;