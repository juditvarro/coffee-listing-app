import { useState } from 'react';

interface CoffeeCardProps {
  name?: string;
  image?: string;
  price?: string;
  rating?: number | string | null;
  votes?: number;
  popular?: boolean;
  available?: boolean;
}

const CoffeeCard = (props: CoffeeCardProps) => {
  const [favourite, setFavourite] = useState(false);

  return (
    <div className="w-64 sm:w-44 xl:w-64">
      <div className="rounded-lg overflow-hidden">
        <div
          className="h-32 sm:h-24 xl:h-32 bg-cover bg-center p-1"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          {props.popular && (
            <div className="font-dm text-themeBlack text-[10px] font-medium bg-themeYellow rounded-2xl w-16 p-1 text-center m-2">
              Popular
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-2">
          <div className="text-themeWhite font-dm font-medium">
            {props.name}
          </div>
          <div className="text-themeDarkestGray text-[12px] w-14 max-h-6 text-center font-dm font-medium p-1 bg-themeGreen rounded-lg">
            {props.price}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <button
              onClick={() => setFavourite(!favourite)}
              className={`h-10 w-10 rounded-full bg-no-repeat bg-center ${favourite ? 'bg-favouriteFilled' : 'bg-favourite'}`}
            />
            <div className="text-themeWhite font-dm font-medium text-[14px]">
              {props.rating}
              <span className="text-themeLightGray font-dm font-medium text-[14px] m-1">
                ({props.votes} votes)
              </span>
            </div>
          </div>
          <div>
            {!props.available && (
              <p className="font-dm font-medium text-[14px] text-themeRed">
                Sold out!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
