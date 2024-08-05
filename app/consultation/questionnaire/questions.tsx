const personalDetails: {
  title: string;
  type: "text" | "checkbox" | "radio" | "textbox" | "email";
  options?: string[];
  required?: false;
}[] = [
  { title: "Surname name", type: "text" },
  { title: "Other names", type: "text" },
  { title: "Phone number", type: "text" },
  { title: "Email address", type: "email" },
  { title: "Preferred form(s) of contact", type: "checkbox", options: ['Call','Text','Email']},
  { title: "Preferred day(s) to contact you", type: "checkbox", options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']},
  { title: "Suitable time to call", type: "radio", options: ['Mornings (9am - 12pm)', 'Afternoons (12pm - 4pm)', 'Evenings (4pm - 6pm)']},
  { title: "How did you find us?", type: "checkbox", options: ['Word of mouth', 'Social media', 'Google search', 'Other']},
  { title: "Who will make the final decision in this project?", type: "radio", options: ['Myself', 'Someone else', 'Myself and others']},
];

const projectDetails: {
  title: string;
  type: "text" | "checkbox" | "radio" | "textbox" | "email";
  options?: string[];
  required?: false;
}[] = [
  { title: "Where is/will be your project address?", type: "text" },
  { title: "State", type: "text" },
];

export { personalDetails, projectDetails };
