// import axios from 'axios';
// import React, { createContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// export const ApiSurat = createContext();

// const DataSurat = ({children}) => {
//     const [surat, setSurat] = useState([]);
//     const {id} = useParams();
//     const url_surat = `https://quran-api.santrikoding.com/api/surah/${id}`;

//     const getDataSurat = () => {
//         axios.get(url_surat)
//             .then(res => {
//                 setSurat(res.data);
//             })
//             .catch(err => console.log(err))
//     };

//     useEffect(() => {
//         getDataSurat();
//     }, []);

//     console.log('cek', surat)
//     return (
//         <ApiSurat.Provider value={surat}>
//             {children}
//         </ApiSurat.Provider>
//     )
// }

// export default DataSurat
