const QUESTIONS = {
  1: [
    { id: "w1q1", week: 1, question: "What is the primary goal of Human-Computer Interaction (HCI)?", options: ["Improve computer hardware", "Make interaction effective, efficient, and satisfying", "Reduce data usage", "Teach programming"], answer: "Make interaction effective, efficient, and satisfying", isPlaceholder: false },
    { id: "w1q2", week: 1, question: "Which example represents bad design?", options: ["A door with a clear push/pull label", "A TV remote with too many buttons", "A phone with customizable themes", "A book with a table of contents"], answer: "A TV remote with too many buttons", isPlaceholder: false },
    { id: "w1q3", week: 1, question: "Usability mainly describes:", options: ["App color scheme", "How easily users achieve their goals", "Internet speed", "Type of hardware"], answer: "How easily users achieve their goals", isPlaceholder: false },
    { id: "w1q4", week: 1, question: "Which of the following is an interactive system?", options: ["Printed map", "Digital ATM touch interface", "Wall poster", "Paper calendar"], answer: "Digital ATM touch interface", isPlaceholder: false },
    { id: "w1q5", week: 1, question: "Why is understanding user needs important in user-centered design?", options: ["To reduce app cost", "To match designs with real user behaviors", "To create fancy animations", "To increase marketing budget"], answer: "To match designs with real user behaviors", isPlaceholder: false },
    { id: "w1q6", week: 1, question: "Why is a door without signifiers (push/pull marks) confusing?", options: ["It has too much color", "It uses expensive material", "Its affordance and signifiers are unclear", "It is automatic"], answer: "Its affordance and signifiers are unclear", isPlaceholder: false },
    { id: "w1q7", week: 1, question: "What makes a TV remote with many buttons a poor design example?", options: ["It is heavy", "Battery drains quickly", "Cognitive overload and poor usability", "It is not colorful"], answer: "Cognitive overload and poor usability", isPlaceholder: false },
    { id: "w1q8", week: 1, question: "Which step in user-centered design involves understanding user challenges and context?", options: ["Advertising", "Deployment", "User research", "Coding"], answer: "User research", isPlaceholder: false },
    { id: "w1q9", week: 1, question: "Which HCI principle was violated in the Boeing 737 MAX case?", options: ["Too many UI colors", "No touchscreen support", "Lack of visibility and poor feedback for automation", "Icons were too small"], answer: "Lack of visibility and poor feedback for automation", isPlaceholder: false },
    { id: "w1q10", week: 1, question: "Which concept explains why users make errors when controls do not match their mental model?", options: ["Animation design", "Aesthetic layout", "Mental models and signifiers", "Download speed"], answer: "Mental models and signifiers", isPlaceholder: false }
  ],
  2: [
    { id: "w2q1", week: 2, question: "According to Henry Dreyfuss's idea of design, when does a designer succeed?", options: ["When the product uses the latest technology", "When users feel comfortable and can use the product without friction", "When the product is inexpensive", "When the product looks stylish"], answer: "When users feel comfortable and can use the product without friction", isPlaceholder: false },
    { id: "w2q2", week: 2, question: "What was a major reason for the commercial failure of Google Glass?", options: ["No camera support", "Privacy concerns and awkward design", "Low screen brightness", "Lack of wireless connectivity"], answer: "Privacy concerns and awkward design", isPlaceholder: false },
    { id: "w2q3", week: 2, question: "What is the first step in deciding what to design?", options: ["Finalizing the brand logo", "Identifying who the users are", "Choosing color schemes", "Deciding the marketing plan"], answer: "Identifying who the users are", isPlaceholder: false },
    { id: "w2q4", week: 2, question: "What is the main goal of interaction design according to Sharp, Rogers, and Preece?", options: ["Supporting communication and interaction in daily life", "Reducing manufacturing costs", "Increasing screen brightness", "Designing for entertainment"], answer: "Supporting communication and interaction in daily life", isPlaceholder: false },
    { id: "w2q5", week: 2, question: "Which of the following best represents User Experience (UX)?", options: ["How users feel emotionally while using the product", "The processor speed of a device", "Only the visual layout", "The number of features in an app"], answer: "How users feel emotionally while using the product", isPlaceholder: false },
    { id: "w2q6", week: 2, question: "Why are multidisciplinary teams valuable in interaction design?", options: ["They reduce the cost of development", "They make meetings shorter", "They generate diverse ideas and perspectives", "They eliminate the need for user testing"], answer: "They generate diverse ideas and perspectives", isPlaceholder: false },
    { id: "w2q7", week: 2, question: "What is inclusivity in design?", options: ["Making interfaces look colorful", "Designing products for diverse user needs and backgrounds", "Removing advanced features", "Designing only for expert users"], answer: "Designing products for diverse user needs and backgrounds", isPlaceholder: false },
    { id: "w2q8", week: 2, question: "What is accessibility mainly focused on?", options: ["Increasing entertainment content", "Improving device speed", "Making products usable by people with disabilities", "Reducing UI animations"], answer: "Making products usable by people with disabilities", isPlaceholder: false },
    { id: "w2q9", week: 2, question: "Which design principle ensures that crucial functions are easy to locate?", options: ["Memorability", "Flexibility", "Aesthetics", "Visibility"], answer: "Visibility", isPlaceholder: false },
    { id: "w2q10", week: 2, question: "What is affordance in design?", options: ["The cost of the product", "Visual cues that indicate how an element should be used", "The brand reputation", "The color contrast ratio"], answer: "Visual cues that indicate how an element should be used", isPlaceholder: false }
  ],
  3: [
    { id: "w3q1", week: 3, question: "Which stage of Design Thinking focuses on understanding the user's needs and behaviors?", options: ["Prototype", "Empathize", "Test", "Implement"], answer: "Empathize", isPlaceholder: false },
    { id: "w3q2", week: 3, question: "The Double Diamond design process was developed by:", options: ["Apple", "Nielsen Norman Group", "UK Design Council", "Microsoft Research"], answer: "UK Design Council", isPlaceholder: false },
    { id: "w3q3", week: 3, question: "Which of the following is not one of the six stages of Design Thinking?", options: ["Define", "Ideate", "Evaluate", "Empathize"], answer: "Evaluate", isPlaceholder: false },
    { id: "w3q4", week: 3, question: "In the Define stage, the key goal is to:", options: ["Sketch wireframes", "Frame the problem clearly", "Conduct A/B testing", "Create high-fidelity prototypes"], answer: "Frame the problem clearly", isPlaceholder: false },
    { id: "w3q5", week: 3, question: "Activity-centered design primarily focuses on:", options: ["User preferences", "User emotions", "Tasks and activities users perform", "Visual layout aesthetics"], answer: "Tasks and activities users perform", isPlaceholder: false },
    { id: "w3q6", week: 3, question: "Which of the following is not a key component of system design?", options: ["Data Management", "Interfaces", "Memory recall", "Architecture"], answer: "Memory recall", isPlaceholder: false },
    { id: "w3q7", week: 3, question: "The Interaction Design Process emphasizes four basic activities. Which one of these is included?", options: ["Monetization", "Discovering requirements", "Branding", "Advertising"], answer: "Discovering requirements", isPlaceholder: false },
    { id: "w3q8", week: 3, question: "Genius design relies heavily on:", options: ["Extensive user testing", "Designer intuition and expertise", "Market surveys", "Accessibility guidelines"], answer: "Designer intuition and expertise", isPlaceholder: false },
    { id: "w3q9", week: 3, question: "Which lifecycle model is based on rapid prototyping and iteration within 5 days?", options: ["Research in the Wild", "Waterfall Model", "Google Design Sprints", "Spiral Model"], answer: "Google Design Sprints", isPlaceholder: false },
    { id: "w3q10", week: 3, question: "According to Week 3, user involvement is important because:", options: ["It helps reduce the app size", "Users can become stakeholders and contribute feedback", "It speeds up coding", "It avoids the need for iteration"], answer: "Users can become stakeholders and contribute feedback", isPlaceholder: false }
  ],
  4: [
    { id: "w4q1", week: 4, question: "User perspectives in HCI help designers understand:", options: ["Only the visual UI layout", "How users perceive and interact with technology", "How designers communicate with developers", "Only system requirements"], answer: "How users perceive and interact with technology", isPlaceholder: false },
    { id: "w4q2", week: 4, question: "Which of the following is an example of accessibility consideration?", options: ["Using bright colors only", "Providing adjustable font sizes and dyslexia-friendly modes", "Adding decorative animations", "Increasing advertisements"], answer: "Providing adjustable font sizes and dyslexia-friendly modes", isPlaceholder: false },
    { id: "w4q3", week: 4, question: "Novice users generally prefer:", options: ["Only voice-based interfaces", "Highly customizable and complex interfaces", "Minimal guidance and advanced shortcuts", "Simple interfaces with clear instructions"], answer: "Simple interfaces with clear instructions", isPlaceholder: false },
    { id: "w4q4", week: 4, question: "A persona is best described as:", options: ["A real user hired by the company", "A fictional, data-driven representation of a user", "A system architecture model", "A marketing campaign tool"], answer: "A fictional, data-driven representation of a user", isPlaceholder: false },
    { id: "w4q5", week: 4, question: "Surveys in user research are useful because they:", options: ["Always provide emotional depth", "Allow quick collection of large-scale data", "Guarantee unbiased answers", "Replace interviews completely"], answer: "Allow quick collection of large-scale data", isPlaceholder: false },
    { id: "w4q6", week: 4, question: "Empathy mapping categorizes insights into:", options: ["Features, modules, layouts, workflows", "Says, Thinks, Does, Feels", "Inputs, outputs, processes, storage", "Goals, sub-goals, errors, feedback"], answer: "Says, Thinks, Does, Feels", isPlaceholder: false },
    { id: "w4q7", week: 4, question: "A common challenge in user perspectives is:", options: ["Too many designers", "Conflicting needs among different user groups", "Unlimited research time", "Lack of design tools"], answer: "Conflicting needs among different user groups", isPlaceholder: false },
    { id: "w4q8", week: 4, question: "Affinity mapping is mainly used to:", options: ["Assign tasks to team members", "Organize qualitative data into themes", "Remove unnecessary system features", "Design UI wireframes"], answer: "Organize qualitative data into themes", isPlaceholder: false },
    { id: "w4q9", week: 4, question: "A POV (Point of View) statement includes:", options: ["System hardware requirements", "User, need, and insight", "UI color preferences", "Coding-level issues"], answer: "User, need, and insight", isPlaceholder: false },
    { id: "w4q10", week: 4, question: "Data clustering helps in:", options: ["Grouping users based on similar behaviors", "Randomly distributing users", "Increasing device performance", "Removing prototypes"], answer: "Grouping users based on similar behaviors", isPlaceholder: false }
  ],
  5: [
    { id: "w5q1", week: 5, question: "Which of the following best describes a conceptual model?", options: ["A detailed UI layout", "A mental representation of how a system works", "A list of system requirements", "A coding guideline document"], answer: "A mental representation of how a system works", isPlaceholder: false },
    { id: "w5q2", week: 5, question: "What is an example of an assumption in interface design?", options: ["Testing a prototype with users", "Taking something for granted without evidence", "Mapping user journeys", "Writing code before wireframes"], answer: "Taking something for granted without evidence", isPlaceholder: false },
    { id: "w5q3", week: 5, question: "Which component is commonly used in online shopping conceptual models?", options: ["Homepage wallpaper", "Shopping cart", "Video playback controls", "Battery indicator"], answer: "Shopping cart", isPlaceholder: false },
    { id: "w5q4", week: 5, question: "Interface metaphors help users by:", options: ["Making systems slower", "Increasing hardware complexity", "Leveraging familiarity for learning new systems", "Removing the need for feedback"], answer: "Leveraging familiarity for learning new systems", isPlaceholder: false },
    { id: "w5q5", week: 5, question: "Which cognitive principle states that decision time increases with more choices?", options: ["Miller's Law", "Fitts's Law", "Hick's Law", "Gestalt Law of Proximity"], answer: "Hick's Law", isPlaceholder: false },
    { id: "w5q6", week: 5, question: "What is the purpose of a system image?", options: ["To describe internal code structure", "To show how the system actually works through the interface", "To explain marketing strategy", "To define business revenue"], answer: "To show how the system actually works through the interface", isPlaceholder: false },
    { id: "w5q7", week: 5, question: "Which of the following is a drawback of interface metaphors?", options: ["They always reduce cognitive load", "They break all cultural norms", "They may limit designers' creativity", "They remove the need for conceptual models"], answer: "They may limit designers' creativity", isPlaceholder: false },
    { id: "w5q8", week: 5, question: "Cognitive load increases when:", options: ["Interfaces use familiar patterns", "Users see excessive irrelevant information", "Steps are minimized", "Icons are consistent"], answer: "Users see excessive irrelevant information", isPlaceholder: false },
    { id: "w5q9", week: 5, question: "Which cognitive aspect focuses on how users perceive visual elements?", options: ["Decision-making", "Perception", "Problem-solving", "Reflective cognition"], answer: "Perception", isPlaceholder: false },
    { id: "w5q10", week: 5, question: "Which emerging trend in interfaces directly uses the human brain for input?", options: ["AR overlays", "Voice interaction", "Brain\u2013Computer Interfaces", "Card-based UI"], answer: "Brain\u2013Computer Interfaces", isPlaceholder: false }
  ],
  6: [
    { id: "w6q1", week: 6, question: "What is the primary purpose of identifying data requirements in HCI?", options: ["To create marketing campaigns", "To determine what information is needed to inform design decisions", "To reduce memory usage in applications", "To choose programming languages"], answer: "To determine what information is needed to inform design decisions", isPlaceholder: false },
    { id: "w6q2", week: 6, question: "Which type of data includes demographics and user preferences?", options: ["System data", "User data", "Context data", "Task data"], answer: "User data", isPlaceholder: false },
    { id: "w6q3", week: 6, question: "Which of the following is a qualitative data-gathering technique?", options: ["Analytics logs", "Surveys with multiple-choice questions", "User interviews", "System performance metrics"], answer: "User interviews", isPlaceholder: false },
    { id: "w6q4", week: 6, question: "Crowdsourcing in HCI is mainly beneficial because:", options: ["It reduces the need for user testing", "It gathers data from diverse and large populations", "It guarantees unbiased data automatically", "It eliminates qualitative research"], answer: "It gathers data from diverse and large populations", isPlaceholder: false },
    { id: "w6q5", week: 6, question: "Fairness in data collection ensures that:", options: ["All users are treated equitably in data and algorithms", "The system runs faster", "Participants cannot withdraw", "Only expert users are included"], answer: "All users are treated equitably in data and algorithms", isPlaceholder: false },
    { id: "w6q6", week: 6, question: "Field studies involve:", options: ["Observing users in controlled lab settings", "Recording system logs only", "Observing users in their natural environment", "Removing outliers from datasets"], answer: "Observing users in their natural environment", isPlaceholder: false },
    { id: "w6q7", week: 6, question: "Which tool is commonly used for real-time data handling?", options: ["Tableau", "Firebase", "NVivo", "SPSS"], answer: "Firebase", isPlaceholder: false },
    { id: "w6q8", week: 6, question: "Which of the following is a key issue in data ethics?", options: ["Increasing app performance", "User interface color selection", "Transparency in how data is collected and used", "Adding more user features"], answer: "Transparency in how data is collected and used", isPlaceholder: false },
    { id: "w6q9", week: 6, question: "Inter-Annotator Agreement (IAA) is used to:", options: ["Visualize data using graphs", "Measure consistency among multiple annotators", "Improve system performance", "Replace manual labeling"], answer: "Measure consistency among multiple annotators", isPlaceholder: false },
    { id: "w6q10", week: 6, question: "Which statistical method is used to find relationships between variables?", options: ["Affinity mapping", "Regression analysis", "Unstructured interviewing", "Card sorting"], answer: "Regression analysis", isPlaceholder: false }
  ],
  7: [
    { id: "w7q1", week: 7, question: "What is a prototype in interaction design?", options: ["A finalized product", "A manifestation of a design that stakeholders can interact with", "Only a software demo", "A marketing document"], answer: "A manifestation of a design that stakeholders can interact with", isPlaceholder: false },
    { id: "w7q2", week: 7, question: "Which of the following is an example of Lo-Fi prototyping?", options: ["Pixel-perfect UI", "Paper sketches", "Fully interactive app", "High-resolution mockup"], answer: "Paper sketches", isPlaceholder: false },
    { id: "w7q3", week: 7, question: "Storyboards in prototyping help designers by:", options: ["Writing code automatically", "Breaking user tasks into scenes to visualize interaction", "Generating analytics", "Creating animations for UI"], answer: "Breaking user tasks into scenes to visualize interaction", isPlaceholder: false },
    { id: "w7q4", week: 7, question: "Which prototyping type provides broad coverage with low detail?", options: ["Vertical", "Horizontal", "Hi-Fi", "Wizard-of-Oz"], answer: "Horizontal", isPlaceholder: false },
    { id: "w7q5", week: 7, question: "Mid-Fidelity prototypes typically include:", options: ["Stick figures only", "Grayscale wireframes with limited interactions", "Pixel-perfect color UI", "Final design animations"], answer: "Grayscale wireframes with limited interactions", isPlaceholder: false },
    { id: "w7q6", week: 7, question: "Smart UI refers to interfaces that:", options: ["Are built only with code", "Use AI to adapt to user behavior and context", "Do not require user data", "Never personalize content"], answer: "Use AI to adapt to user behavior and context", isPlaceholder: false },
    { id: "w7q7", week: 7, question: "Which is an advantage of Smart UI?", options: ["Random interface behavior", "Personalized and adaptive user experience", "Increased manual effort for users", "No support for accessibility"], answer: "Personalized and adaptive user experience", isPlaceholder: false },
    { id: "w7q8", week: 7, question: "Wizard-of-Oz prototyping involves:", options: ["A human simulating system responses behind the scenes", "Full autonomous system", "Physical hardware testing", "Running A/B experiments"], answer: "A human simulating system responses behind the scenes", isPlaceholder: false },
    { id: "w7q9", week: 7, question: "Vertical prototyping focuses on:", options: ["A wide range of features with little detail", "A detailed exploration of a single feature", "Creating only animations", "Testing final UI only"], answer: "A detailed exploration of a single feature", isPlaceholder: false },
    { id: "w7q10", week: 7, question: "Which tool is commonly used for mid or high-fidelity UI prototypes?", options: ["Sticky notes", "Figma", "Lego blocks", "Scenarios only"], answer: "Figma", isPlaceholder: false }
  ],
  8: [
    { id: "w8q1", week: 8, question: "What is the main purpose of evaluation in HCI?", options: ["To increase hardware performance", "To assess usability, effectiveness, and user experience", "To test marketing strategies", "To reduce development cost"], answer: "To assess usability, effectiveness, and user experience", isPlaceholder: false },
    { id: "w8q2", week: 8, question: "Which type of evaluation occurs during the design process to refine the product?", options: ["Summative", "Diagnostic", "Formative", "Longitudinal"], answer: "Formative", isPlaceholder: false },
    { id: "w8q3", week: 8, question: "Usability testing primarily involves:", options: ["Experts reviewing code", "Observing real users performing tasks", "Only collecting analytics", "Replacing prototypes with final UI"], answer: "Observing real users performing tasks", isPlaceholder: false },
    { id: "w8q4", week: 8, question: "Which evaluation method requires evaluators to simulate user behavior step-by-step?", options: ["Heuristic Evaluation", "Cognitive Walkthrough", "A/B Testing", "Eye Tracking"], answer: "Cognitive Walkthrough", isPlaceholder: false },
    { id: "w8q5", week: 8, question: "In experiment design, which approach assigns different groups to different conditions?", options: ["Within-subjects", "Mixed methods", "Between-subjects", "Triangulated testing"], answer: "Between-subjects", isPlaceholder: false },
    { id: "w8q6", week: 8, question: "Which metric measures how fast users complete a task?", options: ["Error severity", "Task success rate", "Time on task", "Net Promoter Score"], answer: "Time on task", isPlaceholder: false },
    { id: "w8q7", week: 8, question: "Eye tracking helps evaluators understand:", options: ["System load time", "Where users focus attention on the interface", "User emotions only", "The number of app downloads"], answer: "Where users focus attention on the interface", isPlaceholder: false },
    { id: "w8q8", week: 8, question: "Which principle ensures that participants voluntarily agree to evaluation?", options: ["Counterbalancing", "Informed consent", "Aesthetic consistency", "Reliability"], answer: "Informed consent", isPlaceholder: false },
    { id: "w8q9", week: 8, question: "Which evaluation method is cost-effective and identifies issues early using established principles?", options: ["A/B Testing", "Heuristic Evaluation", "Biometric Metrics", "Field Studies"], answer: "Heuristic Evaluation", isPlaceholder: false },
    { id: "w8q10", week: 8, question: "Which predictive model estimates pointing time based on movement distance and target size?", options: ["Hick's Law", "Mental Model", "Cognitive Load Theory", "Fitts's Law"], answer: "Fitts's Law", isPlaceholder: false }
  ],
  9: [
    { id: "w9q1", week: 9, question: "IoT refers to:", options: ["A network of physical objects with sensors and connectivity", "Devices that store only offline data", "Tools without any automation", "Only entertainment systems"], answer: "A network of physical objects with sensors and connectivity", isPlaceholder: false },
    { id: "w9q2", week: 9, question: "The main goal of IoT is:", options: ["To increase device size", "To \"connect the unconnected\"", "To remove automation from homes", "To limit wireless technology"], answer: "To \"connect the unconnected\"", isPlaceholder: false },
    { id: "w9q3", week: 9, question: "Which example shows HCI + IoT interaction?", options: ["A robotic arm running without feedback", "Users controlling smart bulbs via a mobile app", "Devices interacting only through printed manuals", "A non-digital clock"], answer: "Users controlling smart bulbs via a mobile app", isPlaceholder: false },
    { id: "w9q4", week: 9, question: "Which interaction modalities are common in IoT?", options: ["Voice, gesture, and touch", "Only handwritten input", "Only QR-code scanning", "Only mechanical switches"], answer: "Voice, gesture, and touch", isPlaceholder: false },
    { id: "w9q5", week: 9, question: "A major HCI challenge in IoT is:", options: ["Increasing UI colors", "Achieving consistent interaction across many devices", "Ensuring devices always remain offline", "Removing all system notifications"], answer: "Achieving consistent interaction across many devices", isPlaceholder: false },
    { id: "w9q6", week: 9, question: "Why is HCI crucial in IoT systems?", options: ["It hides system feedback", "It ensures usability and intuitive interaction across devices", "It prevents real-time interaction", "It forces users to follow only one workflow"], answer: "It ensures usability and intuitive interaction across devices", isPlaceholder: false },
    { id: "w9q7", week: 9, question: "HaptiDrag creates friction using:", options: ["Heated plates", "Ultrasonic vibrations", "Electroadhesion technology", "Physical wheels"], answer: "Electroadhesion technology", isPlaceholder: false },
    { id: "w9q8", week: 9, question: "HaptiDrag enhances VR by:", options: ["Giving realistic tactile feedback with variable friction", "Removing haptic sensations", "Reducing VR stability", "Removing all gestures"], answer: "Giving realistic tactile feedback with variable friction", isPlaceholder: false },
    { id: "w9q9", week: 9, question: "MobiTangibles supports VR tool training by:", options: ["Tracking small tool movements using smartphone magnetometers", "Using heat sensors only", "Removing all sensors", "Replacing tools with QR codes"], answer: "Tracking small tool movements using smartphone magnetometers", isPlaceholder: false },
    { id: "w9q10", week: 9, question: "A limitation of MobiTangibles is:", options: ["It cannot function on wooden surfaces", "It may damage magnetic-sensitive objects like credit cards", "It needs no smartphone", "It cannot detect small magnets at close range"], answer: "It may damage magnetic-sensitive objects like credit cards", isPlaceholder: false }
  ],
  10: [
    { id: "w10q1", week: 10, question: "LLMs are primarily designed to:", options: ["Predict and generate language using large-scale training data", "Render 3D animations", "Compress multimedia files", "Control robotic hardware"], answer: "Predict and generate language using large-scale training data", isPlaceholder: false },
    { id: "w10q2", week: 10, question: "Which of the following is an example of a multimodal input for an AI system?", options: ["Only typed text", "Text, image, or audio combined", "A Wi-Fi password", "A device serial number"], answer: "Text, image, or audio combined", isPlaceholder: false },
    { id: "w10q3", week: 10, question: "What is the function of prompting in LLM interactions?", options: ["Debugging internal model weights", "Giving the model instructions or context to perform a task", "Measuring CPU temperature", "Optimizing internet bandwidth"], answer: "Giving the model instructions or context to perform a task", isPlaceholder: false },
    { id: "w10q4", week: 10, question: "Which is a key challenge in AI-based personalization?", options: ["Limited screen brightness", "Privacy concerns around user data", "High-fidelity UI design", "Lack of color contrast in icons"], answer: "Privacy concerns around user data", isPlaceholder: false },
    { id: "w10q5", week: 10, question: "In behavior modeling, \"Effect\" refers to:", options: ["The color of the UI", "The user's actual response or action", "The predicted CPU usage", "The system's refresh rate"], answer: "The user's actual response or action", isPlaceholder: false },
    { id: "w10q6", week: 10, question: "Zero-shot prompting allows the model to:", options: ["Produce outputs without being given examples", "Run without electricity", "Access private user data", "Train without GPUs"], answer: "Produce outputs without being given examples", isPlaceholder: false },
    { id: "w10q7", week: 10, question: "Which of these is a benefit of AI for accessibility?", options: ["Faster firmware updates", "Real-time speech-to-text for deaf users", "Higher download speeds", "Larger app icons"], answer: "Real-time speech-to-text for deaf users", isPlaceholder: false },
    { id: "w10q8", week: 10, question: "Behavior-optimized content refers to:", options: ["Messages crafted to trigger specific user reactions", "Code that compiles automatically", "Images compressed for mobile phones", "Deleted browsing history"], answer: "Messages crafted to trigger specific user reactions", isPlaceholder: false },
    { id: "w10q9", week: 10, question: "Ethical concerns with LLMs include:", options: ["Keyboard layouts", "Bias, manipulation risk, and misinformation", "Slow Wi-Fi speed", "File naming conventions"], answer: "Bias, manipulation risk, and misinformation", isPlaceholder: false },
    { id: "w10q10", week: 10, question: "An MLLM (Multimodal Large Language Model) improves HCI by:", options: ["Understanding and generating across multiple input/output formats", "Replacing all user research", "Removing the need for interfaces", "Turning apps into offline-only tools"], answer: "Understanding and generating across multiple input/output formats", isPlaceholder: false }
  ],
  11: [
    { id: "w11q1", week: 11, question: "Privacy in HCI refers to:", options: ["Users' ability to control their personal data", "Increasing app size", "Removing encryption from messages", "Designing only visual elements"], answer: "Users' ability to control their personal data", isPlaceholder: false },
    { id: "w11q2", week: 11, question: "Which of the following is an example of a security feature?", options: ["Dark themes", "Two-factor authentication (2FA)", "Changing wallpapers", "Offline advertisements"], answer: "Two-factor authentication (2FA)", isPlaceholder: false },
    { id: "w11q3", week: 11, question: "Deepfakes are created using:", options: ["Generative Adversarial Networks (GANs)", "Spreadsheet formulas", "Static HTML tags", "Audio compression tools"], answer: "Generative Adversarial Networks (GANs)", isPlaceholder: false },
    { id: "w11q4", week: 11, question: "Which type of harm involves AI generating biased or unfair outcomes?", options: ["Bias and discrimination", "Increased RAM usage", "Reduced display brightness", "Slow keyboard response"], answer: "Bias and discrimination", isPlaceholder: false },
    { id: "w11q5", week: 11, question: "A real-world example of privacy by design is:", options: ["WhatsApp's end-to-end encryption", "Phone ringtones", "Auto-rotate screen settings", "File naming conventions"], answer: "WhatsApp's end-to-end encryption", isPlaceholder: false },
    { id: "w11q6", week: 11, question: "One major risk of deepfakes is:", options: ["Creating propaganda or misinformation", "Improving audio quality", "Faster battery charging", "Removing the need for passwords"], answer: "Creating propaganda or misinformation", isPlaceholder: false },
    { id: "w11q7", week: 11, question: "Security in HCI focuses on:", options: ["Protecting user data from unauthorized access", "Increasing the number of UI animations", "Designing only for children", "Removing all login screens"], answer: "Protecting user data from unauthorized access", isPlaceholder: false },
    { id: "w11q8", week: 11, question: "GDPR impacts HCI design by requiring:", options: ["Clear consent mechanisms and privacy transparency", "More emojis in interfaces", "Mandatory dark mode", "Faster loading animations"], answer: "Clear consent mechanisms and privacy transparency", isPlaceholder: false },
    { id: "w11q9", week: 11, question: "Which tool supports secure authentication?", options: ["Google Authenticator", "Stopwatch app", "Video filters", "Calculator app"], answer: "Google Authenticator", isPlaceholder: false },
    { id: "w11q10", week: 11, question: "A major challenge in privacy & security design is:", options: ["Balancing usability with strong protections", "Removing all security features entirely", "Hiding all system messages", "Making interfaces more confusing"], answer: "Balancing usability with strong protections", isPlaceholder: false }
  ],
  12: [
    { id: "w12q1", week: 12, question: "Shannon's Level C focuses on:", options: ["Whether the received meaning achieves the intended effect", "Hardware choices", "Signal compression", "Gesture selection"], answer: "Whether the received meaning achieves the intended effect", isPlaceholder: false },
    { id: "w12q2", week: 12, question: "In human communication, encoding means:", options: ["Choosing fonts", "Converting thoughts into words or symbols", "Measuring noise levels", "Compressing audio"], answer: "Converting thoughts into words or symbols", isPlaceholder: false },
    { id: "w12q3", week: 12, question: "*(Not visible in provided image)*", options: ["\u2014", "\u2014", "\u2014", "\u2014"], answer: "\u2014", isPlaceholder: true },
    { id: "w12q4", week: 12, question: "An example of a conversational AI assistant is:", options: ["A calculator", "A stapler", "Google Assistant", "A desk lamp"], answer: "Google Assistant", isPlaceholder: false },
    { id: "w12q5", week: 12, question: "A communication barrier includes:", options: ["Wallpapers", "Volume changes", "Extra brightness", "Semantic misunderstandings"], answer: "Semantic misunderstandings", isPlaceholder: false },
    { id: "w12q6", week: 12, question: "AI conversational systems typically:", options: ["Only record audio", "Use NLP to interpret user messages", "Require physical switches", "Ignore user queries"], answer: "Use NLP to interpret user messages", isPlaceholder: false },
    { id: "w12q7", week: 12, question: "A challenge in deploying conversational AI is:", options: ["Bias and misunderstanding nuanced input", "Limited font choices", "Keyboard shortcuts", "Battery drainage"], answer: "Bias and misunderstanding nuanced input", isPlaceholder: false },
    { id: "w12q8", week: 12, question: "Asimov's First Law states:", options: ["Robots must obey all commands", "Robots must protect themselves", "Robots may not harm humans or allow harm", "Robots must avoid emotions"], answer: "Robots may not harm humans or allow harm", isPlaceholder: false },
    { id: "w12q9", week: 12, question: "Socially responsible MIAs aim to:", options: ["Compress images", "Promote fairness and inclusive interactions", "Reduce accessibility", "Avoid cultural sensitivity"], answer: "Promote fairness and inclusive interactions", isPlaceholder: false },
    { id: "w12q10", week: 12, question: "A benefit of conversational AI in healthcare is:", options: ["Changing screen colors", "Increasing room volume", "Printing receipts", "Offering virtual guidance such as symptom checking"], answer: "Offering virtual guidance such as symptom checking", isPlaceholder: false }
  ]
};

