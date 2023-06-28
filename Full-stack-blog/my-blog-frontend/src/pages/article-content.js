const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
           `Learning React, one of the most popular JavaScript libraries for building user interfaces,
            can be a rewarding and valuable skill for developers. To expedite your journey in mastering 
            React, there are a few key strategies you can employ. First and foremost, start with a solid 
            foundation in JavaScript and HTML/CSS. Having a strong understanding of these core web technologies
            will enable you to grasp React concepts more easily. Next, take advantage of the wealth of online 
            resources available. Utilize official documentation, tutorials, and online courses specifically 
            designed for React. This will provide you with a structured learning path and ensure you cover the
            fundamental concepts thoroughly. Finally, hands-on practice is crucial. Engage in coding exercises,
            build small projects, and contribute to open-source projects. Applying your knowledge in real-world 
            scenarios will solidify your understanding and help you gain proficiency in React more rapidly.

            To begin your React journey, a solid grasp of JavaScript and HTML/CSS is essential. 
            JavaScript is the language that powers React, and understanding its fundamental concepts
            such as variables, functions, and object-oriented programming will make it easier to comprehend
            React's syntax and concepts. Similarly, HTML/CSS knowledge is necessary for creating and styling
            React components. Familiarize yourself with HTML tags, CSS selectors, and basic styling 
            principles to effectively work with React.`,
        ]
    },    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `Building a Node server is a fundamental skill for web developers, and with the right approach,
             you can create a simple server in just 10 minutes. Here's a step-by-step guide to help you get 
             started: `,

           ` Step 1: Set up your project
            Create a new directory for your project and navigate to it in your terminal. Use the following
            command to initialize a new Node.js project:

            "npm init -y"`,
            
           ` Step 2: Install dependencies
            To build a server, we'll use the Express framework. Install it by running the following command:

            "npm install express"`,

           ` Step 3: Create the server file
            Create a new file, server.js, and open it in your preferred text editor. Start by requiring the Express module
            and creating an instance of the Express application:

            "const express = require('express');
            const app = express();"`,

          ` Step 4: Define routes
            Next, define the routes for your server. For example, let's create a simple "Hello, World!" endpoint:

            "app.get('/', (req, res) => {
                res.send('Hello, World!');
              });"`,
               
            `Step 5: Start the server
            Finally, add the code to start the server and listen on a specified port (e.g., 3000):

            "app.listen(3000, () => {
                console.log('Server is running on port 3000');
              });"`,
           
          `  Step 6: Run the server
            Save the changes to server.js and run the server using the following command:

            "node server.js" `,
        ]
    },     {
        name: 'mongodb',
        title: 'Learn MongoDB',
        content: [
            `Today is the day I talk about something which scares most people: resumes.
            In reality, I'm not sure why people have such a hard time with proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },  
    
];

export default articles;