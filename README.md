![Ticketing](/img/landing_page.png?raw=true "landing page")

![Ticketing](/img/create_post.png?raw=true "create post")

Conscious Moment - Initial Home Page

Project Setup

After cloning run $ npm install

Then $ bundle install

Then setup database with $rake db:create

If there are gem version issues run $bundle exec rake db:create

Run Migration to make tables $ rake db:migrate

To create a preview site with dummy values loaded in run $ rake db:seed

To launch the preview site run $ foreman start -f Procfile.dev -p 3000

Note, you will need to manually pull up rails console and set yourself as an admin in the users table using a boolean of true to be able to see and access the site as an admin would.

What Conscious Moment does:

This app increases mindfulness. It is a personal wellness tool that allows the user to be more in the present moment. This means calmly noticing and acknowledging feelings, thoughts and bodily sensations and be able to track these and factors that influence these. By building mindfulness and tracking what influences them the user will make themselves more aware of their personal state and be able to better their state.

Conscious Moment Features: (Note items are being built and not in operation yet)
-Setup a Ruby on Rails backend and add a React front end that will accept data inputted and display it in more more stylized way
-Track daily info about feelings, thoughts and bodily sensations
-Track daily how much you slept, worked, exercised, had free time did something fun or in the moment and meditated
-Take your daily info and make a score, 1-3 points per category like good, average, needs improvement
-Be able to add notes from the user what feeling, though or bodily sensation they noticed during the day. Could they acknowledge it and simply be with it?
-Offer a daily mindfulness exercise

Explanation of what I worked on today:
In the morning I came up with a list of 20+ items to do after completing Epicodus so even as there is less formal structure in my schedule I can still self direct on what items to work on. This list is displayed below. After that I started making Conscious Moment a personal wellness app. The goal was building framing today and work toward a minimum viable product. There was an initial focus on the naming and fields needed, then creating a migration to power the post.rb model. To show the project with values a seed file was made next. After that the controller and view of the JSON data file was made, this was for the Ruby on Rails backend API setup. Next came the views powered by React Components in app/javascript. After confirming the component worked the project was paused for work to continue next week.

20+ action items post Epicodus

Summary of goals: My top goal tend to focus on getting out to networking events and meeting people face to face as it is better to know people and then hear about work through the grapevine then apply to jobs without knowing people. My mid-level goals are more focused on preparing for formal interviews and learning in-demand technologies. My low priority goals are nice to haves that focus on getting experience with specific parts of technologies that I have overall experience with.

Top 4 items

Spend 5 hours a week in-person networking, go to PDXnode meetups and another selection every week. Rating 10

Complete a Udemy course on Python. Rating 9

Meet people in the Healthcare and Personal Wellness industry and find what needs they have and see if your technology understanding could built a product for that need. Rating 9

Send 5 LinkedIn messages a week to other developers and recruiters to check-in and ask what jobs they know about. Rating 9

Medium 6 Items

Go to a networking event such as PDXnode with an invited developer or recruiter once a week, get to know the person from tech to other interests. Rating 8

Read 5 pages of Cracking the Coding Interview every weekday, solve problems presented in the book in the 5 pages, adjust pace as needed. Rating 8

Get 2 onsite informational interviews a week for small local tech companies. Rating 8

Complete week 3 and 4 of learnhowtoprogram.com React course. Rating 8

Practice white boarding 1 problem a day, every weekday. Rating 7

Build a project with a python backend and D3 front end that shows Bitcoin price info. Rating 6

Low Priority 10 Items

Make an app with the Django framework. Rating 5

Build project with anonymized health data (collected via affordable care act) that will output data visualizations using the Javascript D3 library. Rating 5

Talk about technical as well as non-technical items at technical networking events. Rating 5

Deploy a project that uses an Amazon S3 bucket for storage. Rating 5

Add paperclip to personal portfolio site and deploy it. Rating 4

Do two non-programming social events a week while on the job hunt, enjoy getting to talk non-technical items with people. Rating 3

Visit WeWork Portland office to meet local tech entrepreneurs. Rating 3

Solve 3 problems that use the Ruby Enumerator Class for calculations. Rating 2

Learn how to use procs in Ruby. Rating 2

Make a small app that uses some machine learning to sort or check inputted data. Rating 1


After getting a job: Continue to program hobby projects that you make with new frameworks and libraries for the sake of having a spirit of exploration.
