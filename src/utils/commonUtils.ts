const isValidJson = (text: string): boolean => {
  if (
    /^[\],:{}\s]*$/.test(
      text
        .replace(/\\["\\\/bfnrtu]/g, '@')
        .replace(
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          ']'
        )
        .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
    )
  ) {
    console.log('VALID');
    return true;
  } else {
    return false;
  }
};

export const isValidRequestData = (
  urlInput: string,
  jsonText: string
): boolean => {
  if (!urlInput) return false;
  if (!isValidJson(jsonText)) return false;
  return true;
};
