export default (product: any) => {
  const type = product?.tipo_produto;

  if (!type) return null;

  const splitted = type?.split(' ');
  const formatted = splitted && splitted[splitted.length - 1];

  const types = ['cropped', 'quadro', 'camiseta', 'caneca'];

  if (types.includes(formatted)) {
    return formatted;
  }

  return 'unknown';
};
