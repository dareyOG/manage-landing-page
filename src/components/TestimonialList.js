import { testimonials } from '../testimonials';
import { useState } from 'react';
import { Dot } from './Dot';
import { Testimonial } from './Testimonial';

export function TestimonialList() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleSetActiveTestimonial = (num) => setActiveTestimonial(num);

  return (
    <section className="testimonials">
      <h2 className="testimonial__header">What they've said </h2>
      <div>
        {testimonials.map((testimonial, i) => (
          <Testimonial
            avatar={testimonial.avatar}
            author={testimonial.author}
            testimonial={testimonial.testimonial}
            key={testimonial.author}
            num={i}
            activeTestimonial={activeTestimonial}
          />
        ))}
      </div>
      <div class="dots-container">
        {Array.from({ length: testimonials.length }, (_, i) => (
          <Dot
            key={i}
            num={i}
            handleSetActiveTestimonial={handleSetActiveTestimonial}
            activeTestimonial={activeTestimonial}
          />
        ))}
      </div>
      <button className="btn btn--primary">Get Started</button>
    </section>
  );
}
