import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadMovies } from "../actions/index";
import { Form } from "react-bootstrap";

const Movies = (props) => {
  useEffect(() => {
    props.loadMovies();
  }, []);

  const { moviesList } = props?.movies;

  const base = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <div className="d-flex p-5 bg-dark mb-5">
        <Form.Control placeholder="search" />
      </div>
      <div className="container">
        <div className="d-flex align-items-center">
          <h4>What's Popular</h4>
          <div className="border-1 border-dark d-flex justify-content-around align-items-center ms-3 border rounded-3 p-1 w-50">
            <h6 className="m-0">All</h6>
            <h6 className="m-0">Movie</h6>
            <h6 className="m-0">TV</h6>
            <h6 className="m-0">Person</h6>
          </div>
        </div>
        <div className="d-flex" style={{ overflow: "scroll" }}>
          {moviesList?.map((movie, id) => (
            <div key={id} className="m-2">
              <img
                src={base + movie.backdrop_path}
                alt="Poster"
                height={300}
                width={250}
                style={{ objectFit: "cover" }}
              />
              <div className="p-2">
                <h6 className="fw-bolder">{movie.title || movie.name}</h6>
                <h6 className="text-muted">
                  {movie.release_date || movie.first_air_date}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ movies }) => ({
  movies,
});

const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => dispatch(loadMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
