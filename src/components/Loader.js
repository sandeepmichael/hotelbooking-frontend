import React, {useState} from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const Loader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div style={{marginTop:'150px'}}>
              <div className="sweet-loading text-center">
  
              <BeatLoader color='#000' loading={loading} size={30} />
              </div>
        </div>
    )
}

export default Loader
