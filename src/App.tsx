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
    <div className="h-screen min-w-80 bg-themeBlack">
      <div className="bg-cover bg-no-repeat bg-headerSm h-1/3 lg:h-[35vh] xl:h-[30vh] bg-left lg:bg-center xl:bg-center px-5 lg:bg-headerLg xl:px-52">
        <div className="max-h-[95vh] overflow-y-auto min-w-72">
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
