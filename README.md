### Daily Tasks System ("Micro Steps")
- **Daily Task Generation**: Uses a seeded random algorithm to ensure consistent daily task selection
- **Category-Based Selection**: Ensures one task from each category to maintain variety
- **Progressive Revelation**: Users can reveal up to 3 tasks per day
- **Single Column Layout**: When 3 tasks are revealed, the layout switches to a centered single column
- **Persistent State**: Task progress is saved in localStorage
- **Motivational Messaging**: Dynamic instruction text that changes based on user interaction

## Daily Tasks Logic

### How It Works

1. **Daily Seed Generation**
   - Each day gets a unique seed based on the current date
   - Uses a hash function to convert the date string into a consistent number
   - This ensures the same tasks appear for the same date across sessions

2. **Task Selection Algorithm**
   - All tasks are shuffled using a seeded random number generator
   - The system ensures one task from each category is selected (when possible)
   - Maximum of 6 tasks per day, but typically 3 are revealed
   - Categories include: Job-Hunting/Career, Personal Projects, Hobbies, Fitness & Health, House Maintenance, and Relationship Building

3. **Progressive Revelation**
   - Users start with numbered buttons (1, 2, 3, etc.)
   - Clicking a button reveals the actual task
   - Once 3 tasks are revealed, remaining buttons disappear
   - Layout automatically switches to single column for better focus

4. **State Management**
   - Task states (revealed, completed) are saved in localStorage
   - Data persists across browser sessions
   - Old data is automatically cleaned up to prevent storage bloat

### Task Categories

The system includes 6 main categories with specific, actionable tasks:

- **Job-Hunting / Career**: CV updates, job applications, portfolio improvements
- **Personal Projects**: Creative work, family art, project development
- **Hobbies**: Skating, Warhammer painting, bike maintenance
- **Fitness & Health**: Exercise, nutrition, digital detox, mindfulness
- **Make your house nice**: Cleaning, organizing, home improvements
- **Be a Better Partner**: Relationship building, communication, shared activities

### Key JavaScript Functions

- `getDailySeed()`: Generates consistent daily seeds
- `seededShuffle()`: Fisher-Yates shuffle with seed for consistent randomization
- `getTodaysTasks()`: Selects tasks ensuring category diversity
- `updateInstructionText()`: Manages dynamic messaging
- `saveTaskState()` / `loadTaskState()`: Handles data persistence
