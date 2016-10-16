/** getQueryParams
  Returns an object holding all query parameters

  @example
    http://www.mysite.com
    getQueryParams() --> {}
  @example
    http://www.mysite.com?page=2&sort=asc
    getQueryParams() --> { page: '2', sort: 'asc' }
*/
export const getQueryParams = () => {
  const paramString = window.location.search;

  if (paramString === '') { return {}; }

  return paramString
    .replace('?', '')
    .split('&')
    .reduce((acc, item) => {
      const [key, value] = item.split('=');
      return {
        ...acc,
        [key]: value,
      };
    }, {});
};
