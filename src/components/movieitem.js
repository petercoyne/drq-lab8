
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class MovieItem extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem', float: 'left', margin: '1rem' }}>
                    <Card.Img variant="top" src={this.props.movie.poster} />
                    <Card.Body>
                        <Card.Title>{this.props.movie.title}</Card.Title>
                        <Card.Text>{this.props.movie.year}</Card.Text>
                        <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit {this.props.movie.title}</Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}