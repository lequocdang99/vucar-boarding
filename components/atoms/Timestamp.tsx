import React from 'react';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Timestamp({ time }: { time: string }) {
  return (
    <div className='flex flex-row ml-auto self-center'>
      <FontAwesomeIcon
        icon={faClock}
        className='h-4 my-auto px-2'
      ></FontAwesomeIcon>
      {time}
    </div>
  );
}
