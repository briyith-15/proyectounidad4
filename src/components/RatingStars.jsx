import { useState } from "react";

export default function RatingStars() {
const [rating, setRating] = useState(0);
const [hover, setHover]   = useState(0);

return (
    <div>
    <h3>Califica esta película:</h3>

    <div style={{ fontSize: "2rem", cursor: "pointer" }}>
        {[1, 2, 3, 4, 5].map((star) => (
        <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            style={{
            color: star <= (hover || rating) ? "#FFD700" : "#ccc",
            }}
        >
            ★
        </span>
        ))}
    </div>

    <p style={{ marginTop: "10px" }}>
        {rating > 0
        ? `Has calificado esta película con ${rating} estrellas ⭐`
        : "Aún no la has calificado"}
    </p>
    </div>
);
}