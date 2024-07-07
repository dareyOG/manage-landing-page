export function Dot({ num, activeTestimonial, handleSetActiveTestimonial }) {
  return (
    <div
      className={`dot ${activeTestimonial === num ? 'dot--active' : ''}`}
      onClick={() => handleSetActiveTestimonial(num)}
    ></div>
  );
}
