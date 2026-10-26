import { getGoogleReviewsConfig } from "../lib/google-reviews";

export function GoogleReviews({ compact = false }: { compact?: boolean }) {
  const { profileUrl, reviewUrl, reviews } = getGoogleReviewsConfig();
  if (!profileUrl && !reviewUrl && reviews.length === 0) return null;

  return <section className={`google-reviews${compact ? " google-reviews-compact" : ""}`} aria-labelledby="google-reviews-title">
    <div className="container">
      <div className="google-reviews-heading">
        <div>
          <p className="eyebrow">Independent customer feedback</p>
          <h2 id="google-reviews-title">Google reviews</h2>
          <p>Visit our Google Business Profile to read customer feedback. If we have worked on your project, you can share an honest review of your experience.</p>
        </div>
        {(profileUrl || reviewUrl) && <div className="google-review-actions">
          {profileUrl && <a className="button" href={profileUrl} target="_blank" rel="noopener noreferrer">View our Google profile <span aria-hidden="true">↗</span></a>}
          {reviewUrl && <a className="text-link" href={reviewUrl} target="_blank" rel="noopener noreferrer">Leave a Google review <span aria-hidden="true">↗</span></a>}
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
