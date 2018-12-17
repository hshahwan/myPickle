// this file sets up all the questions and also the support types (e.g. Therapist) that each one needs to link to

// load the mongo model
const ProfileQuestion = require("./models/ProfileQuestion")
const SupportType = require("./models/SupportType")

const dbConnection = require("./db_connection")

dbConnection()

const buildProfileQuestions = async () => {
  // clear profile model
  await ProfileQuestion.deleteMany({})
  await SupportType.deleteMany({})

  // insert types of support
  await SupportType.insertMany([
    {
      type: "Therapist",
    },
    {
      type: "General",
    },
  ])

  const therapistType = await SupportType.findOne({
    type: "Therapist",
  })

  const generalType = await SupportType.findOne({
    type: "General",
  })

  // insert all the questions!
  await ProfileQuestion.insertMany([
    {
      supportType: generalType._id,
      questionText: "Please select your area(s) of wellness",
      inputType: "checkbox",
      helperText: "You can select as many as you like",
      options: [
        "Emotional",
        "Social",
        "Physical",
        "Financial",
        "Spiritual",
        "Intellectual",
        "Environmental",
        "Occupational",
      ],
      isRequired: true,
      section: "Support Details",
    },
    {
      supportType: generalType._id,
      questionText: "Registered organisation name",
      inputType: "text",
      isRequired: true,
      section: "Admin Info",
    },
    {
      supportType: generalType._id,
      questionText: "Registered address",
      inputType: "address",
      isRequired: true,
      section: "Admin Info",
    },
    {
      supportType: generalType._id,
      questionText:
        "Please list all relevant regulation, registration and membership bodies and numbers",
      inputType: "textarea",
      section: "Admin Info",
    },
    {
      supportType: generalType._id,
      questionText: "What best describes your core service offering?",
      helperText: "Check all that apply to your core offering",
      options: [
        "Qualified therapy or counselling service",
        "Practical support",
        "Financial support",
        "Legal support",
        "Information and education",
        "Guidance and advice",
        "Self-help",
        "Other emotional support",
        "Product",
        "Activities",
        "Other",
      ],
      inputType: "radio",
      isRequired: true,
      section: "Basic Info",
    },
    {
      supportType: generalType._id,
      questionText: "Known organisation name",
      helperText: "How is your organisation generally referred?",
      inputType: "text",
      isRequired: true,
      section: "Basic Info",
    },
    {
      supportType: generalType._id,
      questionText: "Organisation Type",
      options: [
        "Public sector",
        "private sector (for profit)",
        "private sector (not for profit)",
        "charity",
        "other",
      ],
      inputType: "radio",
      section: "Basic Info",
    },
    {
      supportType: generalType._id,
      questionText: "Organisation URL",
      helperText: "Please include full URL (i.e. including https://)",
      inputType: "url",
      section: "Basic Info",
    },
    {
      supportType: generalType._id,
      questionText: "Organisation photo or logo",
      helperText: "Please no larger than 1mb and ideally square",
      inputType: "file-upload",
      section: "Basic Info",
    },
    {
      supportType: generalType._id,
      questionText: "Please provide a brief description of the organisation",
      helperText:
        "Keep it fact based and just describe what the organisation is, why it exists and what it does",
      inputType: "textarea",
      isRequired: true,
      section: "Basic Info",
    },
    // END OF THE INITIAL REGISTRATION PROCESS
    // START OF SOCIAL SECTION
    {
      supportType: generalType._id,
      questionText: "Facebook",
      inputType: "url",
      section: "Social Media",
    },
    {
      supportType: generalType._id,
      questionText: "Twitter",
      inputType: "url",
      section: "Social Media",
    },
    {
      supportType: generalType._id,
      questionText: "Instagram",
      inputType: "url",
      section: "Social Media",
    },
    {
      supportType: generalType._id,
      questionText: "LinkedIn",
      inputType: "url",
      section: "Social Media",
    },
    // END OF SOCIAL SECTION
    // START OF SUPPORT DETAILS
    {
      supportType: generalType._id,
      questionText: "Service strapline",
      helperText: "3-5 words describing your service. This will be shown in the results page.",
      inputType: "text",
      section: "Support Details",
    },
    {
      supportType: generalType._id,
      questionText: "What areas does your support relate to (max 5)?",
      inputType: "checkbox",
      options: [
        "Emergency help & support",
        "Children & Families",
        "Pregnancy & post-birth",
        "Divorce & separation",
        "Infertility",
        "Loss & bereavement",
        "Crime & abuse",
        "Isolation & loneliness",
        "Health & disability",
        "Communication",
        "Community integration",
        "Confidence",
        "Life challenges",
        "Feelings & behaviours",
        "Personal identity",
        "Body & image",
        "Caring for others",
        "Personal development",
        "Benefits",
        "Rights & representation",
        "Discrimination & harrassment",
        "Immigration & asylum",
        "Homelessness",
        "Food & nutrition",
        "Housing & energy",
        "Addiction(s)",
        "Debt & poverty",
        "Living healthily",
        "Transport & mobility",
        "Education & Employability",
        "Phobias",
        "Sleeping issues",
        "Traumatic events",
      ],
      section: "Support Details",
    },
    {
      supportType: generalType._id,
      questionText: "Who is this service for?",
      helperText:
        "This is public information on who your service is designed for. Please summarise or include 'Everyone'. You will still be able to specify your target audience critera to help people fitting those categories be directed to your listing.",
      inputType: "textarea",
      section: "Support Details",
    },
    {
      supportType: generalType._id,
      questionText: "Delivery method(s)",
      options: [
        "Face to face & local",
        "Online e.g web chat",
        "Home visit",
        "Helpline",
        "App",
        "Other",
      ],
      inputType: "checkbox",
      section: "Support Details",
    },
    {
      supportType: generalType._id,
      questionText: "Service requirement /restriction",
      options: ["None", "Referral only", "Other"],
      inputType: "radio",
      section: "Support Details",
    },
    {
      supportType: generalType._id,
      questionText: "Service photo or image",
      inputType: "file-upload",
      section: "Support Details",
    },
    {
      supportType: generalType._id,
      questionText: "Service verification",
      helperText:
        "If your service is recommended by a public or chairty body, please include the URL of your listing on their webpage.",
      inputType: "textarea",
      section: "Support Details",
    },
    // END OF SUPPORT DETAILS SECTION
    // START OF AVAILABILITY AND BOOKING SECTION
    {
      supportType: generalType._id,
      questionText: "Where does this service operate?",
      options: ["Local", "National", "Online"],
      inputType: "checkbox",
      section: "Availability & Booking",
    },
    {
      supportType: generalType._id,
      questionText: "Free or paid?",
      options: ["Free", "Paid", "Mix of free and paid"],
      inputType: "radio",
      section: "Availability & Booking",
    },
    {
      supportType: generalType._id,
      questionText: "When is this service available?",
      helperText:
        "Please tick all that apply across the week and morning, afternoon, evening, overnight.",
      options: {
        columns: ["Morning", "Afternoon", "Evening", "Overnight"],
        rows: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      },
      inputType: "matrix",
      section: "Availability & Booking",
    },
    {
      supportType: generalType._id,
      questionText: "Expiry",
      helperText: "If there's a date when this service will expire, please select the date below",
      inputType: "calendar",
      section: "Availability & Booking",
    },
    {
      supportType: generalType._id,
      questionText: "Language availability",
      options: [
        "Arabic",
        "Bengali",
        "British sign language",
        "Chinese languages",
        "English",
        "French",
        "German",
        "Gujarati",
        "Italian",
        "Korean",
        "Lithuanian",
        "Malay",
        "Pakistani Pahari",
        "Persian",
        "Philippine languages",
        "Polish",
        "Portuguese",
        "Punjabi",
        "Romanian",
        "Russian",
        "Somali",
        "Spanish",
        "Tamil",
        "Turkish",
        "Urdu",
        "Other",
      ],
      inputType: "dropdown",
      section: "Availability & Booking",
    },
    {
      supportType: generalType._id,
      questionText: "How to book / access",
      helperText: "Describe how people can book or access this service",
      inputType: "textarea",
      section: "Availability & Booking",
    },
    // END OF AVAILABILITY & BOOKING
    // START OF TARGET CLIENTS
    {
      supportType: generalType._id,
      questionText: "Which services does your support apply to?",
      options: ["All", "More data to go here"],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Who can make use of this support?",
      options: ["All - no preference", "Individuals", "Groups", "Couples"],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Age",
      options: [
        "All – no preference",
        "0-5",
        "6-10 ",
        "11-13",
        "14-19",
        "20-29",
        "30-29",
        "40-49",
        "50-59",
        "60-69",
        "70-79",
        "80+",
      ],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Gender",
      options: ["All – no preference", "Female", "Male", "Non-binary"],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Sexual Orientation",
      options: ["All – no preference", "Asexual", "Bisexual", "Heterosexual", "Homosexual"],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Ethnicity",
      options: [
        "All – no preference",
        "White British",
        "White Irish",
        "White Gypsy or Irish Traveller",
        "White and Black Caribbean",
        "White and Black African",
        "White and Asian",
        "Indian",
        "Pakistani",
        "Bangladeshi",
        "Chinese",
        "African",
        "Caribbean",
        "Arab",
        "Other",
      ],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Religion",
      options: [
        "All – no preference",
        "Non-religious",
        "Christian",
        "Buddhist",
        "Hindu",
        "Jewish",
        "Muslim",
        "Sikh",
        "Other",
      ],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Disability",
      options: [
        "All – no preference",
        "None",
        "Cognitive e.g. autism, dementia",
        "Developmental e.g. downs syndrome, cerebral palsy",
        "Physical or sensory e.g. mobility, visual or hearing impairment",
      ],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Employment status",
      options: [
        "All – no preference",
        "Employed",
        "Unemployed (seeking work)",
        "Unemployed (not seeking work)",
        "Self-employed",
        "Student",
        "Retired",
      ],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Occupation Area",
      options: [
        "All – no preference",
        "Armed forces",
        "Business, consulting and management",
        "Charity and voluntary work",
        "Creative arts and design",
        "Education and teacher training",
        "Energy and utilities",
        "Engineering and manufacturing",
        "Environment and agriculture",
        "Financial and insurance services",
        "Healthcare",
        "Hospitality and events management",
        "Information technology",
        "Law",
        "Law enforcement and security",
        "Leisure, sport and tourism",
        "Marketing, advertising and PR",
        "Media and internet",
        "Performing arts",
        "Property and construction",
        "Public services and administration",
        "Recruitment and HR",
        "Religious services",
        "Retail",
        "Sales",
        "Science and pharmaceuticals",
        "Social care",
        "Student",
        "Transport and logistics",
      ],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Family status",
      options: [
        "All - no preference",
        "Family with children",
        "Family without children",
        "Step family",
        "Single parent family",
        "Grandparent family",
        "No family of my own",
        "I have been adopted or fostered",
        "I am adopting or fostering",
      ],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Relationship status",
      options: [
        "All – no preference",
        "Married",
        "Single",
        "In a relationship",
        "Separated",
        "Divorced",
        "Widowed",
      ],
      inputType: "checkbox",
      section: "Target Clients",
    },
    {
      supportType: generalType._id,
      questionText: "Health conditions",
      options: [
        "All - no preference",
        "Mental health problem(s)",
        "Cancer",
        "Chronic pain",
        "Arthritis",
        "Alzheimers",
        "Dementia",
        "Epilepsy",
        "Parkinsons",
        "Terminal diagnosis",
        "Other",
      ],
      inputType: "checkbox",
      section: "Target Clients",
    },
    // END OF TARGET CLIENT SECTION
    // START OF QUESTIONS SPECIFICALLY FOR THERAPISTS
    // START OF SUPPORT DETAILS
    {
      supportType: therapistType._id,
      questionText: "About me",
      helperText:
        "Briefly explain who you are. Later you will be asked for your key clientele are and areas of specialty",
      inputType: "textarea",
      section: "Support Details",
    },
    {
      supportType: therapistType._id,
      questionText: "Years in practice",
      inputType: "text",
      section: "Support Details",
    },
    {
      supportType: therapistType._id,
      questionText: "Membership(s)",
      helperText:
        "Please list any membership bodys and numbers (please include one membership per line)",
      inputType: "textarea",
      section: "Support Details",
    },
    {
      supportType: therapistType._id,
      questionText: "Training",
      helperText:
        "Please list any qualification details (please include one qualification per line)",
      inputType: "textarea",
      section: "Support Details",
    },
    {
      supportType: therapistType._id,
      questionText: "Type(s) of therapy",
      helperText: "Max 5. Please select most relevant",
      options: [
        "Acceptance and Commitment Therapy (ACT)",
        "Adlerian",
        "AEDP",
        "Acupressure",
        "Acupuncture",
        "Alexander Technique teaching",
        "Applied Behavioural Analysis",
        "Aromatherapy",
        "Art therapy",
        "Attachment-based",
        "Behavioural therapy",
        "Biofeedback",
        "Biodynamic massage therapy",
        "Body psychotherapy",
        "Bowen therapy",
        "Brainspotting",
        "Child psychotherapy",
        "Christian Counselling",
        "Coaching",
        "Compassion Focused",
        "Cognitive analytical therapy",
        "Cognitive behaviour therapy",
        "Colon hydrotherapy",
        "Craniosacral therapy",
        "Culturally Sensitive",
        "Dialectical (DBT)",
        "Drama therapy",
        "Eclectic",
        "EFT",
        "EMDR",
        "Emotionally Focused",
        "Equine-assisted therapy",
        "Existential",
        "Experiential Therapy",
        "Expressive Arts",
        "Family/marriage /systemic",
        "Feminist therapy",
        "Forensic psychology",
        "Gestalt",
        "Gottman Method",
        "Healing",
        "Human Givens",
        "Humanistic psychology",
        "Hypnotherapy",
        "Imago",
        "Integrative",
        "Interpersonal",
        "Intervention",
        "Internal Family Systems (IFS)",
        "Jungian",
        "Massage therapy",
        "Microsystems acupuncture",
        "Mindfulness",
        "Motivational interviewing",
        "Multicultural",
        "Music therapy",
        "Narrative",
        "Naturopathy",
        "Neuro-Linguistic",
        "Neurofeedback",
        "Nutritional therapy",
        "Parent-Child Interaction Therapy (PCIT)",
        "Person-centred/humanistic",
        "Play therapy",
        "Positive psychology",
        "Prolonged Exposure Therapy",
        "Psychiatry",
        "Psychoanalytic",
        "Psychobiological Approach Couple Therapy (PACT)",
        "Psychodynamic",
        "Psychological Testing and Evaluation",
        "Psychosynthesis",
        "Rational Emotive Behaviour Therapy (REBT)",
        "Reality Therapy",
        "Reflexology",
        "Reiki",
        "Relational",
        "Sand Play",
        "Sex therapy",
        "Shiatsu",
        "Solution-focused therapy",
        "Sports therapy",
        "Transactional analysis",
        "Transpersonal",
        "Yoga therapy",
        "Other",
      ],
      inputType: "checkbox",
      section: "Support Details",
    },
    {
      supportType: therapistType._id,
      questionText: "Area of speciality",
      helperText:
        "Please briefly describe your specialty area e.g. key characteristics of your clientele. This will be  visible on your profile",
      inputType: "textarea",
      section: "Support Details",
    },
    {
      supportType: therapistType._id,
      questionText: "Mental health diagnosis",
      helperText: "Max 5. Please select most relevant.",
      options: [
        "All – no preference",
        "Anger",
        "Anxiety and panic attacks",
        "Bipolar disorder",
        "Body dysmorphic disorder (BDD)",
        "Borderline personality disorder (BPD)",
        "Depression",
        "Dissociative disorders",
        "Drugs - recreational drugs & alcohol",
        "Eating problems",
        "Hearing voices",
        "Hoarding",
        "Hypomania and mania",
        "Obsessive-compulsive disorder (OCD)",
        "Panic attacks",
        "Paranoia",
        "Personality disorder",
        "Phobias",
        "Postnatal depression & perinatal mental health",
        "Post-traumatic stress disorder (PTSD)",
        "Premenstrual dysphoric disorder (PMDD)",
        "Psychosis",
        "Schizoaffective disorder",
        "Schizophrenia",
        "Seasonal affective disorder (SAD)",
        "Self-harm",
        "Sleep problems",
        "Stress",
        "Suicidal feelings",
        "Tardive dyskinesia",
        "Other",
      ],
      inputType: "checkbox",
      section: "Support Details",
    },
    // END OF SUPPORT DETAILS SECTION
    // START OF AVAILABILITY & BOOKING SECTION
    {
      supportType: therapistType._id,
      questionText: "Cost per session (per hour approx)",
      options: [
        "Free",
        "£1-19",
        "£20-39",
        "£40-59",
        "£60-79",
        "£80-99",
        "£100-124",
        "£125-149",
        "Over £150",
      ],
      inputType: "checkbox",
      section: "Availability & Booking",
    },
    {
      supportType: therapistType._id,
      questionText: "Accepted insurance plans",
      options: [
        "None",
        "AXA-PPP",
        "Aviva",
        "Bupa",
        "CS Healthcare",
        "Cigna",
        "Freedom Healthnet",
        "General & Medical",
        "Health Assured",
        "Health-on-Line Company (UK) Ltd",
        "National Assurance",
        "Saga",
        "The Exeter",
        "Vitality",
        "WPA",
        "Other",
      ],
      inputType: "checkbox",
      section: "Availability & Booking",
    },
    {
      supportType: therapistType._id,
      questionText: "Average wait time",
      options: [
        "Immediate or same day",
        "1-3 days",
        "4-7 days",
        "1-2 weeks",
        "3-5 weeks",
        "6 weeks or over",
      ],
      inputType: "radio",
      section: "Availability & Booking",
    },
  ])
}

buildProfileQuestions().catch(err => console.log(err))

module.exports = buildProfileQuestions