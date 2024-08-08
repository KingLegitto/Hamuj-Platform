const personalDetails: {
  title: string;
  type: "text" | "checkbox" | "radio" | "textbox" | "email";
  options?: string[];
  required?: false;
  followUpTriggers?: number[];
  followUpTo?: string;
  hidden?: boolean;
}[] = [
  { title: "Your lastname", type: "text" },
  { title: "Other names", type: "text" },
  { title: "Phone number", type: "text" },
  { title: "Email address", type: "email" },
  { title: "Preferred form(s) of contact", type: "checkbox", options: ['Call','Text','Email']},
  { title: "Preferred day(s) to contact you", type: "checkbox", options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']},
  { title: "Suitable time to call", type: "radio", options: ['Mornings (9am - 12pm)', 'Afternoons (12pm - 4pm)', 'Evenings (4pm - 6pm)']},
  { title: "How did you find us?", type: "radio", options: ['Word of mouth', 'Social media', 'Google search', 'Other'], followUpTriggers: [3]},
  { followUpTo: "How did you find us?", hidden: true, title: 'Please specify', type: "text"},
  { title: "Who will make the final decision in this project?", type: "radio", options: ['Myself', 'Someone else', 'Myself and others'], followUpTriggers: [1,2]},
  { followUpTo: "Who will make the final decision in this project?", hidden: true, title: "Please state name of additional person(s)", type: "text" },
  { followUpTo: "Who will make the final decision in this project?", hidden: true, title: "Phone number of additional person(s)", type: "text" },
  { followUpTo: "Who will make the final decision in this project?", hidden: true, title: "Email of additional person(s)", type: "email" },
];

const projectDetails: {
    title: string;
    type: "text" | "checkbox" | "radio" | "textbox" | "email";
    options?: string[];
    required?: false;
    followUpTriggers?: number[];
    followUpTo?: string;
    hidden?: boolean;
}[] = [
    { title: "Project address", type: "text" },
    { title: "Project type", type: "radio", options: ['Residential', 'Commercial', 'Hospitality', 'Other'], followUpTriggers: [3] },
    { followUpTo: "Project type", hidden: true, title: "Please specify", type: "text" },
    { title: "Construction type", type: "radio", options: ['Redecoration', 'Partial renovation (update/upgrade)', 'Full renovation/remodel', 'New biuld', 'Other'], followUpTriggers: [4] },
    { followUpTo: "Construction type", hidden: true, title: "Please specify", type: "text" },
    { title: "Do you own the apartment/space", type: "radio", options: ['No', 'Yes'] },
    { title: "Please select room(s)/areas included in project", type: "checkbox", options: ['Office', 'Store front', 'Restaurant/Bar', 'Salon', 'Hotel room(s)', 'Lobby', 'Kitchen', 'Pantry', 'Dining', 'Living room', 'Laundry room', 'Master suite', 'Master bathroom', 'Guest bedroom(s)',  'Guest bathroom(s)', 'Home Office', 'Home gym', 'Nursery', 'Kids bedroom', 'Playroom', 'Game room', 'Garage', 'Front yard', 'Back yard', 'Other'], followUpTriggers: [24]},
    { followUpTo: "Please select room(s)/areas included in project", hidden: true, title: "Please specify", type: "text" },
    { title: "What do you like about the room(s) current designs and space", type: "textbox" },
    { title: "What do you dislike about their current designs and space", type: "textbox" },
    { title: "Are there any furnishings, decor, art or sentimental items you want to incorporate in the new design/space?", type: "textbox" },
    { title: "What styles would you like for this project?", type: "checkbox", options: ['Industrial', 'Minimalist', 'Contempory', 'Traditional', 'Transitional', 'Classic', 'Other'], followUpTriggers: [6] },
    { followUpTo: "What styles would you like for this project?", hidden: true, title: "Please specify", type: "text" },
    { title: "Do you entertain often?", type: "radio", options: ['No', 'Yes'], followUpTriggers: [1] },
    { followUpTo: "Do you entertain often?", hidden: true, title: "How often?", type: "radio", options: ['Once a month', 'Twice a month', 'Every weekend', 'Once in three(3) months', 'Holidays', 'Special occasions'] },
    { title: "What are your hobbies?", type: "checkbox", options: ['Travelling', 'Cooking', 'Reading', 'Painting', 'Working out', 'Watching TV', 'Hiking', 'Other']},
    { title: "What type(s) of artworks do you prefer?", type: "checkbox", options: ['Paintings', 'Framed prints', 'Abstracts', '3D abstracts', 'Landscape', 'Nature', 'Photographs', 'Architecture', 'Other']},
    { title: "What type of colors or color combinations make you happy?", type: "text" },
    { title: "Which among these patterns do you prefer?", type: "checkbox", options: ['Stripes', 'ZigZags', 'Polka dots', 'Abstract', 'Bold repeating patterns', 'Solid', 'Other'], followUpTriggers: [6]},
    { followUpTo: "Which among these patterns do you prefer?", hidden: true, title: "Please specify", type: "text" },
    { title: "Anything else you would like us to know?", type: "textbox" },

];

export { personalDetails, projectDetails };
