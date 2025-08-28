// Task categories and their respective tasks
const taskCategories = {
    "Job-Hunting / Career": [
        "Look at one job listing and note one skill you already have",
        "Make a list of three companies that interest you",
        "Open your CV and update one section",
        "Draft one sentence for a cover letter",
        "Send one networking message or email",
        "Do one small creative or joyful thing (draw, skate, music, short story)",
        "Research one new skill that could help your career",
        "Update your LinkedIn headline or profile section",
        "Save 3 job listings to review later",
        "Write down one professional goal for the week",
        "Reflect on a past achievement and write it down",
        "Reach out to one contact in your network for advice"
    ],

    "Skateboarding": [
        "Warm up for five minutes (stretch or roll)",
        "Practice one small skateboarding trick or variation",
        "Watch one tutorial or video",
        "Film one attempt to review later",
        "Do foot placement drills for ten minutes",
        "Do a fun, playful trick — no pressure, just enjoyment",
        "Work on ollie timing for five minutes",
        "Practice balance on your board while stationary",
        "Try one small variation of a trick you already know",
        "Review past video footage for improvements",
        "Do a short rolling warm-up around your spot",
        "Visualize landing a trick before attempting it"
    ],

    "Fitness & Health": [
        "Do 10–15 minutes of bodyweight exercise",
        "Go for a 15–20 minute walk or jog",
        "Do stretch or mobility exercises for 10 minutes",
        "Prepare one healthy meal or snack",
        "Drink two to three glasses of water",
        "Do meditation, extra rest, or another restorative activity",
        "Practice deep breathing for five minutes",
        "Track one aspect of your fitness progress",
        "Try a new mobility exercise",
        "Plan your meals for the next day",
        "Spend 5 minutes on posture exercises",
        "Take a short break and move every hour"
    ],

    "Be a Better Partner": [
        "Send a thoughtful message or compliment to your partner",
        "Do one small act of service for your partner (make a drink, tidy, help with a task)",
        "Spend 10 minutes of quality time without distractions",
        "Plan one small shared activity (walk, game, movie)",
        "Reflect on one thing you appreciate about your partner",
        "Do something playful or silly together (joke, mini game, dance, or surprise)",
        "Ask your partner about their day and listen attentively",
        "Share one memory or story that makes you laugh together",
        "Leave a small note or message of appreciation",
        "Cook or prepare a small snack together",
        "Suggest one mini-project or creative activity together",
        "Give a genuine compliment or encouragement"
    ],

    "Calisthenics": [
        "Hang from a bar for 10 seconds (dead hang)",
        "Do 5 incline push-ups (hands on a table or counter)",
        "Hold a knee plank for 10–15 seconds",
        "Do 8 glute bridges lying on your back",
        "Perform 5 negative pull-ups (jump up, lower slowly)",
        "Do 10 bodyweight squats",
        "Hold a side plank for 10 seconds per side",
        "Do 5 assisted dips on a chair",
        "Perform 10 mountain climbers",
        "Do 5 pike push-ups",
        "Perform 5 hollow body holds (tucked)",
        "Stretch shoulders and wrists for 5 minutes"
    ],

    "Warhammer": [
        "Pick one unit and read its full profile/stats",
        "Paint one base or small detail on a miniature",
        "Organize miniatures for storage or painting",
        "Research one army tactic or strategy online",
        "Assemble one piece of a miniature kit",
        "Plan your next small hobby goal (painting, converting, or collecting)",
        "Apply a wash or layer on one miniature",
        "Review a past painted miniature and plan improvements",
        "Take photos of your progress for reference",
        "Watch one tutorial on painting or modeling",
        "Sketch one custom design for a miniature",
        "Clean brushes or workspace after painting session"
    ]
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
