import axios from 'axios';

// export default axios.create({
//     baseUrl:'',
//     headers: {
//         Authorization: "Client-ID AccessToken"
//     }
// })

export default axios.create({
  baseUrl: "https://josh-imageserver.herokuapp.com/",
});