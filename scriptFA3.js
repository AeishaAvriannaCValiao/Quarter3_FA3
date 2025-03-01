function startAdventure() {
    // Generate three random numbers between 0 and 20
    let num1 = Math.ceil(Math.random() * 21);
    let num2 = Math.ceil(Math.random() * 21);
    let num3 = Math.ceil(Math.random() * 21);

    // Find the largest number
    let largest = Math.max(num1, num2, num3);

    // Choose the adventure outcome based on the largest number
    let outcome = '';
    if (largest === num1) {
        outcome = "You've braved the dark forest, defeated the dragon, and discovered the treasure!";
    } else if (largest === num2) {
        outcome = "You stumbled upon an ancient temple, solving complex riddles to find the hidden gems!";
    } else {
        outcome = "You ventured across the mountains and found the secret passage to the treasure vault!";
    }

  
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let mysteryLetter = alphabet[num1 - 1];  // num1 determines the nth letter

    let totalMinutes = num2 * num3;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    let story = `
        <p><span class="highlight">Adventure Outcome:</span> ${outcome}</p>
        <p><span class="highlight">The secret letter you found on your quest is:</span> ${mysteryLetter}</p>
        <p><span class="highlight">Total time spent on the journey:</span> ${totalMinutes} minutes (${hours} hours and ${minutes} minutes).</p>
    `;

    // Display the story
    document.getElementById('story').innerHTML = story;
}
