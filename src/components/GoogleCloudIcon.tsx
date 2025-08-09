import React from 'react';
import { SiGooglecloud } from 'react-icons/si';

interface GoogleCloudIconProps {
  size?: number;
}

const GoogleCloudIcon: React.FC<GoogleCloudIconProps> = ({ size = 24 }) => {
  return (
    <SiGooglecloud 
      size={size} 
      color="#4285F4"
      style={{ 
        filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.1))'
      }}
    />
  );
};

export default GoogleCloudIcon;
