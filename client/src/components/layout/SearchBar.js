import React from 'react';

const SearchBar = () => {
  return (
    <nav style={{ marginBottom: '65px' }}>
      <div className='nav-wrapper cyan accent-4'>
        <a href='#' className='brand-logo center'>
          <i
            className='material-icons white-text'
            style={{ fontSize: '32px', marginRight: '.5rem' }}
          >
            system_update_alt
          </i>
          S-LOGGER
        </a>
      </div>
    </nav>
  );
};

export default SearchBar;
