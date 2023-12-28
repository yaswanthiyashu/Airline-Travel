import React from "react";

function SideBar() {
  return (
    <div>
      <div className="absolute top-[80px] left-[0px] bg-white box-border w-[69px] h-[1000px] overflow-hidden text-[6px] text-lightslategray border-r-[1px] border-solid border-gainsboro">
        <img
          className="absolute   top-[10px] right-[9px] left-[8px] rounded max-w-full overflow-hidden h-10 object-cover"
          alt=""
          src="/list--item--button--sign-in@2x.png"
        />
        <div className="absolute top-[58px] right-[9px] left-[8px] box-border h-px border-b-[1px] border-solid border-gainsboro" />
        <div className="absolute  top-[67px] right-[9px] left-[8px] h-[124px]">
          <img
            className="absolute   left-[8px] rounded w-9 h-9 overflow-hidden object-cover"
            alt=""
            src="/item--link--search-for-flights---img@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_18px)] left-[8px] rounded w-9 h-9 overflow-hidden object-cover"
            alt=""
            src="/item--link--search-for-hotels---img@2x.png"
          />
          <img
            className="absolute top-[calc(50%_+_24px)] left-[8px] rounded w-9 h-9 overflow-hidden object-cover"
            alt=""
            src="/item--link--search-for-cars---img@2x.png"
          />
        </div>
        <div className="absolute  top-[199px] right-[9px] left-[8px] box-border h-px border-b-[1px] border-solid border-gainsboro" />
        <div className="absolute  top-[208px] right-[9px] left-[8px] h-[82px]">
          <img
            className="absolute top-[calc(50%_-_27px)] left-[calc(50%_-_10px)] w-[18px] h-3 overflow-hidden object-cover"
            alt=""
            src="/button--english---insvg@2x.png"
          />
          <div className="absolute top-[53px] left-[24.8px] leading-[18px] font-semibold flex items-center w-[2.6px] h-[18px]">
            ₹
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
