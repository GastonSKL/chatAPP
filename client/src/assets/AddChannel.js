import React from 'react';

export const AddChannel = ({ setCreateType, setIsCreating, setIsEditing, setToggleContainer, type }) => (
  <svg
  width='20'
  height='20'
  viewBox='0 0 32 32'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
  onClick={() => {
    setCreateType(type);
    setIsCreating((prevState) => !prevState);
    setIsEditing(false);
    if (setToggleContainer) setToggleContainer((prevState) => !prevState);
  }}
>
  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    <g id="Icon-Set" transform="translate(-100.000000, -1035.000000)" fill="#000000">
      <path d="M130,1063 C130,1064.1 129.104,1065 128,1065 L104,1065 C102.896,1065 102,1064.1 102,1063 L102,1039 C102,1037.9 102.896,1037 104,1037 L128,1037 C129.104,1037 130,1037.9 130,1039 L130,1063 L130,1063 Z M128,1035 L104,1035 C101.791,1035 100,1036.79 100,1039 L100,1063 C100,1065.21 101.791,1067 104,1067 L128,1067 C130.209,1067 132,1065.21 132,1063 L132,1039 C132,1036.79 130.209,1035 128,1035 L128,1035 Z M122,1050 L117,1050 L117,1045 C117,1044.45 116.552,1044 116,1044 C115.448,1044 115,1044.45 115,1045 L115,1050 L110,1050 C109.448,1050 109,1050.45 109,1051 C109,1051.55 109.448,1052 110,1052 L115,1052 L115,1057 C115,1057.55 115.448,1058 116,1058 C116.552,1058 117,1057.55 117,1057 L117,1052 L122,1052 C122.552,1052 123,1051.55 123,1051 C123,1050.45 122.552,1050 122,1050 L122,1050 Z" id="plus-square"/>
    </g>
  </g>
</svg>
);
