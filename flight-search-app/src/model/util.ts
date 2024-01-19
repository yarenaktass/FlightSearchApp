import moment from "moment";

export const formatDate = (date: Date) => { 
  return moment(date).format("DD/MM/YYYY - HH:mm");
};

export const parseDuration = (duration: string): { hours: number, minutes: number } => {
  const matches = duration.match(/\d+/g);
  
  if (matches) {
    const [hours, minutes] = matches.map(match => parseInt(match, 10));
    return { hours, minutes };
  }

  return { hours: 0, minutes: 0 };
};
