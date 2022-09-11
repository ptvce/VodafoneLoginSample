export const LOGIN = {
  MOBILE: "e.g. 0404789999, 61145678909",
  MOBILE_NOT_EXIST: "Sorry we can’t log you in",
  MOBILE_FORMAT_NOT_VALID: "Phone number is not valid",
};

export const australianPhonenumberRegex =
  /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
