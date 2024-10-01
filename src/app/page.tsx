"use client"

export default function Home() {

  return (
    <>
      <div className="flex flex-wrap">
        
      
        
      </div>
    </>
  );
}
/*
The website must consist of:

On Page load

A home page is shown:

If a User is NOT logged in:
Display a log in form
Display some content


If a User IS logged in:
Display a menu with routes to at least 3 pages including Home
Show some content specific to the user for example a Welcome Message with their name


Additional Pages



A Profile page or some such showing information saved in the User object

Show a short summary of their saved or favorited items
Clicking on an item should load the Item Page


Categories Page

Information loaded by an API call
Clicking on a category should lead to a new page with a short summary of items in that category
Clicking on an item in that category should dynamically load the item Page
The user should be able to select a favourite category that is saved in context


Item Page

Show most of the information of an Item
Allow the user to save the item
Saved items should appear on the profile page


To achieve a Godkänt grade:



Create a relevant context
Conditionally render content based on the value of the context
Context should be able to be set
Values saved in the context should be able to be updated //MUST FIX THIS?


Dynamic routing - clicking on different items should load the same template with different information displayed
Once a user is logged in they should stay logged in across all routes


Using a CSS Framework - TailWind, Sass etc
Responsive Styling


To achieve a Välgodkänt grade:



Correct Typing
Relevant use of context
Repeated calls to the properties of the context


Allow a User to 'log out'
A new User should be able to log in in the same session


Well structured and organized files
Correct code style and syntax




Notes:



This assignment requires existing information such as Users. Create these in a relevant file and let me know how I can log in.



For logging in all that is required is a User Name and a string match - in the next Subject uou'll learn about authenticating users.



It is not a requirement of the assignment for a user to create an account.



On page refresh all information will be lost - a user will have to log in again,



Feel free to investigate using LocalStorage to save a user, but it is not a requirement.



Submission:

Links to github and the site hosted on Vercel or other
*/