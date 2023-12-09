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
        stack: ['Unity', 'C#'],
        link: 'https://github.com/ZnoKunG/fsweeper-unity',
        linkMessage: 'See Github Repo',
        detail: {
            gameName: 'FSweeper',
            responsibilty: 'Gameplay Programmer',
            projectType: 'Personal Game Project',
            contribution: ['Developed a minesweeper clone game',
            'Implemented Grid class which can contain any type of objects and can be used in any project required grid system',
                'Implemented game logics while maintaining clean structures using Object-Oriented Programming',
                'Send the score when the game is over and display leaderboard requesting data from API using UnityWebRequest',],
            }
    },
    {
        title: 'FSweeper API',
        imgUrl: './assets/fsweeper-api.png',
        videoUrl: '',
        stack: ['.NET', 'MongoDB', 'Azure Server'],
        link: 'https://github.com/ZnoKunG/fsweeper-api',
        linkMessage: 'See Github Repo',
        detail: {
            gameName: 'FSweeper API',
            responsibilty: 'Backend Developer',
            projectType: 'Personal Backend Project',
            contribution: ['Developed API in .NET using MCV pattern',
            'Connected to MongoDB database cloud to store player\'s data',
            'Implemented the service for players to request and update player\'s data',
            'Hosted the server on Azure Server which anyone can connect to the .NET server (currently not available)'],
        }
    },
    {
        title: 'Horror Game: Repaired',
        imgUrl: '',
        videoUrl: './assets/repaired.mp4',
        stack: ['Unreal Engine', 'Blueprint'],
        link: 'https://znokung.itch.io/horror-game-repaired',
        linkMessage: 'Play the game',
        detail: {
            gameName: 'Horror Game: Repaired',
            responsibilty: 'Gameplay Programmer & Game Designer',
            projectType: 'Personal Game Project',
            contribution: ['Developed a horror game in two weeks using Unreal Engine 5',
                'Implemented game events that trigger when passing a door, after looking at certain object, complete certain objective',
                'Implemented different ghost behaviour with patrol mechanic using AI Navigation Tool',
                'Used Modular Level Design to design levels with the assets from 3D modeler'],
        }
    },
]