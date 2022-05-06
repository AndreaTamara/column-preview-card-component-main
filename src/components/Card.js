import React, {Component} from "react";
import './Card.css';

class Card extends Component{
    render(){
        return(
            <section className={this.props.titleCard}>
                <img src={this.props.imageCard}></img>
                <h1>{this.props.titleCard}</h1>
                <p>{this.props.textCard}</p>
                <button className={this.props.titleCard+'-button'}>Learn More</button>
            </section>
        );
    }
}

export default Card;