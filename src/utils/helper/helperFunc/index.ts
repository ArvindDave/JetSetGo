export const dateFunction = (inputDateString: string): string => {
  const inputDate = new Date(inputDateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate: string = inputDate.toLocaleDateString('en-US', options);
  return formattedDate;
};

export const timeFunction = (timestamp: string): string => {
  const date = new Date(timestamp);

  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  const formattedTime: string = `${hours % 12 || 12}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${hours < 12 ? 'AM' : 'PM'}`;
  return formattedTime;
};
