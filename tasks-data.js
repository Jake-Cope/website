// Task categories and their respective tasks
const taskCategories = {
    "Job-Hunting / Career": [
        "Spend 30 minutes checking and updating your CV",
        "Spend 30 minutes looking for job adverts online and apply to 3 (even if it doesn't sound perfect! you can always abandon it later)",
        "Open your CV and update one section",
        "Draft one sentence for a cover letter",
        "Spend 30 minutes improving one project representation in your portfolio",
        "Research one new skill that could help your career",
        "Update your LinkedIn headline or profile section",
        "Review your website and think of one thing to improve",
        "Make up a project to go in your portfolio (Dog and Bike, Pupcicles, etc)"
    ],

    "Personal Projects": [
        "Spend 1 hour on David's mural",
        "Spend 1 hour on art for your family",
        "Spend 30 minutes working on Kinship (read blog post, review idea, design brand...)"
    ],

    "Hobbies": [
        "Go for a skate and do three ollies and three 180s",
        "Go skating and complete the warmup",
        "Go skating and try a kickflip 10 times as good as you can",
        "Finish painting a warhammer model or squad",
        "Paint a single piece of warhammer scenery",
        "Clean and service your bike"
    ],

    "Fitness & Health": [
        "Hang for at least one minute",
        "Go for a 15–20 minute walk or jog in the park",
        "Prepare one healthy meal for the day",
        "Drink two to three glasses of water",
        "Actively avoid having a cigarette for an hour",
        "Practice deep breathing for five minutes",
        "Avoid reddit for a 2 hour period today",
        "Plan your meals for the next day",
    ],

    "Make your house nice": [
        "Wash up all the dishes and put away",
        "Clean the living area",
        "Put up a piece of art, or rotate the art that is up",
        "Water the plants and/or clean their pots and leaves",
        "Put your clutter away",
        "Spend 30 minutes organising your warhammer",
        "Make one change to your flat to improve it",
        "Clean one part of your bathroom (toilet, shower, mirror, floor etc)",
        "Throw away one piece of rubbish from your garden"
    ],

    "Be a Better Partner": [
        "Send a thoughtful message or compliment to your partner",
        "Plan one small shared activity (walk, game, movie)",
        "Reflect on one thing you appreciate about your partner",
        "Ask your partner about their day and listen attentively",
        "Cook or prepare a meal together",
        "Think deeply about one thing your partner wants and how you can help make it happen"
    ],
};

// Function to get all tasks as a flat array with category prefixes
function getAllTasks() {
    const allTasks = [];
    for (const [category, tasks] of Object.entries(taskCategories)) {
        tasks.forEach(task => {
            allTasks.push(`${category}: ${task}`);
        });
    }
    return allTasks;
}
