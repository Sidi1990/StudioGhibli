import "./MovieCard.css";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <h1 className="title">
        Title <span>heart</span>
      </h1>
      <div className="content">
        <div className="poster">
          <img src="src\assets\love-again.jpg" alt="" />
        </div>
        <div className="details">
          <div className="description">
            <p>desc...</p>
            <div className="director-info">
              <h3>D name</h3>
              <p>release date</p>
            </div>
          </div>
          <div className="additional-info">
            <p>running time</p>
            <div className="pricing">
              <p>cmimi</p>
              <p>rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
