import { getGoogleReviewsConfig } from "../lib/google-reviews";

export function GoogleReviews() {
  const { reviewUrl, reviews } = getGoogleReviewsConfig();
  if (!reviewUrl && reviews.length === 0) return null;

  return <section className="google-reviews" aria-labelledby="google-reviews-title">
    <div className="container">
      <div className="google-reviews-heading">
        <div>
          <p className="eyebrow">Verified customer feedback</p>
          <h2 id="google-reviews-title">Google reviews</h2>
          <p>Read independently published feedback or share your experience on our verified Google Business Profile.</p>
        </div>
        {reviewUrl && <div className="google-review-actions">
          <a className="button" href={reviewUrl} target="_blank" rel="noopener noreferrer">Read our Google reviews <span aria-hidden="true">↗</span></a>
          <a className="text-link" href={reviewUrl} target="_blank" rel="noopener noreferrer">Leave a Google review <span aria-hidden="true">↗</span></a>
        </div>}
      </div>
      {reviews.length > 0 && <ul className="google-review-list">
        {reviews.map(review => <li key={review.reviewId}>
          <blockquote>“{review.text}”</blockquote>
          <p><strong>{review.reviewerName}</strong><span aria-label={`${review.rating} out of 5 stars`}>{"★".repeat(review.rating)}</span></p>
          <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">View verified review on Google <span aria-hidden="true">↗</span></a>
        </li>)}
      </ul>}
    </div>
  </section>;
}
