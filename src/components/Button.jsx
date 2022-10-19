import React from 'react';

const Button = ({ label }) => {
  return (
    <button className="flex justify-center items-center w-[165px] h-[44px] bg-[#FED74B] text-sm border-[0.5px] border-[#CBA500] rounded-[20px] hover:shadow-[0px_2px_4px_rgba(0,0,0,0.25)] transition-all xl:w-[187px] xl:h-[52px] xl:text-lg">
      {label}
    </button>
  );
};

export default Button;
