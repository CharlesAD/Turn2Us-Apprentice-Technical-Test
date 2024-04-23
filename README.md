# Turn2Us-Apprentice-Technical-Test

Welcome to my Turn2Us Apprentice Technical Test project. This project aims to demonstrate a website designed with a strong focus on accessibility and responsiveness, ensuring a seamless user experience across all devices and assistive technologies.

## User Stories



### Homepage Access:
As a user,
I want to access a homepage
So that I can learn about the eligibility for benefits and use the age checker
#### Acceptance Criteria: 
- The homepage must load within 5 seconds of accessing the link
- The home page must clearly display a call-to-action for the age checker

### Age Input:
As a benefit seeker,
I want to enter my date of birth
So that the system can verify if I am eligible to proceed based on age requirements
#### Acceptance Criteria: 
- The system must allow the user to input their date of birth.
- The system must validate the input to ensure it is a valid date format.


### Successful Age Verification:
As a eligible user,
I want to be directed to the success page after age verification
So that I can proceed with accessing benefits information.
#### Acceptance Criteria: 
- Upon successful age verification, the user must be redirected to a success page.
- The success page must confirm the user's eligibility and provide a link or direction to access further benefits information.

### Failed Age Verification:
As a user under the age requirement,
I want to receive immediate feedback on the homepage
So that I understand why I cannot proceed and what options or actions I can take next.
#### Acceptance Criteria: 
- If age verification fails, the system must display a clear and specific error message explaining why.
- The system must provide suggestions or actions the user can take next.

### Accessibility:
As a user with disabilities,
I want to interact with web pages that adhere to good accessibility practices
So that I can easily navigate and use the site without barriers
#### Acceptance Criteria: 
- All web pages must comply with WCAG 2.1 AA standards.
- The system must pass accessibility checks from tools like Lighthouse.

### Input Validation:
As a user,
I want to be restricted to entering only valid dates for my date of birth
So that I avoid input errors and the system accurately validates my eligibility.
#### Acceptance Criteria: 
- The system must reject non-numeric inputs for age fields and provide an error message.
- The system must confirm input is within a realistic age range (e.g., 0-120 years).

### Mobile Accessibility:
As a mobile user,
I want to access all features of the website from my phone or tablet
So that I can use the services on-the-go without functionality loss.
#### Acceptance Criteria: 
- The website must be fully responsive and functionally equivalent across all devices and screen sizes.
- Performance tests must confirm that key features are accessible and performant on mobile devices.


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