const QuestionData = {
  getAllWeeks() {
    return Object.keys(QUESTIONS).map(Number).sort((a, b) => a - b);
  },

  getWeekQuestions(week) {
    return QUESTIONS[week] || [];
  },

  getQuizQuestions(count) {
    // Collect all non-placeholder questions
    const allQuestions = [];
    for (const week of this.getAllWeeks()) {
      for (const q of this.getWeekQuestions(week)) {
        if (!q.isPlaceholder) {
          allQuestions.push(q);
        }
      }
    }

    // Clone the array
    const arr = [...allQuestions];

    // Fisher-Yates shuffle in-place
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Return first `count` elements
    return arr.slice(0, count);
  },

  getQuestionById(id) {
    for (const week of this.getAllWeeks()) {
      for (const q of this.getWeekQuestions(week)) {
        if (q.id === id) {
          return q;
        }
      }
    }
    return undefined;
  },

  isPlaceholder(q) {
    return q.isPlaceholder === true;
  }
};

// ============================================================
// Task 2: Storage Module
// ============================================================
const Storage = {
  getHistory() {
    try {
      const data = localStorage.getItem('quizHistory');
      if (!data) return [];
      const parsed = JSON.parse(data);
      if (!Array.isArray(parsed)) {
        console.warn('quizHistory is not an array, resetting to defaults.');
        localStorage.removeItem('quizHistory');
        return [];
      }
      return parsed;
    } catch (e) {
      console.warn('Failed to read quizHistory, resetting to defaults.', e);
      try { localStorage.removeItem('quizHistory'); } catch (_) {}
      return [];
    }
  },

  saveAttempt(attempt) {
    try {
      const history = this.getHistory();
      history.unshift(attempt);
      localStorage.setItem('quizHistory', JSON.stringify(history));
    } catch (e) {
      console.warn('Failed to save attempt.', e);
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        showToast('Could not save progress. Storage may be full.');
      }
    }
  },

  getSettings() {
    try {
      const data = localStorage.getItem('appSettings');
      if (!data) return { darkMode: false, shuffleEnabled: false };
      const parsed = JSON.parse(data);
      if (typeof parsed !== 'object' || parsed === null) {
        localStorage.removeItem('appSettings');
        return { darkMode: false, shuffleEnabled: false };
      }
      return {
        darkMode: !!parsed.darkMode,
        shuffleEnabled: !!parsed.shuffleEnabled
      };
    } catch (e) {
      console.warn('Failed to read appSettings, resetting to defaults.', e);
      try { localStorage.removeItem('appSettings'); } catch (_) {}
      return { darkMode: false, shuffleEnabled: false };
    }
  },

  saveSetting(key, value) {
    try {
      const settings = this.getSettings();
      settings[key] = value;
      localStorage.setItem('appSettings', JSON.stringify(settings));
    } catch (e) {
      console.warn('Failed to save setting.', e);
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        showToast('Could not save progress. Storage may be full.');
      }
    }
  },

  clearHistory() {
    try {
      localStorage.removeItem('quizHistory');
    } catch (e) {
      console.warn('Failed to clear history.', e);
    }
  }
};

