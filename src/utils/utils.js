export const getDateAndTime = (givenDate) => {
    const date = new Date(givenDate);
  
    const formattedDate = date.toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    });
  
    return formattedDate;
  };