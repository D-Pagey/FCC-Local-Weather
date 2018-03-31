## Local Weather App -  A Free Code Camp project

**User Stories:**
- [x] I can see the weather in my current location.
- [x] I can see a different icon or background image (e.g. snowy mountain, hot
  desert) depending on the weather.
- [x] I can push a button to toggle between Fahrenheit and Celsius.

I learnt a lot about working with APIs in native JavaScript on this project. At
first I called the API using an XML HTTP Request and then I used the Fetch API.
I also created separate CSS classes for each type of weather.

First time round I styled the project using Bootstrap, however I have since
rewritten the CSS using FlexBox and redesigned it mobile-first. I've also
replaced the CSS with SCSS for the media queries.

**Improvements:**
- I've created a helper function but can't work out how to implement it. In the
meantime I have used a set location.
- Fix the ::backdrop CSS element on the Dialog element. It works in the vanilla
JS version but not in the React version.

**Getting Started:**
 1. Run: `npm install`
 2. Run: `npm start` _(in a new terminal)_
 3. Go to: `http://localhost:3000/`

You can see this [Local Weather App](https://codepen.io/Pagey/pen/GMgrwM)
project on CodePen.
