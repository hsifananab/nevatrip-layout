import React from 'react';

const CardBanner = props => {
  const {
    visible = true,
    bgColor = 'yellow',
    top = false,
    label = 'новинка',
  } = props;

  return (
    <div
      className={`absolute left-0 px-7 py-3 text-sm xl:text-base ${
        top ? 'top-0 rounded-br-[12px]' : 'top-[60px]'
      } ${visible ? '' : 'hidden'} ${
        bgColor === 'yellow'
          ? 'bg-color-yellow'
          : `${
              bgColor === 'blue'
                ? 'bg-color-blue text-white'
                : 'bg-color-violet text-white'
            }`
      }`}
    >
      {label.toUpperCase()}
    </div>
  );
};

export default CardBanner;
