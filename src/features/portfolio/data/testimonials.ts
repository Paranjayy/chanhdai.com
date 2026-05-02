import type { Testimonial } from "../types/testimonials";

/**
 * TESTIMONIALS_1: Long quotes (more than 50 characters)
 * TESTIMONIALS_2: Short quotes (50 characters or fewer)
 *
 * These are placeholder testimonials to maintain layout aesthetics.
 * Replace with real testimonials as you receive them!
 */

// Long quotes (more than 50 characters)
export const TESTIMONIALS_1: Testimonial[] = [
  {
    authorAvatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Felix&backgroundColor=c0aede",
    authorName: "Mentor",
    authorTagline: "Advisor",
    url: "#",
    quote:
      "Impressive dedication to learning and building. Shows great promise in software development.",
  },
  {
    authorAvatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Aneka&backgroundColor=b6e3f4",
    authorName: "Peer",
    authorTagline: "Fellow Builder",
    url: "#",
    quote:
      "Always willing to help others learn and grow. A true team player with great coding skills.",
  },
  {
    authorAvatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Liam&backgroundColor=d1d4f9",
    authorName: "Collaborator",
    authorTagline: "Open Source Contributor",
    url: "#",
    quote:
      "Clean code, thoughtful PRs, and always eager to contribute. Great to work with on open source projects.",
  },
];

// Short quotes (50 characters or fewer)
export const TESTIMONIALS_2: Testimonial[] = [
  {
    authorAvatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Zoe&backgroundColor=ffd5dc",
    authorName: "Friend",
    authorTagline: "Developer Community",
    url: "#",
    quote: "Builds awesome stuff. Period. 🔥",
  },
  {
    authorAvatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Max&backgroundColor=c0aede",
    authorName: "Classmate",
    authorTagline: "Study Group",
    url: "#",
    quote: "The go-to person for code reviews.",
  },
];
