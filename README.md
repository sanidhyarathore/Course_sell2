## Course Selling Website

### Description

This project is a course selling application where users can sign up, view courses, and purchase them. Admins can also sign up, create courses, and manage them. The application utilizes JSON Web Tokens for authentication.

**Note:** In authenticated requests, JWT needs to be sent in the headers (`Authorization: Bearer <actual token>`).

### Routes

#### Admin Routes:

- **POST /admin/signup**
  - Description: Creates a new admin account.
  - Example
    - Input Body: `{ "username": "admin", "password": "pass" }`
    - Output: `{ "message": "Admin created successfully" }`

- **POST /admin/signin**
  - Description: Logs in an admin account.
  - Example
    - Input Body: `{ "username": "admin", "password": "pass" }`
    - Output: `{ "token": "your-token" }`

- **POST /admin/courses**
  - Description: Creates a new course.
  - Example
    - Input: Headers: `{ "Authorization": "Bearer <your-token>" }`, Body: `{ "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com" }`
    - Output: `{ "message": "Course created successfully", "courseId": "new course id" }`

- **GET /admin/courses**
  - Description: Returns all the courses.
  - Example
    - Input: Headers: `{ "Authorization": "Bearer <your-token>" }`
    - Output: `{ "courses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

#### User routes

- **POST /users/signup**
  - Description: Creates a new user account.
  - Example
    - Input: `{ "username": "user", "password": "pass" }`
    - Output: `{ "message": "User created successfully" }`

- **POST /users/signin**
  - Description: Logs in a user account.
  - Example
    - Input: `{ "username": "user", "password": "pass" }`
    - Output: `{ "token": "your-token" }`

- **GET /users/courses**
  - Description: Lists all the courses.
  - Example
    - Input: Headers: `{ "Authorization": "Bearer <your-token>" }`
    - Output: `{ "courses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

- **POST /users/courses/:courseId**
  - Description: Purchases a course. Replace `:courseId` in the URL path with the ID of the course to be purchased.
  - Example
    - Input: Headers: `{ "Authorization": "Bearer <your-token>" }`
    - Output: `{ "message": "Course purchased successfully" }`

- **GET /users/purchasedCourses**
  - Description: Lists all the courses purchased by the user.
  - Example
    - Input: Headers: `{ "Authorization": "Bearer <your-token>" }`
    - Output: `{ "purchasedCourses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`
