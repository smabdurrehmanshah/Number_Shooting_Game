# Number Shooting Game
<pre>I’ve built a Number Shooting Game with HTML, CSS, and JavaScript to demonstrate efficient event handling.

How it works

You have 60 seconds to play.

A random target number appears at the top.

A grid of numbers is displayed below.

Click the number that matches the target; each correct click adds one point to your score.

Key idea
Instead of attaching a separate click listener to every number, I attach one listener to the parent container. With event.target, I detect which button was clicked. This approach—known as event propagation (capturing & bubbling)—keeps the code lighter and boosts performance.

Why it matters
This small project is a practical way to learn how event capturing and bubbling work, and how delegating events to a parent element can simplify your code.</pre>