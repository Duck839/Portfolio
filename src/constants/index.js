const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Aspiring Engineers", imgPath: "images/ideas.svg" },
  { text: "National Champion", imgPath: "images/concepts.svg" },
  { text: "Builder", imgPath: "images/designs.svg" },
  { text: "CAD Designer", imgPath: "images/code.svg" },
  { text: "Aspiring Engineers", imgPath: "images/ideas.svg" },
  { text: "National Champion", imgPath: "images/concepts.svg" },
  { text: "Builder", imgPath: "images/designs.svg" },
  { text: "CAD Designer", imgPath: "images/code.svg" },
];

const counterItems = [
  { value: 50, suffix: "+", label: "Custom 3D Printed Parts Designed" },
  { value: 10, suffix: "+", label: "STEM & Achievement Awards" },
  { value: 2, suffix: "", label: "National Champion Titles" },
  { value: 1, suffix: "", label: "International Medal" },
];

const abilities = [
  {
    imgPath: "images/robot.png",
    title: "Robotics Competitions",
    desc: "Building and programming robots for national and international robotics competitions.",
  },
  {
    imgPath: "images/engineering.png",
    title: "Engineering & Prototyping",
    desc: "Designing, testing, and refining robotics systems through CAD and 3D printing.",
  },
  {
    imgPath: "images/programming.png",
    title: "Programming & Algorithms",
    desc: "Programming solutions through C++, Python, and competitive programming.",
  },
];

const techStackImgs = [
  {
    name: "C++",
    imgPath: "images/logos/cpp.png",
  },
  {
    name: "Python",
    imgPath: "images/logos/python.png",
  },
  {
    name: "PyBricks",
    imgPath: "images/logos/pybricks.png",
  },
  {
    name: "Tinkercad",
    imgPath: "images/logos/Tinkercad.png",
  },
  {
    name: "Fusion 360 (CAD Design)",
    imgPath: "images/logos/fusion.png",
  },
];

const expCards = [
  {
    title: "National Robotics Competition (NRC)",
    date: "2023",
    responsibilities: [
      "First robotics competition experience.",
      "Reached presentation finals in debut competition.",
      "Built foundational skills in robot design and teamwork under structured constraints.",
    ],
    logoPath: "images/NRC.webp",
    image: "images/NRCphoto.jpeg",
  },
  {
    title: "FIRST LEGO League (FLL)",
    date: "2024",
    responsibilities: [
      "Advanced into national finals.",
      "Learned to conduct research and develop innovative solutions to real-world problems.",
      "Developed foundational robot design and iteration skills.",
    ],
    logoPath: "images/FLL.png",
    image: "images/FLL2024.jpeg",
  },
  {
    title: "World Robot Olympiad (WRO)",
    date: "2024",
    responsibilities: [
      "Achieved 7th place at national level competition.",
      "Designed a modular robot focused on adaptability across changing mission conditions.",
      "Optimised code structure for fast on-the-spot adjustments and debugging under time constraints.",
    ],
    logoPath: "images/wro.webp",
    image: "images/WRO2024.jpeg",
  },
  {
    title: "FIRST LEGO League (FLL)",
    date: "2025",
    responsibilities: [
      "National Champion in FIRST LEGO League.",
      "🏆 Best Robot Run Award.",
      "Earned invitation to FLL Open International Championship (Houston, USA).",
    ],
    logoPath: "images/FLL.png",
    image: "images/FLL2025.png",
  },
  {
    title: "World Robot Olympiad (WRO)",
    date: "2025",
    responsibilities: [
      "National Champion in WRO RoboMission.",
      "🏆 Best Robot Performance Award.",
      "🥈 International Silver Medal representing Singapore.",
    ],
    logoPath: "images/wro.webp",
    image: "images/WRO2025.jpeg",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/Duck839",
    imgPath: "images/github.png",
  },
  {
    name: "gmail",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=jingyuanlee1@gmail.com",
    imgPath: "images/gmail.png",
  },
];

const wroNavLinks = [
  { name: "Specs", link: "#specs" },
  { name: "Mechanisms", link: "#mechanisms" },
  { name: "Videos", link: "#videos" },
  { name: "Results", link: "#results" },
];

const robotStats = [
  { value: "35", label: "International Ranking", suffix: "th" },
  { value: "1200", label: "Robot weight", suffix: "g" },
  { value: "800", label: "Hours of Development", suffix: "+" },
  { value: "900", label: "Lines of Code", suffix: "+" },
];

