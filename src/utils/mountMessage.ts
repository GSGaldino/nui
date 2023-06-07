import colors from '@/constants/colors.json';

export interface IMountMessageProps {
  type: string;
  name: string;
  size: string;
  color: string;
  paymentMethod: string;
}

function mountMessage({
  type,
  name,
  size,
  color,
  paymentMethod,
}: IMountMessageProps) {
  const myColors: any = colors;
  const formatHash = (str: string) => str?.replaceAll?.('#', '%23');

  const message = `Oi, Nuile! Quero falar sobre o produto ${type} ${formatHash(name)}, no tamanho ${size} e cor ${(myColors[color] || color)}. Método de pagamento: ${paymentMethod}`;

  return message;
}

export default mountMessage;
