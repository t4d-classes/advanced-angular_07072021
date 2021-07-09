# Exercise 5

Please complete the following requirements ensuring your solution meets all of them. Going above and beyond the requirements is great so long as all of the requirements are met. Before coding anything, please read all of the requirements first. If you are unsure about anything, please ask the instructor.

**Step 1.** When a normal user attempts to navigate to the admin route, the route change should not happen. Right now, the route change is canceled silently. Upgrade the application to display a Material UI Snackbar notification about the the route change failing.

- adodsworth
- testpass

### Bonus

**Step 2.** Add a button to the Home Page component with the text `Logout`. When the button is clicked, logout the user. To perform the logout, the follow things needs to be updated.

- Clear the `accessToken` and `currentUser` in the User Accounts service.
- Clear the `refreshToken` on Local Storage
- Redirect to the path `/`