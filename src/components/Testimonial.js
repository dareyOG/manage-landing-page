export function Testimonial({ avatar, author, testimonial, num, activeTestimonial }) {
  return (
    <div
      className={`testimonial-content  ${
        activeTestimonial === num ? 'testimonial-content--active' : ''
      } `}
    >
      <img src={avatar} alt={`${author}`} className="testimonial-content__photo" />
      <h3 className="testimonial-content__author">{author}</h3>
      <blockquote className="testimonial-content__text">{testimonial}</blockquote>
    </div>
  );
}
