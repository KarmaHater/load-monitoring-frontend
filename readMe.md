# load-monitoring-frontend

### Run Project

npm install

npm start

#### What you will find

+ Application has key statistics as well as a history of load over the past 10 minutes in 10s intervals.

+ All alerting thresholds are stored.

+ When the load for the past 2 minutes exceeds 1 on average, a error alert is fired.

+ When the load average drops again below 1 on average for the past 2 minutes, a recovery alert is fired.

+ Test for the alerting logic

List of things I would improve:

+ Do some css.
+ Tests for all my reducers and actions.
+ Add a node backend and us socket.io to get real data instead of mocking the data.
+ Create my own alerts and not use a npm package. The ones I used are petty ugly.

![screencast 2017-06-08 at 11 12 19 am 1](https://user-images.githubusercontent.com/6765008/26922159-88992a86-4c3e-11e7-822a-47df106b7c1c.gif)

