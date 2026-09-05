/*
    This gets the current year
    from the user's computer.
*/

const currentYear =
    new Date().getFullYear();


/*
    Find the HTML element
    whose id is "current-year"
*/

const yearElement =
    document.getElementById(
        "current-year"
    );


/*
    Put the current year
    inside that HTML element.
*/

yearElement.textContent =
    currentYear;
