import type { Testimonial } from "../types/testimonials";

/**
 * TESTIMONIALS_1: Long quotes (more than 50 characters)
 * TESTIMONIALS_2: Short quotes (50 characters or fewer)
 */

// Long quotes (more than 50 characters)
export const TESTIMONIALS_1: Testimonial[] = [
  {
    authorAvatar: "https://via.placeholder.com/400x400.png?text=Person1",
    authorName: "Example Person",
    authorTagline: "Job Title at Company",
    url: "https://example.com/testimonial",
    quote: "This is an example testimonial quote. Replace with real testimonials.",
  },
];

// Short quotes (50 characters or fewer)
export const TESTIMONIALS_2: Testimonial[] = [
  {
    authorAvatar: "https://via.placeholder.com/400x400.png?text=Person2",
    authorName: "Another Person",
    authorTagline: "Role at Organization",
    url: "https://example.com/another-testimonial",
    quote: "Short testimonial example",
  },
];
