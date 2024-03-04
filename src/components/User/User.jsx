import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const {userId} = useParams();
  return (
    <div className='text-center bg-gray-500 text-3xl p-4 text-white'>
      User : {userId}
    </div>
  )
}

export default User
