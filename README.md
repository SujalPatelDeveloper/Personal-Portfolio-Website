# Sujal Patel | Premium Portfolio

A high-performance, aesthetically premium personal portfolio website built with **Vanilla HTML, CSS, and JavaScript**. This project utilizes **GSAP** for advanced animations and a **Clean Retro** design language inspired by elite professional portfolios.

## 🚀 Features

- **Elite Typography**: Utilizing `Space Grotesk` and `Inter` for a modern, high-impact reading experience.
- **GSAP Animations**: Smooth entrance animations, scroll-triggered reveals, and subtle parallax effects.
- **Custom Interaction**: A minimalist circle cursor with intelligent hover states and a responsive scroll progress indicator.
- **Multi-Page Architecture**: Organized directory structure with dedicated pages for Home, Work, About, and Contact.
- **Retro-Modern Aesthetic**: Warm cream palette with bold red accents, grain texture overlays, and structural ghost watermarks.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Functional Forms**: Integrated with **EmailJS** for dynamic client-side email routing.

## 📁 Project Structure

```text
root/
├── index.html          # Landing page (Hero experience)
├── css/
│   ├── common.css      # Core design system & layout
│   ├── home.css        # Landing page specific styles
│   ├── work.css        # Portfolio specific styles
│   └── contact.css     # Contact page layout
├── js/
│   └── main.js         # GSAP animations & interaction logic
├── assets/
│   ├── images/         # Project preview screenshots
│   └── resume/         # Downloadable CV files
└── pages/
    ├── work.html       # Projects showcase
    ├── about.html      # Professional summary
    └── contact.html    # Email & availability status
```

## 🛠️ Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom properties, Flexbox/Grid, and Grain filters.
- **JavaScript**: Core logic and DOM manipulation.
- **EmailJS**: Secure client-side delivery platform.
- **GSAP (GreenSock Animation Platform)**: 
  - `ScrollTrigger`: For reveal-on-scroll animations.
  - `Timeline`: For complex entrance sequences.

## 💻 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SujalPatelDeveloper/Personal-Portfolio-Website.git
   ```
2. **Configure EmailJS**:
   Open `js/main.js` and substitute your specific credentials:
   - `PPW_SERVICE_ID` & `PPW_TEMP_ID` (around line 357).
3. **Open the project**:
   Simply open `index.html` in your favorite browser or use a live server extension in your editor.

---
*Built with focus on performance and aesthetic excellence by Sujal Patel.*
