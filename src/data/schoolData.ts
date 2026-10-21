export interface Program {
  id: string;
  slug: string;
  title: string;
  ageGroup: string;
  tagline: string;
  ratio: string;
  timings: string;
  overview: string;
  curriculumPillars: string[];
  keyMilestones: string[];
  dailySchedule: { time: string; activity: string; description: string }[];
  termFee: number;
  featured: boolean;
  color: string;
  bgLight: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'learning' | 'recreation' | 'safety' | 'wellness';
  description: string;
  highlights: string[];
  features: string[];
  safetyStandard: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admission' | 'Event' | 'Academic' | 'Holiday' | 'Circular';
  summary: string;
  details: string;
  isImportant: boolean;
  downloadName?: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  program: string;
  quote: string;
  rating: number;
  academicYear: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'events' | 'campus' | 'learning' | 'activities';
  date: string;
  description: string;
  gradient: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Daycare & Meals' | 'Safety & Transport' | 'Curriculum & Activities';
}

export const SCHOOL_INFO = {
  name: "MountainHeights",
  fullName: "MountainHeights Early Childhood Academy & Preschool",
  formerName: "Formerly known as Phulwari Heights School",
  established: 2005,
  tagline: "Inspiring Curiosity, Compassion & Joyful Discovery",
  address: "BQ-Block, NS-9 Shalimar Campus, North Delhi – 110088",
  phones: ["+91 925 005 7531", "+91 114 223 0116", "+91 931 012 9888"],
  email: "info@mountainheights.edu",
  admissionsEmail: "admissions@mountainheights.edu",
  officeHours: "Monday to Saturday: 8:30 AM – 5:30 PM",
  studentTeacherRatio: "10:1",
  classSizes: "Small batches (max 15 children per class)",
  ageRange: "6 months to 6 years",
  transportAvailable: true,
  cctvSurveillance: true,
  airConditioned: true,
};

