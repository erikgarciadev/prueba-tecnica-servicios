export function getData<T>(data: T, time = 2500) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}
