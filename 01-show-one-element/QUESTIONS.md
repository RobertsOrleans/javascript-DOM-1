# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

The text is not revealed and is hidden again because the 'click' event has not happened so the text has to be trigerred again.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

If the event listener is removed then the text doesn't appear once the link is clicked. I think that is because the "load" listener is used to make sure the page is fully loaded before doing other actions, ensuring less errors.
---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

'addEventListener' takes two parameters; an event and a function. Whenever the element it is added to has the event fire, the function is executed with a parameter that reurns what object fired the event.
