import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [tours, setTours] = useState([]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                setIsLoading(false);
                setIsError(true);
                return;
            }

            const tours = await resp.json();
            setTours(tours);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    if (tours.length === 0) {
        return (
            <main>
                <section>
                    <div className="title">
                        <h2>No Tours Left</h2>
                        <button
                            type="button"
                            className="btn"
                            onClick={fetchData}
                        >
                            Refresh
                        </button>
                    </div>
                </section>
            </main>
        );
    }

    if (isError) {
        return <h2>There Was An Error</h2>;
    }

    const removeTour = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
    };

    return (
        <main>
            <section>
                <div className="title">
                    <h2>our tours</h2>
                    <div className="underline"></div>
                </div>
                <Tours tours={tours} removeTour={removeTour} />
            </section>
        </main>
    );
}

export default App;
