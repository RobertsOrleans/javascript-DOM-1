# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

I used .querySelectorAll to get all of the second movie elements because they are all a part of a list, with a matching class. This is different by selecting every child of the element than specific elements with the class.