1. git clone git@github.com:ekarpets/express-hometask.git
2. npm run start-local
3. Use the GET requests below for get data
  http://localhost:3000/users/
  http://localhost:3000/students/
  http://localhost:3000/articles/
4.Use the POST below request for adding new user 
http://localhost:3000/user/ 
and add the new user to the Body 
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@example.com",
    "password": "mysecretpassword",
    "age": 42,
    "address": {},
    "createdAt": "2023-11-06T08:12:34.567Z",
    "tags": []
  }

5. Use the GET request for getting user by {email}
http://localhost:3000/user/{email}
6. Use the PATCH request for updating user's address by {email}
http://localhost:3000/user/{email}
with new body data like this
{
  "street": "123 Main St",
  "city": "Downtown",
  "state": "LA",
  "zip": "38472",
  "country": "USA"
}

7. Use DELETE request to delete user by {email}
http://localhost:3000/user/{email}

8. Use GET request to getting the student with the lower score for hometask
http://localhost:3000/students/min-homework-scores

9. 4.Use the POST below request for adding new acticle 
http://localhost:3000/article/ 
and add the new user to the Body 
 {  
    "name": "JS - introduction",
    "description": "JS - text",
    "type": "j",
    "tags": ["k", "7", "3"]
  }

10. Use PATCH request to update the acticle tag's array
http://localhost:3000/articles/{name} 
with new body data like this
["k", "7", "3"]
