define({ "api": [
  {
    "type": "delete",
    "url": "/albums/:album",
    "title": "Delete Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "album",
            "description": "<p>Album identifier</p>"
          }
        ]
      }
    },
    "group": "Albums",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"error\":\"You have no rights to delete this album\",\n     \"code\":403\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/AlbumController.php",
    "groupTitle": "Albums",
    "name": "DeleteAlbumsAlbum"
  },
  {
    "type": "get",
    "url": "/albums/",
    "title": "Get Albums List",
    "group": "Albums",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\": 1,\n         \"author\": 21,\n         \"name\": \"Kitties\",\n         \"active\": 1,\n         \"created_at\": \"2016-05-15 10:13:14\",\n         \"updated_at\": \"2016-05-15 10:13:14\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"error\": \"token_not_provided\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/AlbumController.php",
    "groupTitle": "Albums",
    "name": "GetAlbums"
  },
  {
    "type": "get",
    "url": "/albums/:album",
    "title": "Get Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "album",
            "description": "<p>Album identifier</p>"
          }
        ]
      }
    },
    "group": "Albums",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"author\": 1,\n    \"name\": \"Kitties\",\n    \"active\": 1,\n    \"created_at\": \"2016-04-28 09:09:03\",\n    \"updated_at\": \"2016-04-28 09:09:03\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"No query results for model [App\\\\Album].\",\n    \"code\": 404\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/AlbumController.php",
    "groupTitle": "Albums",
    "name": "GetAlbumsAlbum"
  },
  {
    "type": "post",
    "url": "/albums/",
    "title": "Add New Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "author",
            "description": "<p>Author identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Album name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "active",
            "description": "<p>Album state</p>"
          }
        ]
      }
    },
    "group": "Albums",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"name\": \"Kitties\",\n    \"author\": \"1\",\n    \"active\": \"1\",\n    \"updated_at\": \"2016-04-28 09:09:03\",\n    \"created_at\": \"2016-04-28 09:09:03\",\n    \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n    \"validation_errors\": [\n        \"The author field is required.\",\n        \"The name field is required.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/AlbumController.php",
    "groupTitle": "Albums",
    "name": "PostAlbums"
  },
  {
    "type": "put",
    "url": "/albums/:album",
    "title": "Update Album Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "album",
            "description": "<p>Album identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "author",
            "description": "<p>Author identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Album name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "active",
            "description": "<p>Album state</p>"
          }
        ]
      }
    },
    "group": "Albums",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n    \"validation_errors\": [\n        \"The name field is required.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/AlbumController.php",
    "groupTitle": "Albums",
    "name": "PutAlbumsAlbum"
  },
  {
    "type": "post",
    "url": "/login/",
    "title": "Log In",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"token\": <token>\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n     \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/Auth/AuthController.php",
    "groupTitle": "Login",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/reset/",
    "title": "Generate Token",
    "group": "Password_Reset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n    \"error\": \"No email provided\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/Auth/PasswordController.php",
    "groupTitle": "Password_Reset",
    "name": "PostReset"
  },
  {
    "type": "post",
    "url": "/reset/:token",
    "title": "Reset Password",
    "group": "Password_Reset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Password reset token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n    \"error\": \"Token has already been used\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/Auth/PasswordController.php",
    "groupTitle": "Password_Reset",
    "name": "PostResetToken"
  },
  {
    "type": "get",
    "url": "/albums/:album/permissions",
    "title": "Get Permission List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "album",
            "description": "<p>Album identifier</p>"
          }
        ]
      }
    },
    "group": "Permissions",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 23,\n        \"role\": \"client\",\n        \"username\": \"fourth\",\n        \"name\": \"meow\",\n        \"email\": \"mrm1r1mrte1st@gmail.com\",\n        \"created_at\": \"2016-05-15 10:09:55\",\n        \"updated_at\": \"2016-05-15 10:09:55\",\n        \"access\": \"full\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"error\": \"You have no rights to use this function\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/PermissionController.php",
    "groupTitle": "Permissions",
    "name": "GetAlbumsAlbumPermissions"
  },
  {
    "type": "post",
    "url": "/albums/:album/permissions",
    "title": "Set Permission",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "album",
            "description": "<p>Album identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access",
            "description": "<p>Access level</p>"
          }
        ]
      }
    },
    "group": "Permissions",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"error\": \"You have no rights to use this function\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/PermissionController.php",
    "groupTitle": "Permissions",
    "name": "PostAlbumsAlbumPermissions"
  },
  {
    "type": "delete",
    "url": "/albums/:album/photos/:photo",
    "title": "Delete Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "album",
            "description": "<p>Album identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photo",
            "description": "<p>Photo identifier</p>"
          }
        ]
      }
    },
    "group": "Photos",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"error\": \"You have no rights to delete this photo\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/PhotoController.php",
    "groupTitle": "Photos",
    "name": "DeleteAlbumsAlbumPhotosPhoto"
  },
  {
    "type": "get",
    "url": "/albums/:album/photos",
    "title": "View Photos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "album",
            "description": "<p>Album identifier</p>"
          }
        ]
      }
    },
    "group": "Photos",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"album\": 1,\n        \"image\": \"c2db1f45e648c4084b51281f3b067803.png\",\n        \"created_at\": \"2016-05-15 10:18:28\",\n        \"updated_at\": \"2016-05-15 10:18:28\",\n        \"full_path\": \"http://localhost:85/img/1/c2db1f45e648c4084b51281f3b067803.png\",\n        \"resized_existing\": [\n            {\n                \"id\": 1,\n                \"photo\": 1,\n                \"size\": \"100x100\",\n                \"src\": \"c2db1f45e648c4084b51281f3b067803100x100.png\",\n                \"status\": \"new\",\n                \"comment\": null,\n                \"created_at\": \"2016-05-15 10:18:28\",\n                \"updated_at\": \"2016-05-15 11:33:32\",\n                \"resized_full_path\": \"http://localhost:85/resized/1/c2db1f45e648c4084b51281f3b067803100x100.png\"\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"error\": \"You cannot view this album\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/PhotoController.php",
    "groupTitle": "Photos",
    "name": "GetAlbumsAlbumPhotos"
  },
  {
    "type": "get",
    "url": "/albums/:album/photos/:photo",
    "title": "View Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "album",
            "description": "<p>Album identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photo",
            "description": "<p>Photo identifier</p>"
          }
        ]
      }
    },
    "group": "Photos",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"id\": 1,\n     \"album\": 1,\n     \"image\": \"c2db1f45e648c4084b51281f3b067803.png\",\n     \"created_at\": \"2016-05-15 10:18:28\",\n     \"updated_at\": \"2016-05-15 10:18:28\",\n     \"full_path\": \"http://localhost:85/img/1/c2db1f45e648c4084b51281f3b067803.png\",\n     \"resized_existing\": [\n         {\n             \"id\": 1,\n             \"photo\": 1,\n             \"size\": \"100x100\",\n             \"src\": \"c2db1f45e648c4084b51281f3b067803100x100.png\",\n             \"status\": \"new\",\n             \"comment\": null,\n             \"created_at\": \"2016-05-15 10:18:28\",\n             \"updated_at\": \"2016-05-15 11:33:32\",\n             \"resized_full_path\": \"http://localhost:85/resized/1/c2db1f45e648c4084b51281f3b067803100x100.png\"\n         }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"error\": \"You have no rights to view this photo\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/PhotoController.php",
    "groupTitle": "Photos",
    "name": "GetAlbumsAlbumPhotosPhoto"
  },
  {
    "type": "post",
    "url": "/albums/:album/photos",
    "title": "Add photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "album",
            "description": "<p>Album identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "Image",
            "optional": false,
            "field": "Image",
            "description": ""
          }
        ]
      }
    },
    "group": "Photos",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n {\n     \"album\": 1,\n     \"image\": \"c1faa48108342295c9ee7263ec1ab38d.png\",\n     \"updated_at\": \"2016-05-15 19:26:04\",\n     \"created_at\": \"2016-05-15 19:26:04\",\n     \"id\": 3,\n     \"full_path\": \"http://localhost:85/img/1/c1faa48108342295c9ee7263ec1ab38d.png\",\n     \"resized_existing\": []\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"error\": \"You have no rights to add photos to this album\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/PhotoController.php",
    "groupTitle": "Photos",
    "name": "PostAlbumsAlbumPhotos"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User identifier</p>"
          }
        ]
      }
    },
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"error\":\"This action is unauthorized.\",\n     \"code\":403\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/UserController.php",
    "groupTitle": "Users",
    "name": "DeleteUsersId"
  },
  {
    "type": "get",
    "url": "/users/",
    "title": "Get User List",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\": 1,\n         \"role\": \"admin\",\n         \"name\": \"first\",\n         \"username\": \"first\",\n         \"phone\": \"+380482407401\",\n         \"created_at\": \"2016-04-25 13:38:26\",\n         \"updated_at\": \"2016-04-25 13:38:26\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"error\":\"You have no acces to this function\",\n     \"code\":403\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/UserController.php",
    "groupTitle": "Users",
    "name": "GetUsers"
  },
  {
    "type": "get",
    "url": "/users/:user",
    "title": "Get User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User identifier</p>"
          }
        ]
      }
    },
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n         \"id\": 1,\n         \"role\": \"admin\",\n         \"name\": \"first\",\n         \"username\": \"first\",\n         \"phone\": \"+380482407401\",\n         \"created_at\": \"2016-04-25 13:38:26\",\n         \"updated_at\": \"2016-04-25 13:38:26\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"error\":\"This action is unauthorized.\",\n     \"code\":403\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/UserController.php",
    "groupTitle": "Users",
    "name": "GetUsersUser"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "Add New User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's real name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          }
        ]
      }
    },
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"username\": \"third\",\n    \"name\": \"third\",\n    \"role\": \"client\",\n    \"updated_at\": \"2016-04-26 08:26:18\",\n    \"created_at\": \"2016-04-26 08:26:18\",\n    \"id\": 3\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"error\":\"This action is unauthorized.\",\n     \"code\":403\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/UserController.php",
    "groupTitle": "Users",
    "name": "PostUsers"
  },
  {
    "type": "put",
    "url": "/users/:user",
    "title": "Update User Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's real name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          }
        ]
      }
    },
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"error\":\"This action is unauthorized.\",\n     \"code\":403\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "photoservice/app/Http/Controllers/UserController.php",
    "groupTitle": "Users",
    "name": "PutUsersUser"
  }
] });
