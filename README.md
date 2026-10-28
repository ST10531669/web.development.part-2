# Mhlongo's Royal Treatment

Beauty and personal-care services website.

## Project overview
This project provides information about Mhlongo's Royal Treatment, including its story, nail services, massage therapy, prices supplied for the assignment, contact details and appointment enquiry form.

## Pages
- `home.html` — homepage and service highlights
- `about.html` — business background, mission and values
- `service.html` — service cards, prices and FAQ accordion
- `gallery.html` — responsive image gallery with click-to-enlarge lightbox
- `enquiry.html` — appointment request form with JavaScript validation
- `contact.html` — contact details, contact form and interactive OpenStreetMap

## Technologies
- HTML5 for page structure and semantic content
- CSS3 for responsive layout, branding, transitions and visual design
- JavaScript for mobile navigation, FAQ accordion, date restrictions, URL-based service selection, client-side form validation, confirmation messages and reveal animations
- Leaflet and OpenStreetMap for the interactive map on the Contact page

## Run the website
1. Open the project folder in Visual Studio Code.
2. Keep the HTML files in the project root and the CSS and JavaScript files in their folders.
3. Ensure the images in the `images` folder use the exact filenames referenced by the HTML.
4. Open `home.html` with Live Server, or open it in a browser.
5. An internet connection is required for the external Leaflet map libraries and OpenStreetMap tiles.

## Important notes
- The map position in `contact.html` is an example near Pietermaritzburg, not a confirmed business address. Replace the coordinates and popup text with the correct location before publishing.
- The booking and contact forms currently validate input in the browser only. They do not email, store, or transmit customer information. A backend or form service is needed for real submissions.
- Prices are the values supplied for this project. Confirm that they are current before publishing.
- Keep all image filenames consistent with the names used in the HTML.

## Part 3 – Enhancing Functionality and SEO changelog

### Added
- Added page-specific title tags, meta descriptions, author information and relevant keywords.
- Added semantic HTML landmarks, a skip link, descriptive image alt text and accessible labels.
- Added a responsive mobile navigation menu with JavaScript.
- Added an accessible FAQ accordion on the Services page.
- Added appointment form validation for name, phone number, email, service, date, time and consent.
- Added a minimum date rule so customers cannot select a past appointment date.
- Added automatic service selection when a customer chooses “Book this service” from the Services page.
- Added a front-end appointment request confirmation message.
- Added contact form validation and feedback.
- Added an interactive Leaflet/OpenStreetMap map example on the Contact page.
- Added a responsive gallery page with a keyboard-accessible image lightbox.
- Added scroll-reveal animations and reduced-motion support.
- Added automatic copyright year updates.

### Improved
- Corrected the HTML structure so each page has one document, head and body.
- Improved responsive layouts for phones, tablets and desktop screens.
- Improved form accessibility with labels, error messages, focus states and live status messages.
- Improved navigation links and calls to action.
- Replaced invalid CSS declarations with standard CSS grid, flexbox and spacing rules.

### Limitations / future improvements
- Forms are front-end demonstrations only. Connect a secure backend or form service to receive actual submissions.
- Replace the example map coordinates with the business's verified location.
- Test all links and image filenames in the final project folder.
- Test the website on mobile and desktop and validate HTML/CSS before deployment.
- Deploy the final website using GitHub Pages, Netlify or another hosting platform.

## SEO checklist
- Use a unique page title and meta description on each page.
- Use one clear main heading per page and descriptive subheadings.
- Use meaningful image alt text and compressed images.
- Keep navigation links descriptive and working.
- Check mobile usability, accessibility and loading performance.
- Submit a sitemap if a public domain is used.
