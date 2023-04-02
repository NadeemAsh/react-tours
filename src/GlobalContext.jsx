import { useContext, useState, useEffect, createContext } from "react";
const url = 'https://course-api.com/react-tours-project';

// Create a Global Context
const GlobalContext = createContext();

// Custom Hook
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
    const [tours, setTours] = useState(null)

    const fetchURL = async () => {
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setTours(data)
            })
    }

    // Remove a tour
    function removeCurrentTour(id) {
        let newTours = tours.filter((tour, index) => {
            tour.id != id
        })
        setTours(newTours)
    }

    useEffect(() => {
        // Fetch URL
        fetchURL()
    }, [])

    return <GlobalContext.Provider value={{
        payload: {
            tours
        },
        function: {
            setTours,
            removeCurrentTour
        }
    }}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext