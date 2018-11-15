export const getRandomSentence = () => {
  const sentences = [
    'OKKKKK',
    'alors....',
    'mmmmmh.',
    "C'est compliqué...",
    "Ah ouai c'est chaud",
    'oh oh voyons voir',
    'tu ferais de grandes choses pourtant ...',
    'Es-tu certain de ce que tu veux ?'
  ];
  return sentences[Math.floor(Math.random() * sentences.length)];
};

export const getRandomHouse = () => {
  const houses = ['Gryffondor', 'Poufsouffle', 'Serdaigle', 'Serpentard'];
  return houses[Math.floor(Math.random() * houses.length)];
};
