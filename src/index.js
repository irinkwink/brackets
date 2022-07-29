module.exports = function check(str, bracketsConfig) {
  let bracketsOpen = [];
  let bracketsClose = [];
  let openStr = [];
  let isOpenBracket = {};

  bracketsConfig.forEach(item => {
    bracketsOpen.push(item[0]);
    bracketsClose.push(item[1]);
    if (item[0] === item[1]) {
      isOpenBracket[item[0]] = true;
    }
  })

  for (let i = 0; i < str.length; i++) {
    if (bracketsClose.indexOf(str[i]) !== -1) {
      if (bracketsClose.indexOf(str[i]) === bracketsOpen.indexOf(str[i]) && isOpenBracket[str[i]]) {
        openStr.push(str[i]);
        isOpenBracket[str[i]] = false;
      } else {
        if (bracketsClose.indexOf(str[i]) === bracketsOpen.indexOf(str[i])) {
          isOpenBracket[str[i]] = true;
        }
        if (bracketsClose.indexOf(str[i]) !== bracketsOpen.indexOf(openStr.pop())) {
          return false;
        }
      }
    } else {
      openStr.push(str[i]);
    }
  }

  return !openStr.length;
}
