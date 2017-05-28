# load-monitoring-frontend

Create a simple web application that monitors load average on your machine:

Collect the machine load (using “uptime” for example)

+ Display in the application the key statistics as well as a history of load over the past 10 minutes in 10s intervals. We’d suggest a graphical representation using D3.js.

+ Make sure a user can keep the web page open and monitor the load on their machine.

+ Make sure all messages showing when alerting thresholds are crossed remain visible on the page for historical reasons.

+ Whenever the load for the past 2 minutes exceeds 1 on average, add a message saying that “High load generated an alert - load = {value}, triggered at {time}”

+ Explain how you’d improve on this application design
//// You are here

+ Whenever the load average drops again below 1 on average for the past 2 minutes, Add another message explaining when the alert recovered.

+ Write a test for the alerting logic

This is my Monitoring App. It is only the frontend and the data for computer uptime is mocked.

Some notes about technologies used:

I choose Redux as a view layer because it is used at DataDog and I wanted show my skill level. Also, the virtual Dom helps with speed and view flicking when rendering the data.

I choose Redux as a state manger because it is small but powerful. I would of used anyways even without React. I think that Redux is essential here because of the large amount of changing state.

I think that often these technologies are used because they are the cool new thing. This is why I wanted to explain in greater detail why I decided to use them :)

List of things I would improve:

+ I would actually do some css (I just did not have time).
+ I would add tests for all my reducers and actions at the very least.
+ I would add a node backend and us socket.io to get real data instead of mocking the data.
+ I would probably create my own alerts and not use a npm package. The ones I used are pretty ugly (I just did not have time).
