const answers = [
  'duine', 'abair', 'maith', 'faigh', 'téigh', 'nuair', 'amach', 'ceann', 'caith', /* rest of the words */
];

let remainingWords = [...answers];

function getNextGuess() {
  const feedback = document.getElementById('feedback').value.trim();
  
  // Parse feedback and filter words
  remainingWords = filterWords(remainingWords, feedback);
  
  // Calculate the best next guess
  const bestGuess = selectBestGuess(remainingWords);
  
  // Update the UI
  document.getElementById('bestGuess').textContent = bestGuess || "No words left!";
}

function filterWords(words, feedback) {
  const feedbackPattern = feedback.split('');
  return words.filter(word => {
    for (let i = 0; i < feedbackPattern.length; i++) {
      if (feedbackPattern[i] === 'G' && word[i] !== feedback[i]) return false; // Green
      if (feedbackPattern[i] === 'Y' && (word[i] === feedback[i] || !word.includes(feedback[i]))) return false; // Yellow
      if (feedbackPattern[i] === '-' && word.includes(feedback[i])) return false; // Grey
    }
    return true;
  });
}

function selectBestGuess(words) {
  // Optional: Add logic to determine the statistically best word
  return words[0]; // Default: Return the first word
}
