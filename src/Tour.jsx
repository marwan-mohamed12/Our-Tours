import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [toggle, setToggel] = useState(false);

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <div className="tour-info">
                <span className="tour-price">${price}</span>
                <h4>{name}</h4>
                <p>
                    {toggle ? info : `${info.slice(0, 230)}...`}
                    <button onClick={() => setToggel(!toggle)}>
                        {toggle ? "Show Less" : "read more"}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>
                    not interested
                </button>
            </div>
        </article>
    );
};
export default Tour;
