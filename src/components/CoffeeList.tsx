import { useEffect, useState } from 'react';
import CoffeeCard from './CoffeeCard';

interface CoffeeListProps {
  source?: string;
  filter?: boolean;
}

interface CoffeeListItem {
  id: number;
  name?: string;
  image?: string;
  price?: string;
  rating?: number | string | null;
  votes?: number;
  popular?: boolean;
  available?: boolean;
}

const CoffeeList = (props: CoffeeListProps) => {
  const [cardList, setCardList] = useState<CoffeeListItem[]>([]);

  const isIterableCoffeeItem = (item?: unknown): item is CoffeeListItem => {
    return (
      item !== null &&
      typeof item === 'object' &&
      'id' in item &&
      typeof item.id === 'number'
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!props.source) return;
      try {
        const data = await fetch(props.source);
        const json = await data.json();

        if (Array.isArray(json)) {
          let items = json.filter(isIterableCoffeeItem);

          if (props.filter) {
            items = items.filter((item) => item.available);
          }

          setCardList(items);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [props]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8">
      {cardList.map((item) => (
        <div key={item.id}>
          <CoffeeCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default CoffeeList;
