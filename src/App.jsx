import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }

  // Fetch API
  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json()
      setTours(data);

    } catch (err) {
      console.log('Error: ', err)
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchTours()
  }, [])

  // Example of multiple returns
  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} fetchTours={fetchTours} />
    </main>
  );

};
export default App;
