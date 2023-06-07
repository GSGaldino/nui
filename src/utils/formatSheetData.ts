export type Row = string[];

type FormattedData = {
  [key: string]: string;
}[];

const formatSheetData = (data: Row[]): FormattedData => {
  const heading = data[0];
  const formatted = data.map((values) => {
    const obj: any = {};
    values.forEach((value, index) => {
      obj[heading[index]] = value;
    });
    return obj;
  });

  formatted.shift();

  return formatted;
};

export { formatSheetData }
