import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
    return (
        <div className="tours">
            {tours.map((tour) => {
                return <Tour {...tour} key={tour.id} removeTour={removeTour} />;
            })}
        </div>
    );
};
export default Tours;
