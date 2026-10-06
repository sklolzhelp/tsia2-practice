/* Original TSIA2-style practice items. Not College Board content.
   Answer indexes are 0-based and verified in scripts/verify_questions.py. */
const BANK = {
  math: [
    {
      id: "m01",
      category: "Quantitative Reasoning",
      skill: "Percent discount",
      stem: "A jacket priced at $80 is discounted 20%. What is the sale price?",
      choices: ["$16", "$60", "$64", "$96"],
      answer: 2,
      explanation: "Choice C is correct. Twenty percent of $80 is $16, and $80 − $16 = $64. Choice A is only the discount. Choice D adds the discount instead of subtracting it."
    },
    {
      id: "m02",
      category: "Quantitative Reasoning",
      skill: "Ratio",
      stem: "The ratio of red pens to blue pens is 3:5. If there are 24 red pens, how many blue pens are there?",
      choices: ["15", "40", "45", "72"],
      answer: 1,
      explanation: "Choice B is correct. 3/5 = 24/x, so x = 24 × 5 / 3 = 40. Choice A divides by the ratio instead of scaling it."
    },
    {
      id: "m03",
      category: "Quantitative Reasoning",
      skill: "Percent as an expression",
      stem: "Which expression represents 15% of x?",
      choices: ["15x", "x + 0.15", "0.15x", "x / 15"],
      answer: 2,
      explanation: "Choice C is correct. 15% means 15/100 = 0.15, so 15% of x is 0.15x. Choice A multiplies by 15, which is 1,500% of x."
    },
    {
      id: "m04",
      category: "Quantitative Reasoning",
      skill: "Proportion",
      stem: "A recipe uses 2 cups of flour for 12 muffins. How many cups of flour are needed for 30 muffins?",
      choices: ["2.5", "4", "5", "6"],
      answer: 2,
      explanation: "Choice C is correct. 2/12 = x/30, so x = 60/12 = 5. Each muffin uses 2/12 = 1/6 cup, and 30 × 1/6 = 5."
    },
    {
      id: "m05",
      category: "Quantitative Reasoning",
      skill: "Two-step linear equation",
      stem: "Solve for y: 3y − 6 = 15.",
      choices: ["3", "5", "7", "9"],
      answer: 2,
      explanation: "Choice C is correct. Add 6 to both sides: 3y = 21. Divide by 3: y = 7. Check: 3(7) − 6 = 15."
    },
    {
      id: "m06",
      category: "Algebraic Reasoning",
      skill: "Quadratic equation",
      stem: "What are the solutions of x² − 5x + 6 = 0?",
      choices: ["x = 1 and x = 6", "x = −2 and x = −3", "x = 2 and x = 3", "x = 5 and x = 6"],
      answer: 2,
      explanation: "Choice C is correct. x² − 5x + 6 = (x − 2)(x − 3) = 0, so x = 2 or x = 3. Both values make the original equation true."
    },
    {
      id: "m07",
      category: "Algebraic Reasoning",
      skill: "Function evaluation",
      stem: "If f(x) = 2x − 4, what is f(5)?",
      choices: ["1", "6", "10", "14"],
      answer: 1,
      explanation: "Choice B is correct. f(5) = 2(5) − 4 = 10 − 4 = 6. Choice C stops before subtracting 4."
    },
    {
      id: "m08",
      category: "Algebraic Reasoning",
      skill: "Equation with parentheses",
      stem: "Solve 2(x + 3) = 14.",
      choices: ["4", "5", "8", "11"],
      answer: 0,
      explanation: "Choice A is correct. Divide both sides by 2: x + 3 = 7, so x = 4. Check: 2(4 + 3) = 14."
    },
    {
      id: "m09",
      category: "Algebraic Reasoning",
      skill: "Equivalent rational expression",
      stem: "Which expression is equivalent to (x² − 9) / (x − 3) for x ≠ 3?",
      choices: ["x − 3", "x − 9", "x + 3", "x² − 3"],
      answer: 2,
      explanation: "Choice C is correct. x² − 9 = (x − 3)(x + 3), so the factor (x − 3) cancels when x ≠ 3, leaving x + 3."
    },
    {
      id: "m10",
      category: "Algebraic Reasoning",
      skill: "Linear model in context",
      stem: "A phone plan costs $25 per month plus $0.10 per minute. What is the cost of 80 minutes in one month?",
      choices: ["$25.80", "$33.00", "$35.00", "$105.00"],
      answer: 1,
      explanation: "Choice B is correct. Cost = 25 + 0.10(80) = 25 + 8 = 33. Choice A treats 80 cents as the usage charge."
    },
    {
      id: "m11",
      category: "Geometric and Spatial Reasoning",
      skill: "Area of a rectangle",
      stem: "A rectangle is 8 units long and 5 units wide. What is its area?",
      choices: ["13 square units", "26 square units", "40 square units", "80 square units"],
      answer: 2,
      explanation: "Choice C is correct. Area = length × width = 8 × 5 = 40. Choice B is the perimeter, 2(8 + 5) = 26."
    },
    {
      id: "m12",
      category: "Geometric and Spatial Reasoning",
      skill: "Pythagorean theorem",
      stem: "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
      choices: ["7", "10", "14", "48"],
      answer: 1,
      explanation: "Choice B is correct. 6² + 8² = 36 + 64 = 100, and √100 = 10. This is a 6-8-10 triangle, a multiple of 3-4-5."
    },
    {
      id: "m13",
      category: "Geometric and Spatial Reasoning",
      skill: "Area of a circle",
      stem: "A circle has radius 3. What is its area?",
      choices: ["3π", "6π", "9π", "12π"],
      answer: 2,
      explanation: "Choice C is correct. Area = πr² = π(3)² = 9π. Choice B is the circumference, 2πr = 6π."
    },
    {
      id: "m14",
      category: "Geometric and Spatial Reasoning",
      skill: "Unit conversion",
      stem: "How many inches are in 2.5 feet?",
      choices: ["24", "30", "32", "36"],
      answer: 1,
      explanation: "Choice B is correct. There are 12 inches in a foot, so 2.5 × 12 = 30 inches."
    },
    {
      id: "m15",
      category: "Geometric and Spatial Reasoning",
      skill: "Volume of a cube",
      stem: "A cube has side length 3. What is its volume?",
      choices: ["9", "12", "18", "27"],
      answer: 3,
      explanation: "Choice D is correct. Volume = side³ = 3 × 3 × 3 = 27. Choice A is the area of one face."
    },
    {
      id: "m16",
      category: "Probabilistic and Statistical Reasoning",
      skill: "Simple probability",
      stem: "A bag contains 3 red tiles and 5 blue tiles. One tile is drawn at random. What is the probability it is red?",
      choices: ["3/5", "3/8", "5/8", "1/3"],
      answer: 1,
      explanation: "Choice B is correct. Favorable outcomes over total outcomes: 3 red tiles out of 8 tiles, so 3/8."
    },
    {
      id: "m17",
      category: "Probabilistic and Statistical Reasoning",
      skill: "Median",
      stem: "What is the median of 4, 7, 7, 9, and 13?",
      choices: ["4", "7", "8", "9"],
      answer: 1,
      explanation: "Choice B is correct. The values are already ordered, and the middle value of five numbers is 7. The repeated 7 does not change the middle position."
    },
    {
      id: "m18",
      category: "Probabilistic and Statistical Reasoning",
      skill: "Mean",
      stem: "What is the mean of 10, 12, 14, and 16?",
      choices: ["12", "13", "14", "15"],
      answer: 1,
      explanation: "Choice B is correct. The sum is 52, and 52 / 4 = 13."
    },
    {
      id: "m19",
      category: "Probabilistic and Statistical Reasoning",
      skill: "Independent events",
      stem: "Two fair coins are flipped. What is the probability both land heads?",
      choices: ["1/4", "1/2", "1/3", "3/4"],
      answer: 0,
      explanation: "Choice A is correct. Each coin has probability 1/2 of heads, and the flips are independent, so (1/2)(1/2) = 1/4. The four outcomes are HH, HT, TH, and TT."
    },
    {
      id: "m20",
      category: "Probabilistic and Statistical Reasoning",
      skill: "Percent from a count",
      stem: "In a group of 40 students, 16 play soccer. What percent of the group plays soccer?",
      choices: ["4%", "16%", "25%", "40%"],
      answer: 3,
      explanation: "Choice D is correct. 16/40 = 0.40 = 40%. Choice B reports the count as if it were already a percent."
    }
  ],
  elar: [
    {
      id: "e01",
      category: "Literary Text Analysis",
      skill: "Inference",
      passage: "Mara set the library key on the counter and waited. The reading room was empty except for the clock over the door, which clicked past closing time. She had stayed to finish the last chapter, not because the ending surprised her, but because the quiet made each sentence feel heavier. When the night librarian appeared, he did not scold her. He turned one lamp back on and said, “Some books keep people later than they planned.”",
      stem: "Why did Mara stay late?",
      choices: [
        "She was locked inside the library.",
        "She wanted the quiet while she finished the last chapter.",
        "The librarian asked her to shelve books.",
        "She could not find the library key."
      ],
      answer: 1,
      explanation: "Choice B is correct. The passage says she stayed to finish the last chapter because the quiet made the sentences feel heavier. The key is on the counter, so she is not locked in or missing it."
    },
    {
      id: "e02",
      category: "Literary Text Analysis",
      skill: "Author's craft",
      passage: "Mara set the library key on the counter and waited. The reading room was empty except for the clock over the door, which clicked past closing time. She had stayed to finish the last chapter, not because the ending surprised her, but because the quiet made each sentence feel heavier. When the night librarian appeared, he did not scold her. He turned one lamp back on and said, “Some books keep people later than they planned.”",
      stem: "The librarian’s remark mainly suggests that",
      choices: [
        "he is angry about the clock.",
        "books can hold a reader’s attention past a planned time.",
        "the library will close for the week.",
        "Mara should pay a late fee."
      ],
      answer: 1,
      explanation: "Choice B is correct. “Some books keep people later than they planned” explains Mara’s late stay as the pull of reading, not as a penalty or a closure notice."
    },
    {
      id: "e03",
      category: "Literary Text Analysis",
      skill: "Explicit detail",
      passage: "Mara set the library key on the counter and waited. The reading room was empty except for the clock over the door, which clicked past closing time. She had stayed to finish the last chapter, not because the ending surprised her, but because the quiet made each sentence feel heavier. When the night librarian appeared, he did not scold her. He turned one lamp back on and said, “Some books keep people later than they planned.”",
      stem: "Which detail shows that the library is past closing time?",
      choices: [
        "Mara set the key on the counter.",
        "The clock clicked past closing time.",
        "One lamp was turned back on.",
        "The last chapter felt heavier."
      ],
      answer: 1,
      explanation: "Choice B is correct. The clock “clicked past closing time” is the direct statement of the time. The lamp comes later and does not by itself prove the hour."
    },
    {
      id: "e04",
      category: "Informational Text Analysis",
      skill: "Main idea",
      passage: "Community colleges in Texas use the TSIA2 to help decide whether a student is ready for college-level coursework. The English Language Arts and Reading portion asks students to read literary and informational texts and to revise writing. The Mathematics portion asks students to reason about quantities, algebra, geometry, and data. A strong score in one subject does not replace a score in the other. The multiple-choice sections are untimed.",
      stem: "Which statement best states the main idea of the passage?",
      choices: [
        "Only mathematics scores are used for placement.",
        "TSIA2 checks readiness in ELAR and mathematics, and the subjects are scored separately.",
        "The test must be finished in one hour.",
        "Literary texts are not part of the ELAR portion."
      ],
      answer: 1,
      explanation: "Choice B is correct. The passage names both portions and says a score in one subject does not replace the other. It also says the multiple-choice sections are untimed."
    },
    {
      id: "e05",
      category: "Informational Text Analysis",
      skill: "Supporting detail",
      passage: "Community colleges in Texas use the TSIA2 to help decide whether a student is ready for college-level coursework. The English Language Arts and Reading portion asks students to read literary and informational texts and to revise writing. The Mathematics portion asks students to reason about quantities, algebra, geometry, and data. A strong score in one subject does not replace a score in the other. The multiple-choice sections are untimed.",
      stem: "According to the passage, which statement is true?",
      choices: [
        "A mathematics score can stand in for an ELAR score.",
        "ELAR includes reading literary and informational texts.",
        "Geometry is excluded from the mathematics portion.",
        "The multiple-choice sections have a strict time limit."
      ],
      answer: 1,
      explanation: "Choice B is correct. The passage says the ELAR portion asks students to read literary and informational texts. The other choices contradict the passage."
    },
    {
      id: "e06",
      category: "Informational Text Analysis",
      skill: "Vocabulary in context",
      passage: "Community colleges in Texas use the TSIA2 to help decide whether a student is ready for college-level coursework. The English Language Arts and Reading portion asks students to read literary and informational texts and to revise writing. The Mathematics portion asks students to reason about quantities, algebra, geometry, and data. A strong score in one subject does not replace a score in the other. The multiple-choice sections are untimed.",
      stem: "In the passage, “portion” most nearly means",
      choices: ["a section of the test", "a serving of food", "a grade of A", "a late fee"],
      answer: 0,
      explanation: "Choice A is correct. “Portion” refers to the ELAR part and the Mathematics part of the assessment, not to food, a grade, or a fee."
    },
    {
      id: "e07",
      category: "Text Synthesis",
      skill: "Compare claims",
      passage: "Text 1: Students who study in the evening often report that they are more alert after dinner, so they finish problem sets with fewer breaks.\n\nText 2: Students who study in the morning often report fewer online distractions, so they stay with a reading assignment longer.",
      stem: "Which statement is supported by both texts?",
      choices: [
        "The time of day can affect how students stay focused.",
        "Evening study is always better than morning study.",
        "Focus does not matter for reading or problem sets.",
        "Both texts report results from the same experiment."
      ],
      answer: 0,
      explanation: "Choice A is correct. Text 1 ties evening alertness to fewer breaks, and Text 2 ties morning conditions to longer attention. Neither text says one time is always better or cites a shared experiment."
    },
    {
      id: "e08",
      category: "Text Synthesis",
      skill: "Contrast claims",
      passage: "Text 1: Students who study in the evening often report that they are more alert after dinner, so they finish problem sets with fewer breaks.\n\nText 2: Students who study in the morning often report fewer online distractions, so they stay with a reading assignment longer.",
      stem: "How do the two texts differ?",
      choices: [
        "Text 1 discusses evening alertness; Text 2 discusses morning distractions.",
        "Both texts recommend dropping homework.",
        "Text 1 is only about sports practice.",
        "Text 2 says evening study is required."
      ],
      answer: 0,
      explanation: "Choice A is correct. The difference is the time and the condition each text names. Neither text is about sports or required evening study."
    },
    {
      id: "e09",
      category: "Essay Revision and Editing",
      skill: "Relevance",
      passage: "(1) The campus testing center opens at 8 a.m. (2) Students should bring a photo ID. (3) The center also sells umbrellas on rainy days. (4) Students should arrive a few minutes early so staff can check them in.",
      stem: "Which sentence should be removed because it does not support the focus on arriving for a test?",
      choices: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4"],
      answer: 2,
      explanation: "Choice C is correct. Sentence 3 about umbrellas does not help a reader prepare for check-in. The other sentences give the opening time, the ID rule, or the arrival advice."
    },
    {
      id: "e10",
      category: "Essay Revision and Editing",
      skill: "Combining sentences",
      passage: "(2) Students should bring a photo ID. (4) Students should arrive a few minutes early so staff can check them in.",
      stem: "Which is the best way to combine sentences 2 and 4?",
      choices: [
        "Students should bring a photo ID, and they should arrive a few minutes early so staff can check them in.",
        "Students should bring a photo ID they should arrive early.",
        "Bringing a photo ID arriving early.",
        "Students should bring a photo ID, they should arrive."
      ],
      answer: 0,
      explanation: "Choice A is correct. It joins two complete ideas with a comma and a coordinating conjunction. Choice B is a run-on, Choice C is a fragment, and Choice D is a comma splice."
    },
    {
      id: "e11",
      category: "Sentence Revision and Conventions",
      skill: "Subject-verb agreement",
      stem: "Which sentence is grammatically correct?",
      choices: [
        "Each of the students have a calculator.",
        "Each of the students has a calculator.",
        "Each of the students have calculators for they.",
        "Each of the student has a calculator."
      ],
      answer: 1,
      explanation: "Choice B is correct. “Each” is singular, so the verb is “has.” Choice D also mismatches “each of the” with the singular noun “student.”"
    },
    {
      id: "e12",
      category: "Sentence Revision and Conventions",
      skill: "Pronoun agreement",
      stem: "Which sentence uses the pronoun correctly?",
      choices: [
        "The city updated their bus map.",
        "The city updated its bus map.",
        "The city updated it's bus map.",
        "The city updated there bus map."
      ],
      answer: 1,
      explanation: "Choice B is correct. “City” is one thing, so the possessive pronoun is “its.” “It’s” means “it is,” and “there” refers to a place."
    },
    {
      id: "e13",
      category: "Sentence Revision and Conventions",
      skill: "Complete sentence",
      stem: "Which is a complete sentence?",
      choices: [
        "Running across the courtyard before class.",
        "The student running across the courtyard.",
        "The student ran across the courtyard before class.",
        "Because the student ran across the courtyard."
      ],
      answer: 2,
      explanation: "Choice C is correct. It has a subject, “student,” and a finite verb, “ran.” The other choices are a participial phrase, a fragment missing a predicate verb, and a dependent clause."
    },
    {
      id: "e14",
      category: "Sentence Revision and Conventions",
      skill: "Conjunctive adverb punctuation",
      stem: "Which sentence is punctuated correctly?",
      choices: [
        "The lab closed at 9 p.m. however the library stayed open.",
        "The lab closed at 9 p.m.; however, the library stayed open.",
        "The lab closed at 9 p.m. however, the library stayed open.",
        "The lab closed at 9 p.m., however the library stayed open."
      ],
      answer: 1,
      explanation: "Choice B is correct. Two independent clauses joined by “however” take a semicolon before it and a comma after it. A comma alone creates a comma splice."
    },
    {
      id: "e15",
      category: "Sentence Revision and Conventions",
      skill: "Commonly confused words",
      stem: "Which sentence uses the underlined idea correctly?",
      choices: [
        "Their going to the testing center.",
        "They're going to the testing center.",
        "There going to the testing center.",
        "Theyre going to the testing center."
      ],
      answer: 1,
      explanation: "Choice B is correct. “They're” is the contraction of “they are.” “Their” is possessive, and “there” refers to a place."
    },
    {
      id: "e16",
      category: "Essay Revision and Editing",
      skill: "Concision",
      stem: "Which revision is the clearest?",
      choices: [
        "Due to the fact that the bus was late, Maya missed the start of class.",
        "Because the bus was late, Maya missed the start of class.",
        "The bus was late, Maya missed.",
        "Maya missed class due to the fact of lateness of bus."
      ],
      answer: 1,
      explanation: "Choice B is correct. It states the cause directly. Choice A is grammatical but wordy, Choice C is a comma splice and incomplete, and Choice D is not idiomatic."
    },
    {
      id: "e17",
      category: "Sentence Revision and Conventions",
      skill: "Subject-verb agreement",
      stem: "Choose the word that correctly completes the sentence: The list of supplies ___ on the desk.",
      choices: ["are", "were", "is", "have"],
      answer: 2,
      explanation: "Choice C is correct. The subject is “list,” which is singular. “Of supplies” is a prepositional phrase and does not make the verb plural."
    },
    {
      id: "e18",
      category: "Sentence Revision and Conventions",
      skill: "Commas in a series",
      stem: "Which sentence uses commas correctly?",
      choices: [
        "Bring a pencil a calculator and an ID.",
        "Bring a pencil, a calculator, and an ID.",
        "Bring a pencil, a calculator and, an ID.",
        "Bring, a pencil a calculator, and an ID."
      ],
      answer: 1,
      explanation: "Choice B is correct. Items in a series are separated by commas. The comma before “and” is the standard series comma and is acceptable here."
    },
    {
      id: "e19",
      category: "Literary Text Analysis",
      skill: "Inference from action",
      passage: "The old gym smelled like floor wax and oranges. Jordan tied the last lace twice, then a third time, as if the knot could settle the noise in the bleachers.",
      stem: "The repeated lace tying mainly suggests that Jordan",
      choices: [
        "is late for a chemistry exam.",
        "is nervous before the event.",
        "does not know how to tie shoes.",
        "prefers oranges to floor wax."
      ],
      answer: 1,
      explanation: "Choice B is correct. Tying the lace “as if the knot could settle the noise” shows an attempt to calm nerves. The passage does not mention chemistry, a lack of skill, or a preference for oranges."
    },
    {
      id: "e20",
      category: "Informational Text Analysis",
      skill: "Inference",
      passage: "Community colleges in Texas use the TSIA2 to help decide whether a student is ready for college-level coursework. The English Language Arts and Reading portion asks students to read literary and informational texts and to revise writing. The Mathematics portion asks students to reason about quantities, algebra, geometry, and data. A strong score in one subject does not replace a score in the other. The multiple-choice sections are untimed.",
      stem: "A student who scores well in mathematics but has not taken ELAR should conclude that",
      choices: [
        "the mathematics score also proves ELAR readiness.",
        "ELAR readiness still has to be shown separately.",
        "the essay is optional for every Texas college course.",
        "geometry was not part of the mathematics test."
      ],
      answer: 1,
      explanation: "Choice B is correct. The passage says a strong score in one subject does not replace a score in the other. It also lists geometry as part of the mathematics portion."
    }
  ]
};

