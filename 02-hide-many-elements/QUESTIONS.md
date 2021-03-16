# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

I got the elements that had the class name "hide_me" by using .getElementByClassName("hide_me").

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

I added the EventListener for the click to the "Hide" button and then put the "hide_me" Elements in an array.