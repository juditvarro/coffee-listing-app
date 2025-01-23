import React from 'react';

interface PaperProps {
  title: string;
  intro: string;
  children: React.ReactNode;
}

const Paper = ({ title, intro, children }: PaperProps) => {
  return (
    <div className="bg-themeDarkestGray rounded-xl pt-14 flex flex-col justify-center items-center bg-no-repeat bg-vector bg-[position:145%_1%] sm:bg-[position:90%_4%] lg:bg-[position:62%_4%]">
      <div>
        <h1 className="text-[32px] text-themeWhite font-medium font-dm text-center my-2">
          {title}
        </h1>
        <p className="text-[16px] text-themeDarkGray font-light font-dm text-center max-w-[80%] sm:max-w-[65%] lg:max-w-[42%] mx-auto">
          {intro}
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Paper;
