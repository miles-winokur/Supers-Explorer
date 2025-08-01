# Supers Explorer - Final Project
By Miles Winokur - CS 80 Final Project



## Project Description

Supers Explorer is an interactive web application that allows users to learn about various superheroes and villains from Marvel and DC universes. 
The application features a dynamic interface where users can click on super's images to view detailed information including their alter ego, powers, publisher, and allegiance.



## How to Run/Execute the Project

Note: Due to browser security restrictions, this application requires a local web server to function properly. The XMLHttpRequest functionality used to load JSON data is blocked when opening HTML files directly in browsers.

### Main Method: Using VS Code Live Server (Recommended)
This is the approach I took

1. Install VS Code Live Server Extension:
   - Open VS Code
   - Go to Extensions
   - Search for "Live Server" by Ritwick Dey
   - Click "Install"

2. Run the Application:
   - Open the project folder in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - The application will open in your default browser with a local server (usually at `http://127.0.0.1:5500`)

### Other Methods: 

   - Using Python's Built-in Server
   - Using Node.js http-server
   - Using PHP Built-in Server



## Using the Application:
- The super gallery will load automatically
- Click on any super image to view detailed information
- Click again on the super card to return to the image view
- Navigate through different supers to explore their details



## Course Concepts Applied

### 1. HTML5
- Semantic HTML Structure: Used proper HTML5 elements with clear document structure
- Accessibility: Included alt attributes for images and proper heading hierarchy

### 2. CSS3 Styling
- Visual Design: Created an engaging interface with custom colors and styling
- Layout Management: Used CSS for grid-like hero display and proper spacing with borders (padding and margins)

### 3. JavaScript Client-Side Programming
- DOM Manipulation: Dynamically created and modified HTML elements
- Event Handling: Implemented click event listeners for interactive functionality
- Asynchronous Programming: Used XMLHttpRequest for AJAX calls to load data
- JSON Parsing: Converted JSON data to JavaScript objects for processing
- Callback Functions: Implemented proper asynchronous callback patterns
- jQuery: Used jQuery for shorthand JavaScript notation

### 4. JSON Data Documents
- Structured Data: Created comprehensive JSON file with hero information
- Data Organization: Organized hero data with properties like name, alter ego, powers, publisher, and allegiance
- Data Integration: Seamlessly integrated JSON data with the web interface



## Learning Outcomes

### XMLHttpRequest Mastery
- Learned how to use XMLHttpRequest, one of the newest topics covered in the course, which helped solidify this new knowledge through practical implementation
- Applied asynchronous HTTP requests to load JSON data dynamically, understanding the difference between synchronous and asynchronous operations

### Dynamic Data Handling
- Learned how to work with data dynamically as the HTML is built out based on how many data pieces are in the JSON file
- Learned how to create an application that automatically adapts to the number of supers in the JSON files

### Callback Function Understanding
- Gained deeper understanding of how callback functions work and why you cannot just call one with arguments but need to instead use it in an anonymous function because otherwise it would execute right away
- Learned the importance of proper callback implementation for handling asynchronous operations and user interactions

### Project Planning and Architecture
- Helped me plan out the bigger picture of creating a website, as I struggled to visualize how it would work and all look
- Once I created the JSON file, I realized I would have to look up each individual image, which led to discovering the SuperHero API
- Realized I could have just used the API for all the info in the first place, but rewriting the logic would have been a lot - however something to keep in mind for the future is that there are probably APIs available for most data needs
- Learned the importance of researching available resources and APIs before building custom solutions

## Credits

- Images: Sourced from the SuperHero API: https://superheroapi.com/index.html