export const PROGRAMS: Program[] = [
  {
    id: "p1",
    slug: "mother-toddler",
    title: "Mother-Toddler Program",
    ageGroup: "6 to 18 Months",
    tagline: "Gentle bonding and sensory stimulation in a secure environment",
    ratio: "5:1 (with parent)",
    timings: "9:30 AM – 11:00 AM (Bi-weekly)",
    overview: "Our Mother-Toddler program bridges the home-to-school journey through sensory play, musical rhythm, infant massage techniques, and baby sign language. It empowers parents with developmental insights while nurturing early socialization.",
    curriculumPillars: [
      "Sensory tactile exploration",
      "Vestibular & motor movement games",
      "Musical cadence & infant phonetics",
      "Parenting workshops & peer support"
    ],
    keyMilestones: [
      "Confident social comfort with peers and educators",
      "Fine motor grasping and hand-eye coordination",
      "Response to rhythmic verbal and musical cues",
      "Early autonomy in guided play"
    ],
    dailySchedule: [
      { time: "09:30 AM", activity: "Welcome Circle & Baby Rhymes", description: "Gentle warm-up songs and name acknowledgment." },
      { time: "09:50 AM", activity: "Sensory Stations", description: "Water beads, tactile fabric swatches, and safe non-toxic paints." },
      { time: "10:20 AM", activity: "Gross Motor Crawl & Climb", description: "Soft play obstacles, balance tunnels, and roll mats." },
      { time: "10:45 AM", activity: "Snack & Parenting Chat", description: "Organic fruit purees and pediatric milestone discussion." }
    ],
    termFee: 14500,
    featured: true,
    color: "amber",
    bgLight: "bg-amber-50"
  },
  {
    id: "p2",
    slug: "playgroup",
    title: "Playgroup & Toddlers",
    ageGroup: "1.5 to 2.5 Years",
    tagline: "Joyful play-based exploration and early language development",
    ratio: "8:1 (Plus Support Attendant)",
    timings: "9:00 AM – 12:00 PM (Monday – Friday)",
    overview: "Our Playgroup is centered on discovery through self-directed play. Toddlers build foundational social skills, fine motor precision, and expressive language through puppet storytelling, sensory tables, and outdoor sand exploration.",
    curriculumPillars: [
      "Montessori sensorial apparatus",
      "Expressive vocabulary & speech building",
      "Social sharing & empathy circles",
      "Potty training readiness & self-care"
    ],
    keyMilestones: [
      "Separation confidence and classroom belonging",
      "Vocabulary expansion to 200+ active words and 2-word phrases",
      "Self-directed selection and tidy-up of materials",
      "Jumping, hopping, and ball catching basics"
    ],
    dailySchedule: [
      { time: "09:00 AM", activity: "Greeting & Free Discovery", description: "Children choose Montessori sensorial trays." },
      { time: "09:40 AM", activity: "Theme Circle & Rhyme Time", description: "Colors, animals, weather, and feelings through puppets." },
      { time: "10:15 AM", activity: "Nutritious Snack & Table Manners", description: "Supervised self-feeding and hand washing routine." },
      { time: "10:45 AM", activity: "Outdoor Sand & Splash Play", description: "Sensory textures, water pouring, and coordination." },
      { time: "11:30 AM", activity: "Storybook & Wind-down", description: "Calming bedtime-style story and farewell reflection." }
    ],
    termFee: 16500,
    featured: true,
    color: "sky",
    bgLight: "bg-sky-50"
  },
  {
    id: "p3",
    slug: "nursery",
    title: "Nursery",
    ageGroup: "2.5 to 3.5 Years",
    tagline: "Structured inquiry, phonics immersion, and creative confidence",
    ratio: "10:1 (Plus Assistant Educator)",
    timings: "8:45 AM – 12:15 PM (Monday – Friday)",
    overview: "Nursery sparks intellectual curiosity through interactive storytelling, Jolly Phonics sounds, mathematical concepts (shapes, counting, sorting), and collaborative arts. Children learn to question, hypothesize, and express their original ideas.",
    curriculumPillars: [
      "Synthetic Phonics & Pre-Reading skills",
      "Concrete Math (numeral identification, sorting, sizing)",
      "Scientific inquiry & nature investigations",
      "Creative drama & expressive visual arts"
    ],
    keyMilestones: [
      "Phonetic sound recognition for all 26 letters",
      "Pencil grip development and tracing control",
      "Cooperative play and active conflict resolution",
      "Independent handling of lunch box, water bottle, and shoe fastening"
    ],
    dailySchedule: [
      { time: "08:45 AM", activity: "Morning Assembly & Mindfulness", description: "Daily affirmation, national anthem, and stretch." },
      { time: "09:15 AM", activity: "Phonics & Language Lab", description: "Sound-object association and picture reading." },
      { time: "10:00 AM", activity: "Mathematics & Logic Trays", description: "Number rods, counting counters, and geometric solids." },
      { time: "10:45 AM", activity: "Wholesome Warm Snack", description: "Balanced dining prepared in our school kitchen." },
      { time: "11:15 AM", activity: "Smart Board Interactive Workshop", description: "Visual science themes, seasons, and animal habitats." },
      { time: "11:50 AM", activity: "Reflective Journaling & Dismissal", description: "Reviewing daily discoveries and safe handover." }
    ],
    termFee: 18000,
    featured: true,
    color: "emerald",
    bgLight: "bg-emerald-50"
  },
  {
    id: "p4",
    slug: "kindergarten",
    title: "Kindergarten (LKG & UKG)",
    ageGroup: "3.5 to 5.5 Years",
    tagline: "School readiness, early literacy, numeracy, and STEM concepts",
    ratio: "12:1",
    timings: "8:30 AM – 1:00 PM (Monday – Friday)",
    overview: "Our comprehensive Kindergarten program ensures seamless transition to primary schools. It blends rigorous literacy (reading sentences, sight words, emergent writing) with logical arithmetic, environmental awareness, and basic coding/logic games.",
    curriculumPillars: [
      "Advanced phonics, sentence construction & creative writing",
      "Early arithmetic: addition, subtraction, measurements",
      "Environmental Studies & global cultural celebrations",
      "Critical thinking and foundational STEM experiments"
    ],
    keyMilestones: [
      "Reading decodable reader books independently",
      "Writing 3-4 word descriptive sentences with correct punctuation",
      "Mental math operations up to 20 and skip counting",
      "Confident public speaking during Show & Tell presentations"
    ],
    dailySchedule: [
      { time: "08:30 AM", activity: "Assembly, News & Thought for the Day", description: "Student-led announcements and prayer." },
      { time: "09:00 AM", activity: "Literacy & Emergent Writing", description: "Vowels, blends, sight words, and journal entries." },
      { time: "10:00 AM", activity: "Math & Applied Logic", description: "Hands-on abacus, base-ten blocks, and time/calendar." },
      { time: "10:50 AM", activity: "Nutritious Lunch Break", description: "Warm meal, hydration reminder, and dining etiquette." },
      { time: "11:30 AM", activity: "STEM Discovery & Nature Lab", description: "Plant life cycles, magnetism, water filtering tests." },
      { time: "12:20 PM", activity: "Physical Education & Team Sports", description: "Yoga, athletics, obstacle course agility, and relay." }
    ],
    termFee: 21000,
    featured: true,
    color: "indigo",
    bgLight: "bg-indigo-50"
  },
  {
    id: "p5",
    slug: "daycare",
    title: "Daycare & Extended Care",
    ageGroup: "1 to 6 Years",
    tagline: "A home away from home with fresh meals, restful sleep, and structured fun",
    ratio: "6:1",
    timings: "8:00 AM – 6:30 PM (Flexible Shifts)",
    overview: "Designed for working parents, our daycare provides a loving, safe, and air-conditioned environment. Supervised by trained caregivers and pediatric nurses, children enjoy balanced hot meals, nap routines, homework help, and engaging evening clubs.",
    curriculumPillars: [
      "Sanitized, quiet sleep dormitories with individual bedding",
      "Chef-prepared nutritious morning snack, lunch, and high tea",
      "Engaging craft, puzzle, and outdoor playtime",
      "Live CCTV app check-ins and daily digital logbooks"
    ],
    keyMilestones: [
      "Healthy routine establishment for eating, resting, and active play",
      "Positive multi-age social bonding and caring relationships",
      "Continuous emotional reassurance and self-regulation"
    ],
    dailySchedule: [
      { time: "01:00 PM", activity: "Freshly Cooked Hot Lunch", description: "Organic lentils, whole grains, vegetables, and milk." },
      { time: "01:45 PM", activity: "Cozy Story & Rest Hour", description: "Dimmed lights, soft lullaby audio, and supervised naps." },
      { time: "03:45 PM", activity: "Wake-up, Fresh Milk & Healthy Snacks", description: "Seasonal fruits, whole-grain cookies, and nuts." },
      { time: "04:30 PM", activity: "Enrichment Clubs & Outdoor Playground", description: "Games, taekwondo, dance, and drawing workshops." },
      { time: "06:00 PM", activity: "Wind-down & Parent Pickup", description: "Handover with caregiver debrief on mood and appetite." }
    ],
    termFee: 24000,
    featured: false,
    color: "purple",
    bgLight: "bg-purple-50"
  },
  {
    id: "p6",
    slug: "activity-club",
    title: "Activity Club & Weekend Academy",
    ageGroup: "2 to 8 Years",
    tagline: "Sparking artistic talents, physical fitness, and creative expression",
    ratio: "8:1",
    timings: "3:30 PM – 5:30 PM (Weekdays & Saturday Batches)",
    overview: "Our extracurricular academy invites both enrolled and external children to explore music, Western & classical dance, martial arts (Taekwondo), speech & drama, robotics logic, and chess under certified specialized coaches.",
    curriculumPillars: [
      "Taekwondo belt certifications and discipline",
      "Contemporary & folk dance choreography",
      "Speech, phonics, and elocution mastery",
      "Fine arts, clay pottery, and origami crafting"
    ],
    keyMilestones: [
      "Stage presence and confident performance showcase",
      "Physical flexibility, balance, and core strength",
      "Refined fine-motor agility and 3D craft visualization"
    ],
    dailySchedule: [
      { time: "03:30 PM", activity: "Warm-up & Agility Drills", description: "Dynamic stretching, cardiovascular warm-ups." },
      { time: "04:00 PM", activity: "Primary Skill Coaching", description: "Dance steps, martial arts forms, or canvas painting." },
      { time: "04:50 PM", activity: "Creative Challenge & Team Showcase", description: "Sharing achievements with peers and instructor feedback." },
      { time: "05:25 PM", activity: "Cool Down & Achievement Badges", description: "Breathwork and stamp of accomplishment." }
    ],
    termFee: 12000,
    featured: false,
    color: "rose",
    bgLight: "bg-rose-50"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "f1",
    name: "Interactive Smart Classrooms",
    category: "learning",
    description: "State-of-the-art interactive digital touchboards, ergonomic modular seating, and bright, sunlit rooms tailored to early age ergonomics.",
    highlights: ["Interactive touch learning", "Rounded safety furniture", "Natural lighting & HEPA air filtration"],
    features: ["Pre-loaded kindergarten multimedia library", "Adjustable height tables", "Non-toxic acoustic wall paneling"],
    safetyStandard: "BIS safety certified non-toxic coatings, zero sharp edges"
  },
  {
    id: "f2",
    name: "Splash Pool & Water Play Zone",
    category: "recreation",
    description: "Shallow, chlorinated, and temperature-controlled splash pool designed specifically for safe sensory water play and early water confidence.",
    highlights: ["Max 12-inch depth for safety", "Dedicated lifeguard & attendants", "Anti-skid textured deck"],
    features: ["Mini water fountains", "Water wheel and float sensory toys", "Attached warm shower and drying rooms"],
    safetyStandard: "Daily bacterial culture testing, 1:4 instructor supervision during water sessions"
  },
  {
    id: "f3",
    name: "Soft Ball Pool & Sensory Maze",
    category: "recreation",
    description: "Vibrant indoor play area featuring over 25,000 sanitized antimicrobial balls, foam climbing ramps, slide chutes, and crawl tunnels.",
    highlights: ["Gross motor development", "Antimicrobial sanitized balls", "High-density impact foam flooring"],
    features: ["Color-recognition sorting games", "Gentle spiral slide", "Suspended soft boxing bags"],
    safetyStandard: "UV-C sterilization after every class session"
  },
  {
    id: "f4",
    name: "Organic Sandpit & Botanical Garden",
    category: "learning",
    description: "Washed quartz river sandpit where children build castles, excavate fossils, and plant seeds in our toddler vegetable patch.",
    highlights: ["Direct tactile earth connection", "Germ-free river sand", "Hands-on botanical potting"],
    features: ["Child-sized spades, sieves, and molds", "Mini greenhouse with cherry tomatoes and mint", "Shaded canopy coverage"],
    safetyStandard: "Covered when not in use; sand replaced every quarter"
  },
  {
    id: "f5",
    name: "Hygienic Dining & Nutrition Kitchen",
    category: "wellness",
    description: "In-house culinary facility preparing freshly cooked vegetarian snacks, soups, whole grains, and seasonal fruit purees under pediatric nutritionist supervision.",
    highlights: ["100% vegetarian & organic produce", "Zero preservatives or artificial sugar", "Individual allergy compliance"],
    features: ["Filtered RO water dispenser points", "Stainless steel sterilization autoclaves", "Toddler-sized cutlery"],
    safetyStandard: "FSSAI certified commercial kitchen with daily sample retention"
  },
  {
    id: "f6",
    name: "Safe GPS-Enabled AC Fleet",
    category: "safety",
    description: "Air-conditioned school vans covering North & West Delhi routes, equipped with live GPS tracking, speed governors, and female attendant on every route.",
    highlights: ["Live GPS tracking in Parent Portal", "Female attendant on every bus", "Speed restricted to 40 km/h"],
    features: ["Toddler safety seatbelts", "Onboard first aid kits and fire extinguishers", "Driver police verification check"],
    safetyStandard: "Delhi Transport Department compliance with CCTV onboard"
  },
  {
    id: "f7",
    name: "Comprehensive CCTV & Security",
    category: "safety",
    description: "High-definition CCTV coverage across all classrooms, play areas, corridors, and campus perimeters with 24/7 security guard protocols.",
    highlights: ["Zero blind-spot campus", "Restricted biometric access gates", "Visitor ID card verification"],
    features: ["Secured reception holding lobby", "Fire safety hydrants and drills", "Emergency panic button system"],
    safetyStandard: "Security team background checked and CPR-certified"
  },
  {
    id: "f8",
    name: "Pediatric Infirmary & Wellness Bay",
    category: "wellness",
    description: "Equipped first-aid clinic with a certified pediatric nurse on-duty throughout school hours, with tie-ups to nearby multi-specialty hospitals.",
    highlights: ["On-duty pediatric nurse", "Emergency medical protocol", "Annual health & dental checkups"],
    features: ["Child observation bed", "Pulse oximeters, nebulizers, digital thermometers", "Detailed medical record logs"],
    safetyStandard: "Monthly pediatric audit by Max Healthcare consultant"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    parentName: "Dr. Ananya Sharma",
    childName: "Aarav",
    program: "Kindergarten Graduate (Class of 2025)",
    quote: "MountainHeights provided the warmest, most stimulating start for Aarav. When he transitioned to primary school, his interviewers were stunned by his vocabulary, confidence, and reading abilities. The teachers genuinely care for each child like family.",
    rating: 5,
    academicYear: "2024-2025"
  },
  {
    id: "t2",
    parentName: "Vikram & Neha Mehra",
    childName: "Saanvi",
    program: "Nursery & Daycare",
    quote: "As dual-career corporate parents, finding a safe daycare was our biggest worry. MountainHeights is a godsend. The nutritious food, transparent CCTV policies, and spotless hygiene gave us complete peace of mind. Saanvi loves going every morning!",
    rating: 5,
    academicYear: "2025-2026"
  },
  {
    id: "t3",
    parentName: "Pooja Malhotra",
    childName: "Vivaan",
    program: "Playgroup",
    quote: "Vivaan was extremely shy and had separation anxiety. The 10:1 teacher ratio made all the difference. Within two weeks, his teachers patiently guided him to love circle time and the ball pool. He now sings rhymes with joy at home!",
    rating: 5,
    academicYear: "2025-2026"
  },
  {
    id: "t4",
    parentName: "Rajesh Singhania",
    childName: "Kavya",
    program: "Mother-Toddler & Playgroup",
    quote: "We started with the Mother-Toddler sessions on weekends. The parenting guidance, child psychology tips, and sensory play methods completely changed how we interact with our daughter. MountainHeights is without question the best preschool in the region.",
    rating: 5,
    academicYear: "2024-2025"
  }
];

