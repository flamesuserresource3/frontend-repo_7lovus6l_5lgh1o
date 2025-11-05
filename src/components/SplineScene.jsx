import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Spline
        scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default SplineScene;
