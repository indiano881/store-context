const StarRating = ({ rating }: { rating: number }) => {
 
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push("★"); 
      } else {
        stars.push("☆");
      }
    }
  
    return (
      <p>
        Rating: <span className="text-pt-secondary">{stars.join(" ")}</span>
      </p>
    );
  };

  export default StarRating;