export default [
    {
        title: 'Anachronic',
        imgUrl: '',
        videoUrl: './assets/anachronic.mp4',
        stack: ['Unity', 'C#', 'Tilemap Editor'],
        link: 'https://yonderu.itch.io/anachronic',
        linkMessage: 'Play the game',
        detail: {
            gameName: 'Anachronic',
            responsibilty: 'Gameplay Programmer & Game Designer',
            projectType: 'Personal Game Project',
            contribution: [
                'Implemented Character Movement Controller',
                'Implemented Time-Control Power System',
                'Implemented Player Clone Power that records player incoming inputs every frame',
                'Designed levels and received feedbacks from team members and testers',
                'Contributing the project using Agile Methodology',],
        }
    },
    {
        title: 'FindMyMines',
        imgUrl: '',
        videoUrl: './assets/findmymines.mp4',
        stack: ['Unity', 'C#', 'Socket Programming'],
        link: 'https://bitbucket.org/netcentric/findmymines/src/master/',
        linkMessage: 'See Github Repo',
        detail: {
            gameName: 'FindMyMines',
            responsibilty: 'Full Stack Developer & Project Manager',
            projectType: 'University Game Project',
            contribution: ['Created a multiplayer game using TCP/IP library in Unity, C#',
            'Developed the base gameplay and connecting and communicating clients with the server',
            'Created a server using Authorative Server Architecture implemented in Unity, C#',
            'Destructured the big task into smaller tasks to distribute to each member in the team'],
        }
    },
    {
        title: 'Every Second Count',
        imgUrl: '',
        videoUrl: './assets/ESC_1.mp4',
        stack: ['Unity', 'C#', 'Shader Graph'],
        link: 'https://chulagrdc.itch.io/esc-every-second-counts',
        linkMessage: 'Play the game',
        detail: {
            gameName: 'Every Second Count',
            responsibilty: 'Gameplay Programmer',
            projectType: 'Personal Game Project',
            contribution: ['Created FPS Game with the team of eight members in GRDC',
                'Implemented enemy mechanics including patrolling in the level, shooting in range',
                'Implemented boss mechanics with multiple phases',
                'Created Barrier VFX using Shader Graph in Unity'],
        }
    },
    {
        title: 'FSweeper',
        imgUrl: '',
        videoUrl: './assets/fsweeper.mp4',
        stack: ['Unity', 'C#', '.NET CORE'],
        link: 'https://github.com/ZnoKunG/fsweeper-unity',
        linkMessage: 'See Github Repo',
        detail: {
            gameName: 'FSweeper',
            responsibilty: 'Gameplay Programmer and Backend Developer',
            projectType: 'Personal Project',
            contribution: ['Developed a minesweeper clone game',
            'Implemented Grid class which can contain any type of objects and can be used in any project required grid system',
                'Implemented game logics while maintaining clean structures using Object-Oriented Programming',
                'Send the score when the game is over and display leaderboard requesting data from API using UnityWebRequest',
                'Developed API in .NET using MCV pattern',
                'Connected to MongoDB database cloud to store player\'s data',
                'Implemented the service for players to request and update player\'s data',
                'Hosted the server on Azure Server which anyone can connect to the server integrated with MongoDB database (currently not available)'],
            }
    },
    {
        title: 'SFML Collision Demo',
        imgUrl: '',
        videoUrl: './assets/sfml.mp4',
        stack: ['C++', 'SFML'],
        link: 'https://github.com/ZnoKunG/sfml-collision',
        linkMessage: 'See Github Repo',
        detail: {
            gameName: 'SFML Collision Demo',
            responsibilty: 'Programmer',
            projectType: 'Personal Project',
            contribution: ['Developed a collision showcase with multiple shapes using C++ and SFML',
                'Shapes collide with the window border and other shapes using AABB Collision Detection',
                'Created Shape class that contains shape text and any shape (can create this class to be either Rectangle or Circle)',
                'Load config file from local machine to customize window size, text properties, and what type of shapes and its properties we want to create'],
        }
    },
    {
        title: 'SFML Geometry Battles',
        imgUrl: '',
        videoUrl: './assets/sfml-engine.mp4',
        stack: ['C++', 'SFML', 'ECS'],
        link: 'https://github.com/ZnoKunG/sfml-geometrybattles',
        linkMessage: 'See Github Repo',
        detail: {
            gameName: 'SFML Geometry Battles',
            responsibilty: 'Programmer',
            projectType: 'Personal Project',
            contribution: ['Developed a 2D shooting game engine using C++ and SFML',
                'Implemented engine structure using ECS architecture',
                'Load config file from local machine to customize player, enemy, bullet, and special skill properties',
                'Spawn enemy at certain period with random position, color, direction, and vertices',
                'Implemented collision detection on each pair of entities. For example, collision between bullet and enemy will give us the score',
                'Separated between the system which implements the logic and component which only contains pure data',
                'Implemented EntityManager which contains addEntity, removeEntity, and getEntities provided to system',
                'Implemented special skill which travels to the mouse position and explodes after certain period',
                'When enemy is dead, (vertice amount) of small enemies will be spawned and get more score if it is eliminated'],
        }
    },
    {
        title: 'Graphing Demo',
        imgUrl: '',
        videoUrl: './assets/graphing.mp4',
        stack: ['Unity', 'HLSL', 'Compute Shader'],
        link: 'https://github.com/ZnoKunG/unity-graphing',
        linkMessage: 'See Github Repo',
        detail: {
            gameName: 'Graphing Demo',
            responsibilty: 'Programmer',
            projectType: 'Personal Project',
            contribution: ['Comparison between calculation positions on CPU and GPU',
                'Implemented position calculation with different graphs including sin wave, sphere, and torus',
                'Optimized GPU using multithreads to calculate 2-D Vector',
                'Minimized data transfers between CPU and GPU by calculating positions and draw the shape from the GPU'
            ],
        }
    },
    {
        title: 'Wangjung: Mobile App',
        imgUrl: './assets/wangjung.png',
        videoUrl: '',
        stack: [, 'React Native', 'NestJS', 'TypeORM'],
        link: '10.1109/ISCIT63075.2024.10793699',
        linkMessage: 'See the paper',
        detail: {
            gameName: 'Wangjung: Mobile Application',
            responsibilty: 'Full Stack Developer, Scrum Master',
            projectType: 'University Project',
            contribution: [
                'Arranged scrum meeting to distribute works',
                'Designed application architecture from the requirements',
                'Developed Front-end mobile application on React Native',
                'Developed Back-end services for user data access using NestJS and TypeORM to sync with database schema',
                'Set up Docker to create work environment for local and production',
                'Created Cloud Linux Virtual Machine to run back-end connecting with cloud-based database in MySQL',
                'Implemented CI/CD on Github Actions to automatically publish the production on back-end',
            ],
        }
    },
    {
        title: 'OpenGL: Graphics Rendering',
        imgUrl: '',
        videoUrl: './assets/opengl.mp4',
        stack: ['OpenGL', 'C++', 'GLSL'],
        link: 'https://github.com/ZnoKunG/opengl-graphics',
        linkMessage: 'See Github Repo',
        detail: {
            gameName: 'OpenGL: Graphics Rendering',
            responsibilty: 'Programmer',
            projectType: 'Personal Project',
            contribution: [
                'Render 3D graphics with texture (Imported models or writing your own vertices)',
                'Implement different types of light including Directional Light, Point light, Flash Light',
                'Include 3D model importer library to import vertices and texture data to render on the screen',
            ],
        }
    },
    {
        title: 'FFT on GPU',
        imgUrl: './assets/output.png',
        videoUrl: '',
        stack: ['C++', 'CUDA'],
        link: 'https://github.com/ZnoKunG/cuda-fft',
        linkMessage: 'See Github Repo',
        detail: {
            gameName: 'Fast Fourier Transform on GPU',
            responsibilty: 'Programmer',
            projectType: 'Personal Project',
            contribution: [
                'Create CUDA application to perform Fast Fourier Transform with Cooley-Tukey Algorithm',
                'Compare the computation time between GPU and CPU on both DFT and FFT plotted in graphs',
                'This FFT algorithm only works with the vector with the size that is power of 2',
                'Include the function to generate 0s to make the vector compatible (power of 2)',
            ],
        }
    },
    {
        title: 'Simple Compiler',
        imgUrl: './assets/compiler.png',
        videoUrl: '',
        stack: ['C'],
        link: 'https://github.com/ZnoKunG/compiler_c',
        linkMessage: 'See Github Repo',
        detail: {
            gameName: 'Simple Compiler written in C',
            responsibilty: 'Programmer',
            projectType: 'Personal Project',
            contribution: [
                'A simple compiler written in C which can do the basic operation including mathematical operation, conditions, loop, and input.',
                'Integrated Map data structure to optimize the speed of creating a variable and reading declared variables',
            ],
        }
    },
]