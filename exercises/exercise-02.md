# Exercise 2

Please complete the following requirements ensuring your solution meets all of them. Going above and beyond the requirements is great so long as all of the requirements are met. Before coding anything, please read all of the requirements first. If you are unsure about anything, please ask the instructor.

**Step 1.** In the User Accounts module, create a new component named User Login.

**Step 2.**. The User Login component should have two fields:

- Username
- Password

And a button with the text "Login" at the bottom of the form.

**Step 3.** The username and password field should be validated on the client-side only to enforce the following rules:

- Username and password are required
- Username must be at least 6 characters
- Password must be at least 10 characters
- Username can only be letters and numbers, and must start with a letter
- Password must include at least one uppercase letter, at least one lowercase letter, and at least one number
- Username and password must not be the same

**Step 4.** If client-side validation fails, please display an appropriate error message above the form.

**Step 5.** If the username and password pass client-side validation, then a login request to the REST API endpoint should be sent. Display the success or failure of the login in the UI (simply displaying a message below the login form is fine). Also, when the login is successful, display the user object in the console.

The call to the login REST API endpoint should be done with the HttpClient service. A custom User Account service should make the REST API calls and the User Account service should be injected into the User Login component.

REST API Call Example (update url for your student number):

```text
POST http://student#.databots.cloud/users/login HTTP/1.1
Content-Type: application/json

{
    "username": "afuller",
    "password": "testpass",
    "kind": "employee"
}
```

Once the REST API call is implemented, try various logins to verify the client-side validation rules, then try the official login.

- Official login:
  - Username: afuller
  - Password: testpass

The official login should fail client-side validation. Add some code to allow the "testpass" password to skip validation so the user can login successfully.

**Step 6.** Display the User Login component beneath the Register User component on the App component.

**Step 7.** Ensure it all works, and please raise your hand when you are done.