// ============================================================
// Task 2: Router Module
// ============================================================
const Router = {
  _currentTab: 'weeks',

  init() {
    window.addEventListener('hashchange', () => {
      const hash = location.hash.replace('#', '') || 'weeks';
      this.navigate(hash);
    });

    // Tab button clicks
    document.querySelectorAll('.tab[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.navigate(tab);
      });
    });

    // Render initial tab from hash or default
    const initial = location.hash.replace('#', '') || 'weeks';
    this.navigate(initial);
  },

  navigate(tabName) {
    const validTabs = ['weeks', 'quiz', 'progress'];
    if (!validTabs.includes(tabName)) tabName = 'weeks';

    this._currentTab = tabName;

    // Update hash without triggering hashchange again
    if (location.hash !== '#' + tabName) {
      history.replaceState(null, '', '#' + tabName);
    }

    // Show/hide sections
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(tabName + '-section');
    if (target) target.classList.add('active');

    // Update tab active state
    document.querySelectorAll('.tab[data-tab]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });

    // Render content for the tab
    if (tabName === 'weeks') WeekView.render();
    if (tabName === 'quiz') Quiz.renderLanding();
    if (tabName === 'progress') Progress.render();
  },

  getCurrentTab() {
    return this._currentTab;
  }
};

// ============================================================
// Task 3: WeekView Module
// ============================================================
const WeekView = {
  _showingWeek: false,

  render() {
    const container = document.getElementById('weeks-section');
    if (this._showingWeek) return; // Don't re-render grid if showing a week

    const weeks = QuestionData.getAllWeeks();
    let html = '<div class="week-grid">';
    weeks.forEach(w => {
      html += '<div class="week-card" data-week="' + w + '">';
      html += '<strong>Week ' + w + '</strong>';
      html += '</div>';
    });
    html += '</div>';
    container.innerHTML = html;

    // Attach click handlers
    container.querySelectorAll('.week-card').forEach(card => {
      card.addEventListener('click', () => {
        const week = parseInt(card.getAttribute('data-week'));
        this.showWeek(week);
      });
    });
  },

  showWeek(weekNumber) {
    this._showingWeek = true;
    const container = document.getElementById('weeks-section');
    const questions = QuestionData.getWeekQuestions(weekNumber);

    let html = '<button class="back-btn" id="back-to-weeks">\u2190 Back to Weeks</button>';
    html += '<h2 style="margin:0 0 12px">Week ' + weekNumber + '</h2>';

    questions.forEach((q, idx) => {
      const isPlaceholder = QuestionData.isPlaceholder(q);
      html += '<div class="question-item">';
      html += '<div class="question-text">' + (idx + 1) + '. ' + this._escapeHtml(q.question) + '</div>';

      if (isPlaceholder) {
        html += '<div class="placeholder-notice">This question is not available</div>';
      } else {
        html += '<ul class="question-options">';
        q.options.forEach(opt => {
          html += '<li>' + this._escapeHtml(opt) + '</li>';
        });
        html += '</ul>';
        html += '<button class="toggle-answer-btn" data-qid="' + q.id + '">Show Answer</button>';
        html += '<div class="answer-reveal" id="answer-' + q.id + '">\u2705 ' + this._escapeHtml(q.answer) + '</div>';
      }

      html += '</div>';
    });

    container.innerHTML = html;

    // Back button
    document.getElementById('back-to-weeks').addEventListener('click', () => {
      this._showingWeek = false;
      this.render();
    });

    // Answer toggles
    container.querySelectorAll('.toggle-answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.toggleAnswer(btn.getAttribute('data-qid'), btn);
      });
    });
  },

  toggleAnswer(questionId, btn) {
    const reveal = document.getElementById('answer-' + questionId);
    if (!reveal) return;
    const isVisible = reveal.classList.contains('visible');
    reveal.classList.toggle('visible');
    btn.textContent = isVisible ? 'Show Answer' : 'Hide Answer';
  },

  _escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
};

