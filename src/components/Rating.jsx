import { useState, useEffect } from "react";

function Rating({ peliculaId }) {
  const [rating, setRating] = useState(0);

  // Cargar calificación guardada
  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${peliculaId}`);
    if (savedRating) {
      setRating(Number(savedRating));
    }
  }, [peliculaId]);

  // Guardar calificación
  const handleRating = (value) => {
    setRating(value);
    localStorage.setItem(`rating-${peliculaId}`, value);
  };

  return (
    <div className="flex justify-center gap-1 mt-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleRating(star)}
            className={`text-7xl md:text-7xl transition-transform hover:scale-125 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default Rating;
