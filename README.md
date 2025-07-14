# Number Shooting Game

<p>I’ve built a Number Shooting Game with HTML, CSS, and JavaScript to demonstrate efficient event handling.</p>
<h2>How it works</h2>
<p>You have 60 seconds to play.</p>
<p>A random target number appears at the top.</p>
<p>A grid of numbers is displayed below.</p>
<p>Click the number that matches the target; each correct click adds one point to your score.</p>
<h2>Key idea</h2>
<p>Instead of attaching a separate click listener to every number, I attach one listener to the parent container. With event.target, I detect which button was clicked. This approach—known as event propagation (capturing & bubbling)—keeps the code lighter and boosts performance.</p>
<h2>Why it matters</h2>
<p>This small project is a practical way to learn how event capturing and bubbling work, and how delegating events to a parent element can simplify your code.</p>