// ============================================================
// Tasks 4 & 5: Quiz Module
// ============================================================
const Quiz = {
  _questions: [],
  _userAnswers: [],
  _currentIndex: 0,
  _active: false,

  renderLanding() {
    if (this._active) return; // Don't overwrite active quiz
    const container = document.getElementById('quiz-section');
    container.innerHTML =
      '<div style="text-align:center;padding:40px 20px">' +
        '<p style="margin-bottom:20px;font-size:1.1rem">Test your HCI knowledge with 10 random questions.</p>' +
        '<button class="btn btn-primary" id="start-quiz-btn">Start Quiz</button>' +
      '</div>';
    document.getElementById('start-quiz-btn').addEventListener('click', () => this.startQuiz());
  },

  startQuiz() {
    this._questions = QuestionData.getQuizQuestions(10);
    this._userAnswers = new Array(10).fill('');
    this._currentIndex = 0;
    this._active = true;
    this.renderQuestion(0);
  },

  renderQuestion(index) {
    this._currentIndex = index;
    const container = document.getElementById('quiz-section');
    const q = this._questions[index];
    const selected = this._userAnswers[index];
    const progress = ((index + 1) / 10) * 100;

    let html = '<div class="card">';
    html += '<div style="font-size:0.85rem;color:var(--tab-text);margin-bottom:4px">Question ' + (index + 1) + ' of 10</div>';
    html += '<div class="progress-bar-container"><div class="progress-bar-fill" style="width:' + progress + '%"></div></div>';
    html += '<div class="question-text" style="margin:16px 0">' + this._escapeHtml(q.question) + '</div>';

    q.options.forEach(opt => {
      const isSelected = opt === selected;
      html += '<button class="option-btn' + (isSelected ? ' selected' : '') + '" data-option="' + this._escapeHtml(opt) + '">' + this._escapeHtml(opt) + '</button>';
    });

    // Navigation buttons
    html += '<div style="display:flex;gap:12px;margin-top:16px">';
    html += '<button class="btn btn-secondary" id="quiz-prev"' + (index === 0 ? ' disabled style="opacity:0.4;cursor:default"' : '') + '>Previous</button>';
    if (index === 9) {
      html += '<button class="btn btn-primary" id="quiz-submit" style="flex:1">Submit Quiz</button>';
    } else {
      html += '<button class="btn btn-primary" id="quiz-next" style="flex:1">Next</button>';
    }
    html += '</div>';
    html += '</div>';

    container.innerHTML = html;

    // Option click handlers
    container.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.recordAnswer(index, btn.getAttribute('data-option'));
      });
    });

    // Nav handlers
    const prevBtn = document.getElementById('quiz-prev');
    if (prevBtn && index > 0) {
      prevBtn.addEventListener('click', () => this.prevQuestion());
    }
    const nextBtn = document.getElementById('quiz-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextQuestion());
    }
    const submitBtn = document.getElementById('quiz-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => this.submitQuiz());
    }
  },

  recordAnswer(index, option) {
    this._userAnswers[index] = option;
    // Re-render to update highlight
    this.renderQuestion(index);
  },

  nextQuestion() {
    if (this._currentIndex < 9) {
      this.renderQuestion(this._currentIndex + 1);
    }
  },

  prevQuestion() {
    if (this._currentIndex > 0) {
      this.renderQuestion(this._currentIndex - 1);
    }
  },

  submitQuiz() {
    // Check for unanswered
    const unanswered = this._userAnswers.filter(a => a === '').length;
    if (unanswered > 0) {
      if (!confirm('You have ' + unanswered + ' unanswered question' + (unanswered > 1 ? 's' : '') + '. Submit anyway?')) {
        return;
      }
    }

    // Calculate score
    let score = 0;
    const answers = [];
    for (let i = 0; i < this._questions.length; i++) {
      const q = this._questions[i];
      const selected = this._userAnswers[i] || '';
      const isCorrect = selected === q.answer;
      if (isCorrect) score++;
      answers.push({
        questionId: q.id,
        selected: selected,
        correct: q.answer,
        week: q.week
      });
    }

    const attempt = {
      score: score,
      total: 10,
      timestamp: new Date().toISOString(),
      answers: answers
    };

    Storage.saveAttempt(attempt);
    this.renderResults(attempt);
  },

  renderResults(attempt) {
    this._active = false;
    const container = document.getElementById('quiz-section');

    let html = '<div class="score-display">' + attempt.score + ' / ' + attempt.total + '</div>';
    html += '<p style="text-align:center;color:var(--tab-text);margin-bottom:20px">' +
      (attempt.score >= 8 ? 'Great job! 🎉' : attempt.score >= 5 ? 'Good effort! 👍' : 'Keep practicing! 💪') + '</p>';

    attempt.answers.forEach((ans, idx) => {
      const q = this._questions[idx];
      const isCorrect = ans.selected === ans.correct;
      const isUnanswered = ans.selected === '';
      let cls = 'card ';
      if (isUnanswered) {
        cls += '';
      } else if (isCorrect) {
        cls += 'result-correct';
      } else {
        cls += 'result-wrong';
      }

      html += '<div class="' + cls + '" style="' + (isUnanswered ? 'border-left:4px solid var(--tab-text);opacity:0.7' : '') + '">';
      html += '<div class="question-text">' + (idx + 1) + '. ' + this._escapeHtml(q.question) + '</div>';
      if (isUnanswered) {
        html += '<div style="color:var(--tab-text);font-style:italic">Not answered</div>';
      } else {
        html += '<div>Your answer: <strong>' + this._escapeHtml(ans.selected) + '</strong></div>';
      }
      if (!isCorrect) {
        html += '<div style="color:var(--correct);font-weight:600">Correct: ' + this._escapeHtml(ans.correct) + '</div>';
      }
      html += '</div>';
    });

    html += '<div style="display:flex;gap:12px;margin-top:20px">';
    html += '<button class="btn btn-primary" id="quiz-retry">Take Another Quiz</button>';
    html += '<button class="btn btn-secondary" id="quiz-to-progress">View Progress</button>';
    html += '</div>';

    container.innerHTML = html;

    document.getElementById('quiz-retry').addEventListener('click', () => this.startQuiz());
    document.getElementById('quiz-to-progress').addEventListener('click', () => Router.navigate('progress'));
  },

  getCurrentIndex() {
    return this._currentIndex;
  },

  getProgress() {
    return { current: this._currentIndex + 1, total: 10 };
  },

  _escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
};

