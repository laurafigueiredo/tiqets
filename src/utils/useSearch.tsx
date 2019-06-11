import { useState } from 'react';

import { fetchSearchResults } from '../api/search';

export const useSearch = () => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    function getSearchResults( query: string ) {

        setLoading( true );

        fetchSearchResults(query)
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.toString());
                setLoading(false);
            });

    }
    
  
    return {loading, error, data, getSearchResults };

};