
export const scroller = (id: string) =>  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });