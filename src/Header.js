import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1618532500~hmac=0397eff59711ed6087699c6d0fa6133c'
          alt=''
        />

        <div className='header__search'>
          {/* Search Icon */}
          <SearchIcon />

          <input type='text' />
        </div>
      </div>

      <div className='header__right'></div>
    </div>
  );
}

export default Header;
