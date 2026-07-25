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
      question: "Look! Three puppies are playing. Two more puppies run over. How many puppies are playing now?",
      visual: { type: "groups", asset: "puppy", groups: [3, 2], symbol: "+" },
      choices: [{ label: "4", pictures: 4 }, { label: "5", pictures: 5 }, { label: "6", pictures: 6 }],
      correct: "5",
      success: "Very good! There are five puppies! Woof, woof!",
      retry: "Let's count the puppies together. Touch each puppy and say one, two, three, four, five.",
      tip: "Let the child touch each puppy on the screen while counting aloud."
    },
    {
      id: "k-more", grade: "k", lesson: 2, title: "The Balloon Contest", skill: "More, less or equal",
      question: "Lena has four balloons. Max has two. Who has more balloons?",
      visual: { type: "compare", asset: "balloon", groups: [4, 2], labels: ["Lena", "Max"] },
      choices: [{ label: "2", pictures: 2 }, { label: "4", pictures: 4 }, { label: "Same", textOnly: true }],
      correct: "4",
      success: "You got it! Lena's four balloons are the bigger bunch!",
      retry: "Let's count each bunch. Which bunch has more balloons?",
      tip: "Match balloons from the two groups in pairs. The group with balloons left over has more."
    },
    {
      id: "k-pattern", grade: "k", lesson: 3, title: "The Shape Train", skill: "Shapes and patterns",
      question: "The shape train says circle, triangle, circle, triangle. What comes next?",
      visual: { type: "pattern", sequence: ["circle", "triangle", "circle", "triangle", "blank"] },
      choices: [{ label: "Circle", shape: "circle" }, { label: "Square", shape: "square" }, { label: "Triangle", shape: "triangle" }],
      correct: "Circle",
      success: "Hooray! Circle comes next. Circle and triangle take turns!",
      retry: "Say it with me: circle, triangle, circle, triangle. What comes next?",
      tip: "Say the pattern aloud together: circle, triangle, circle, triangle."
    },
    {
      id: "k-add", grade: "k", lesson: 4, title: "Grandma's Cookies", skill: "Addition within 10",
      question: "You have two cookies. Grandma gives you three more. How many cookies do you have now?",
      visual: { type: "groups", asset: "cookie", groups: [2, 3], symbol: "+" },
      choices: [{ label: "4", pictures: 4 }, { label: "5", pictures: 5 }, { label: "6", pictures: 6 }],
      correct: "5",
      success: "Yum! You have five cookies. Great counting!",
      retry: "Let's touch and count every cookie together.",
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

  const logicChallenges = {
    k: [
      {
        rule: "Red, blue, red, blue. The colors take turns!",
        question: "What color comes next?",
        visual: ["🔴", "🔵", "🔴", "🔵", "❓"],
        choices: [{ label: "Red", icon: "🔴" }, { label: "Blue", icon: "🔵" }, { label: "Green", icon: "🟢" }],
        correct: "Red",
        success: "Yes! Red comes next. Great job!",
        retry: "Say the colors with me: red, blue, red, blue. What comes next?"
      },
      {
        rule: "Star, star, moon. Then it starts again!",
        question: "What goes in the empty spot?",
        visual: ["⭐", "⭐", "🌙", "⭐", "⭐", "❓"],
        choices: [{ label: "Star", icon: "⭐" }, { label: "Moon", icon: "🌙" }, { label: "Sun", icon: "☀️" }],
        correct: "Moon",
        success: "Yes! The moon comes after two stars!",
        retry: "Say it with me: star, star, moon. Star, star... what comes next?"
      },
      {
        rule: "Cat, dog, cat, dog. They take turns!",
        question: "Who comes next?",
        visual: ["🐱", "🐶", "🐱", "🐶", "❓"],
        choices: [{ label: "Dog", icon: "🐶" }, { label: "Cat", icon: "🐱" }, { label: "Rabbit", icon: "🐰" }],
        correct: "Cat",
        success: "Meow! The cat comes next. You did it!",
        retry: "Say it slowly: cat, dog, cat, dog."
      },
      {
        rule: "Apple, apple, banana. Then we do it again!",
        question: "What comes after the two apples?",
        visual: ["🍎", "🍎", "🍌", "🍎", "🍎", "❓"],
        choices: [{ label: "Apple", icon: "🍎" }, { label: "Banana", icon: "🍌" }, { label: "Orange", icon: "🍊" }],
        correct: "Banana",
        success: "Yes! The banana comes next. Yummy!",
        retry: "Say it with me: apple, apple, banana. Apple, apple... what comes next?"
      },
      {
        rule: "Sun, cloud, rain. Then it starts again!",
        question: "What comes after the cloud?",
        visual: ["☀️", "☁️", "🌧️", "☀️", "☁️", "❓"],
        choices: [{ label: "Rain", icon: "🌧️" }, { label: "Sun", icon: "☀️" }, { label: "Snow", icon: "❄️" }],
        correct: "Rain",
        success: "Splash! Rain comes next. Great job!",
        retry: "Say it with me: sun, cloud, rain. Sun, cloud... what comes next?"
      },
      {
        rule: "Car, bus, car, bus. They take turns!",
        question: "What comes next?",
        visual: ["🚗", "🚌", "🚗", "🚌", "❓"],
        choices: [{ label: "Bus", icon: "🚌" }, { label: "Car", icon: "🚗" }, { label: "Train", icon: "🚂" }],
        correct: "Car",
        success: "Beep, beep! The car comes next!",
        retry: "Say it with me: car, bus, car, bus. What comes next?"
      }
    ],
    1: [
      {
        rule: "If it can fly, choose Sky. Otherwise, choose Ground.",
        question: "Where does the butterfly belong?",
        visual: ["🦋"],
        choices: [{ label: "Sky", icon: "☁️" }, { label: "Ground", icon: "🌱" }],
        correct: "Sky",
        success: "Sky is right because a butterfly can fly.",
        retry: "Ask yourself: can a butterfly fly?"
      },
      {
        rule: "If it lives in water, choose Water. Otherwise, choose Land.",
        question: "Where does the elephant belong?",
        visual: ["🐘"],
        choices: [{ label: "Water", icon: "🌊" }, { label: "Land", icon: "🏞️" }],
        correct: "Land",
        success: "Land is right because an elephant lives on land.",
        retry: "Think about where an elephant walks and sleeps."
      },
      {
        rule: "If the shape has corners, choose Corners. Otherwise, choose No corners.",
        question: "Which choice follows the rule for this circle?",
        visual: ["🔵"],
        choices: [{ label: "Corners", icon: "🔶" }, { label: "No corners", icon: "⭕" }],
        correct: "No corners",
        success: "No corners is right. A circle is round all the way around.",
        retry: "Trace the circle in the air. Do you feel any corners?"
      },
      {
        rule: "If the animal has feathers, choose Bird. Otherwise, choose Not a bird.",
        question: "Which choice follows the rule for this penguin?",
        visual: ["🐧"],
        choices: [{ label: "Bird", icon: "🐦" }, { label: "Not a bird", icon: "❌" }],
        correct: "Bird",
        success: "Bird is right! A penguin has feathers even though it does not fly.",
        retry: "Look at the penguin's body. Penguins have feathers."
      },
      {
        rule: "If the number is greater than 5, choose Big group. Otherwise, choose Small group.",
        question: "Which group should the number 8 join?",
        visual: ["8"],
        choices: [{ label: "Big group", icon: "🐘" }, { label: "Small group", icon: "🐭" }],
        correct: "Big group",
        success: "Big group is right because eight is greater than five.",
        retry: "Count past five: six, seven, eight."
      },
      {
        rule: "If it is used in the rain, choose Rainy day. Otherwise, choose Sunny day.",
        question: "Where does the umbrella belong?",
        visual: ["☂️"],
        choices: [{ label: "Rainy day", icon: "🌧️" }, { label: "Sunny day", icon: "☀️" }],
        correct: "Rainy day",
        success: "Rainy day is right because an umbrella keeps rain off you.",
        retry: "Think about the weather when you open an umbrella."
      }
    ],
    2: [
      {
        rule: "The number machine adds 2 to every number.",
        question: "Four goes in. What number comes out?",
        visual: ["4", "⚙️ +2", "❓"],
        choices: [{ label: "5" }, { label: "6" }, { label: "8" }],
        correct: "6",
        success: "Six comes out because four plus two equals six.",
        retry: "Start at four and count forward two more."
      },
      {
        rule: "The number machine doubles every number.",
        question: "Five goes in. What number comes out?",
        visual: ["5", "⚙️ ×2", "❓"],
        choices: [{ label: "7" }, { label: "10" }, { label: "12" }],
        correct: "10",
        success: "Ten comes out because double five is ten.",
        retry: "Doubling means adding five and five."
      },
      {
        rule: "The number machine subtracts 3 from every number.",
        question: "Nine goes in. What number comes out?",
        visual: ["9", "⚙️ −3", "❓"],
        choices: [{ label: "6" }, { label: "7" }, { label: "12" }],
        correct: "6",
        success: "Six comes out because nine minus three equals six.",
        retry: "Start at nine and count backward three."
      },
      {
        rule: "The number machine adds 10 to every number.",
        question: "Twenty-three goes in. What number comes out?",
        visual: ["23", "⚙️ +10", "❓"],
        choices: [{ label: "24" }, { label: "33" }, { label: "43" }],
        correct: "33",
        success: "Thirty-three comes out because twenty-three plus ten is thirty-three.",
        retry: "Adding ten makes the tens digit one larger."
      },
      {
        rule: "The number machine subtracts 5 from every number.",
        question: "Seventeen goes in. What number comes out?",
        visual: ["17", "⚙️ −5", "❓"],
        choices: [{ label: "11" }, { label: "12" }, { label: "22" }],
        correct: "12",
        success: "Twelve comes out because seventeen minus five equals twelve.",
        retry: "Count backward five steps from seventeen."
      },
      {
        rule: "The number machine makes three equal groups of the number.",
        question: "Four goes in. What is three groups of four?",
        visual: ["4", "⚙️ ×3", "❓"],
        choices: [{ label: "7" }, { label: "12" }, { label: "16" }],
        correct: "12",
        success: "Twelve comes out because four plus four plus four equals twelve.",
        retry: "Add three groups: four plus four plus four."
      }
    ],
    3: [
      {
        rule: "If the path ahead is blocked, turn right. Otherwise, move forward.",
        question: "The robot sees a barrier ahead. What should it do?",
        visual: ["🤖", "🚧"],
        choices: [{ label: "Turn right", icon: "↪️" }, { label: "Move forward", icon: "⬆️" }, { label: "Stop forever", icon: "🛑" }],
        correct: "Turn right",
        success: "Turn right is correct! The barrier means the path ahead is blocked.",
        retry: "Read the first part of the rule: what happens when the path is blocked?"
      },
      {
        rule: "If the battery is low, charge. Otherwise, keep exploring.",
        question: "The robot battery shows 10 percent. What should it do?",
        visual: ["🤖", "🪫", "10%"],
        choices: [{ label: "Keep exploring", icon: "🗺️" }, { label: "Charge", icon: "🔌" }, { label: "Dance", icon: "💃" }],
        correct: "Charge",
        success: "Charge is correct because 10 percent is a low battery.",
        retry: "A nearly empty battery needs energy before the robot continues."
      },
      {
        rule: "If the light is green, move. Otherwise, wait.",
        question: "The robot sees a red light. What should it do?",
        visual: ["🤖", "🔴"],
        choices: [{ label: "Move", icon: "➡️" }, { label: "Wait", icon: "⏳" }, { label: "Turn around", icon: "↩️" }],
        correct: "Wait",
        success: "Wait is correct! The light is not green.",
        retry: "The rule says to move only when the light is green."
      },
      {
        rule: "If the package is fragile, carry it slowly. Otherwise, roll quickly.",
        question: "The robot sees a box marked fragile. What should it do?",
        visual: ["🤖", "📦", "⚠️"],
        choices: [{ label: "Carry slowly", icon: "🐢" }, { label: "Roll quickly", icon: "💨" }, { label: "Leave it", icon: "🚫" }],
        correct: "Carry slowly",
        success: "Carry slowly is correct because the package is fragile.",
        retry: "Fragile means the package could break."
      },
      {
        rule: "If the bridge is open, cross it. Otherwise, find another path.",
        question: "The bridge is closed. What should the robot do?",
        visual: ["🤖", "🌉", "🚫"],
        choices: [{ label: "Cross it", icon: "➡️" }, { label: "Find another path", icon: "🗺️" }, { label: "Jump", icon: "🦘" }],
        correct: "Find another path",
        success: "Find another path is correct because the bridge is closed.",
        retry: "The robot may cross only when the bridge is open."
      },
      {
        rule: "If the object is magnetic, pick it up. Otherwise, leave it.",
        question: "The robot tests an iron paper clip. What should it do?",
        visual: ["🤖", "🧲", "📎"],
        choices: [{ label: "Pick it up", icon: "✅" }, { label: "Leave it", icon: "❌" }, { label: "Hide", icon: "🙈" }],
        correct: "Pick it up",
        success: "Pick it up is correct because iron is attracted to a magnet.",
        retry: "Think about what a magnet does to an iron paper clip."
      }
    ]
  };

  const trophyChallenges = {
    k: [
      {
        rule: "Apple, banana, orange. Then it starts again!",
        question: "What fruit goes in the empty spot?",
        visual: ["🍎", "🍌", "🍊", "🍎", "❓", "🍊"],
        choices: [{ label: "Apple", icon: "🍎" }, { label: "Banana", icon: "🍌" }, { label: "Orange", icon: "🍊" }],
        correct: "Banana",
        success: "Yes! The banana goes between the apple and orange!",
        retry: "Say it with me: apple, banana, orange. Apple... what comes next?"
      },
      {
        rule: "Three pictures are animals. One picture is not!",
        question: "Which one is not an animal?",
        visual: ["🐶", "🐱", "🚗", "🐰"],
        choices: [{ label: "Dog", icon: "🐶" }, { label: "Car", icon: "🚗" }, { label: "Rabbit", icon: "🐰" }],
        correct: "Car",
        success: "Beep, beep! The car is not an animal. You found it!",
        retry: "Which picture cannot eat, sleep or make an animal sound?"
      },
      {
        rule: "One star, then two stars, then three stars. It keeps growing!",
        question: "How many stars come next?",
        visual: ["⭐", "⭐⭐", "⭐⭐⭐", "❓"],
        choices: [{ label: "2 stars", icon: "⭐⭐" }, { label: "4 stars", icon: "⭐⭐⭐⭐" }, { label: "5 stars", icon: "⭐⭐⭐⭐⭐" }],
        correct: "4 stars",
        success: "Four stars! The stars grow by one each time. Wow!",
        retry: "Count with me: one, two, three. What number comes next?"
      }
    ],
    1: [
      {
        rule: "If it has wings and feathers, choose Bird. Otherwise, choose Not a bird.",
        question: "A bat has wings but no feathers. Which choice follows both parts of the rule?",
        visual: ["🦇"],
        choices: [{ label: "Bird", icon: "🐦" }, { label: "Not a bird", icon: "❌" }],
        correct: "Not a bird",
        success: "Not a bird is correct. A bat has wings, but it does not have feathers.",
        retry: "Both clues must be true: wings and feathers."
      },
      {
        rule: "If the number is even, choose Pair. If it is odd, choose One left over.",
        question: "Which choice follows the rule for 7?",
        visual: ["7", "●●", "●●", "●●", "●"],
        choices: [{ label: "Pair", icon: "👯" }, { label: "One left over", icon: "1️⃣" }],
        correct: "One left over",
        success: "One is left over when seven objects are put into pairs.",
        retry: "Make pairs from seven and see whether one remains."
      },
      {
        rule: "If it is cold and wet, choose Snow. If it is warm and wet, choose Rain.",
        question: "The weather is cold and wet. What should fall?",
        visual: ["🥶", "💧"],
        choices: [{ label: "Rain", icon: "🌧️" }, { label: "Snow", icon: "❄️" }, { label: "Sunshine", icon: "☀️" }],
        correct: "Snow",
        success: "Snow is correct because the weather is both cold and wet.",
        retry: "Use both clues: cold and wet."
      }
    ],
    2: [
      {
        rule: "The two-step machine adds 2, then doubles the result.",
        question: "Three goes in. What comes out?",
        visual: ["3", "+2", "×2", "❓"],
        choices: [{ label: "7" }, { label: "8" }, { label: "10" }],
        correct: "10",
        success: "Ten comes out: three plus two is five, then double five is ten.",
        retry: "Do the steps in order. First add two, then double."
      },
      {
        rule: "Use the same hidden rule: 2 becomes 6, and 4 becomes 12.",
        question: "Using that rule, what does 5 become?",
        visual: ["2→6", "4→12", "5→❓"],
        choices: [{ label: "10" }, { label: "15" }, { label: "20" }],
        correct: "15",
        success: "Fifteen is right. The hidden rule multiplies every number by three.",
        retry: "Ask what turns two into six and four into twelve."
      },
      {
        rule: "If the number is even, add 5. If it is odd, subtract 1.",
        question: "Eight is even. What does the rule make?",
        visual: ["8", "even", "+5", "❓"],
        choices: [{ label: "7" }, { label: "12" }, { label: "13" }],
        correct: "13",
        success: "Thirteen is right because eight is even, so we add five.",
        retry: "First decide whether eight is even, then use the matching rule."
      }
    ],
    3: [
      {
        rule: "If the path is blocked, turn right. After turning, move forward two spaces.",
        question: "The robot sees a barrier. Which complete command is correct?",
        visual: ["🤖", "🚧", "❓"],
        choices: [{ label: "Right, forward 2", icon: "↪️2️⃣" }, { label: "Forward 2", icon: "⬆️2️⃣" }, { label: "Left, stop", icon: "↩️🛑" }],
        correct: "Right, forward 2",
        success: "Right, forward two follows both instructions in the correct order.",
        retry: "The robot must turn before it moves."
      },
      {
        rule: "Start at 3. Double the number, then add 4.",
        question: "What is the final number?",
        visual: ["3", "×2", "+4", "❓"],
        choices: [{ label: "10" }, { label: "12" }, { label: "14" }],
        correct: "10",
        success: "Ten is right. Double three is six, and six plus four is ten.",
        retry: "Complete the multiplication step before adding four."
      },
      {
        rule: "If the battery is below 20 percent, charge. If an obstacle is also ahead, send an alert first.",
        question: "The battery is 15 percent and a barrier is ahead. What should happen first?",
        visual: ["🤖", "15%", "🚧"],
        choices: [{ label: "Send an alert", icon: "🚨" }, { label: "Charge silently", icon: "🔌" }, { label: "Move forward", icon: "⬆️" }],
        correct: "Send an alert",
        success: "Send an alert is correct because both special conditions are true.",
        retry: "The rule says what to do first when low battery and an obstacle happen together."
      }
    ]
  };

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
      if (/aria|jenny|ava|andrew|brian|guy|ryan|samantha|sonia|libby|emma|joanna/.test(name)) score += 70;
      if (/google us english/.test(name)) score += 55;
      if (/zira|david|mark|desktop|compact|espeak|robot/.test(name)) score -= 80;
      if (voice.localService === false) score += 12;
      return score;
    };
    return englishVoices.sort((a, b) => scoreVoice(b) - scoreVoice(a))[0];
  }

  function chooseMaleAnnouncerVoice() {
    const englishVoices = availableVoices.filter(voice => /^en([-_]|$)/i.test(voice.lang));
    const scoreVoice = voice => {
      const name = voice.name.toLowerCase();
      let score = voice.lang === "en-US" ? 25 : 0;
      if (/natural|neural|premium|enhanced/.test(name)) score += 90;
      if (/guy|andrew|brian|ryan|david|mark|daniel|alex|james|george|matthew/.test(name)) score += 110;
      if (/aria|jenny|ava|samantha|sonia|libby|emma|joanna|zira/.test(name)) score -= 90;
      if (/compact|espeak|robot/.test(name)) score -= 80;
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
    utterance.rate = 0.92;
    utterance.pitch = 1.03;
    utterance.volume = 0.94;
    if (status) status.textContent = statusText;
    utterance.onstart = () => { if (status) status.textContent = statusText; };
    utterance.onend = () => { if (status) status.textContent = "Ready for another story."; };
    utterance.onerror = () => { if (status) status.textContent = "The voice could not play. Please try the Listen button again."; };
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utterance);
  }

  function speakTrophyCongratulations(playerName, grade) {
    if (muted || !canSpeak) return;
    window.speechSynthesis.cancel();
    const gradeLabel = gradeInfo[grade]?.label || "Math Adventures";
    const utterance = new SpeechSynthesisUtterance(
      `${playerName}, congratulations! You earned the ${gradeLabel} gold trophy! Outstanding job!`
    );
    const announcerVoice = chooseMaleAnnouncerVoice();
    if (announcerVoice) utterance.voice = announcerVoice;
    utterance.lang = "en-US";
    utterance.rate = 0.86;
    utterance.pitch = 0.78;
    utterance.volume = 1;
    const status = document.getElementById("voiceStatus");
    utterance.onstart = () => {
      if (status) status.textContent = `${playerName} earned the ${gradeLabel} gold trophy!`;
    };
    utterance.onend = () => {
      if (status) status.textContent = "Ready for another adventure.";
    };
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

  function renderLogicGame(grade) {
    const info = gradeInfo[grade];
    const kindergarten = grade === "k";
    const titles = {
      k: "Pattern Party",
      1: "Follow the Funny Rule",
      2: "The Number Machine",
      3: "Robot Rule Rescue"
    };
    return `<section class="logic-game logic-grade-${grade}" data-logic-grade="${grade}" aria-labelledby="logic-title-${grade}">
      <div class="logic-heading">
        <span class="logic-mascot" aria-hidden="true">${grade === "3" ? "🤖" : grade === "2" ? "⚙️" : "🧠"}</span>
        <div>
          <p class="eyebrow">${kindergarten ? "LOOK · LISTEN · PICK" : "LOOK · THINK · CHOOSE"}</p>
          <h3 id="logic-title-${grade}">${titles[grade]}</h3>
          <p>${kindergarten ? "Play six little picture games. Win six stars and open the special Trophy Game!" : "Solve six mini challenges to unlock the advanced Trophy Round!"}</p>
        </div>
        <button class="logic-listen" type="button"><span aria-hidden="true">🔊</span> ${kindergarten ? "Tell me what to do" : "Read the rule"}</button>
      </div>
      <div class="logic-progress" aria-label="Six challenge progress">
        <span aria-hidden="true">☆</span><span aria-hidden="true">☆</span><span aria-hidden="true">☆</span>
        <span aria-hidden="true">☆</span><span aria-hidden="true">☆</span><span aria-hidden="true">☆</span>
        <strong>0 of 6</strong>
      </div>
      <div class="logic-rule-card">
        <small class="logic-rule-label">${kindergarten ? "LISTEN TO THIS" : `${info.label} logic rule`}</small>
        <p class="logic-rule"></p>
      </div>
      <div class="logic-visual" aria-hidden="true"></div>
      <p class="logic-question"></p>
      <div class="logic-choices"></div>
      <p class="logic-feedback" role="status" aria-live="polite">${kindergarten ? "Listen, look at the pictures and pick one!" : "Listen to the rule, then choose your answer."}</p>
      <button class="logic-next" type="button" disabled>${kindergarten ? "Next picture game" : "Next challenge"} <span aria-hidden="true">→</span></button>
      <aside class="logic-trophy-panel" aria-live="polite">
        <span class="logic-trophy-icon" aria-hidden="true">🔒</span>
        <div>
          <strong>${kindergarten ? "Special Trophy Game" : "Trophy Round"}</strong>
          <p class="logic-trophy-status">${kindergarten ? "Win six stars to open three extra-special picture games!" : "Earn all six stars to unlock three advanced challenges."}</p>
        </div>
      </aside>
    </section>`;
  }

  function renderGrade(grade) {
    const info = gradeInfo[grade];
    const gradeStories = stories.filter(story => story.grade === grade);
    return `<section class="math-grade-panel" id="grade-${grade}" data-panel="${grade}" role="tabpanel" hidden>
      <div class="math-grade-heading">
        <img class="math-grade-art" src="${info.art}" alt="${info.label} learner enjoying a colorful math activity">
        <span class="math-grade-number">${info.number}</span>
        <div><p class="eyebrow">${info.label.toUpperCase()}</p><h2>${info.title}</h2><p>${grade === "k" ? "Press Listen. Look at the fun pictures. Then pick your answer! You can listen again whenever you want." : "Press <strong>Listen</strong>, study the pictures and choose an answer. You can replay every story as many times as you like."}</p></div>
      </div>
      ${grade === "k" ? renderCountingGame() : ""}
      ${renderLogicGame(grade)}
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

  const trophyGrades = ["k", "1", "2", "3"];
  const currentPlayerByGrade = {};
  let queuedPlayerName = "";
  const trophyNamesByGrade = {};
  const earnedTrophiesThisVisit = new Set();
  let threeTrophyMilestoneCelebrated = false;

  /* Remove awards saved by earlier versions. Trophies now last only while
     Math Adventures remains open. */
  try {
    trophyGrades.forEach(level => {
      localStorage.removeItem(`ucan-math-logic-trophy-${level}`);
      localStorage.removeItem(`ucan-math-trophy-name-${level}`);
    });
    localStorage.removeItem("ucan-three-trophy-celebrated-v1382");
  } catch {}

  const earnedTrophyGrades = () => trophyGrades.filter(level => earnedTrophiesThisVisit.has(level));

  const renderTrophyShelf = () => {
    const shelf = document.getElementById("mathTrophyShelf");
    const earned = earnedTrophyGrades();
    const labels = { k: "Kindergarten", 1: "Grade 1", 2: "Grade 2", 3: "Grade 3" };
    if (shelf) {
      shelf.innerHTML = `
        <div class="trophy-shelf-wall">
          <div class="trophy-shelf-sign">Our Gold Trophy Shelf</div>
          <div class="trophy-awards">
            ${earned.length ? earned.map(level => `
              <article class="shelf-trophy">
                <span aria-hidden="true">🏆</span>
                <div class="trophy-engraving"><strong>${escapeHtml(trophyNamesByGrade[level] || "Winner")}</strong><small>${labels[level]}</small></div>
              </article>`).join("") : `
              <div class="empty-trophy-shelf"><span aria-hidden="true">✨</span><strong>Your first trophy will go right here!</strong><small>Pick a grade and start playing.</small></div>`}
          </div>
          <div class="wooden-shelf" aria-hidden="true"></div>
        </div>`;
    }
    const dock = document.getElementById("mathTrophyDock");
    if (dock) {
      const shortLabels = { k: "K", 1: "1", 2: "2", 3: "3" };
      dock.innerHTML = trophyGrades.map(level => {
        const won = earned.includes(level);
        return `
          <div class="kids-trophy-dock-row ${won ? "earned" : ""}">
            <strong>${shortLabels[level]}</strong>
            <span aria-hidden="true">${won ? "🏆" : "☆"}</span>
            <small>${won ? escapeHtml(trophyNamesByGrade[level] || "Winner") : "Waiting"}</small>
          </div>`;
      }).join("");
    }
  };

  const askPlayerForGrade = grade => new Promise(resolve => {
    const choosingGrade = !grade;
    const gradeLabel = choosingGrade ? "" : gradeInfo[grade].label;
    const prompt = document.createElement("div");
    prompt.className = "player-name-prompt";
    prompt.setAttribute("role", "dialog");
    prompt.setAttribute("aria-modal", "true");
    prompt.setAttribute("aria-labelledby", "player-name-title");
    prompt.innerHTML = `
      <form class="player-name-card">
        <span class="player-name-trophy" aria-hidden="true">🏆</span>
        <p>${choosingGrade ? "MATH ADVENTURES" : escapeHtml(gradeLabel.toUpperCase())}</p>
        <h2 id="player-name-title">${choosingGrade ? "Who is ready to play?" : "Who is playing this level?"}</h2>
        <label for="mathPlayerName">Ask a grown-up to help you type it.</label>
        <input id="mathPlayerName" name="playerName" type="text" maxlength="24" autocomplete="off" value="" placeholder="Type the child's name" required>
        <small>${choosingGrade ? "Next, choose a grade. This name will go on the trophy!" : `If you win, this name will be engraved on the ${escapeHtml(gradeLabel)} trophy.`}</small>
        <button type="submit">${choosingGrade ? "Choose my grade!" : "Let's play!"}</button>
      </form>`;
    document.body.appendChild(prompt);
    const input = prompt.querySelector("input");
    const form = prompt.querySelector("form");
    window.setTimeout(() => input.focus(), 80);
    form.addEventListener("submit", event => {
      event.preventDefault();
      const name = input.value.trim().replace(/\s+/g, " ").slice(0, 24);
      if (!name) {
        input.focus();
        return;
      }
      if (grade) {
        currentPlayerByGrade[grade] = name;
        if (earnedTrophiesThisVisit.has(grade)) trophyNamesByGrade[grade] = name;
      }
      prompt.classList.add("closing");
      window.setTimeout(() => prompt.remove(), 260);
      renderTrophyShelf();
      resolve(name);
    });
  });

  renderTrophyShelf();

  const celebrateTrophy = (grade, playerName) => {
    const trophies = earnedTrophiesThisVisit.size;
    const threeTrophyMilestone = trophies >= 3 && !threeTrophyMilestoneCelebrated;
    if (threeTrophyMilestone) threeTrophyMilestoneCelebrated = true;

    window.speechSynthesis?.cancel();
    const celebration = document.createElement("div");
    celebration.className = "three-trophy-celebration";
    celebration.setAttribute("role", "dialog");
    celebration.setAttribute("aria-modal", "true");
    celebration.setAttribute("aria-label", "Three trophy celebration");
    celebration.innerHTML = `
      <div class="trophy-fireworks" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
      <div class="three-trophy-card">
        <span class="three-trophy-icons" aria-hidden="true">${threeTrophyMilestone ? "🏆 🏆 🏆" : "🏆"}</span>
        <p>${threeTrophyMilestone ? "THREE TROPHIES! HOORAY!" : "WOW! YOU DID IT!"}</p>
        <h2>${threeTrophyMilestone ? `${escapeHtml(playerName)}, you are a Super Learner!` : `${escapeHtml(playerName)}, you won a shiny gold trophy!`}</h2>
        <strong>${threeTrophyMilestone ? "You worked so hard! Clap, dance and give yourself a great big high five!" : "Very good, superstar! Your trophy is waiting on your special shelf!"}</strong>
        <button type="button">Very good! Keep playing!</button>
      </div>`;
    document.body.appendChild(celebration);
    const song = new Audio("three-trophy-celebration.mp3");
    song.volume = .55;
    window.setTimeout(() => speakTrophyCongratulations(playerName, grade), 300);
    window.setTimeout(() => song.play().catch(() => {}), 4100);
    const close = () => {
      song.pause();
      celebration.classList.add("closing");
      window.setTimeout(() => celebration.remove(), 320);
    };
    celebration.querySelector("button").addEventListener("click", close);
    window.setTimeout(close, 12500);
    if (typeof gtag === "function") gtag("event", threeTrophyMilestone ? "kids_math_three_trophies_earned" : "kids_math_trophy_celebration", { grade });
    return true;
  };

  document.querySelectorAll(".logic-game").forEach(game => {
    const grade = game.dataset.logicGrade;
    const rule = game.querySelector(".logic-rule");
    const ruleLabel = game.querySelector(".logic-rule-label");
    const visual = game.querySelector(".logic-visual");
    const question = game.querySelector(".logic-question");
    const choices = game.querySelector(".logic-choices");
    const feedback = game.querySelector(".logic-feedback");
    const nextButton = game.querySelector(".logic-next");
    const listenButton = game.querySelector(".logic-listen");
    const stars = [...game.querySelectorAll(".logic-progress span")];
    const progressText = game.querySelector(".logic-progress strong");
    const trophyPanel = game.querySelector(".logic-trophy-panel");
    const trophyIcon = game.querySelector(".logic-trophy-icon");
    const trophyStatus = game.querySelector(".logic-trophy-status");
    let trophyEarned = false;
    let mode = "regular";
    let round = [...logicChallenges[grade]].sort(() => Math.random() - .5);
    let challengeIndex = 0;
    let solved = 0;
    let currentChallenge = round[0];

    const updateProgress = () => {
      const total = mode === "trophy" ? 3 : 6;
      stars.forEach((star, index) => {
        const active = index < total;
        const filled = active && index < solved;
        star.hidden = !active;
        star.textContent = filled ? "★" : "☆";
        star.classList.toggle("filled", filled);
      });
      progressText.textContent = `${solved} of ${total}`;
      trophyPanel.classList.toggle("earned", trophyEarned);
      trophyIcon.textContent = trophyEarned ? "🏆" : mode === "trophy" ? "🔓" : "🔒";
      if (trophyEarned) {
        trophyStatus.textContent = grade === "k" ? "You won your shiny gold trophy! It will stay right here for you." : "Gold trophy earned! This award will stay displayed on this computer.";
      } else if (mode === "trophy") {
        trophyStatus.textContent = grade === "k" ? `${solved} of 3 special picture games finished.` : `${solved} of 3 advanced challenges completed.`;
      } else if (solved === 6) {
        trophyStatus.textContent = grade === "k" ? "Hooray! The Special Trophy Game is open!" : "Unlocked! Enter the Trophy Round for three advanced challenges.";
      } else {
        trophyStatus.textContent = grade === "k"
          ? `Find ${6 - solved} more ${6 - solved === 1 ? "star" : "stars"} to open the Special Trophy Game!`
          : `Earn ${6 - solved} more ${6 - solved === 1 ? "star" : "stars"} to unlock three advanced challenges.`;
      }
    };

    const readChallenge = () => {
      speak(
        `${mode === "trophy" ? (grade === "k" ? "Special Trophy Game! " : "Trophy Round. ") : ""}${currentChallenge.rule} ${currentChallenge.question}`,
        grade === "k" ? "Listen and pick a picture." : (mode === "trophy" ? "Reading the advanced Trophy rule." : "Reading the logic rule.")
      );
    };

    const renderChallenge = () => {
      currentChallenge = round[challengeIndex];
      game.classList.toggle("trophy-mode", mode === "trophy");
      ruleLabel.textContent = grade === "k"
        ? (mode === "trophy" ? "EXTRA-SPECIAL GAME" : "LISTEN TO THIS")
        : (mode === "trophy" ? "Advanced Trophy Rule" : `${gradeInfo[grade].label} logic rule`);
      rule.textContent = currentChallenge.rule;
      question.textContent = currentChallenge.question;
      visual.innerHTML = currentChallenge.visual.map(token => `<span class="logic-token">${escapeHtml(token)}</span>`).join('<b aria-hidden="true">→</b>');
      choices.innerHTML = currentChallenge.choices.map(choice => `<button class="logic-choice" type="button" data-answer="${escapeHtml(choice.label)}">${choice.icon ? `<span aria-hidden="true">${escapeHtml(choice.icon)}</span>` : ""}<strong>${escapeHtml(choice.label)}</strong></button>`).join("");
      feedback.className = "logic-feedback";
      feedback.textContent = grade === "k" ? "Listen, look at the pictures and pick one!" : "Listen to the rule, then choose your answer.";
      nextButton.disabled = true;
      nextButton.innerHTML = grade === "k" ? 'Next picture game <span aria-hidden="true">→</span>' : 'Next challenge <span aria-hidden="true">→</span>';

      choices.querySelectorAll(".logic-choice").forEach(button => {
        button.addEventListener("click", () => {
          if (button.disabled) return;
          const correct = button.dataset.answer === currentChallenge.correct;
          choices.querySelectorAll(".logic-choice").forEach(choice => choice.classList.remove("correct", "wrong"));
          button.classList.add(correct ? "correct" : "wrong");

          if (!correct) {
            feedback.className = "logic-feedback retry";
            feedback.innerHTML = `<strong>${grade === "k" ? "Oops! Let's try again!" : "Good try!"}</strong> ${escapeHtml(currentChallenge.retry)}`;
            speak(grade === "k" ? `Oops! That's okay. Let's try again. ${currentChallenge.retry}` : `Good try. ${currentChallenge.retry}`, grade === "k" ? "Let's try again." : "Here is a logic hint.");
            if (typeof gtag === "function") gtag("event", "kids_math_logic_answer", { grade, correct: false });
            return;
          }

          solved += 1;
          updateProgress();
          choices.querySelectorAll(".logic-choice").forEach(choice => {
            choice.disabled = true;
            if (choice.dataset.answer === currentChallenge.correct) choice.classList.add("correct");
          });
          feedback.className = "logic-feedback success";
          feedback.innerHTML = `<strong>${grade === "k" ? "★ Very good! You got it!" : "★ Great thinking!"}</strong> ${escapeHtml(currentChallenge.success)}`;
          game.classList.add("logic-celebrate");
          window.setTimeout(() => game.classList.remove("logic-celebrate"), 1200);

          if (mode === "regular" && solved === 6) {
            trophyPanel.classList.add("unlocked");
            feedback.innerHTML = `<strong>${grade === "k" ? "★★★★★★ Hooray! Your Special Trophy Game is open!" : "★★★★★★ Trophy Round unlocked!"}</strong> ${escapeHtml(currentChallenge.success)}`;
            nextButton.innerHTML = grade === "k" ? 'Play the Special Trophy Game <span aria-hidden="true">🏆</span>' : 'Enter Trophy Round <span aria-hidden="true">🏆</span>';
            speak(grade === "k" ? `${currentChallenge.success} Wow! You found all six stars! Your Special Trophy Game is open!` : `${currentChallenge.success} Amazing! You earned all six stars and unlocked the Trophy Round!`, grade === "k" ? "Your special game is open!" : "Unlocking the Trophy Round!");
          } else if (mode === "trophy" && solved === 3) {
            trophyEarned = true;
            earnedTrophiesThisVisit.add(grade);
            updateProgress();
            game.classList.add("trophy-won");
            feedback.innerHTML = `<strong>🏆 You won a shiny gold trophy!</strong> ${escapeHtml(currentChallenge.success)} You got all three big challenges right. Wow!`;
            nextButton.innerHTML = grade === "k" ? 'Play the picture games again <span aria-hidden="true">↻</span>' : 'Play the six-star round again <span aria-hidden="true">↻</span>';
            const finishTrophy = playerName => {
              trophyNamesByGrade[grade] = playerName;
              renderTrophyShelf();
              celebrateTrophy(grade, playerName);
            };
            const playerName = currentPlayerByGrade[grade];
            if (playerName) finishTrophy(playerName);
            else askPlayerForGrade(grade).then(finishTrophy);
          } else {
            speak(grade === "k" ? `Very good! You got it! ${currentChallenge.success}` : `Great thinking! ${currentChallenge.success}`, grade === "k" ? "You got it!" : "Celebrating your logic answer!");
          }
          nextButton.disabled = false;
          if (typeof gtag === "function") gtag("event", "kids_math_logic_answer", { grade, mode, correct: true, solved });
        });
      });
    };

    listenButton.addEventListener("click", readChallenge);
    nextButton.addEventListener("click", () => {
      if (mode === "regular" && solved === 6) {
        mode = "trophy";
        solved = 0;
        challengeIndex = 0;
        round = [...trophyChallenges[grade]].sort(() => Math.random() - .5);
        trophyPanel.classList.add("unlocked");
        updateProgress();
      } else if (mode === "trophy" && solved === 3) {
        mode = "regular";
        solved = 0;
        challengeIndex = 0;
        round = [...logicChallenges[grade]].sort(() => Math.random() - .5);
        game.classList.remove("trophy-won");
        updateProgress();
      } else {
        challengeIndex += 1;
      }
      renderChallenge();
      readChallenge();
    });

    updateProgress();
    renderChallenge();
  });

  const tabs = [...document.querySelectorAll(".math-grade-tab")];
  const panels = [...document.querySelectorAll(".math-grade-panel")];
  function showGrade(grade, scroll = false) {
    window.speechSynthesis?.cancel();
    const learningArea = document.querySelector(".math-learning-area");
    if (learningArea) learningArea.hidden = false;
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

  const enterGrade = (grade, scroll = false) => {
    if (queuedPlayerName) {
      currentPlayerByGrade[grade] = queuedPlayerName;
      queuedPlayerName = "";
      showGrade(grade, scroll);
      return;
    }
    askPlayerForGrade(grade).then(() => showGrade(grade, scroll));
  };
  tabs.forEach(tab => tab.addEventListener("click", () => enterGrade(tab.dataset.grade, true)));
  document.getElementById("startMathAdventure")?.addEventListener("click", event => {
    event.preventDefault();
    askPlayerForGrade(null).then(name => {
      queuedPlayerName = name;
      document.getElementById("choose-grade")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".voice-story").forEach(card => {
    const story = stories.find(item => item.id === card.dataset.storyId);
    const kindergartenStory = story.grade === "k";
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
      feedback.innerHTML = `<strong>${correct ? (kindergartenStory ? "★ Very good! You got it!" : "★ Yeah—you got it!") : (kindergartenStory ? "Oops! Let's try again!" : "Good try!")}</strong><span>${escapeHtml(correct ? story.success : story.retry)}</span>`;
      const spokenFeedback = correct
        ? (kindergartenStory ? `Very good! You got it! ${story.success}` : `Yeah! Great thinking. You got it! ${story.success}`)
        : (kindergartenStory ? `Oops! That's okay. Let's try again. ${story.retry}` : `Good try. That answer is not correct yet. ${story.retry}`);
      speak(spokenFeedback, correct ? (kindergartenStory ? "You got it!" : "Celebrating your answer!") : (kindergartenStory ? "Let's try again." : "Here is a helpful hint."));
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
  instructionsButton?.addEventListener("click", () => speak("Welcome to Math Adventures. Choose your grade. Every grade has six Logic Challenges. Listen to the rule, study the pictures, and choose what should happen. Earn all six stars to unlock a Trophy Round with three harder challenges. Complete the Trophy Round to earn a gold trophy for this visit. Kindergarten learners can also pick any of the six mystery boxes to reveal the numbers one through six. For every story problem, press Listen, study the pictures, and choose an answer. You can replay every question whenever you need help.", "Reading the directions."));
  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector("nav");
  menuButton?.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
})();
