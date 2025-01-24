export const formatSum = (input: number) =>
  input.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });

export const formatPhoneNumber = (val: string) => {
  const match = val.match(/(\d)/g);

  let res = [...(match || [])];

  let result = '+7';

  if (res.length >= 1) {
    result = `${result} (${res.slice(0, 3).join('')}`;
    res = res.slice(3);
  }

  if (res.length >= 1) {
    result = `${result}) ${res.slice(0, 3).join('')}`;
    res = res.slice(3);
  }

  if (res.length >= 1) {
    result = `${result}-${res.slice(0, 2).join('')}`;
    res = res.slice(2);
  }

  if (res.length >= 1) {
    result = `${result}-${res.slice(0, 2).join('')}`;
  }

  return result;
};
