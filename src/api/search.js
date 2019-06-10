const URL = 'http://localhost:3001/products?q=';

export function fetchSearchResults( query ) {

  if( typeof query !== 'undefined' && typeof query !== 'string' ) throw TypeError('Not a string');

  return new Promise( ( resolve, reject ) => {
    
    if( query === undefined || query === '' ) return resolve([]);

    const finalUrl = `${URL}${query.replace(/\s/g, '+')}`;

    return fetch(finalUrl)
      .then( response => resolve( response.json() ) )
      .catch( error => reject( new Error(`API call failed: ${error}`) ) );

  });

}  