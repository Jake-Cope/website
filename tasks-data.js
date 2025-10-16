// Task categories and their respective tasks
const taskCategories = {
    "Job-Hunting / Career": [
        "Update your CV for 30 minutes. No excuses.",
        "Spend 30 minutes searching job ads. Apply to 3 - even if they’re not perfect.",
        "Open your CV. Improve just one section.",
        "Write one sentence for a cover letter. That’s it. But make it good!",
        "Spend 30 minutes improving one project representation in your portfolio.",
        "Update your LinkedIn headline or profile section.",
        "Review your portfolio website and think of one thing to improve.",
        "Work up a project to go in your portfolio (Dog and Bike, Pupcicles, etc)."
    ],

    "Personal Projects": [
        "Spend 1 hour on David's mural.",
        "Spend 1 hour on art for your family.",
        "Spend 30 minutes on Kinship (read the blog, sketch the brand, rethink the idea… just engage)."
    ],

    "Hobbies": [
        "Go skate. Land 3 ollies and 3 180s.",
        "Do your full skating warm-up. No skipping steps.",
        "Try 10 kickflips. Actually commit.",
        "Finish off painting an unfinished warhammer model or squad.",
        "Start painting a new warhammer model.",
        "Paint one piece of warhammer scenery.",
        "Clean and service your bike—chain, tyres, the lot.",
        "Start or continue reading a book or magazine, for 30 minutes."
    ],

    "Fitness & Health": [
        "Hang for at least one minute - and update the sheet with your time!",
        "Go for a 30 minute walk or jog in the park. And no looking at your phone!",
        "Cook one healthy meal today. Eat it mindfully.",
        "Drink two to three pint glasses of water today.",
        "Resist a cigarette for one hour.. or two? You can handle that.",
        "Do 5 minutes of slow, deep breathing. Reset your system.",
        "Stay off Reddit for a 2 hour period today. Set a timer and go.",
        "Plan tomorrow’s meals. Basic ideas will do, not full recipes. But follow through with it tomorrow!",
    ],

    "Make your house nice": [
        "Do all the dishes. Dry and put them away.",
        "Tidy and clean your living space. Make it feel fresh.",
        "Hang up a piece of art - or swap one out for variety.",
        "Water your plants. Wipe dust off their leaves and pots.",
        "Put your clutter away. One flat surface at a time.",
        "Spend 30 minutes organising your warhammer.",
        "Make one visible improvement to your flat.",
        "Clean one bathroom area (shower, toilet, mirror etc).",
        "Pick up and bin one piece of rubbish from the garden."
    ],

    "Be a Better Partner": [
        "Send a thoughtful message or compliment to your partner",
        "Plan one small shared activity (walk, game, movie)",
        "Reflect on one thing you appreciate about your partner",
        "Ask your partner about their day and listen attentively",
        "Cook or prepare a meal together",
        "Think of something they want - then plan how to support it."
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
