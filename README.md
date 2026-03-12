**Question:** What is JSX, and why is it used?
   **Answer:** 
   JSX means JavaScript XML which makes writing React components easier and HTML-like code inside js.
   It is used because:
   -Structure of UI can be seen like normal HTML which makes it easily readable.
   -JavaScript logic and HTML-like tags can be mixed in the same placed
   -JSX is automatically converted in React

 **Question:** What is the difference between State and Props?
   **Answer:**  
   1. Props can not be changed but state is mutable
   2. Props are passed from parent to child component whereas state is managed inside the component
   3. State can re-render any component but props can not do it
   4. Props are used to customize or configure nay component while state is used when something needs to be changed through re-rendering in component
    
**Question:** What is the useState hook, and how does it work?
   **Answer:**
   useState hook is a built in react through which state is managed and stored in functional component.
   useState hook is declared inside component composing of two arrays.one is initial state value and another is a function to  update the value of state through re-rendering component.

**Question:** How can you share state between components in React?
   **Answer:** 
   State between components can be shared by lifting state up.State is declared in the closest parent component of the multiple child components which need any update.Updated state is passed by state updating function as props.

**Question:** How is event handling done in React?
   **Answer:**
   In react, camelCase is used for event names.Function is passed in place of strings to handle events.


