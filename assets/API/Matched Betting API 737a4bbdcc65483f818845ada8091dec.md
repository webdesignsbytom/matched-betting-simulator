# Matched Betting API

### USER

- **POST -** create a new user
    
    ****************Request****************
    
    - ID, (required), INT
    - email (required, unique), VarChar(250)
    - password (required) VarChar(100)
    - username, (unique), VarChar(25) Optional
    
    **Responses**
    
    **201**  - successful

    **404** - missing fields in body
    
    **409** - Data already exists
    
    **500** - server error
    
    ```jsx
    POST /user/register
    
    // REQUEST SAMPLE
    {
    	"email": "user@usermail.com",
    	"password": "123",
    }
    
    // RESPONSE SAMPLE
    // 201 CREATED
    {
    	"createdUser": {
    		"id": 1,
    		"email": "ada@defnotumbrella.org.rc",		
    		"userName": "",
    	}
    }
    // 409 BAD REQUEST
    {
    	"error": {
    		"msg": "Email address already registered"
    	}
    }
    // 500 BAD REQUEST
    {
    	"error": {
    		"msg": "internal server error"
    	}
    }
    
    ```
    
- **GET-** read user by id
    
    **Path Parameters**
    
    - INT
    
    **Responses**
    
    **200**  - successful
    
    404 - user does not exist
    
    **500** - server error
    
    ```jsx
    GET /user/(id)
    
    // RESPONSE SAMPLE
    // 200 OK
    {
    		"id": 1,
    		"email": "userUpdated@usermail.com",
    		"userName": "user",
    		"profileImage": "http://www.img.com"
    }
    
    // 404 user not found
    {
    	"error": {
    		"msg": "user not found"
    	}
    }
    // 500 BAD REQUEST
    {
    	"error": {
    		"msg": "internal server error"
    	}
    }
    ```
    
- **PUT -** update user by id
    
    **Path Parameters**
    
    - ID
    
    **Request**
    
    - ID, (required), INT
    - email (unique), STRING
    - userName, (unique), VARCHAR(25)
    - first_name VarChar(55)
    - surname VarChar(55)
    - biography VarChar(500)
    - profile_image VarChar(200)
    - bank Int
    
    **Responses**
    
    **201**  - successful
    
    404 - user not found
    
    **500** - server error
    
    ```jsx
    PUT /user/(id)
    
    // REQUEST SAMPLE
    {
    		"id": 1,
    		"email": "user@usermail.com",
    		"password": "123"
    }
    
    // RESPONSE SAMPLE
    // 200 OK
    {
    		"id": 1,
    		"email": "userUpdated@usermail.com",
    		"userName": "user",
    		"profile": {
    				"first_name": "name",
    				"surname": "name",
            "biography": "string",
            "profile_image": "string url",
    				"bank": 10000000,
        }
    	}
    }
    // 400 BAD REQUEST
    {
    	"error": {
    		"msg": "Email address already registered"
    	}
    }
    // 400 BAD REQUEST
    {
    	"error": {
    		"msg": "Username is already taken"
    	}
    }
    
    // 404 user not found
    {
    	"error": {
    		"msg": "user not found"
    	}
    }
    
    // 500 BAD REQUEST
    {
    	"error": {
    		"msg": "internal server error"
    	}
    }
    ```
    

### EVENTS

- **GET-** get all sports events
    
    **Responses**
    
    **200**  - successful
    
    **500** - server error
    
    ```jsx
    GET/ Event
    
    // RESPONSE SAMPLE
    // 200 OK
    {
    		"id": 1,
    		"name": "Everton vs Chelsea",
    		"teams": ["everton", "chelsea"],
        "odds": "5",
        "start-time": "18:00"
    },
    
    // 500 BAD REQUEST
    {
    	"error": {
    		"msg": "internal server error"
    	}
    }
    
    ```
    
