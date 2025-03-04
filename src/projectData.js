const projectData = [
  {
    title: "Vaxyp",
    description:
      "A document drafting tool for Hellenic Police interrogators/investigators to streamline and reduce daily paperwork",
    tech: "HTML / CSS / JavaScript, ",
    imgUrl: "vaxyp.png",
    largeDescription:
      "Developed a document drafting tool for Hellenic Police interrogators/investigators to streamline and reduce daily paperwork. Provided for free to all officers, enhancing efficiency and accessibility. Integrated user feedback through several rounds of conversations for continuous improvement. Conducted extensive troubleshooting and iterative refinements to ensure optimal functionality. Designed with localization options to accommodate various departmental needs. ",
    github: "https://github.com/NikEmman/vaxyp",
    live: "https://nikemman.github.io/vaxyp/",
  },
  {
    title: "Console Chess",
    description: "A chess game for consoles",
    tech: "Ruby",
    imgUrl: "chess_1.png",
    largeDescription:
      "This is a two player game. After reading the instructions on how to play, each player inputs a name, and then play in turn. The game uses standard chess rules. Players have the ability to save/load a game, admit defeat and end the game or propose a draw to the opponent. During a game, the taken pieces are also displayed",
    github: "https://github.com/NikEmman/Chess",
    live: "https://replit.com/@epistimon2004/Chess",
  },
  {
    title: "My circle",
    description:
      "A social media platform where you can follow people and see their posts",
    tech: "Ruby, Rails, TailwindCSS",
    imgUrl: "my_circle.png",
    largeDescription:
      "My circle is a social media platform. Users must create an account first, and then create their profile, including an avatar picture. On their home page they can write posts, comment on them, and like/dislike posts and comments. Can also find a list of users and sent follow requests. When the request is accepted, the user can also see posts on his home page of the followed users, in chronological order.",
    github: "https://github.com/NikEmman/my_circle",
  },
  // {
  //   title: "Memory Game",
  //   description:
  //     "A browser game, where the user must click each of 12 pictures,  only once",
  //   tech: "JavaScript, React, Flickr API",
  //   imgUrl: "memory_game.png",
  //   largeDescription:
  //     "Browser SPA game, made with React.The player is given a selection of four themes, and then 12 images of that theme are pulled from Flickr. The player must then click each image once. Upon clicking an image thought, they are re-shuffled. A counter keeps track of the current effort and resets if an image is clicked twice, and an other counter keeps track of the best effort so far.",
  //   github: "https://github.com/NikEmman/memory-game",
  //   live: "https://deluxe-pastelito-751e93.netlify.app/",
  // },
  {
    title: "Messenger",
    description: "Messaging application",
    tech: "React front-end, Rails back-end (API endpoints)",
    imgUrl: "messenger.png",
    largeDescription:
      "A messaging application build as a Rails monolith with React front-end and Rails serving data through API controllers. Users, after signing in/logging in, and creating a profile, can start a conversation and then add users to that conversations from a searchable user base. Each user can see a list of conversation he/she is a member of and send a message. Text can be sent formatted",
    github: "https://github.com/NikEmman/messenger",
  },
  {
    title: "Battleship",
    description: "A browser version of the famous board game",
    tech: "Html/CSS, JavaScript",
    imgUrl: "battleship_1.png",
    largeDescription:
      "A browser version of the famous board game. It is made using only html/css and vanilla JavaScript. Can be a single player or two player game, if a Player 2 name is also given. Then each player is asked in turn to place 5 ships on their boards. Then game begins! If single player, the user can keep attacking the enemy board (right-side) and watch the AI hits on his/her own board(left-side). If it's a 2 player game, after each attack the player hides his board so the enemy won't peak, and then passes the screen to the enemy so he/she can attack. Again, each player is shown a friendly and enemy board. Game ends when all ships of a player are sunk!",
    github: "https://github.com/NikEmman/battleship",
    live: "https://nikemman.github.io/battleship/c",
  },
];
export default projectData;