export const NOTICES: Notice[] = [
  {
    id: "n1",
    title: "Admissions Open for Academic Session 2026-2027",
    date: "October 18, 2026",
    category: "Admission",
    summary: "Registrations are now open for Playgroup, Nursery, LKG, UKG, and Daycare. Limited seats available per batch.",
    details: "Parents are invited to register online or visit our Shalimar campus between 9:00 AM and 4:00 PM on working days. Please carry your child's birth certificate, 2 photographs, and parents' address ID. Early registration discounts apply until December 15.",
    isImportant: true,
    downloadName: "Admissions_Brochure_2026-27.pdf"
  },
  {
    id: "n2",
    title: "Annual Sports Carnival: Little Champions Day",
    date: "November 14, 2026",
    category: "Event",
    summary: "Join us for an exciting morning of fun obstacle races, parachute play, and father-child relay events.",
    details: "The annual sports day will be held at our campus sports ground. Parents are requested to dress children in comfortable sports attire and running shoes. Refreshments and certificates will be distributed to all young participants.",
    isImportant: false,
    downloadName: "Sports_Day_Schedule.pdf"
  },
  {
    id: "n3",
    title: "Parent-Teacher Interactive Symposium (PTM - Term 1)",
    date: "November 28, 2026",
    category: "Academic",
    summary: "One-on-one portfolio review, developmental milestone tracking, and educator feedback session.",
    details: "Time slots will be allotted individually to parents to ensure dedicated 15-minute consultations with class teachers and activity coaches. Digital progress report cards will be distributed.",
    isImportant: true
  },
  {
    id: "n4",
    title: "Winter Break & Camp Announcement",
    date: "December 24, 2026",
    category: "Holiday",
    summary: "School winter vacation commences from Dec 28 to Jan 5. Winter Activity Camp will run for daycare attendees.",
    details: "Regular classes will pause for winter break. Our Winter Wonder Camp (Storytelling, Pottery, Puppet Shows) will run for registered daycare children from 10:00 AM to 2:00 PM.",
    isImportant: false
  },
  {
    id: "n5",
    title: "Pediatric Dental & Eye Wellness Screening Camp",
    date: "October 30, 2026",
    category: "Circular",
    summary: "Annual preventive healthcare screening conducted by senior pediatric specialists.",
    details: "Every student will undergo gentle preventive dental examination and vision checks. Individual health report cards will be shared with parents via the parent portal.",
    isImportant: false
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    category: "Admissions",
    question: "What is the minimum age criteria for admission?",
    answer: "Admissions begin at 6 months for the Mother-Toddler program, 1.5 years for Playgroup, 2.5 years for Nursery, and 3.5 to 4.5 years for Kindergarten (LKG/UKG). We maintain strict age-appropriate batching to ensure peer harmony."
  },
  {
    id: "faq2",
    category: "Admissions",
    question: "What documents are required during admission registration?",
    answer: "You will need: (1) An official copy of the child's municipal birth certificate, (2) Two recent passport-size photographs of the child, (3) One passport photograph each of mother and father, (4) Photocopy of address proof (Aadhar/Voter ID/Passport), and (5) Child's immunization/vaccination card."
  },
  {
    id: "faq3",
    category: "Admissions",
    question: "Are admissions open year-round?",
    answer: "Yes, subject to seat availability, admissions remain open year-round for Playgroup and Daycare programs with prorated fees. Nursery and Kindergarten admissions typically finalize before the start of the academic term."
  },
  {
    id: "faq4",
    category: "Curriculum & Activities",
    question: "What is MountainHeights' teaching methodology?",
    answer: "We blend Montessori self-directed sensorial principles with the British Early Years Foundation Stage (EYFS) and play-way techniques. Children learn reading through synthetic Jolly Phonics, mathematics through tangible counters, and science through hands-on experiments."
  },
  {
    id: "faq5",
    category: "Curriculum & Activities",
    question: "Do you give homework to preschool children?",
    answer: "We strictly believe in 'No Heavy Homework' policy for early childhood. Instead, we provide enjoyable optional 'Home Discovery Kits' such as weekend leaf collecting, counting spoons, or reading a bedtime story with parents."
  },
  {
    id: "faq6",
    category: "Safety & Transport",
    question: "How do you ensure child safety and security?",
    answer: "Our campus operates under 100% CCTV surveillance, guarded biometric entry gates, police-verified staff, and female security attendants. Visitors cannot enter without advance appointment and ID verification. Emergency panic buttons and fire safety measures are tested monthly."
  },
  {
    id: "faq7",
    category: "Safety & Transport",
    question: "Is transport facility available, and which areas are covered?",
    answer: "Yes, we operate an air-conditioned fleet with speed governors, GPS tracking, and female attendants. Routes cover Shalimar Bagh, Pitampura, Rohini, Ashok Vihar, Model Town, Punjabi Bagh, and neighboring North Delhi sectors."
  },
  {
    id: "faq8",
    category: "Daycare & Meals",
    question: "What kind of meals are served in the school?",
    answer: "Our certified in-house kitchen prepares 100% fresh, hygienic vegetarian meals designed by a pediatric nutritionist. Menu rotations include vegetable khichdi, whole wheat parathas, idli-sambar, seasonal vegetable soups, and fruit bowls. Junk food and artificial preservatives are strictly prohibited."
  },
  {
    id: "faq9",
    category: "Daycare & Meals",
    question: "Does my child need to be fully potty-trained before joining?",
    answer: "No, potty training is not mandatory for Playgroup or Mother-Toddler. Our trained female attendants gently support children through bathroom routines and assist with potty training in close partnership with parents."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Annual Grand Cultural Fest",
    category: "events",
    date: "Annual Celebration",
    description: "Children showcasing colorful dance choreography, theatrical skits, and musical recitals on stage.",
    gradient: "from-amber-500 to-rose-500",
    iconName: "Sparkles"
  },
  {
    id: "g2",
    title: "Little Explorers Splash Day",
    category: "activities",
    date: "Summer Event",
    description: "Fun water play, duck racing, and sensory water wheels in our clean shallow splash pool.",
    gradient: "from-sky-500 to-blue-600",
    iconName: "Droplets"
  },
  {
    id: "g3",
    title: "Montessori Math & Phonics Lab",
    category: "learning",
    date: "Classroom Discovery",
    description: "Young learners engaging with sensorial wooden apparatus, sandpaper letters, and counting rods.",
    gradient: "from-emerald-500 to-teal-600",
    iconName: "BookOpen"
  },
  {
    id: "g4",
    title: "Organic Gardening & Sandpit Day",
    category: "activities",
    date: "Nature Workshop",
    description: "Hands-on planting, seed germination observation, and creative castle sculpting in clean river sand.",
    gradient: "from-amber-600 to-yellow-500",
    iconName: "Sun"
  },
  {
    id: "g5",
    title: "Grandparents Day Joy & Blessings",
    category: "events",
    date: "Family Celebration",
    description: "Honoring beloved grandparents with handwritten cards, vintage games, and warm family storytelling.",
    gradient: "from-pink-500 to-purple-600",
    iconName: "Heart"
  },
  {
    id: "g6",
    title: "Smart Classroom Digital Discovery",
    category: "learning",
    date: "Tech Immersion",
    description: "Interactive visual storytelling and animal habitat exploration on touch-enabled e-boards.",
    gradient: "from-indigo-500 to-violet-600",
    iconName: "Monitor"
  },
  {
    id: "g7",
    title: "Little Olympians Athletic Challenge",
    category: "events",
    date: "Sports Day",
    description: "Obstacle crawling, soft hurdles, balance beam navigation, and cheering parent relays.",
    gradient: "from-orange-500 to-red-600",
    iconName: "Trophy"
  },
  {
    id: "g8",
    title: "Ball Pool Agility & Soft Play",
    category: "activities",
    date: "Indoor Recreation",
    description: "Diving into 25,000 sanitized balls, soft foam wedges, and social laughter.",
    gradient: "from-purple-500 to-indigo-600",
    iconName: "Smile"
  }
];

export const FEE_TIERS = [
  {
    grade: "Mother-Toddler",
    registrationFee: 2500,
    termFee: 14500,
    annualComposite: 58000,
    kitCharges: 3500,
    daycareAddon: 0
  },
  {
    grade: "Playgroup",
    registrationFee: 3000,
    termFee: 16500,
    annualComposite: 66000,
    kitCharges: 4500,
    daycareAddon: 28000
  },
  {
    grade: "Nursery",
    registrationFee: 3500,
    termFee: 18000,
    annualComposite: 72000,
    kitCharges: 5000,
    daycareAddon: 28000
  },
  {
    grade: "Kindergarten (LKG/UKG)",
    registrationFee: 3500,
    termFee: 21000,
    annualComposite: 84000,
    kitCharges: 5500,
    daycareAddon: 26000
  }
];