- **GET-** get event by id
    
    **Path Parameters**
    
    - INT
    
    **Responses**
    
    **200**  - successful
    
    **404**  - id not found
    
    **500** - server error
    
    ```jsx
    GET/product/(id)
    
    // RESPONSE SAMPLE
    // 200 OK
    {
    		"id": 1,
    		"name": "Everton vs Chelsea",
    		"teams": ["everton", "chelsea"],
        "odds": "5",
        "start-time": "18:00"
    },
    // 404 BAD REQUEST
    {
    	"error": {
    		"msg": "Match with that id cant be found"
    	}
    }
    // 500 BAD REQUEST
    {
    	"error": {
    		"msg": "internal server error"
    	}
    }
    ```
    
- **POST -** create new event
    
    ****************Request****************
    
    - ID, (required), INT
    - role, admin
    - teams, array
    - odds, default 5
    
    **Responses**
    
    **200**  - successful
    
    **409** - Data already exists
    
    **500** - server error
    
    ```jsx
    GET/product/(id)
    
    // RESPONSE SAMPLE
    // 200 OK
    {
    		"id": 1,
    		"name": "Everton vs Chelsea",
    		"teams": ["everton", "chelsea"],
        "odds": "5",
        "start-time": "18:00"
    },
    // 409 BAD REQUEST
    {
    	"error": {
    		"msg": "Match with that title already exists"
    	}
    }
    // 500 BAD REQUEST
    {
    	"error": {
    		"msg": "internal server error"
    	}
    }
    
    ```
    

### POSTS

- **POST -** create a new post
    
    ****************Request****************
    
    - ID, (required), Int
    - userId, Int
    - title (required), VarChar(22)
    - content (required) VarChar(1500)
    
    **Responses**
    
    **201**  - successful
    
    **409** - Data already exists
    
    **409** - missing field from body
    
    **500** - server error
    
    ```jsx
    POST /user/register
    
    // REQUEST SAMPLE
    {
    	"title": "string",
      "content": "string"
    }
    
    // RESPONSE SAMPLE
    // 201 CREATED POST
    {
    	"createdPost": {
    		"id": 1,
    		"title": "string",		
    		"content": "string",
        "comments": [],
    		"likes": [],
    		"upvotes": 0,
    		"isPinned": false
    	}
    }
    // 409 BAD REQUEST
    {
    	"error": {
    		"msg": "Post with that title already exists"
    	}
    }
    // 409 MISSING FIELD
    {
    	"error": {
    		"msg": "Missing title or content from post body"
    	}
    }
    // 500 BAD REQUEST
    {
    	"error": {
    		"msg": "internal server error"
    	}
    }
    
    ```
    
- **GET-** read post by id
    
    **Path Parameters**
    
    - INT
    
    **Responses**
    
    **200**  - successful
    
    **404** - post does not exist
    
    **500** - server error
    
    ```jsx
    GET /user/(id)
    
    // RESPONSE SAMPLE
    // 200 OK
    {
    	"post": {
    		"id": 1,
    		"title": "string",		
    		"content": "string",
        "comments": [],
    		"likes": [],
    		"upvotes": 0,
    		"isPinned": false
    	}
    }
    
    // 404 user not found
    {
    	"error": {
    		"msg": "user not found"
    	}
    }
    // 500 BAD REQUEST
    {
    	"error": {
    		"msg": "internal server error"
    	}
    }
    ```
    
- **PUT -** update post by id
    
    **Path Parameters**
    
    - ID
    
    ****************Request****************
    
    - ID, (required), Int
    - userId, Int
    - title (required), VarChar(22)
    - content (required) VarChar(1500)
    
    **Responses**
    
    **201**  - successful
    
    **404** - post not found
    
    **500** - server error
    
    ```jsx
    PUT /user/(id)
    
    // REQUEST SAMPLE
    {
    	"post": {
    		"id": 1,
    	}
    }
    
    // RESPONSE SAMPLE
    // 200 OK
    {
    	"post": {
    		"id": 1,
    		"title": "string",		
    		"content": "string",
        "comments": [],
    		"likes": [],
    		"upvotes": 0,
    		"isPinned": false
    	}
    }
    // 404 post not found
    {
    	"error": {
    		"msg": "post not found"
    	}
    }
    
    // 500 BAD REQUEST
    {
    	"error": {
    		"msg": "internal server error"
    	}
    }
    ```