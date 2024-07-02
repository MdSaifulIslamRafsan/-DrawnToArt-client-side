
Website Name: DrawnToArt

Category's Name : Painting and Drawing

Live Site URL: https://assignment-no-10-drawntoart.netlify.app/

server-side :-  https://github.com/MdSaifulIslamRafsan/-DrawnToArt-server-side



## Overview

The project is a painting and drawing-related website aimed at providing a platform for artists of all levels to explore, create, and share their passion for visual art. It offers a range of features and functionalities tailored to cater to the diverse needs and interests of the artistic community.

## Installation Steps:- 

- Clone the Repository:

```sh
git clone https://github.com/MdSaifulIslamRafsan/-DrawnToArt-client-side.git
cd -DrawnToArt-client-side
```

- Install Dependencies:

```sh
npm install
```

- Set Up Environment Variables:
Create a .env file in the root directory and add the following:

```sh
# Firebase Configuration
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id

# Base URL of the Application
VITE_BASEURL=your_base_url

```
- Run the Application:

```sh
npm run dev
```

# Features:-

- Add: Logged-in users can easily contribute to add new painting and drawing-related content to the website

- Delete: Users possess the capability to remove their own contributed content 

- Update: Users have the flexibility to modify existing painting and drawing-related data, enabling them to refine artwork details, amend comments, or update profile information.



## Technologies Used
- Frontend: React , tailwind
- Backend: Express
- Database: MongoDB
- Hosting & Authentication: Firebase
