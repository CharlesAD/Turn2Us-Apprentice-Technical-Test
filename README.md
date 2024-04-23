# Turn2Us-Apprentice-Technical-Test

Welcome to my Turn2Us Apprentice Technical Test project. This project aims to demonstrate a website designed with a strong focus on accessibility and responsiveness, ensuring a seamless user experience across all devices and assistive technologies.

## Design Decisions

### Semantic HTML

- I used <section> tags to define sections within <main>, as each div that groups content could be seen as a standalone section that has a specific grouping.

### Navigation

- If I were to tadd more navigation links, <nav> is in place to indicate the elements provided are navigation links.

### Visible Focus States 

- I ensured that each interactive element has a visbile focus indicator. I did this using CSS and the `:focus` class. This focus style help people determine which interactive element has keyboard focus. This lets them know that they can perform actions like activating a button or navigating to a link's destination.

## Mobile Responsive

- Introduced the use of media queries to ensure the website adjusts layout and functionality effectively across different screen sizes, enhancing usability on mobile devices.

## Accessibility Assessment

- Acheived 100% on the Google Developer Tool's Lighthouse Accessibility test. Went through the checks that the tool said should be looked at manually
- Manually conducted a test of the keyboard navigation on the website to ensure elements and pages could be accessed and interacted with via the keyboard.
- Manually went through the A11y Project Checklist to ensure the website complied with the recommmeded guidelines
- Colour's layered on top of eachother have all been tested and passed WebAim's colour contrast checker to ensure visibility to all users.