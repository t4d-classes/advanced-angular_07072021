# Exercise 4

Please complete the following requirements ensuring your solution meets all of them. Going above and beyond the requirements is great so long as all of the requirements are met. Before coding anything, please read all of the requirements first. If you are unsure about anything, please ask the instructor.

**Step 1.** When navigating to the "/admin/user-accounts" route, pre-load the employees (these are the users) and display them in Registered Users component table. You will need to implement a resolver to do the pre-load of the employees.

```text
GET http://student#.databots.cloud/employees HTTP/1.1
```

Note: Users are employees that have usernames. If the employee does not have username then it should not be in the registered user table.

**Step 2.** Display the following columns in the Registered Users component table:

- Id
- Username
- First Name
- Last Name
- Title

Note: Users are employees that have usernames. If the employee does not have username then it should not be in the registered user table.

**Step 3.** Wire things up so new users can be added to the Registered Users component table.

Here is an example of a post request to add a new employee. Please do not specify the `employeeId` in the JSON, it will be calculated on the server. Also, please specify any two dates for the `birthDate` and `hireDate` fields. The only fields that need to be populated are filled in below. Please set the `reportsTo` to 5. Set the `password` to an empty string.

```text
POST http://student1.databots.cloud/employees HTTP/1.1
Content-Type: application/json

{
  "lastName": "Smith",
  "firstName": "Bob",
  "title": "Product Manager",
  "titleOfCourtesy": "",
  "birthDate": "12/17/1977",
  "hireDate": "12/01/2000",
  "address": "",
  "city": "",
  "region": "",
  "postalCode": "",
  "country": "",
  "homePhone": "",
  "extension": "",
  "photo": "",
  "notes": "",
  "reportsTo": 5,
  "photoPath": "",
  "username": "bsmith",
  "password": ""
}
```

**Step 4.** Enhance the save user to set the password as well. Here is the save password REST request.

```text
POST http://student1.databots.cloud/users/set-password HTTP/1.1
Content-Type: application/json

{
  "username": "bsmith",
  "user_kind": "employee",
  "new_password": "testpass"
}
```

The save employee and set password will be two requests but should be done sequentially through the pipeline.

**Step 5.** Refresh the list of users after adding a user (saving the user and setting the password) as part of the same obsevable pipeline.