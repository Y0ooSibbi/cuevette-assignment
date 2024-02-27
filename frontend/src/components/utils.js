// utils.js
export const getInitials = (name) => {
    // Split the name into words
    const words = name.split(' ');
    // Get the first letter of each word
    const initials = words.map(word => word.charAt(0).toUpperCase()).join('');
    // Return only the first two characters
    return initials.substring(0, 2);
  };
  