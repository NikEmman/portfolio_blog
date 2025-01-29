## Where to now?

\
\
After building that end project, the rush of joy was back. I was aware by then, the world was not mine, but it did feel good! I resumed sending applications to job posts I found interesting. A void started growing in me. A realization hit me. Now what? So far I had a tangible goal, learn and go to the next page, the next chapter, the next framework. But the lessons are done. Where to now? I know! Let's create a Portfolio/Blog site!

\
\
**Let there be Light! (and Dark)**

\
\
After putting up a couple skeleton pages in plain html / css, finding a way to parse md files and display them in html, I reworked the whole thing into a React app, basically starting from near scratch, and then it hit me. Never so far did I try to implement light/dark mode in an app, so let's do it! Let's see what google has to say about it.
\
After half an hour of search, it came down to this. First I created a component for the switch. It is basically a checkbox input, it gets 2 props for the parent component. A boolean state, held by the parent component, and a callback function `handleChange` to be able to change state of the parent component. Then on said parent component, I have a `data-theme` attribute on the outer `<div>`, whose value is based on the boolean state. Add some css to define colors as custom variables and have them re-defined for `[data-theme="dark"]` and finally some css for the transition of the background color, to make it less jarring and....voila! Got my self a dark theme.
\
In all honesty, the hardest part, which took most time, was the css part. Making something look not-horrible is a struggle. I...rock? No..that's not it...Ah, got it! [Let there be Rock!](https://www.youtube.com/watch?v=3f2g4RMfhS0)