const techSpecs = [
  {
    title: "EVO Microcontroller",
    desc: "ESP32-S3 based custom controller with 4 EV3 motor ports, 8 servo ports, and 8 I2C multiplexed ports.",
    imgPath: "images/microcontroller.png",
    link: "/evo",
  },
  {
    title: "TCS34725 x 4",
    desc: "RGB colour sensors for line following and colour identification across the game board.",
    imgPath: "images/colour-sensor.png",
  },
  {
    title: "BNO055 IMU",
    desc: "9-axis inertial measurement unit providing precise heading data for gyro-stabilised movement and spot turns.",
    imgPath: "images/bno.png",
  },
  {
    title: "HuskyLens",
    desc: "AI vision sensor for real-time colour block detection and classification during autonomous runs.",
    imgPath: "images/camera.png",
  },
  {
    title: "Motors x 3",
    desc: "2 motors powering the differential drive base, 1 motor for primary attachment actuation.",
    imgPath: "images/motor.png",
  },
  {
    title: "Servo Motors x 2",
    desc: "Precision servo motors controlling attachment mechanisms with accurate positional feedback.",
    imgPath: "images/servo.png",
  },
];

const mechanisms = [
  {
    id: "01",
    name: "Motor: Lift & Grab Mechanism",
    desc: [
      "Motor drives two parallel linkages simultaneously on both sides of the motor.",
      "An axle runs through the top beam connecting both sides to a grabber.",
      "On pickup — grabber closes first until it grips the object, then the parallel linkages lift everything upward.",
      "On release — linkages lower first, then grabber opens to drop the object.",
    ],
    videoSrc: "images/Motor1.gif",
  },
  {
    id: "02",
    name: "Servo 1: Dual Cam Hook Mechanism",
    desc: [
      "Two custom dual cams — each made by merging two ovals rotated 90° and fused together — are mounted on a shared axle, one on each side of the robot, driven by a single servo.",
      "Each dual cam is offset 90° from the other along the axle, giving the servo 4 distinct output states: Closed/Closed, Closed/Open, Open/Closed, and Open/Open.",
      "Each cam pushes a small L-shaped piece upward as its high point passes — rotating the hook downward into the open position.",
      "A rubber band holds each hook in the default closed position passively.",
      "This allows one servo to independently control two hooks, enabling selective pickup and release of WRO game pieces called Research samples.",
    ],
     videoSrc: "images/servo1.gif",
  },
  {
    id: "03",
    name: "Servo 2a: Ball Collector & Release",
    desc: [
      "A servo drives a large 3D printed ball grabber that scoops a ball from a container, then rotates back to deposit it into a holder tilted toward the back of the robot, held in place by two 5-hole half beams.",
      "A straight arm on the same servo, when rotated further back, pushes down a lever linkage connected to the 5-hole half beams — rotating it down and releasing the ball out the back due to the tilt.",
    ],
    videoSrc: "images/servo2a.gif",
  },
  {
    id: "04",
    name: "Servo 2b: Motor Lock",
    desc: [
      "A second small arm also on the same servo — when the ball grabber rotates all the way down, it pushes another linkage which presses a gear arm onto a gear attached to the Lift & Grab Mechanism, locking it from moving up or down.",
      "With the Lift & Grab Mechanism locked in place, it can safely open the grabber in midair without the arm dropping — allowing precise mid-air release of samples.",
      "One servo simultaneously handles ball collection, ball release, and locking the Lift & Grab Mechanism — three actions driven by a single actuator.",
    ],
    videoSrc: "images/servo2b.gif",
  },
];

const results = [
  {
    event: "WRO RoboMission Junior — National Finals",
    year: "2025 · Singapore",
    achievements: [
      { icon: "🥇", label: "National Champion" },
      { icon: "🏆", label: "Best Robot Performance Award" },
      { icon: "🏆", label: "Side Quest 4 Winner" },
    ],
  },
  {
    event: "WRO RoboMission Junior — International Finals",
    year: "2025 · Singapore",
    achievements: [
      { icon: "🥈", label: "Silver Medal" },
      { icon: "🌏", label: "35th place out of 112 teams" },
    ],
  },
];

const evoNavLinks = [
  { name: "What is EVO", link: "#what" },
  { name: "Hardware", link: "#hardware" },
  { name: "Contributions", link: "#contributions" },
  { name: "Links", link: "#links" },
];

const ports = [
  { label: "EV3 Motor Ports", value: "4", suffix: "x" },
  {
    label: "Motor Ports with Encoder (SFhared with ev3 motors)",
    value: "4",
    suffix: "x",
  },
  { label: "Servo Ports", value: "8", suffix: "x" },
  { label: "I2C Multiplexed Ports", value: "8", suffix: "x" },
  { label: "EV3 Sensor Ports", value: "4", suffix: "x" },
  { label: "GPIO Ports", value: "8", suffix: "x" },
  { label: "UART / SPI Hybrid", value: "2", suffix: "x" },
  { label: "I2C Ports", value: "2", suffix: "x" },
];

const contributions = [
  {
    number: "01",
    title: "PID Movement Functions",
    desc: "Wrote foundational PID straight-line stabilisation and precise spot turn functions, forming the core movement library used by the club's competition robots.",
  },
  {
    number: "02",
    title: "Servo Library Testing",
    desc: "Investigated an existing servo library issue, sourced and evaluated an alternative library, and tested compatibility to determine whether it resolved the original problem.",
  },
  {
    number: "03",
    title: "Hardware Stress Testing",
    desc: "Deliberately pushed EVO to its limits — running multiple servos simultaneously, executing rapid movement loops without delay, and verifying degree accuracy — to surface software bugs and edge cases.",
  },
  {
    number: "04",
    title: "Code Review & Bug Reporting",
    desc: "Conducted in-depth code reviews and  logged bugs, helping inprove reliability.",
  },
];

