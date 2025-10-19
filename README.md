<h1>Accessible & Responsive Profile Card</h1>

A simple, accessible, and responsive profile card built with semantic HTML, modern CSS (Flexbox), and vanilla JavaScript.
The project adheres to accessibility standards, supports keyboard navigation, and includes data-testid attributes for automated testing.


<b>Live Demo</b>

Live URL: https://sammuaks2.github.io/Testale_profile_card/

GitHub Repository: https://github.com/SamMuaks2/Testale_profile_card


<b>Project Overview</b>

This project displays a user’s profile card including:

1. User name
2. Short biography
3. Current time (updated dynamically in hours, minutes, and seconds)
4. Avatar image
5. Social media links
6. Hobbies list
7. Dislikes list

All elements include specific data-testid attributes for testing and follow semantic HTML structure.


<b>Features</b>

1. Semantic HTML:
Uses <article>, <header>, <section>, <nav>, and <figure> appropriately.

2. Accessibility First:
Keyboard-focusable links and visible focus outlines.
ARIA labels where needed for screen readers.

3. Dynamic Time Display:
Displays the current time (HH:MM:SS), updated every second via JavaScript.

4. Responsive Design:
Vertical stacking on mobile.
Two-column layout (avatar + content) on wider screens.

5. Automated Testing Ready:
All required data-testid attributes are present and consistent.

6. Cross-Browser Compatible:
Works seamlessly across modern browsers.


<b>Data Test IDs</b>

| Element                 | `data-testid`                                               |
| ----------------------- | ----------------------------------------------------------- |
| Profile Card Root       | `test-profile-card`                                         |
| User Name               | `test-user-name`                                            |
| User Bio                | `test-user-bio`                                             |
| Current Time            | `test-user-time`                                            |
| Avatar Image            | `test-user-avatar`                                          |
| Social Links Container  | `test-user-social-links`                                    |
| Individual Social Links | `test-user-social-twitter`, `test-user-social-github`, etc. |
| Hobbies List            | `test-user-hobbies`                                         |
| Dislikes List           | `test-user-dislikes`                                        |


<b>Local Setup Instructions</b>

To run this project locally:
1. Clone the repository

git clone https://github.com/SamMuaks2/Testable_profile_card.git

2. Navigate to the project folder

cd Testable_profile_card

3. Open the project
Simply open index.html in your browser.


<b>Testing</b>
If you’re using an automated testing tool (like Jest + Testing Library):
Ensure all data-testid attributes match exactly as shown in the table above.

You can use my sample test snippet:

const card = screen.getByTestId("test-profile-card");
expect(card).toBeInTheDocument();

const name = screen.getByTestId("test-user-name");
expect(name.textContent).toMatch(/Mohri/);

Author: Mohri Samuel Muakpo