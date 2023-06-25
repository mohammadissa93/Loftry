export const userNameGetInitials = (name) => {
    const nameParts = name.trim().split(' ');
  
    if (nameParts.length == 0) {
      return '';
    }
  
    const initials = nameParts.map((part) => {
      if (part.length > 0) {
        return part.charAt(0).toUpperCase() + '***';
      } else {
        return '';
      }
    });
  
    return initials.join(' ');
  }
  export const avatarGetInitials = (name) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase();
  };