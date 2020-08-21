import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const DataHOF = (url, WrappedComponent) =>
  () => {
    const [data, setData] = useState([])

    const loadData = useCallback(() => {
        axios.get(url)
             .then(res => {
                 setData(res.data)
             })
             .catch(error => {
      		 console.log(error)
    	     })
    })
          
    const unsetData = useCallback(() => {
        setData([])
    })
    
    let button = <button onClick = {loadData}>LOAD DATA</button>;
    let content = <div></div>;
    if (data.length > 0) {
        button = <button onClick = {unsetData}>UNSET DATA</button>;
        content = <WrappedComponent data={data} />;  
    }

    return (   
        <div>
            {button}
            {content}
        </div>
    )                                   
}

export default DataHOF
