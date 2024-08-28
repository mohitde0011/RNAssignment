
export const REGEX = {
  EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  SPECIAL_CHARECTERS: /^[\w&.\-]+$/,
  UPPERCASE: /[A-Z]/g,
  LOWERCASE: /[a-z]/g,
  UPPER_LOWER_CASE: /[a-z].*[A-Z]|[A-Z].*[a-z]/, // eslint-disable-next-line
  NAME: /^[ a-zA-Z\u00C0-\u024F\u1E00-\u1EFF',.‘’'-]+$/i, // Regex with ios'smart punctuation(Contains hypens and apostrophy),
  MIN_NUMBERS: "(^[0][1-9]+)|([1-9]d*)",
  NUMBER: /^.*[0-9].*/,
  OTP_NUMBER: /[^0-9]/g,
  ALPHABETIC_SPECIAL_CHARACTERS: /^[A-Za-z!@#$%^&*()_+{}\[\]:;<>,.?~-]+$/,
  NAME_NUMBER: /^[A-Za-z0-9]{1}[ A-Za-z0-9,.-]{0,}$/,
  NAME_NUMBER_ALPHANUMERIC: /^[A-Za-z0-9/]{1}[ A-Za-z0-9,.-/]{0,}$/,
  SPECIAL_ACCENTED_NAME: /^[ a-zA-Z\u00C0-\u024F\u1E00-\u1EFF',.‘’'-]+$/i, //with accent apostrophe
};


export const validatePassword = (
  value: string,
) => {
  var message = [];
  var validCount = 0;
  if (value.length < 8 || value.length > 16) {
    message.push({ valid: false, title: "At least 8 letters" });
  } else {
    message.push({ valid: true, title: "At least 8 letters" });
    validCount++;
  }
  if (value.match(REGEX.SPECIAL_CHARECTERS)) {
    message.push({
      valid: false,
      title: "Minimum 1 special character",
    });
  } else {
    message.push({
      valid: true,
      title: "Minimum 1 special character",
    });
    validCount++;
  }
  if (!value.match(REGEX.UPPER_LOWER_CASE)) {
    message.push({
      valid: false,
      title: "Minimum 1 uppercase & lowercase character",
    });
  } else {
    message.push({
      valid: true,
      title: "Minimum 1 uppercase & lowercase character",
    });
    validCount++;
  }
  if (validCount > 3) {
    message = [];
  }
  return message.length ? JSON.stringify(message) : null;
};

export const data = [
  { id: '1', title: '20th Asian Game - Achi Nagoya 2026 (Winter)', date: 'YYYY-MM-DD ~ YYYY-MM-DD', location: 'Pyeongchang, Gangwon-do, Korea' },
  { id: '2', title: '20th Asian Game - Achi Nagoya 2026 (Winter)', date: 'YYYY-MM-DD ~ YYYY-MM-DD', location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name' },
  { id: '3', title: '20th Asian Game - Achi Nagoya 2026 (Winter)', date: 'YYYY-MM-DD ~ YYYY-MM-DD', location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name' },
  { id: '4', title: '20th Asian Game - Achi Nagoya 2026 (Winter)', date: 'YYYY-MM-DD ~ YYYY-MM-DD', location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name' },
  { id: '5', title: '20th Asian Game - Achi Nagoya 2026 (Winter)', date: 'YYYY-MM-DD ~ YYYY-MM-DD', location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name' },
  { id: '6', title: '20th Asian Game - Achi Nagoya 2026 (Winter)', date: 'YYYY-MM-DD ~ YYYY-MM-DD', location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name' },
  { id: '7', title: '20th Asian Game - Achi Nagoya 2026 (Winter)', date: 'YYYY-MM-DD ~ YYYY-MM-DD', location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name' },
  { id: '8', title: '20th Asian Game - Achi Nagoya 2026 (Winter)', date: 'YYYY-MM-DD ~ YYYY-MM-DD', location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name' },
  { id: '9', title: '20th Asian Game - Achi Nagoya 2026 (Winter)', date: 'YYYY-MM-DD ~ YYYY-MM-DD', location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name' },
  { id: '10', title: '20th Asian Game - Achi Nagoya 2026 (Winter)', date: 'YYYY-MM-DD ~ YYYY-MM-DD', location: 'Pyeongchang, Gangwon-do, Korea Very Very long city name' },
];