// ============================================================
// Tasks 6 & 7: Progress Module
// ============================================================
const Progress = {
  render() {
    const container = document.getElementById('progress-section');
    const history = Storage.getHistory();

    if (history.length === 0) {
      container.innerHTML =
        '<div class="empty-state">' +
          '<p style="font-size:1.2rem;margin-bottom:8px">📊</p>' +
          '<p>No quizzes taken yet. Start your first quiz!</p>' +
        '</div>';
      return;
    }

    const stats = this.computeStats(history);
    const weakAreas = this.findWeakAreas(history);
    const mistakes = this.collectMistakes(history);

    let html = '';

    // Summary cards
    html += '<div class="stats-grid">';
    html += '<div class="stat-card"><div class="stat-value">' + stats.totalQuizzes + '</div><div class="stat-label">Total Quizzes</div></div>';
    html += '<div class="stat-card"><div class="stat-value">' + stats.avgScore.toFixed(1) + '</div><div class="stat-label">Average Score</div></div>';
    html += '<div class="stat-card stat-highlight"><div class="stat-value">' + (stats.weakestWeek !== null ? 'Week ' + stats.weakestWeek : '—') + '</div><div class="stat-label">Weakest Week</div></div>';
    html += '</div>';

    // Weak areas
    if (weakAreas.length > 0) {
      html += '<div class="card" style="margin-bottom:16px">';
      html += '<h3 style="margin:0 0 8px">Weak Areas</h3>';
      html += '<div style="background:var(--wrong-bg);padding:10px 14px;border-radius:8px;margin-bottom:10px;font-weight:600;color:var(--wrong)">You are weakest in: Week ' + weakAreas[0].week + '</div>';
      html += '<ul style="list-style:none;padding:0;margin:0">';
      weakAreas.forEach(wa => {
        html += '<li style="padding:6px 0;border-bottom:1px solid var(--border)">Week ' + wa.week + ' — ' + wa.errorCount + ' error' + (wa.errorCount !== 1 ? 's' : '') + '</li>';
      });
      html += '</ul></div>';
    }

    // Mistake review
    if (mistakes.length > 0) {
      html += '<div class="card" style="margin-bottom:16px">';
      html += '<h3 style="margin:0 0 8px">Mistake Review</h3>';
      mistakes.forEach(m => {
        html += '<div style="padding:10px 0;border-bottom:1px solid var(--border)">';
        html += '<div style="font-weight:600;margin-bottom:4px">[Week ' + m.week + '] ' + this._escapeHtml(m.questionText) + '</div>';
        html += '<div style="color:var(--wrong)">Your answer: ' + this._escapeHtml(m.selected) + '</div>';
        html += '<div style="color:var(--correct)">Correct: ' + this._escapeHtml(m.correct) + '</div>';
        html += '</div>';
      });
      html += '</div>';
    }

    // Quiz history
    html += '<h3 style="margin:0 0 12px">Quiz History</h3>';
    history.forEach((attempt, idx) => {
      const date = new Date(attempt.timestamp);
      const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      html += '<div class="card">';
      html += '<div style="display:flex;justify-content:space-between;align-items:center">';
      html += '<div><strong>' + attempt.score + '/' + attempt.total + '</strong><br><span style="font-size:0.8rem;color:var(--tab-text)">' + dateStr + '</span></div>';
      html += '<button class="btn btn-small btn-secondary quiz-detail-btn" data-idx="' + idx + '">View Details</button>';
      html += '</div>';
      html += '<div class="quiz-detail" id="quiz-detail-' + idx + '" style="display:none;margin-top:12px"></div>';
      html += '</div>';
    });

    container.innerHTML = html;

    // Detail button handlers
    container.querySelectorAll('.quiz-detail-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        this.renderQuizDetail(idx);
      });
    });
  },

  computeStats(history) {
    const totalQuizzes = history.length;
    if (totalQuizzes === 0) return { totalQuizzes: 0, avgScore: 0, weakestWeek: null };

    const totalScore = history.reduce((sum, a) => sum + a.score, 0);
    const avgScore = totalScore / totalQuizzes;

    // Find weakest week
    const weekErrors = {};
    history.forEach(attempt => {
      attempt.answers.forEach(ans => {
        if (ans.selected !== ans.correct) {
          weekErrors[ans.week] = (weekErrors[ans.week] || 0) + 1;
        }
      });
    });

    let weakestWeek = null;
    let maxErrors = 0;
    Object.entries(weekErrors).forEach(([week, count]) => {
      const w = parseInt(week);
      if (count > maxErrors || (count === maxErrors && (weakestWeek === null || w < weakestWeek))) {
        maxErrors = count;
        weakestWeek = w;
      }
    });

    return { totalQuizzes, avgScore, weakestWeek };
  },

  findWeakAreas(history) {
    const weekErrors = {};
    history.forEach(attempt => {
      attempt.answers.forEach(ans => {
        if (ans.selected !== ans.correct) {
          weekErrors[ans.week] = (weekErrors[ans.week] || 0) + 1;
        }
      });
    });

    return Object.entries(weekErrors)
      .map(([week, count]) => ({ week: parseInt(week), errorCount: count }))
      .filter(w => w.errorCount > 0)
      .sort((a, b) => b.errorCount - a.errorCount);
  },

  collectMistakes(history) {
    const mistakeMap = {};
    // Process from oldest to newest so most recent overwrites
    for (let i = history.length - 1; i >= 0; i--) {
      const attempt = history[i];
      attempt.answers.forEach(ans => {
        if (ans.selected !== ans.correct) {
          const q = QuestionData.getQuestionById(ans.questionId);
          mistakeMap[ans.questionId] = {
            questionId: ans.questionId,
            questionText: q ? q.question : 'Unknown question',
            selected: ans.selected,
            correct: ans.correct,
            week: ans.week
          };
        }
      });
    }
    return Object.values(mistakeMap);
  },

  renderQuizDetail(index) {
    const detail = document.getElementById('quiz-detail-' + index);
    if (!detail) return;

    // Toggle visibility
    if (detail.style.display !== 'none') {
      detail.style.display = 'none';
      return;
    }

    const history = Storage.getHistory();
    const attempt = history[index];
    if (!attempt) return;

    let html = '';
    attempt.answers.forEach((ans, i) => {
      const isCorrect = ans.selected === ans.correct;
      const isUnanswered = ans.selected === '';
      const q = QuestionData.getQuestionById(ans.questionId);
      const qText = q ? q.question : 'Question ' + (i + 1);

      let cls = isUnanswered ? '' : (isCorrect ? 'result-correct' : 'result-wrong');
      html += '<div class="' + cls + '" style="padding:8px 12px;margin-bottom:6px;border-radius:6px;' + (isUnanswered ? 'opacity:0.6;border-left:4px solid var(--tab-text)' : '') + '">';
      html += '<div style="font-size:0.85rem;font-weight:600">' + (i + 1) + '. ' + this._escapeHtml(qText) + '</div>';
      if (isUnanswered) {
        html += '<div style="font-size:0.8rem;font-style:italic">Not answered</div>';
      } else {
        html += '<div style="font-size:0.8rem">Your answer: ' + this._escapeHtml(ans.selected) + '</div>';
      }
      if (!isCorrect) {
        html += '<div style="font-size:0.8rem;color:var(--correct)">Correct: ' + this._escapeHtml(ans.correct) + '</div>';
      }
      html += '</div>';
    });

    detail.innerHTML = html;
    detail.style.display = 'block';
  },

  _escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
};

// ============================================================
// Task 8: Theme Module
// ============================================================
const Theme = {
  init() {
    const settings = Storage.getSettings();
    if (settings.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    this._updateIcon();

    document.getElementById('theme-toggle').addEventListener('click', () => this.toggle());
  },

  toggle() {
    const isDark = document.body.classList.toggle('dark');
    Storage.saveSetting('darkMode', isDark);
    this._updateIcon();
  },

  _updateIcon() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    }
  }
};

// ============================================================
// Task 9: Toast Notification & App Initialization
// ============================================================
function showToast(message) {
  // Remove existing toast if any
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger show
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto-dismiss after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// App initialization
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Router.init();
});
