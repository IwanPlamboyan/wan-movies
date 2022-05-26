import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  });

  return (
    <Container id="movies" className="pb-5">
      <h1 className="mt-5 mb-4">MOVIES</h1>
      <Row>
        {movies.map((result, i) => {
          return (
            <Col md={4} className="mb-3" key={i}>
              <Card className="cardMovies">
                <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt={result.title} className="images" />
                <div class="card-body">
                  <h5 class="card-title text-center fw-bold fs-4 text-uppercase">{result.title}</h5>
                  <p class="card-text">{result.overview}</p>
                  <p class="card-text">
                    <small class="text-muted">{result.release_date}</small>
                  </p>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Movies;
