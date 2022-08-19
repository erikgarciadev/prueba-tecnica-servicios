export function getData(data: any, time = 2500) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}
