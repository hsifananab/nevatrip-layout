import { useState } from 'react';
import { HiOutlineClock } from 'react-icons/hi';
import Check from '../images/png/check.png';
import Rub from '../images/png/rub.png';
import Button from './Button';
import CardBanner from './CardBanner';

const Card = ({ item, bannerSettings }) => {
  return (
    <div className="flex flex-col w-[341px] h-auto border-[0.3px]  rounded-2xl mx-[17px] my-[26px] overflow-hidden xl:flex-row xl:w-auto relative">
      <img src={item.image} alt="" className="max-w-[473px] w-full h-auto" />
      <div className="px-[12px] flex flex-col justify-between xl:px-[23px] xl:py-4">
        <div className="flex items-center justify-start gap-[9px] mt-4 mb-[10px] text-[#C7C7C7] text-xs leading-5 xl:mt-0 xl:text-[14px]">
          <HiOutlineClock className="text-xl" />
          <span className="text-[#9E9E9E]">{item.duration}</span>
        </div>
        <h2 className="font-semibold text-sm leading-[22px] mb-5 xl:order-first xl:text-[26px] xl:leading-[34px] xl:font-normal xl:mb-[11px] xl:max-w-[563px]">
          {item.title}
        </h2>

        <CardOptions options={item.options} />

        <div className="flex items-center justify-between w-full px-[8px] mb-[19px] xl:justify-start xl:gap-3">
          <div className="flex flex-col xl:justify-center gap-[5px]">
            <div className="text-3xl flex gap-1 items-center xl:text-4xl xl:leading-[20px]">
              {item.price}
              <img src={Rub} className="xl:w-auto h-[26px]" alt="" />
            </div>

            <div className="text-[10px] xl:text-sm">{item.addPrice}</div>
          </div>
          <Button label="Подробнее" />
        </div>
      </div>
      <CardBanner {...bannerSettings} />
    </div>
  );
};

export default Card;

const CardOptions = ({ options }) => {
  const departuresOption = options.filter(
    option => typeof option === 'object' && option !== null
  )[0];

  const departures = Object.values(departuresOption)[0];

  const renderData =
    departures.length <= 4 ? departures : departures.slice(0, 3);

  const restData = departures.slice(3, departures.length);

  console.log(restData);

  return (
    <ul className="pr-[8px] flex flex-col gap-[14px] mb-[35px]">
      {options.map(option => (
        <li key={option}>
          {typeof option === 'object' && option !== null ? (
            <div className="flex items-baseline gap-[20px] text-[#4B4B4B] ml-[1px] text-sm xl:text-lg xl:leading-[20px] whitespace-nowrap">
              <img src={Check} alt="check" />
              <div className="flex gap-x-3 w-full flex-wrap xl:flex-nowrap gap-y-[7px]">
                <div>{Object.keys(option)}</div>
                <DeparturesList renderData={renderData} restData={restData} />
              </div>
            </div>
          ) : (
            <div className="flex items-baseline gap-[20px]  text-[#4B4B4B] ml-[1px] text-sm xl:text-lg xl:leading-[20px] whitespace-nowrap">
              <img src={Check} alt="check" />
              {option}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const DeparturesList = ({ renderData, restData }) => {
  const [activeTime, setActiveTime] = useState();
  const [moreActive, setMoreActive] = useState(false);

  const handleMoreActive = () => setMoreActive(!moreActive);
  return (
    <div className="flex flex-col gap-2">
      <div data-test="departures-list" className="flex gap-[6px] w-full">
        {renderData.map((item, index) => (
          <div
            className={`bg-[#D9E8FF] rounded-[11px] flex justify-center items-center w-[63px] xl:w-[73px] h-6 xl:h-7 text-sm xl:text-base hover:bg-[#6BA6FF] hover:text-white hover:shadow-[0px_2px_4px_rgba(0,0,0,0.25)] transition-all cursor-pointer ] ${
              activeTime === item
                ? 'shadow-[0px_2px_4px_rgba(0,0,0,0.25)] bg-[#6BA6FF] text-white'
                : ''
            }`}
            key={index}
            onClick={() => setActiveTime(item)}
          >
            {item}
          </div>
        ))}
        {renderData.length < 4 && restData.length !== 0 && (
          <button className="" onClick={handleMoreActive}>
            {moreActive ? 'Скрыть' : 'Показать'}
          </button>
        )}
      </div>
      {moreActive && (
        <div className="flex gap-[6px] w-full">
          {restData.map((item, index) => (
            <div
              className={`bg-[#D9E8FF] rounded-[11px] flex justify-center items-center w-[63px] xl:w-[73px] h-6 xl:h-7 text-sm xl:text-base hover:bg-[#6BA6FF] hover:text-white hover:shadow-[0px_2px_4px_rgba(0,0,0,0.25)] transition-all cursor-pointer ] ${
                activeTime === item
                  ? 'shadow-[0px_2px_4px_rgba(0,0,0,0.25)] bg-[#6BA6FF] text-white'
                  : ''
              }`}
              key={index}
              onClick={() => setActiveTime(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
