import { useState } from 'react';
import Button from './components/Button';
import CoffeeList from './components/CoffeeList';
import Paper from './components/Paper';

const source = process.env.VITE_SOURCE_URL;

function App() {
  const [filter, setFilter] = useState(false);

  const handleAllClick = () => {
    setFilter(false);
  };

  const handleAvailableClick = () => {
    setFilter(true);
  };

  return (
    <div className="h-screen min-w-96 bg-themeBlack">
      <div className="bg-cover bg-no-repeat bg-center h-1/5 bg-headerSm lg:bg-headerLg pt-20 px-5 lg:px-44">
        <div className=" max-h-[90vh] overflow-y-auto min-w-72">
          <Paper
            title="Our Collection"
            intro="Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly."
          >
            <div className="flex flex-row justify-center gap-x-4 my-4">
              <Button
                text="All Products"
                selected={!filter}
                handleClick={handleAllClick}
              />
              <Button
                text="Available Now"
                selected={filter}
                handleClick={handleAvailableClick}
              />
            </div>
            <div className="my-8 px-6">
              {source && <CoffeeList source={source} filter={filter} />}
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default App;