const PRACTICE = {
  "Quantitative Reasoning": [
    { label: "Khan Academy: ratios and rates", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic" },
    { label: "Khan Academy: percentages", url: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-fractions-decimals/cc-7th-percent-problems/v/solving-percent-problems" }
  ],
  "Algebraic Reasoning": [
    { label: "Khan Academy: linear equations", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities" },
    { label: "Khan Academy: quadratic equations", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations" }
  ],
  "Geometric and Spatial Reasoning": [
    { label: "Khan Academy: area and volume", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic" },
    { label: "Khan Academy: Pythagorean theorem", url: "https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry/cc-8th-pythagorean-theorem" }
  ],
  "Probabilistic and Statistical Reasoning": [
    { label: "Khan Academy: statistics and probability", url: "https://www.khanacademy.org/math/statistics-probability" },
    { label: "Khan Academy: mean, median, and mode", url: "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data" }
  ],
  "Literary Text Analysis": [
    { label: "Khan Academy: reading literary texts", url: "https://www.khanacademy.org/ela/cc-9th-reading-vocab/x8c7a9c6f:cc-9th-reading-for-understanding" }
  ],
  "Informational Text Analysis": [
    { label: "Khan Academy: informational text", url: "https://www.khanacademy.org/ela/cc-9th-reading-vocab" }
  ],
  "Text Synthesis": [
    { label: "Khan Academy: comparing arguments", url: "https://www.khanacademy.org/ela/cc-9th-reading-vocab" }
  ],
  "Essay Revision and Editing": [
    { label: "Khan Academy: grammar and clarity", url: "https://www.khanacademy.org/humanities/grammar" }
  ],
  "Sentence Revision and Conventions": [
    { label: "Khan Academy: grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { label: "Purdue OWL: sentence punctuation", url: "https://owl.purdue.edu/owl/general_writing/punctuation/index.html" }
  ]
};

const OFFICIAL = [
  { label: "College Board TSIA2 sample questions", url: "https://accuplacer.collegeboard.org/students/tsia2-additional-resources" },
  { label: "TSIA2 ELAR sample PDF", url: "https://accuplacer.collegeboard.org/accuplacer/pdf/tsia2-english-language-arts-reading-sample-questions.pdf" },
  { label: "TSIA2 Mathematics sample PDF", url: "https://accuplacer.collegeboard.org/accuplacer/pdf/tsia2-mathematics-sample-questions.pdf" },
  { label: "TSIA2 essay guide", url: "https://accuplacer.collegeboard.org/accuplacer/pdf/tsia2-essay-test-sample-essays.pdf" }
];
