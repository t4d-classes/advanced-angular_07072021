# Exercise 3

Please complete the following requirements ensuring your solution meets all of them. Going above and beyond the requirements is great so long as all of the requirements are met. Before coding anything, please read all of the requirements first. If you are unsure about anything, please ask the instructor.

**Step 1.** Create a new route with the path `/admin/user-accounts` that displays a new component named User Accounts Page. The User Accounts Page should be created within the App module, not the User Accounts module.

**Step 2.** Create a new route with the path `/admin` that redirects to the `/admin/user-accounts` route.

**Step 3.** When a user successfully logs in, redirect them to the `/home` route. We did this in class, but make sure yours is working. Add a link to the Home Page component that links to `/admin` route with a link text of "Admin".

**Step 4.** When the user clicks the admin link, navigate to the `/admin` route if they have the "admin" role. If they do not have the `admin` role, then do not navigate. You will need to implement a guard to do this. Specify the allowed roles for a route on the `data` option of the route configuration. Utilize the list of roles in the guard.

- Admin User: afuller
- Normal User: adodsworth
- Password for both: testpass

**Step 5.** Move the Registered Users component and the Register User component from the Home Page component to the User Accounts Page component. Display the Registered Users component above the Register User component. The two components should work as before.
