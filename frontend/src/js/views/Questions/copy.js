export const homeless = {
  title: 'Are you homeless?',
  intro: 'You are considered homeless if it is not ok or safe for you to stay where you are for the next 28 days and you have nowhere else to go. For example, it would not be ok to expect you to stay where you are if you are squatting, sleeping on the streets, sleeping on someone\'s sofa, living in an unsafe or overcrowded place, or with people who are unsafe, violent, who expect unfair things of you or who make you uncomfortable.',
  link: 'How can you show that you have nowhere safe to stay.',
  questions: [
    { text: 'Did you have somewhere safe and ok to stay last night?', notesOn: 0 },
    { text: 'Do you have anywhere safe and ok to sleep tonight?', notesOn: 0 },
    { text: 'Will you have somewhere safe and ok to stay in 28 days time - for example you have been served an eviction notice, or you are currently staying somewhere safe but you have been asked to leave.', notesOn: 0 },
    { text: 'Do you have anything that can prove that you don’t have somewhere safe and ok to stay?', notesOn: -1 }
  ]
}

export const intention = {
  title: 'Are you unintentionally homeless?',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

export const priority = {
  title: 'Are you a priority?',
  intro: 'The council will decide whether it thinks you are priority need - this means you are especially vulnerable and it may have a duty to house you.',
  link: 'These questions will feel very personal (sorry!) but they are to get you thinking about your situation and whether you are particularly vulnerable and what proves that.',
  questions: [
    { text: 'You have told us that you are over seventeen years old. Is that true?', notesOn: 0 },
    { text: 'You have told us that you have have never been in care or had an assessment with a social worker before. Is that true?', notesOn: 0 },
    { text: 'You have told us that you are not pregnant or have dependent children - is that true?', notesOn: 1 },
    { text: 'Do you have any physical health needs', notesOn: 1 }
  ]
}

export const residence = {
  title: 'Where have you been living?',
  intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}
