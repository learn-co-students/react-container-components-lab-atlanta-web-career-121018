import React from 'react';


const Review = props => {
    return (
        <div className='review' key={props.headline}>
            <header>
                <a className='review-link' href={props.link.url}><h4>{props.display_title}</h4></a>
                <p>Headline: {props.headline}</p>
                <span className='author'>Author: {props.byline}</span><br />
                <span className='date'>Date: {props.date_updated}</span><br />
                <span className='rating'>Rating: {props.mpaa_rating}</span><br />
            </header>
            <blockquote>{props.summary_short}</blockquote>
            <br />
            <br />
            <br />
            
        </div>
    )
}

// CAN USE EITHER OR //

// const Review = ({headline, byline, link, summary_short}) => {
//     return (
//         <div className='review' key={headline}>
//             <header>
//                 <a className='review-link' href={link.url}>{headline}</a>
//                 <br/>
//                 <span className='author'>{byline}</span>
//                 <blockquote>{summary_short}</blockquote>
//             </header>
//         </div>
//     )
// }

const MovieReviews = props => {
    return <div className='review-list'>{props.reviews.map(Review)}</div>
}

// CAN USE EITHER OR //
// const MovieReviews = ({ reviews }) => <div className='review-list'>{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;