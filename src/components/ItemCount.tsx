import React, { useState } from 'react';
import Astro from '@astrojs/react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const setDecrease = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };
  const setIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="room-wrapper">
        <div className="dropdown-name text-black" onClick={() => alert('hello')}>
          1 Room, 1 Guest{' '}
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"></path>
          </svg>
        </div>
        <div className="drop-down-menu">
          <div className="dropdown-items">
            <div>
              <h6>Rooms</h6>
            </div>
            <div className="dropdown-items-right">
              <div className="decrement-btn" onClick={() => alert('hello')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                  <path
                    fill="currentColor"
                    d="M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512S229 0 512 0m0 961c247 0 448-202 448-449S759 64 512 64S64 265 64 512s201 449 448 449m-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32z"
                  ></path>
                </svg>
              </div>
              <h1 className="rooms-count-text">{count}</h1>
              <div className="increment-btn" onClick={() => setIncrease()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                  <path
                    fill="currentColor"
                    d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="dropdown-items">
            <div className="dropdown-items-left">
              <h6>Adults</h6>
              <p>(Max:8 total guests/room)</p>
            </div>
            <div className="dropdown-items-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512S229 0 512 0m0 961c247 0 448-202 448-449S759 64 512 64S64 265 64 512s201 449 448 449m-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32z"
                ></path>
              </svg>{' '}
              1{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"
                ></path>
              </svg>
            </div>
          </div>
          <div className="dropdown-items">
            <div className="dropdown-items-left">
              <h6>Children</h6>
              <p>
                (Max: 8 total guests/room)
                <br />
                Age-based rates may be available
              </p>
            </div>
            <div className="dropdown-items-right">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M512 0c283 0 512 229 512 512s-229 512-512 512S0 795 0 512S229 0 512 0m0 961c247 0 448-202 448-449S759 64 512 64S64 265 64 512s201 449 448 449m-35-417H288c-18 0-32-14-32-32s14-32 32-32h448c18 0 32 14 32 32s-14 32-32 32z"
                ></path>
              </svg>{' '}
              1{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
