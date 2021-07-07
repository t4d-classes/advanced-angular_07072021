# Exercise 1

Instructions: Please complete the following requirements ensuring your solution meets all of them. Going above and beyond the requirements is great so long as all of the requirements are met. Before coding anything, please read all of the requirements first. If you are unsure about anything, please ask the instructor.

**Step 1.** Create a new module named User Accounts.

**Step 2.** In the User Accounts module, create a new component named Register User.

**Step 3.** The Register User component should display the following form fields:

- Username
- First Name
- Last Name
- Title

The Register User component should have a button labeled: Add User

**Step 4.** In the User Accounts module, create a new component named Registered Users. Display a table of the registered user that will be retrieved from a custom Angular service (described later). Display the fields as columns: id, username, first name, last name and title. If there are no registered users, please display a row that says there are no registered users.

**Step 5.** Create a custom Angular service named User Accounts to store an array of the collected user registration data. You will need to create the appropriate functions to add a new user and retrieve the array of users. When adding a new user, please calculate a unique id. The User Accounts service should be injected directly into the Register User and Registered Users components.

**Step 6.** Place both components, Register User and Registered Users, on the App component. When a new user is registered, it should display in the list of registered users.

**Step 7.** Ensure it all works, and please raise your hand when you are done.