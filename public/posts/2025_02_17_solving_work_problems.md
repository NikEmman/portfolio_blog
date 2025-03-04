## What can change the nature of a ~~man~~ programmer?

\
\
\
Great question asked by [one of the best cRPGs ever](https://en.wikipedia.org/wiki/Planescape:_Torment). Learning on your own, you are blessed with many tutors. The advice that comes up the most is, after you learn the basics go and solve a problem you face with coding. Well I finally found a problem and worked on a solution. Here is the story:

\
\
**The problem**

At my current, non-programming job, one of my duties involves drafting documents for the Courts, formal statements, arrest documents and many other. What they all have in common is first the current date details, like day month year, day of week, time of drafting he document. More over, the documents usually include information of a person, either a witness or suspect. I can get most of the details from the person's ID document, but formatting the information the way it is required by the process can get tedious, especially in a busy day. Same goes for a vehicle's data.

\
\
**The solution**

Parsing the current date and providing the needed stuff was easy enough.
\
\
Getting a person's or vehicle's data is easy enough, hit the id number or license plates on internal systems and voila! But for my app, I needed that data, API access is out of the question, so...how? I know, find the needed info on internal systems, and mark the whole thing and paste it on my app. It would only need then a parsing function, to extract what was required and then output the way needed. Ok let's do it! One thing that quickly became apparent is the gaps! So split the initial input string to smaller ones, and then make an object with each word as key and the next as value. Then extract what is needed. Cool! Now let's do the same for vehicles!

\
\
Now let's help my users one step more, make a button for each output field (`textarea` element with `readonly` attribute) to copy the contents to the clipboard, `navigator.clipboard.writeText(textToCopy)` works fine, with a caveat: Works fine only for https pages.

\
\
Finishing touches: Since I intended the app to be a web page and have other's use it freely, it needed help buttons! I had just created a modal for a react app but was a bit of a hassle, so I browsed around for an easier solution. [Kevin Powell](https://www.youtube.com/watch?v=TAB_v6yBXIE) to the rescue! A treasure trove of knowledge and really great guy, can't recommend enough! Anyway, long story short, `dialog` html element is a newer addition, it is a build in modal, just like that! A button to open that calls `showModal()` on it, (calling `show()` has different functionality) and then `close()` and you are set! One part of me was happy, and one part was sad because I didn't find out of `dialog` a few days earlier, it would save me from so much hassle! Oh well, at least I learned about createPortal hook.

\
\
Host it on GitHub pages and.... Done! Now THAT'S a good feeling. I had just solved a real problem with programming skills. And as a kicker, my solution helped a bunch of other people at work. It felt like a coming of age ritual, marking my passage from programming adolescence to young adulthood. Now I need more problems to solve!

\
\
It turned out, there was more joy in store! Quite a few people liked it, a number of them even messaged me with suggestions. It meant they had real interest in it. People, real people used my tool! Woohoo!! I couldn't be happier for my work. I even talked one of them to into learning programming. In my book that is success! Since then, I implemented a lot of the suggestions I received, and using it myself in day-to-day work, identified and added more functionality to it, made it, overall, more robust. What is next?!
