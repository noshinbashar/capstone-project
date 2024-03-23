# Project Title

"BrushBeat" 

combines artistic tools like brushes with the lively rhythm of creativity.

## Overview

The project aims to develop a painting application website where users can upload their artwork, receive feedback through comments, and engage in discussions. The platform will foster a community of artists, providing a space for sharing, critique, and inspiration.

### Problem

Existing platforms lack a dedicated space for artists to showcase their work and receive constructive feedback. Many artists struggle to find a supportive community where they can connect with like-minded individuals and improve their craft.

### User Profile

Artists of all levels can use this app to showcase their paintings, engage with other artists' work, and participate in discussions. 

### Features

Painting Upload: Allow users to upload images of their paintings with titles and descriptions.

Commenting: Enable users to comment on paintings, fostering discussions and feedback exchange.

Comment Deletion: Allow users to delete their own comments, as well as comments made by others on their paintings.

Responsive Design: Ensure the application is responsive and accessible across various devices and screen sizes.

### Tech Stack

Frontend: React.js, HTML, SCSS, JavaScript, Axios

Backend: Node.js, Express, JSON

### APIs

No external APIs will be used; all data will be managed through the custom-built server API.

### Sitemap

Learn More Page: This page serves as an introduction to the site, displaying the site's name, logo, motto and a captivating background image. It aims to provide users with their first impression of the site, focusing on aesthetics in this page. Upon clicking the "Learn More" button, users will be directed to the Home page.

Home page: The Home page offers comprehensive information about the platform, including its purpose, features, and ways for users to engage with it. It serves as the central hub for users to explore and understand the essence of the site.

Art Gallery: This page functions similarly to a social media feed, showcasing paintings uploaded by other users. Users can browse through a collection of paintings, interact with them through likes and comments, and discover new artwork.

My Gallery: In this personalized page, users can manage their own paintings. They can select and upload new paintings, view existing ones, and interact with comments received on their artwork. Additionally, users have the ability to reply to comments and delete comments.

### Endpoints

/api/paintings/:paintingID

GET: Retrieve paintings

POST: Upload a new painting


/api/paintings/:id/comments

POST: Add a new comment to a painting

/api/paintings/:id/comments/:commentId

DELETE: Delete a specific comment

### Auth

A dummy login page will be created initially, with plans to enhance authentication functionality if time permits (Nice-to-haves)

## Roadmap

Sprint 1 (Day 1-2)

Set up project structure and basic frontend layout;
Collect data and create the json file.

Sprint 2 (Day 3-4)

Create the full structure and styling (without functionality);
Ensure responsiveness across devices.

Sprint 3 (Day 5-6)

Create backend API endpoints for paintings and comments;
Integrate frontend with backend for fetching and displaying paintings;
Enable commenting on paintings;
Implement comment deletion functionality.

Sprint 4 (Day 7-8)
Perform testing and debugging;
Polish UI/UX and make any necessary improvements;
Finalize documentation and prepare for project submission.

## Nice-to-haves

Implement authentication system, allowing users to register, log in, and log out.
Search functionality for paintings or artists.
Add comment and like function in homepage 