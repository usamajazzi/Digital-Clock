Digital Clock
A simple, modern digital clock built with HTML, CSS, and JavaScript. It displays the current time in hours, minutes, and seconds, with an AM/PM indicator, and updates every second. The design is sleek and tech-inspired, perfect for learning or showcasing basic web development skills.

Features
Displays current time in 12-hour format (e.g., 03:56:11).
AM/PM indicator in a circular badge.
Leading zeros for single-digit hours, minutes, and seconds (e.g., 05 instead of 5).
Updates every second using setInterval.
Responsive design with a centered layout.
Modern UI with a dark theme, white numbers, and an orange AM/PM badge.

Technologies Used
HTML: Structure of the clock.
CSS: Styling, including flexbox for layout and pseudo-elements for the AM/PM badge.
JavaScript: Logic to fetch and update the time, using Date and setInterval.


JavaScript:
Fetches the current time using new Date().
Converts to 12-hour format and sets AM/PM.
Adds leading zeros for single-digit numbers.
Updates the DOM every second with setInterval.