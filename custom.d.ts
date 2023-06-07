import React from 'react';

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
  export { content as ReactComponent };
}

declare function classcat(...classes: ClasscatValue[]): string;

type ClasscatValue = string | number | ClasscatDictionary | ClasscatArray | undefined | null | boolean;

interface ClasscatDictionary {
  [id: string]: boolean | undefined | null;
}

interface ClasscatArray extends Array<ClasscatValue> {}

export default classcat;

