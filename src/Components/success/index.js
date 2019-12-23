import React, {useEffect, useState} from 'react';
import Style from './style.scss';
import {Link} from "react-router-dom";

function Success()

 {

return(
     <div>
         <div className='success'>Your order was posted successfully</div>
         <Link to='/'>
             <div className='link'>Click here to come back to home page</div>
         </Link>
     </div>
)
}

export default Success;