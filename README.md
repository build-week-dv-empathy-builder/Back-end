# Domestic Violence Empathy Builder Backend
Back end for the empathy builder app. RESTful api built with node.js and express

## About The App
This app aims to show people unaffected by domestic violence to understand how much it would cost to leave a violent relationship and why many people choose to stay in abusive relationships.

## Technologies
Node | Express | Jest | Supertest

## API

Base URL: https://empathy-builder-2.herokuapp.com

### Test (unprotected route)
#### https://empathy-builder-2.herokuapp.com
a **GET** request to the base URL will return a success message if the API is working and has been accessed correctly.
##### Response
```
{
    message: "The server is on and waiting for requests..."
}
```

#### Register (unprotected route)
##### /api/auth/register
a **POST**  will create a new user and return an object containing an authentication token.

##### Body (JSON)
```
{
	"email": "test@gmail.com",
	"password": "password"
}
```

##### Response
```
{
    "user": {
        "id": 5,
        "email": "test@gmail.com"
    }
}
```

#### Login (unprotected)
##### /api/auth/login
a **POST** request will return an object containing an authentication token.

##### Body(JSON)
```
{
	"email": "test@gmail.com",
	"password": "password"
}
```

##### Response
```
{
    "message": "Welcome test@gmail.com",
    "user": {
        "email": "test@gmail.com",
        "id": 4,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNTY0NTY1Mzc1LCJleHAiOjE1NjQ2NTE3NzV9.nVSyIBpynjWNBQFKkpaTom2ZUP6yVb4c4OZ8m_glVeI"
    }
}
```

#### Insert Data (unprotected)
##### /api/insert
a **POST** request to will save the users data anonymously to the database.

##### Body(JSON)
```
{
          "current_location": 81401,
          "timestamp": 20181026,
          "desired_relocation": 87401,
          "sex": "male",
          "relationship_status": "married",
          "orientation": "straight",
          "age": 28,
          "race": "white",
          "safe_status": "yes",
          "employed": "no",
          "partner_employed": "yes",
          "children": "yes",
          "personal_savings": 1000,
          "individual_income": 500,
          "transportation": 50,
          "food": 200,
          "health_care": 0,
          "car_loans": 0,
          "personal_loans": 0,
          "personal_other": 200,
          "personal_budget_total": 450,
          "travel_costs": 50,
          "rental_deposit": 500,
          "utility_connection": 100,
          "storage_unit": 50,
          "rent": 600,
          "car_rental": 0,
          "cell_phone": 100,
          "moving_truck": 300,
          "mental_health": 0,
          "income_loss": 0,
          "additional_security": 100,
          "relocation_other": 200,
          "relocation_budget_total": 2000,
          "calculated_difference": 1450
        }
```

##### Response
```
{
    "message": "data entered into DB"
}
```

#### Get Data (PROTECTED)
##### /api/data
a **GET** request to will return an array of all the anonymous data

##### Request Header
```
{
    Authorization: Token
}
```

##### Response
```
[
    {
        "id": 1,
        "current_location": 81401,
        "timestamp": 20181026,
        "desired_relocation": 87401,
        "sex": "male",
        "relationship_status": "married",
        "orientation": "straight",
        "age": 28,
        "race": "white",
        "safe_status": "yes",
        "employed": "no",
        "partner_employed": "yes",
        "children": "yes",
        "personal_savings": 1000,
        "individual_income": 500,
        "transportation": 50,
        "food": 200,
        "health_care": 0,
        "car_loans": 0,
        "personal_loans": 0,
        "personal_other": 200,
        "personal_budget_total": 450,
        "travel_costs": 50,
        "rental_deposit": 500,
        "utility_connection": 100,
        "storage_unit": 50,
        "rent": 600,
        "car_rental": 0,
        "cell_phone": 100,
        "moving_truck": 300,
        "mental_health": 0,
        "income_loss": 0,
        "additional_security": 100,
        "relocation_other": 200,
        "relocation_budget_total": 2000,
        "calculated_difference": 1450
    }
]
```