const robotSetup = [
  {
    title: "TCS34725 Colour Sensors x 4",
    desc: "Line following + colour identification",
  },
  {
    title: "BNO055 IMU x 1",
    desc: "Gyro-stabilised straight movement",
  },
  { title: "HuskyLens x 1", desc: "AI colour block detection" },
  { title: "Motors x 3", desc: "Drive base + attachment" },
  { title: "Servo Motors x 2", desc: "Attachment control" },
  { title: "External Screen x 1", desc: "View inforamtion for calibration and debugging" },
  { title: "External Buttons x 4", desc: "Control screen and start/stop" },
  { title: "NeoPixel LED x 8", desc: "Light up game piece for better scanning" },
];

const noiNavLinks = [
  { name: "Journey", link: "#journey" },
  { name: "Preparation", link: "#preparation" },
  { name: "Algorithms", link: "#algorithms" },
  { name: "Reflection", link: "#reflection" },
];

const algorithms = [
  {
    name: "Binary Search",
    level: "Solid",
    desc: "Efficiently finds a value in a sorted array by repeatedly halving the search space. O(log n) time complexity.",
    code: `while (l < r) {\n  ll mid = (l + r) / 2;\n  if (check(mid)) r = mid;\n  else l = mid + 1;\n}`,
  },
  {
    name: "Prefix Sum",
    desc: "Precomputes cumulative sums to answer range sum queries in O(1) after O(n) preprocessing.",
    code: `for (int i = 1; i <= n; i++)\n  pref[i] = pref[i-1] + a[i];\nll sum = pref[r] - pref[l-1];`,
  },
  {
    name: "Sliding Window",
    desc: "Maintains a window that expands and contracts to solve subarray problems efficiently in O(n).",
    code: `int l = 0;\nfor (int r = 0; r < n; r++) {\n  // add a[r]\n  while (/* invalid */) l++;\n  // update answer\n}`,
  },
  {
    name: "Greedy",
    desc: "Makes the locally optimal choice at each step, often used with sorting to solve optimisation problems.",
    code: `sort(a.begin(), a.end());\nfor (auto x : a) {\n  if (valid(x)) take(x);\n}`,
  },
];

const nationalPhotos = [
  { imgPath: "images/gallery/national1.jpeg", alt: "Nationals photo 1" },
  { imgPath: "images/gallery/national2.jpeg", alt: "Nationals photo 2" },
  { imgPath: "images/gallery/national3.jpeg", alt: "Nationals photo 3" },
  { imgPath: "images/gallery/national4.jpeg", alt: "Nationals photo 4" },
  { imgPath: "images/gallery/national5.jpeg", alt: "Nationals photo 5" },
  { imgPath: "images/gallery/national6.jpeg", alt: "Nationals photo 6" },
  { imgPath: "images/gallery/national7.jpeg", alt: "Nationals photo 7" },
  { imgPath: "images/gallery/national8.jpeg", alt: "Nationals photo 8" },
  { imgPath: "images/gallery/national9.jpeg", alt: "Nationals photo 9" },
  { imgPath: "images/gallery/national10.jpeg", alt: "Nationals photo 10" },
];

const internationalPhotos = [
  {
    imgPath: "images/gallery/international1.jpeg",
    alt: "Internationals photo 1",
  },
  {
    imgPath: "images/gallery/international2.jpeg",
    alt: "Internationals photo 2",
  },
  {
    imgPath: "images/gallery/international3.jpeg",
    alt: "Internationals photo 3",
  },
  {
    imgPath: "images/gallery/international4.jpeg",
    alt: "Internationals photo 4",
  },
  {
    imgPath: "images/gallery/international5.jpeg",
    alt: "Internationals photo 5",
  },
  {
    imgPath: "images/gallery/international6.jpeg",
    alt: "Internationals photo 6",
  },
  {
    imgPath: "images/gallery/international7.jpeg",
    alt: "Internationals photo 7",
  },
  {
    imgPath: "images/gallery/international8.jpeg",
    alt: "Internationals photo 8",
  },
  {
    imgPath: "images/gallery/international9.jpeg",
    alt: "Internationals photo 9",
  },
  {
    imgPath: "images/gallery/international10.jpeg",
    alt: "Internationals photo 10",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  socialImgs,
  techStackImgs,
  navLinks,
  wroNavLinks,
  robotStats,
  techSpecs,
  mechanisms,
  results,
  evoNavLinks,
  ports,
  contributions,
  robotSetup,
  noiNavLinks,
  algorithms,
  nationalPhotos,
  internationalPhotos,
};
