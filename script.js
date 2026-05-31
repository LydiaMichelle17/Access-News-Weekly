const stories = [
  {
    category: "Animal Story",
    title: "Baby Sea Otter Rescued",
    summary: "A young sea otter was helped by animal care workers.",
    levels: {
      access: "A baby sea otter needed help.\nAnimal workers found the otter.\nThey kept the otter warm.\nNow the otter is safe.",
      instructional: "A baby sea otter was found near the water. Animal care workers helped the otter stay warm and safe. They will care for the otter until it is strong enough for the next step.",
      independent: "Animal care workers rescued a young sea otter after it was found alone near the water. The team checked its health, kept it warm, and gave it safe care. Stories like this help students learn how people protect animals and ocean habitats."
    },
    word: "Rescue",
    definition: "To rescue means to help someone or something get out of danger.",
    passport: "Ask someone: Did you know a baby sea otter was rescued this week?",
    question: "Who helped the baby sea otter?",
    choices: "Animal care workers / A soccer team / A bus driver",
    note: "Use this story for animal vocabulary, helpers, and calm nonfiction discussion."
  },
  {
    category: "International Story",
    title: "Students Plant Trees in Brazil",
    summary: "Students worked together to plant trees in their community.",
    levels: {
      access: "Students planted trees.\nThe trees are in Brazil.\nTrees help people and animals.\nThe students worked together.",
      instructional: "Students in Brazil planted new trees near their community. Trees can give shade, help animals, and make the air cleaner. The students learned that small actions can help the environment.",
      independent: "A group of students in Brazil planted trees as part of a community project. Trees support neighborhoods by creating shade, protecting habitats, and improving air quality. The project showed how young people can take action to care for the environment."
    },
    word: "Community",
    definition: "A community is a group of people who live, learn, or work near each other.",
    passport: "Ask someone: Did you know students in Brazil planted trees?",
    question: "What did the students plant?",
    choices: "Trees / Shoes / Computers",
    note: "Connect this story to geography, maps, and local community helpers."
  },
  {
    category: "STEM Story",
    title: "NASA Studies a New Planet",
    summary: "Scientists are learning about a planet far away from Earth.",
    levels: {
      access: "Scientists found a planet.\nThe planet is far away.\nThey used a telescope.\nWe can learn about space.",
      instructional: "Scientists found a new planet outside our solar system. A solar system is a group of planets that move around a star. The planet is very far from Earth. Scientists used a powerful telescope to find it.",
      independent: "Astronomers identified a planet outside our solar system. These planets are called exoplanets. Scientists study exoplanets because they help us understand how planets form and whether other worlds might have conditions that support life."
    },
    word: "Telescope",
    definition: "A telescope is a tool that helps people see things that are very far away.",
    passport: "Ask someone: Did you know scientists found a new planet?",
    question: "What tool helped scientists study the planet?",
    choices: "A telescope / A bicycle / A pencil",
    note: "Support vocabulary, nonfiction comprehension, and conversation initiation."
  },
  {
    category: "Good News Story",
    title: "Teenagers Help Clean a Beach",
    summary: "Teenagers picked up trash to help keep a beach clean.",
    levels: {
      access: "Teenagers cleaned a beach.\nThey picked up trash.\nThe beach looked better.\nThey helped their community.",
      instructional: "A group of teenagers helped clean a beach. They picked up trash and sorted items that could be recycled. Their work helped make the beach safer for people and animals.",
      independent: "Teenagers volunteered to clean a local beach by collecting trash and sorting recyclable items. Their project helped protect wildlife and made the beach safer for visitors. Community service projects can show how teamwork creates visible change."
    },
    word: "Volunteer",
    definition: "A volunteer is a person who chooses to help without being paid.",
    passport: "Ask someone: Did you know teenagers helped clean a beach?",
    question: "What did the teenagers pick up?",
    choices: "Trash / Snow / Backpacks",
    note: "Good for discussing community service and concrete cause-effect relationships."
  },
  {
    category: "Big Event",
    title: "Election Day Explained",
    summary: "People vote to help choose leaders and make decisions.",
    levels: {
      access: "People vote on Election Day.\nVoting is a choice.\nAdults can vote for leaders.\nVotes help make decisions.",
      instructional: "Election Day is a time when adults can vote. Voting means choosing between people or ideas. Elections help communities, states, and the country make important decisions.",
      independent: "Election Day gives voters a way to choose leaders and decide some community questions. Voting is one part of civic life, which means how people participate in their community and government. Learning about elections helps students understand decisions they hear adults discuss."
    },
    word: "Vote",
    definition: "To vote means to make a choice in an election or group decision.",
    passport: "Ask someone: Did you know Election Day is one way people make choices together?",
    question: "What does voting help people do?",
    choices: "Make choices / Cook lunch / Fix a bike",
    note: "Keep the discussion factual and neutral. Focus on choices, leaders, and community decisions."
  }
];

function renderIssue() {
  const issue = document.querySelector("#issue");
  issue.innerHTML = stories.map((story, index) => `
    <article class="story-card" data-story="${index}">
      <div class="story-top">
        <p class="story-category">${index + 1}. ${story.category}</p>
        <h3>${story.title}</h3>
        <p>${story.summary}</p>
      </div>
      <div class="story-body">
        <div class="tabs" role="tablist" aria-label="${story.title} reading levels">
          ${["access", "instructional", "independent"].map((level, i) => `
            <button class="tab" role="tab" type="button" aria-selected="${i === 0}" data-level="${level}">
              Level ${i + 1}: ${level[0].toUpperCase() + level.slice(1)}
            </button>
          `).join("")}
        </div>
        <p class="story-text">${story.levels.access}</p>
        <div class="story-support">
          <div class="support-box"><strong>Power Word: ${story.word}</strong>${story.definition}</div>
          <div class="support-box"><strong>Social Passport</strong>${story.passport}</div>
          <div class="support-box"><strong>Quick Check</strong>${story.question}<br><em>${story.choices}</em></div>
        </div>
        <div class="support-box" style="margin-top:.75rem"><strong>Teacher Note</strong>${story.note}</div>
      </div>
    </article>
  `).join("");

  issue.addEventListener("click", (event) => {
    const button = event.target.closest(".tab");
    if (!button) return;
    const card = button.closest(".story-card");
    const story = stories[Number(card.dataset.story)];
    card.querySelectorAll(".tab").forEach(tab => tab.setAttribute("aria-selected", "false"));
    button.setAttribute("aria-selected", "true");
    card.querySelector(".story-text").textContent = story.levels[button.dataset.level];
  });
}

function wireDemoForms() {
  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.querySelector(".form-status").textContent = "Thanks. This demo form is ready to connect to Supabase later.";
      form.reset();
    });
  });
}

renderIssue();
wireDemoForms();
