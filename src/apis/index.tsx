// API

// import axios from 'axios';
// import { Dispatch } from 'react';

// export async function get (urls: string[], stateSetter: Dispatch<ActionType>): Promise<void> {
//   await axios
//     .all(urls.map(async (url) => await axios.get(url)))
//     .then(axios.spread((responseA, responseB) => {
//       stateSetter({
//         type: '',
//         payload: {
//           cat: responseA.data,
//           fox: responseB.data
//         }
//       })
//     }))
//     .catch((error) => {
//       return error
//     })
// }
