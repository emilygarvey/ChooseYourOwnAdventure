// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "",
    background_image: "nyc-night.jpg",
    levels: {

        start: {
            message: "On your way home, you hear a yell. \n 'Help! Someone help!'",
            choices: [
                {
                    text: "Follow the voice",
                    nextLevel: "talk",
                },

                {
                    text: "Walk on by",
                    nextLevel: "leave",
                },
            ]
        },

        talk: {
            background_image: "nyc-night.jpg",
            music: "",
            message: "You round the corner and see a frazzled woman. 'Hurry!' she says, gesturing toward a beat up car with the passenger side door open.",
            choices: [
                {
                    text: "Climb into the car",
                    nextLevel: "car",
                },
                
                {
                    text: "Heeeeeckkk no!",
                    nextLevel: "street",
                },
            ]
        },
        
        street: {
            background_image: "nyc-night.jpg",
            music: "",
            message: "The car zooms away just as you see a man run toward you. 'Which way did she go?' he pleads.",
            choices: [
                {
                    text: "Sorry man, I don't want to get involved",
                    nextLevel: "leave",
                },
                
                {
                    text: "Point in the direction the car went",
                    nextLevel: "news",
                },
            ]
        },
        
        car: {
            background_image: "car-interior.webp",
            music: "",
            message: "'I need your help'",
            choices: [
                {
                    text: "Choice 1",
                    nextLevel: "",
                },
                
                {
                    text: "Choice 2",
                    nextLevel: "",
                },
            ]
        },

        leave: {
            background_image: "apartment.jpg",
            message: "Monotonous life continues",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        news: {
            background_image: "newspapers.jpg",
            music: "",
            message: "The next day, you see a picture of the man on the front of the newspaper. WANTED FOR MURDER.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
                
            ]
        },

    }
};
