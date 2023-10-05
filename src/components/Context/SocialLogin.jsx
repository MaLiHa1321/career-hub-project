import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const SocialLogin = () => {

    const {google,github} = useContext(AuthContext)

    const handleSocial = media =>{
        media()
        .then(res => console.log(res.user))
        .catch(err => console.log(err.message))

    }    

    return (
        <div className='mt-5 flex justify-around'>
          <h2 onClick={() => handleSocial(google)} className='btn btn-primary btn-sm'>Google</h2>
          <h2 onClick={() => handleSocial(github)} className='btn btn-primary btn-sm'>Github</h2>
            
        </div>
    );
};

export default SocialLogin;