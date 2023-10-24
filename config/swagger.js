module.exports = {
    openapi: "3.1.0", // present supported openapi version
    info: {
        title: "Simple Todos API", // short title.
        description: "A simple todos API", //  desc.
        version: "1.0.0", // version number
        contact: {
            name: "Samir Hussein", // your name
            email: "samirhussein274@gmail.com", // your email
        },
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: {
        bearerAuth: []
    },
    servers: [
        {
            url: "http://localhost:8080/api", // url
            description: "Local server", // name
        },
    ],
    tags: [
        {
            name: "Auth", // name of a tag
        },
        {
            name: "User", // name of a tag
        },
        {
            name: "List", // name of a tag
        },
        {
            name: "Task", // name of a tag
        },
    ],
    // method of operation
    "paths": {
        "/register": {
            "post": {
                "tags": ["Auth"],
                "description": "Register new user",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                requestBody: {
                    // expected request body
                    content: {
                        // content-type
                        "application/json": {
                            schema: {
                                type: "object", // data type
                                required: ["name", "email", "password", "passwordConfirmation"],
                                properties: {
                                    name: {
                                        type: "string", // data type
                                        example: "samir", // example of a title
                                    },
                                    email: {
                                        type: "string", // data type
                                        format: "email",
                                        example: "samir@gmail.com", // example of a completed value
                                    },
                                    password: {
                                        type: "string", // data type
                                        example: "Td@12345678", // example of a completed value
                                    },
                                    passwordConfirmation: {
                                        type: "string", // data type
                                        example: "Td@12345678", // example of a completed value
                                    },
                                },
                            },
                        },
                    },
                },
                "responses": {
                    201: {
                        description: "User Created", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Recored Created Successfully.", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    500: {
                        description: "Internal server error", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "error message.", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    422: {
                        description: "Unprocessable Entity", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        errors: {
                                            type: "object", // data-type
                                            properties: {
                                                name: {
                                                    type: "string", // data-type
                                                    example: "Invalid value", // example of an id
                                                },
                                                email: {
                                                    type: "string", // data-type
                                                    example: "E-mail already in use.", // example of a title
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            }
        },

        "/login": {
            "post": {
                "tags": ["Auth"],
                "description": "Login a user",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                requestBody: {
                    // expected request body
                    content: {
                        // content-type
                        "application/json": {
                            schema: {
                                type: "object", // data type
                                required: ["email", "password"],
                                properties: {
                                    email: {
                                        type: "string", // data type
                                        format: "email",
                                        example: "samir@gmail.com", // example of a completed value
                                    },
                                    password: {
                                        type: "string", // data type
                                        example: "Td@12345678", // example of a completed value
                                    },
                                },
                            },
                        },
                    },
                },
                "responses": {
                    200: {
                        description: "User logged in", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "User logged in successfully.", // example of a title
                                        },
                                        token: {
                                            type: "string", // data-type
                                            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUzNGRkOTRmNWMwZTIyOWRjN2Q0NmNmIiwiZW1haWwiOiJzYW1pckBnbWFpbC5jb20iLCJpYXQiOjE2OTgwMjAwMDIsImV4cCI6MTY5ODAyNzIwMn0.RCyXwkkk_F7F3x0TvgHa6m6R3dN-ltOqy095y_X6BFE", // example of a title
                                        },
                                        expiresIn: {
                                            type: "string", // data-type
                                            example: "2h", // example of a title
                                        },
                                        data: {
                                            type: "object", // data-type
                                            properties: {
                                                user_id: {
                                                    type: "string", // data-type
                                                    example: "6534dd94f5c0e229dc7d46cf", // example of an id
                                                },
                                                name: {
                                                    type: "string", // data-type
                                                    example: "samir", // example of a title
                                                },
                                                email: {
                                                    type: "string", // data-type
                                                    example: "samir@gmail.com", // example of a title
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Invalid Credentials", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Invalid Credentials", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    422: {
                        description: "Unprocessable Entity", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        errors: {
                                            type: "object", // data-type
                                            properties: {
                                                password: {
                                                    type: "string", // data-type
                                                    example: "Invalid value", // example of an id
                                                },
                                                email: {
                                                    type: "object", // data-type
                                                    example: "E-mail is wrong!", // example of a title
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            }
        },
        "/logout": {
            "get": {
                "tags": ["Auth"],
                "description": "Logout a user",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                "responses": {
                    200: {
                        description: "User logged out", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "User logged out successfully.", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            }
        },


        "/user": {
            "get": {
                "tags": ["User"],
                "description": "Get the data of the authorized user",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        data: {
                                            type: "object", // data-type
                                            example: {
                                                user_id: "",
                                                name: "",
                                                email: "",
                                                lists: [{
                                                    list_id: "",
                                                    name: "",
                                                    description: "",
                                                    tasks: [{
                                                        task_id: "",
                                                        name: "",
                                                        description: "",
                                                        status: "",
                                                        start_date: "",
                                                        end_date: ""
                                                    }]
                                                }]
                                            }, // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },

            "put": {
                "tags": ["User"],
                "description": "Update the data of the authorized user",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                requestBody: {
                    // expected request body
                    content: {
                        // content-type
                        "application/json": {
                            schema: {
                                type: "object", // data type
                                properties: {
                                    name: {
                                        type: "string", // data type
                                        example: "samir", // example of a title
                                        required: false
                                    },
                                    old_password: {
                                        type: "string", // data type
                                        example: "Td@12345678", // example of a completed value
                                    },
                                    password: {
                                        type: "string", // data type
                                        example: "Td@123456", // example of a completed value
                                    },
                                    passwordConfirmation: {
                                        type: "string", // data type
                                        example: "Td@123456", // example of a completed value
                                    },
                                },
                            },
                        },
                    },
                },
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Recored Updated Successfully.", // example of an id
                                        },
                                        data: {
                                            type: "object", // data-type
                                            example: {
                                                user_id: "",
                                                name: "",
                                                email: "",
                                                lists: [{
                                                    list_id: "",
                                                    name: "",
                                                    description: "",
                                                    tasks: [{
                                                        task_id: "",
                                                        name: "",
                                                        description: "",
                                                        status: "",
                                                        start_date: "",
                                                        end_date: ""
                                                    }]
                                                }]
                                            }, // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    422: {
                        description: "Unprocessable Entity", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        errors: {
                                            type: "object", // data-type
                                            properties: {
                                                password: {
                                                    type: "string", // data-type
                                                    example: "Invalid value", // example of an id
                                                },
                                                name: {
                                                    type: "string", // data-type
                                                    example: "Invalid value", // example of a title
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },

            "delete": {
                "tags": ["User"],
                "description": "Delete the authorized user",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Recored Deleted Successfully.", // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },
        },

        "/list": {
            "get": {
                "tags": ["List"],
                "description": "Get the task",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        data: {
                                            type: "object", // data-type
                                            example: [{
                                                list_id: "",
                                                name: "",
                                                description: "",
                                                tasks: [{
                                                    task_id: "",
                                                    name: "",
                                                    description: "",
                                                    status: "",
                                                    start_date: "",
                                                    end_date: ""
                                                }]
                                            }, {
                                                list_id: "",
                                                name: "",
                                                description: "",
                                                tasks: [{
                                                    task_id: "",
                                                    name: "",
                                                    description: "",
                                                    status: "",
                                                    start_date: "",
                                                    end_date: ""
                                                }]
                                            }], // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },

            "post": {
                "tags": ["List"],
                "description": "Get the task",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                requestBody: {
                    // expected request body
                    content: {
                        // content-type
                        "application/json": {
                            schema: {
                                type: "object", // data type
                                required: ["name", "description"],
                                properties: {
                                    name: {
                                        type: "string", // data type
                                        example: "list name", // example of a completed value
                                    },
                                    description: {
                                        type: "string", // data type
                                        example: "list description", // example of a completed value
                                    },
                                    order: {
                                        type: "integer", // data type
                                        default: 100,
                                        example: 1, // example of a completed value
                                    }
                                },
                            },
                        },
                    },
                },
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Recored Updated Successfully.", // example of an id
                                        },
                                        data: {
                                            type: "object", // data-type
                                            example: {
                                                list_id: "",
                                                name: "",
                                                description: "",
                                                tasks: [{
                                                    task_id: "",
                                                    name: "",
                                                    description: "",
                                                    status: "",
                                                    start_date: "",
                                                    end_date: ""
                                                }]
                                            }, // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },
        },

        "/list/{list_id}": {
            "get": {
                "tags": ["List"],
                "description": "Get the list",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                parameters: [{
                    in: "path",
                    name: "list_id",
                    required: true,
                    type: "string"
                }],
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        data: {
                                            type: "object", // data-type
                                            example: {
                                                list_id: "",
                                                name: "",
                                                description: "",
                                                tasks: [{
                                                    task_id: "",
                                                    name: "",
                                                    description: "",
                                                    status: "",
                                                    start_date: "",
                                                    end_date: ""
                                                }]
                                            }, // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: "Not Found!", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "List Not Found!", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },

            "put": {
                "tags": ["List"],
                "description": "Get the task",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                parameters: [{
                    in: "path",
                    name: "list_id",
                    required: true,
                    type: "string"
                }],
                requestBody: {
                    // expected request body
                    content: {
                        // content-type
                        "application/json": {
                            schema: {
                                type: "object", // data type
                                properties: {
                                    name: {
                                        type: "string", // data type
                                        example: "list name", // example of a completed value
                                    },
                                    description: {
                                        type: "string", // data type
                                        example: "list description", // example of a completed value
                                    },
                                    order: {
                                        type: "integer", // data type
                                        example: 1, // example of a completed value
                                    }
                                },
                            },
                        },
                    },
                },
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Recored Updated Successfully.", // example of an id
                                        },
                                        data: {
                                            type: "object", // data-type
                                            example: {
                                                list_id: "",
                                                name: "",
                                                description: "",
                                                tasks: [{
                                                    task_id: "",
                                                    name: "",
                                                    description: "",
                                                    status: "",
                                                    start_date: "",
                                                    end_date: ""
                                                }]
                                            }, // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: "Not Found!", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "List Not Found!", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },

            "delete": {
                "tags": ["List"],
                "description": "Delete the list",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                parameters: [{
                    in: "path",
                    name: "list_id",
                    required: true,
                    type: "string"
                }],
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Recored Deleted Successfully.", // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: "Not Found!", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "List Not Found!", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },
        },

        "/list/{list_id}/task": {
            "get": {
                "tags": ["Task"],
                "description": "Get the task",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                parameters: [{
                    in: "path",
                    name: "list_id",
                    required: true,
                    type: "string"
                }],
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        data: {
                                            type: "object", // data-type
                                            example: [{
                                                task_id: "",
                                                name: "",
                                                description: "",
                                                status: "",
                                                start_date: "",
                                                end_date: ""
                                            }, {
                                                task_id: "",
                                                name: "",
                                                description: "",
                                                status: "",
                                                start_date: "",
                                                end_date: ""
                                            }], // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: "Not Found!", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "List Not Found!", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },

            "post": {
                "tags": ["Task"],
                "description": "Get the task",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                parameters: [{
                    in: "path",
                    name: "list_id",
                    required: true,
                    type: "string"
                }],
                requestBody: {
                    // expected request body
                    content: {
                        // content-type
                        "application/json": {
                            schema: {
                                type: "object", // data type
                                required: ["name", "description"],
                                properties: {
                                    name: {
                                        type: "string", // data type
                                        example: "task name", // example of a completed value
                                    },
                                    description: {
                                        type: "string", // data type
                                        example: "task description", // example of a completed value
                                    },
                                    order: {
                                        type: "integer", // data type
                                        example: 1, // example of a completed value
                                        default: 100
                                    },
                                    status: {
                                        type: "string", // data type
                                        example: "in_process", // example of a completed value
                                    },
                                    start_date: {
                                        type: "string", // data type
                                        format: "date"
                                    },
                                    end_date: {
                                        type: "string", // data type
                                        format: "date"
                                    }
                                },
                            },
                        },
                    },
                },
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        data: {
                                            type: "object", // data-type
                                            example: {
                                                task_id: "",
                                                name: "",
                                                description: "",
                                                status: "",
                                                start_date: "",
                                                end_date: ""
                                            }, // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: "Not Found!", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "List Not Found!", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },
        },

        "/list/{list_id}/task/{task_id}": {
            "get": {
                "tags": ["Task"],
                "description": "Get the task",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                parameters: [{
                    in: "path",
                    name: "list_id",
                    required: true,
                    type: "string"
                }, {
                    in: "path",
                    name: "task_id",
                    required: true,
                    type: "string"
                }],
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        data: {
                                            type: "object", // data-type
                                            example: {
                                                task_id: "",
                                                name: "",
                                                description: "",
                                                status: "",
                                                start_date: "",
                                                end_date: ""
                                            }, // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: "Not Found!", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Task Not Found!", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },

            "put": {
                "tags": ["Task"],
                "description": "Get the task",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                parameters: [{
                    in: "path",
                    name: "list_id",
                    required: true,
                    type: "string"
                }, {
                    in: "path",
                    name: "task_id",
                    required: true,
                    type: "string"
                }],
                requestBody: {
                    // expected request body
                    content: {
                        // content-type
                        "application/json": {
                            schema: {
                                type: "object", // data type
                                properties: {
                                    name: {
                                        type: "string", // data type
                                        example: "task name", // example of a completed value
                                    },
                                    description: {
                                        type: "string", // data type
                                        example: "task description", // example of a completed value
                                    },
                                    order: {
                                        type: "integer", // data type
                                        example: 1, // example of a completed value
                                    },
                                    status: {
                                        type: "string", // data type
                                        example: "in_process", // example of a completed value
                                    },
                                    start_date: {
                                        type: "string", // data type
                                        format: "date"
                                    },
                                    end_date: {
                                        type: "string", // data type
                                        format: "date"
                                    },
                                    list_id: {
                                        type: "string", // data type
                                        example: "653696c3d7269e75501033eb", // example of a completed value
                                    },
                                },
                            },
                        },
                    },
                },
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Recored Updated Successfully.", // example of an id
                                        },
                                        data: {
                                            type: "object", // data-type
                                            example: {
                                                task_id: "",
                                                name: "",
                                                description: "",
                                                status: "",
                                                start_date: "",
                                                end_date: ""
                                            }, // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: "Not Found!", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Task Not Found!", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },

            "delete": {
                "tags": ["Task"],
                "description": "Delete the list",
                "produces": ["application/json"],
                "consumes": ["application/json"],
                security: [{
                    bearerAuth: []
                }],
                parameters: [{
                    in: "path",
                    name: "list_id",
                    required: true,
                    type: "string"
                }, {
                    in: "path",
                    name: "task_id",
                    required: true,
                    type: "string"
                }],
                "responses": {
                    200: {
                        description: "the data of the authorized user", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "success", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Recored Deleted Successfully.", // example of an id
                                        },
                                    },
                                },
                            },
                        },
                    },
                    401: {
                        description: "Unauthorized", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Unauthorized", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                    404: {
                        description: "Not Found!", // response desc.
                        content: {
                            // content-type
                            "application/json": {
                                schema: {
                                    type: "object", // data type
                                    properties: {
                                        status: {
                                            type: "string", // data-type
                                            example: "error", // example of an id
                                        },
                                        message: {
                                            type: "string", // data-type
                                            example: "Task Not Found!", // example of a title
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
            },
        }
    },
};