export const homeless = {
  title: 'Are you homeless?',
  intro: 'You are considered homeless if it is not ok or safe for you to stay where you are for the next 28 days and you have nowhere else to go. For example, it would not be ok to expect you to stay where you are if you are squatting, sleeping on the streets, sleeping on someone\'s sofa, living in an unsafe or overcrowded place, or with people who are unsafe, violent, who expect unfair things of you or who make you uncomfortable.',
  link: 'How can you show that you have nowhere safe to stay.',
  questions: [
    { q: 'q1', section: 'Homeless', text: 'Did you have somewhere safe and ok to stay last night?', answer: 0, notes: 'I slept rough on the street for several weeks finding alcoves or other sheltered areas.' },
    { q: 'q2', section: 'Homeless', text: 'Do you have anywhere safe and ok to sleep tonight?', answer: 1, notes: null },
    { q: 'q3', section: 'Homeless', text: 'Will you have somewhere safe and ok to stay in 28 days time - for example you have been served an eviction notice, or you are currently staying somewhere safe but you have been asked to leave.', answer: 0, notes: 'I can\'t see any prospects of finding anything within this time period.' },
    { q: 'q4', section: 'Homeless', text: 'Do you have anything that can prove that you don’t have somewhere safe and ok to stay?', answer: 1, notes: 'I can bring it with me.' }
  ]
}

export const priority = {
  title: 'Are you a priority?',
  intro: 'The council will decide whether it thinks you are priority need - this means you are especially vulnerable and it may have a duty to house you.',
  link: 'These questions will feel very personal (sorry!) but they are to get you thinking about your situation and whether you are particularly vulnerable and what proves that.',
  questions: [
    { q: 'q1', section: 'Vulnerability', text: 'You have told us that you are over seventeen years old. Is that true?', answer: 1, notes: null },
    { q: 'q1', section: 'Vulnerability', text: 'You have told us that you have have never been in care or had an assessment with a social worker before. Is that true?', answer: 1, notes: null },
    { q: 'q1', section: 'Vulnerability', text: 'You have told us that you are not pregnant or have dependent children - is that true?', answer: 1, notes: 'I have severe anxiety and depression.' },
    { q: 'q1', section: 'Vulnerability', text: 'Do you have any physical health needs', answer: 1, notes: null }
  ]
}

export const intention = {
  title: 'On purpose?',
  intro: 'The council will want to know about what steps you have taken to prevent your homelessness',
  questions: [
    { q: 'q1', section: 'Vulnerability', text: 'Are you being evicted from you current accommodation?', answer: 1, notes: null },
    { q: 'q1', section: 'Vulnerability', text: 'Have you received a court order saying you have to leave?', answer: 1, notes: null },
    { q: 'q1', section: 'Vulnerability', text: 'Do you have anything that can prove the steps you have taken to not be homeless?', answer: 1, notes: null },
  ]
}

export const residence = {
  title: 'Are you local?',
  intro: 'Your local council will only have a duty to house you if it think you have a \'local connection\' to the area - this means you have lived there for a long time, or maybe have a lot of friends or family in the area',
  link: '',
  questions: [
    { q: 'q1', section: 'Location', text: 'Do you have anything that can prove that you have a connection to your local area?', answer: 1, notes: 'I slept rough on the street for several weeks finding alcoves or other sheltered areas.' }
  ]
}
