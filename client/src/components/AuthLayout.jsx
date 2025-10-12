import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';

const AuthLayout = () => {
  return (
    <div>
      <PublicNavbar />
      <main>
        <Outlet /> {/* This is where the Login or Register page will be rendered */}
      </main>
    </div>
  );
};

export default AuthLayout;