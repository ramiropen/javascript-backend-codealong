Hi Team,

Type in the terminal: npm install
This does 2 things.

1. This reads package.json and checks what dependencies exist.
2. If a node package dependency isn't installed, it now installs it.
3. Now, you should be able use: nodemon server.js

---

After cloning this solution code to my computer, why do I have to use "npm install"?

1. I used a ".gitignore" file.
2. Inside that ".gitignore", I added the code "node_modules"
3. So when I push code up to github, it doesn't allow or ignores pushing up the huge node_modules folder
4. This saves a ton of space on my github
5. ... so when other people clone this project, they can run "npm install" to get the node_modules folder
