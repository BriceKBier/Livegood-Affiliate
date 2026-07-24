(() => {
  const assets = {
    puppy: "math-puppy.jpg",
    apple: "math-apple.jpg",
    balloon: "math-balloon.jpg",
    block: "math-block.jpg",
    cookie: "math-cookie.jpg",
    marble: "math-marble.jpg",
    book: "math-book.jpg",
    pizza: "math-pizza.jpg",
    coin: "math-coin.jpg"
  };

  const gradeInfo = {
    k: { label: "Kindergarten", number: "K", title: "Count, compare and discover.", art: "math-kindergarten.jpg", color: "yellow" },
    1: { label: "Grade 1", number: "1", title: "Add, subtract and read number clues.", art: "math-grade-1.jpg", color: "aqua" },
    2: { label: "Grade 2", number: "2", title: "Break bigger numbers into friendly parts.", art: "math-grade-2.jpg", color: "purple" },
    3: { label: "Grade 3", number: "3", title: "Multiply, divide, measure and explore fractions.", art: "math-grade-3.jpg", color: "green" }
  };

  const stories = [
    {
      id: "k-count", grade: "k", lesson: 1, title: "Puppies Come to Play", skill: "Counting and adding",
      question: "Three puppies are playing in the yard. Two more puppies come to play. How many puppies are playing altogether?",
      visual: { type: "groups", asset: "puppy", groups: [3, 2], symbol: "+" },
      choices: [{ label: "4", pictures: 4 }, { label: "5", pictures: 5 }, { label: "6", pictures: 6 }],
      correct: "5",
      success: "Great job! Three puppies plus two puppies makes five puppies altogether.",
      retry: "Good try. Point to each puppy and count them one at a time.",
      tip: "Let the child touch each puppy on the screen while counting aloud."
    },
    {
      id: "k-more", grade: "k", lesson: 2, title: "The Balloon Contest", skill: "More, less or equal",
      question: "Lena has four balloons. Max has two balloons. Which number shows the group with more balloons?",
      visual: { type: "compare", asset: "balloon", groups: [4, 2], labels: ["Lena", "Max"] },
      choices: [{ label: "2", pictures: 2 }, { label: "4", pictures: 4 }, { label: "Same", textOnly: true }],
      correct: "4",
      success: "That's right! Four balloons is more than two balloons.",
      retry: "Almost. Count both groups again and choose the bigger group.",
      tip: "Match balloons from the two groups in pairs. The group with balloons left over has more."
    },
    {
      id: "k-pattern", grade: "k", lesson: 3, title: "The Shape Train", skill: "Shapes and patterns",
      question: "The shape train goes circle, triangle, circle, triangle. Which shape should come next?",
      visual: { type: "pattern", sequence: ["circle", "triangle", "circle", "triangle", "blank"] },
      choices: [{ label: "Circle", shape: "circle" }, { label: "Square", shape: "square" }, { label: "Triangle", shape: "triangle" }],
      correct: "Circle",
      success: "You found the pattern! Circle comes next because circle and triangle repeat.",
      retry: "Look at the first two shapes. The same pair repeats again.",
      tip: "Say the pattern aloud together: circle, triangle, circle, triangle."
    },
    {
      id: "k-add", grade: "k", lesson: 4, title: "Grandma's Cookies", skill: "Addition within 10",
      question: "You have two cookies. Grandma gives you three more cookies. How many cookies do you have altogether?",
      visual: { type: "groups", asset: "cookie", groups: [2, 3], symbol: "+" },
      choices: [{ label: "4", pictures: 4 }, { label: "5", pictures: 5 }, { label: "6", pictures: 6 }],
      correct: "5",
      success: "Wonderful! Two cookies plus three cookies equals five cookies.",
      retry: "Let's count every cookie in both groups one more time.",
      tip: "Use real crackers, coins or blocks to act out the same addition story."
    },
    {
      id: "g1-add", grade: "1", lesson: 1, title: "Apples for the Picnic", skill: "Addition within 20",
      question: "There are eight apples in a picnic basket. Dad adds five more apples. How many apples are in the basket now?",
      visual: { type: "groups", asset: "apple", groups: [8, 5], symbol: "+" },
      choices: [{ label: "12" }, { label: "13" }, { label: "14" }],
      correct: "13",
      success: "Excellent! Eight plus five equals thirteen. You can make ten first, then add three more.",
      retry: "Try making ten. Add two apples to eight, then count the three apples that remain.",
      tip: "Encourage the make-ten strategy: 8 + 2 = 10, then 10 + 3 = 13."
    },
    {
      id: "g1-subtract", grade: "1", lesson: 2, title: "Balloons Float Away", skill: "Subtraction within 20",
      question: "There are fourteen balloons at a party. Five balloons float away. How many balloons are left?",
      visual: { type: "takeaway", asset: "balloon", total: 14, removed: 5 },
      choices: [{ label: "8" }, { label: "9" }, { label: "10" }],
      correct: "9",
      success: "Correct! Fourteen minus five equals nine balloons left.",
      retry: "Start at fourteen and count backward five times.",
      tip: "The faded balloons are the ones that floated away. Count the bright balloons that remain."
    },
    {
      id: "g1-place", grade: "1", lesson: 3, title: "Build the Number", skill: "Tens and ones",
      question: "Maya builds three towers of ten blocks and adds four single blocks. What number did Maya build?",
      visual: { type: "placeValue", hundreds: 0, tens: 3, ones: 4 },
      choices: [{ label: "34" }, { label: "43" }, { label: "304" }],
      correct: "34",
      success: "You got it! Three tens are thirty, and four ones make thirty-four.",
      retry: "Count by tens first: ten, twenty, thirty. Then add the four single blocks.",
      tip: "Point to each ten tower while counting 10, 20, 30, then count on four more."
    },
    {
      id: "g1-time", grade: "1", lesson: 4, title: "Time for the Park", skill: "Telling time",
      question: "The short hand points to four. The long hand points to twelve. What time does the clock show?",
      visual: { type: "clock", hour: 4, minute: 0 },
      choices: [{ label: "4:00" }, { label: "4:30" }, { label: "12:20" }],
      correct: "4:00",
      success: "That's right! The clock shows four o'clock.",
      retry: "The long hand at twelve means zero minutes. Now look at the short hour hand.",
      tip: "The short hand tells the hour. The long hand at 12 means exactly on the hour."
    },
    {
      id: "g2-place", grade: "2", lesson: 1, title: "The Number Factory", skill: "Place value to 1,000",
      question: "The number machine makes five hundreds, eight tens and three ones. Which number did it make?",
      visual: { type: "placeValue", hundreds: 5, tens: 8, ones: 3 },
      choices: [{ label: "538" }, { label: "583" }, { label: "853" }],
      correct: "583",
      success: "Exactly! Five hundreds, eight tens and three ones makes five hundred eighty-three.",
      retry: "Read the columns in order: hundreds first, then tens, then ones.",
      tip: "Ask the child to say the value of each digit separately: 500, 80 and 3."
    },
    {
      id: "g2-add", grade: "2", lesson: 2, title: "Books on Two Shelves", skill: "Two-digit addition",
      question: "One shelf holds forty-six books. Another shelf holds thirty-five books. How many books are on both shelves altogether?",
      visual: { type: "numberGroups", asset: "book", values: [46, 35], symbol: "+" },
      choices: [{ label: "71" }, { label: "81" }, { label: "91" }],
      correct: "81",
      success: "Great thinking! Forty-six plus thirty-five equals eighty-one books.",
      retry: "Add the ones first: six plus five. Then add the tens.",
      tip: "Break apart the numbers: 40 + 30 = 70 and 6 + 5 = 11; then 70 + 11 = 81."
    },
    {
      id: "g2-subtract", grade: "2", lesson: 3, title: "The Marble Collection", skill: "Two-digit subtraction",
      question: "Noah has sixty-three marbles. He gives twenty-nine marbles to his friends. How many marbles does Noah have left?",
      visual: { type: "numberGroups", asset: "marble", values: [63, 29], symbol: "−" },
      choices: [{ label: "32" }, { label: "34" }, { label: "44" }],
      correct: "34",
      success: "Correct! Sixty-three minus twenty-nine equals thirty-four marbles.",
      retry: "Try subtracting thirty first, then add one back because twenty-nine is one less than thirty.",
      tip: "A friendly strategy is 63 − 30 = 33, then 33 + 1 = 34."
    },
    {
      id: "g2-groups", grade: "2", lesson: 4, title: "Cookies for Three Plates", skill: "Equal groups",
      question: "Fifteen cookies are shared equally on three plates. How many cookies should go on each plate?",
      visual: { type: "shareGroups", asset: "cookie", total: 15, groups: 3, each: 5 },
      choices: [{ label: "4", pictures: 4 }, { label: "5", pictures: 5 }, { label: "6", pictures: 6 }],
      correct: "5",
      success: "Perfect sharing! Five cookies on each of three plates makes fifteen cookies.",
      retry: "Give one cookie to each plate again and again until all fifteen are shared.",
      tip: "Use 15 counters and physically deal them into three equal groups."
    },
    {
      id: "g3-multiply", grade: "3", lesson: 1, title: "Apple Baskets", skill: "Multiplication",
      question: "There are four baskets. Each basket holds three apples. How many apples are there altogether?",
      visual: { type: "shareGroups", asset: "apple", total: 12, groups: 4, each: 3 },
      choices: [{ label: "7" }, { label: "12" }, { label: "14" }],
      correct: "12",
      success: "Terrific! Four groups of three equals twelve. Four times three is twelve.",
      retry: "Count by threes for each basket: three, six, nine, twelve.",
      tip: "Connect repeated addition to multiplication: 3 + 3 + 3 + 3 = 12."
    },
    {
      id: "g3-divide", grade: "3", lesson: 2, title: "Treats for the Puppies", skill: "Division",
      question: "Eighteen treats are shared equally among three puppies. How many treats does each puppy receive?",
      visual: { type: "puppyShare", total: 18, groups: 3, each: 6 },
      choices: [{ label: "5", pictures: 5, asset: "cookie" }, { label: "6", pictures: 6, asset: "cookie" }, { label: "9" }],
      correct: "6",
      success: "Excellent! Eighteen divided by three equals six treats for each puppy.",
      retry: "Share one treat with each puppy until all eighteen treats are gone.",
      tip: "Check division with multiplication: 3 puppies × 6 treats = 18 treats."
    },
    {
      id: "g3-fraction", grade: "3", lesson: 3, title: "Pizza Fractions", skill: "Fractions",
      question: "A pizza is cut into four equal slices. Three slices have been selected. What fraction of the pizza is selected?",
      visual: { type: "fraction", numerator: 3, denominator: 4, asset: "pizza" },
      choices: [{ label: "1/4", fraction: [1, 4] }, { label: "3/4", fraction: [3, 4] }, { label: "4/3", fraction: [4, 3] }],
      correct: "3/4",
      success: "You did it! Three of four equal slices is three-fourths.",
      retry: "The bottom number is all four slices. Count the three selected slices for the top number.",
      tip: "Say the meaning aloud: 3/4 means 3 of 4 equal parts."
    },
    {
      id: "g3-area", grade: "3", lesson: 4, title: "Tile the Playroom", skill: "Area",
      question: "A small playroom floor has four rows of three square tiles. How many square tiles cover the floor?",
      visual: { type: "array", rows: 4, columns: 3 },
      choices: [{ label: "7" }, { label: "12" }, { label: "14" }],
      correct: "12",
      success: "Great work! Four rows times three tiles equals twelve square tiles.",
      retry: "Count the tiles row by row, or multiply four times three.",
      tip: "Area counts the square units inside a shape. Here, 4 × 3 = 12 square units."
    }
  ];

  let muted = false;
  const canSpeak = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  let availableVoices = [];
  let hoverTimer = 0;

  function refreshVoices() {
    if (!canSpeak) return;
    availableVoices = window.speechSynthesis.getVoices();
  }
  refreshVoices();
  if (canSpeak) window.speechSynthesis.onvoiceschanged = refreshVoices;

  function chooseNaturalVoice() {
    const englishVoices = availableVoices.filter(voice => /^en([-_]|$)/i.test(voice.lang));
    const scoreVoice = voice => {
      const name = voice.name.toLowerCase();
      let score = voice.lang === "en-US" ? 20 : 0;
      if (/natural|neural|premium|enhanced/.test(name)) score += 100;
      if (/aria|jenny|ava|samantha|sonia|libby|emma|joanna/.test(name)) score += 70;
      if (/google us english/.test(name)) score += 55;
      if (/zira|david|mark|desktop|compact/.test(name)) score -= 80;
      if (voice.localService === false) score += 12;
      return score;
    };
    return englishVoices.sort((a, b) => scoreVoice(b) - scoreVoice(a))[0];
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  }

  function speak(text, statusText = "Speaking…") {
    const status = document.getElementById("voiceStatus");
    if (muted || !canSpeak) {
      if (status) status.textContent = canSpeak ? "Voice is muted." : "Voice is not available in this browser. You can still read and play every lesson.";
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const preferredVoice = chooseNaturalVoice();
    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.lang = "en-US";
    utterance.rate = 0.82;
    utterance.pitch = 0.98;
    utterance.volume = 1;
    if (status) status.textContent = statusText;
    utterance.onstart = () => { if (status) status.textContent = statusText; };
    utterance.onend = () => { if (status) status.textContent = "Ready for another story."; };
    utterance.onerror = () => { if (status) status.textContent = "The voice could not play. Please try the Listen button again."; };
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utterance);
  }

  function picture(asset, className = "") {
    return `<img class="story-object ${className}" src="${assets[asset]}" alt="">`;
  }

  function repeatedPictures(asset, count, className = "") {
    return `<div class="story-object-row ${className}" aria-hidden="true">${Array.from({ length: count }, () => picture(asset)).join("")}</div>`;
  }

  function renderPlaceValue({ hundreds = 0, tens = 0, ones = 0 }) {
    const hundredsHtml = Array.from({ length: hundreds }, () => '<span class="hundred-flat"></span>').join("");
    const tensHtml = Array.from({ length: tens }, () => '<span class="ten-rod"></span>').join("");
    const onesHtml = Array.from({ length: ones }, () => '<span class="one-cube"></span>').join("");
    return `<div class="place-value-picture">
      ${hundreds ? `<div><strong>Hundreds</strong><span class="place-items">${hundredsHtml}</span></div>` : ""}
      <div><strong>Tens</strong><span class="place-items">${tensHtml || '<em>None</em>'}</span></div>
      <div><strong>Ones</strong><span class="place-items">${onesHtml || '<em>None</em>'}</span></div>
    </div>`;
  }

  function renderClock(hour, minute) {
    const minuteDegrees = minute * 6;
    const hourDegrees = (hour % 12) * 30 + minute * .5;
    return `<div class="story-clock" role="img" aria-label="Clock showing ${hour}:${String(minute).padStart(2, "0")}">
      ${Array.from({ length: 12 }, (_, i) => `<span class="clock-number n${i + 1}">${i + 1}</span>`).join("")}
      <i class="clock-hand hour" style="transform:rotate(${hourDegrees}deg)"></i>
      <i class="clock-hand minute" style="transform:rotate(${minuteDegrees}deg)"></i>
      <b></b>
    </div>`;
  }

  function renderFraction(numerator, denominator, asset) {
    return `<div class="fraction-picture">
      ${picture(asset, "fraction-main-image")}
      <div class="fraction-parts" aria-label="${numerator} of ${denominator} equal parts selected">
        ${Array.from({ length: denominator }, (_, i) => `<span class="${i < numerator ? "selected" : ""}"></span>`).join("")}
      </div>
    </div>`;
  }

  function renderVisual(visual) {
    switch (visual.type) {
      case "groups":
        return `<div class="picture-equation">${repeatedPictures(visual.asset, visual.groups[0])}<strong>${visual.symbol}</strong>${repeatedPictures(visual.asset, visual.groups[1])}</div>`;
      case "compare":
        return `<div class="compare-picture">${visual.groups.map((count, i) => `<div><strong>${visual.labels[i]}</strong>${repeatedPictures(visual.asset, count)}</div>`).join("")}</div>`;
      case "pattern":
        return `<div class="shape-pattern">${visual.sequence.map(shape => shape === "blank" ? '<span class="pattern-blank">?</span>' : `<span class="math-css-shape ${shape}"></span>`).join("")}</div>`;
      case "takeaway":
        return `<div class="takeaway-picture">${Array.from({ length: visual.total }, (_, i) => picture(visual.asset, i >= visual.total - visual.removed ? "floated-away" : "")).join("")}</div><p class="picture-key">Faded pictures floated away.</p>`;
      case "placeValue":
        return renderPlaceValue(visual);
      case "clock":
        return renderClock(visual.hour, visual.minute);
      case "numberGroups":
        return `<div class="number-picture-equation"><div>${picture(visual.asset)}<strong>${visual.values[0]}</strong></div><b>${visual.symbol}</b><div>${picture(visual.asset)}<strong>${visual.values[1]}</strong></div></div>`;
      case "shareGroups":
        return `<div class="shared-groups">${Array.from({ length: visual.groups }, (_, i) => `<div><small>Group ${i + 1}</small>${repeatedPictures(visual.asset, visual.each)}</div>`).join("")}</div>`;
      case "puppyShare":
        return `<div class="shared-groups puppy-groups">${Array.from({ length: visual.groups }, (_, i) => `<div>${picture("puppy", "puppy-host")}<small>Puppy ${i + 1}</small>${repeatedPictures("cookie", visual.each)}</div>`).join("")}</div>`;
      case "fraction":
        return renderFraction(visual.numerator, visual.denominator, visual.asset);
      case "array":
        return `<div class="tile-array" style="--rows:${visual.rows};--columns:${visual.columns}" role="img" aria-label="${visual.rows} rows of ${visual.columns} square tiles">${Array.from({ length: visual.rows * visual.columns }, () => "<span></span>").join("")}</div>`;
      default:
        return "";
    }
  }

  function renderChoice(choice, story) {
    let visual = "";
    const choiceAsset = choice.asset || story.visual.asset;
    if (choice.pictures && choiceAsset) visual = repeatedPictures(choiceAsset, choice.pictures, "choice-pictures");
    if (choice.shape) visual = `<span class="math-css-shape ${choice.shape}"></span>`;
    if (choice.fraction) visual = `<span class="mini-fraction"><b>${choice.fraction[0]}</b><i></i><b>${choice.fraction[1]}</b></span>`;
    return `<button class="story-choice" type="button" data-answer="${escapeHtml(choice.label)}" aria-label="Choose ${escapeHtml(choice.label)}">${visual}<strong>${escapeHtml(choice.label)}</strong></button>`;
  }

  function renderStory(story) {
    return `<article class="voice-story" id="${story.id}" data-story-id="${story.id}">
      <header class="voice-story-heading">
        <span class="voice-lesson-number">${story.lesson}</span>
        <div><small>${escapeHtml(story.skill)}</small><h3>${escapeHtml(story.title)}</h3></div>
        <button class="story-listen" type="button" aria-label="Listen to ${escapeHtml(story.title)}"><span aria-hidden="true">🔊</span> Listen</button>
      </header>
      <p class="story-question">${escapeHtml(story.question)}</p>
      <div class="story-picture-stage">${renderVisual(story.visual)}</div>
      <p class="story-choice-prompt">Choose your answer:</p>
      <div class="story-choices">${story.choices.map(choice => renderChoice(choice, story)).join("")}</div>
      <div class="story-feedback" role="status" aria-live="polite"></div>
      <div class="story-footer"><button class="story-repeat" type="button"><span aria-hidden="true">↻</span> Hear it again</button><details><summary>Grown-up tip</summary><p>${escapeHtml(story.tip)}</p></details></div>
    </article>`;
  }

  function renderCountingGame() {
    return `<section class="counting-box-game" aria-labelledby="counting-box-title">
      <div class="counting-box-heading">
        <div>
          <p class="eyebrow">PICK · REVEAL · COUNT</p>
          <h3 id="counting-box-title">Find all six mystery numbers!</h3>
          <p>Choose any blank box. Each new box reveals the next number and says it aloud.</p>
        </div>
        <button class="counting-box-reset" type="button"><span aria-hidden="true">↻</span> Mix the boxes</button>
      </div>
      <div class="counting-box-grid" aria-label="Six blank counting boxes">
        ${Array.from({ length: 6 }, (_, index) => `<button class="counting-box counting-box-${index + 1}" type="button" aria-label="Blank counting box"></button>`).join("")}
      </div>
      <p class="counting-box-status" role="status" aria-live="polite">Pick any box to find number one.</p>
    </section>`;
  }

  function renderGrade(grade) {
    const info = gradeInfo[grade];
    const gradeStories = stories.filter(story => story.grade === grade);
    return `<section class="math-grade-panel${grade === "k" ? " active" : ""}" id="grade-${grade}" data-panel="${grade}" role="tabpanel"${grade === "k" ? "" : " hidden"}>
      <div class="math-grade-heading">
        <img class="math-grade-art" src="${info.art}" alt="${info.label} learner enjoying a colorful math activity">
        <span class="math-grade-number">${info.number}</span>
        <div><p class="eyebrow">${info.label.toUpperCase()}</p><h2>${info.title}</h2><p>Press <strong>Listen</strong>, study the pictures and choose an answer. You can replay every story as many times as you like.</p></div>
      </div>
      ${grade === "k" ? renderCountingGame() : ""}
      <div class="voice-story-grid">${gradeStories.map(renderStory).join("")}</div>
    </section>`;
  }

  const host = document.getElementById("mathStoryPanels");
  if (host) host.innerHTML = ["k", "1", "2", "3"].map(renderGrade).join("");

  document.querySelectorAll(".counting-box-game").forEach(game => {
    const grid = game.querySelector(".counting-box-grid");
    const status = game.querySelector(".counting-box-status");
    const reset = game.querySelector(".counting-box-reset");
    const numberWords = ["One", "Two", "Three", "Four", "Five", "Six"];
    let nextNumber = 1;

    const mixBoxes = () => {
      const boxes = [...grid.querySelectorAll(".counting-box")];
      boxes.sort(() => Math.random() - .5).forEach(box => {
        box.textContent = "";
        box.classList.remove("revealed", "just-revealed");
        box.removeAttribute("data-number");
        box.setAttribute("aria-label", "Blank counting box");
        grid.appendChild(box);
      });
      nextNumber = 1;
      status.textContent = "Pick any box to find number one.";
    };

    grid.addEventListener("click", event => {
      const box = event.target.closest(".counting-box");
      if (!box || box.classList.contains("revealed")) return;
      const number = nextNumber++;
      box.textContent = number;
      box.dataset.number = number;
      box.classList.add("revealed", "just-revealed");
      box.setAttribute("aria-label", `Number ${number}`);
      box.addEventListener("animationend", () => box.classList.remove("just-revealed"), { once: true });

      if (number < 6) {
        status.textContent = `You found ${numberWords[number - 1].toLowerCase()}! Pick another box.`;
        speak(numberWords[number - 1], `Counting ${numberWords[number - 1].toLowerCase()}.`);
      } else {
        status.textContent = "Great counting! You found all six!";
        game.classList.add("counting-complete");
        window.setTimeout(() => game.classList.remove("counting-complete"), 1300);
        speak("Six! Great counting! You found all six!", "Celebrating all six numbers!");
        if (typeof gtag === "function") gtag("event", "kids_math_counting_boxes_complete");
      }
    });

    reset.addEventListener("click", () => {
      window.speechSynthesis?.cancel();
      mixBoxes();
      speak("The boxes are mixed. Pick any box to find number one.", "The boxes are ready.");
      if (typeof gtag === "function") gtag("event", "kids_math_counting_boxes_reset");
    });

    mixBoxes();
  });

  const tabs = [...document.querySelectorAll(".math-grade-tab")];
  const panels = [...document.querySelectorAll(".math-grade-panel")];
  function showGrade(grade, scroll = false) {
    window.speechSynthesis?.cancel();
    tabs.forEach(tab => {
      const active = tab.dataset.grade === grade;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    panels.forEach(panel => {
      const active = panel.dataset.panel === grade;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
    history.replaceState(null, "", `${location.pathname}?grade=${grade}#choose-grade`);
    if (scroll) document.querySelector(".math-learning-area")?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof gtag === "function") gtag("event", "kids_math_grade_view", { grade });
  }

  tabs.forEach(tab => tab.addEventListener("click", () => showGrade(tab.dataset.grade, true)));

  document.querySelectorAll(".voice-story").forEach(card => {
    const story = stories.find(item => item.id === card.dataset.storyId);
    const feedback = card.querySelector(".story-feedback");
    const listen = () => speak(story.question, `Reading “${story.title}.”`);
    const evaluateAnswer = (button, interaction = "click") => {
      const correct = button.dataset.answer === story.correct;
      card.querySelectorAll(".story-choice").forEach(choice => {
        choice.classList.remove("correct", "wrong");
        choice.removeAttribute("aria-current");
      });
      button.classList.add(correct ? "correct" : "wrong");
      button.setAttribute("aria-current", "true");
      feedback.className = `story-feedback ${correct ? "success" : "retry"}`;
      feedback.innerHTML = `<strong>${correct ? "★ Yeah—you got it!" : "Good try!"}</strong><span>${escapeHtml(correct ? story.success : story.retry)}</span>`;
      const spokenFeedback = correct
        ? `Yeah! Great thinking. You got it! ${story.success}`
        : `Good try. That answer is not correct yet. ${story.retry}`;
      speak(spokenFeedback, correct ? "Celebrating your answer!" : "Here is a helpful hint.");
      if (correct) {
        card.classList.add("story-complete");
        setTimeout(() => card.classList.remove("story-complete"), 1300);
      }
      if (typeof gtag === "function") gtag("event", "kids_math_story_answer", { story_id: story.id, correct, interaction });
    };
    card.querySelector(".story-listen").addEventListener("click", listen);
    card.querySelector(".story-repeat").addEventListener("click", listen);
    card.querySelectorAll(".story-choice").forEach(button => {
      button.addEventListener("click", () => evaluateAnswer(button, "click"));
      button.addEventListener("pointerenter", event => {
        if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen") return;
        window.clearTimeout(hoverTimer);
        hoverTimer = window.setTimeout(() => evaluateAnswer(button, "hover"), 550);
      });
      button.addEventListener("pointerleave", () => window.clearTimeout(hoverTimer));
    });
  });

  const muteButton = document.getElementById("mathMute");
  const instructionsButton = document.getElementById("mathInstructions");
  if (!canSpeak) {
    document.body.classList.add("voice-unavailable");
    document.getElementById("voiceStatus").textContent = "Voice is not available in this browser. Every question remains visible and playable.";
  }
  muteButton?.addEventListener("click", () => {
    muted = !muted;
    window.speechSynthesis?.cancel();
    muteButton.setAttribute("aria-pressed", String(muted));
    muteButton.innerHTML = muted ? '<span aria-hidden="true">🔇</span> Voice muted' : '<span aria-hidden="true">🔊</span> Voice on';
    document.getElementById("voiceStatus").textContent = muted ? "Voice is muted." : "Voice is ready.";
  });
  instructionsButton?.addEventListener("click", () => speak("Welcome to Math Adventures. Choose your grade. Kindergarten learners can pick any of the six mystery boxes to reveal the numbers one through six. For every grade, press Listen to hear a story problem. Look at the pictures, then choose one of the three answers. On a computer, rest the mouse on an answer to hear friendly feedback. You can also click or tap an answer. If you need help, press Hear it again.", "Reading the directions."));

  const requested = new URLSearchParams(location.search).get("grade");
  if (["k", "1", "2", "3"].includes(requested)) showGrade(requested);
  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector("nav");
  menuButton?.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
})();
