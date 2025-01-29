## Inevitable

As my portfolio site develops, another though crosses the mind. "Shouldn't it be somewhat decent for small screens?" Ah, there, another one of these problems I have done everything in my power to avoid thus far, another enemy of old, the reviled media queries and responsive design. "You hear that, mr. Anderson?... That is the sound of inevitability!". With [Agent Smith's](https://www.youtube.com/watch?v=kIbEj1CIpuU&t=7s) line ringing in my head, I realized I couldn't run from it forever, eventually I would have to deal with it. I decided to make my stand today, this project.
\
\
_Queries en-garde!_
\
\
I've read about mobile-first design, desktop-first design. Since I mostly had my styles down already for desktop, I decided to work with media queries for mobile. To be honest, I don't see a big difference going either way. But where do I start? As with a number of problems I've faced in my dev journey so far, when a problem seems too big, or too complex, start small. For example, the Chess game for console looked daunting. Chess rules? Console board design? Jeez! Then, I calmed down. Ok Nick, I told my self, what do you know how to do? Well, getting user input was easy. I went ahead and coded that. Ok then, maybe my chess board is an 8x8 2D array. Ok, done. Now maybe a method to validate user input and transform it to array indexes. Cool, done. And little by little the project started flowing, just the edges in the begging, slowly getting fleshed out in a fully fledged game.
\
\
**This is the way.**
\
\
I started with reducing the screen size with the help of browser dev tools, to commonly used screen sizes, `760px` for tablet or `380px` for mobile, and fix the parts that broke. Then went ahead to shrink the screen to various sizes, see where the page broke horribly, and fix it with a media query at that size. Phew! Done! And you know what? It was even half as bad as I imagined it to be. We do that to ourselves, procrastination. Anyway, I'm just happy I sticked my proverbial flag on top of media queries hill!
