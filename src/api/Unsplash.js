import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 464059611ad3d137d522fa334db5f0e7b1eb74675c0d2eeb80727443802e0ee1'
    }
}); 

