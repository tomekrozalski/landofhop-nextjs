import { NextRouter } from 'next/router';

export enum Page {
  label = 'label',
  producer = 'producer',
  editorial = 'editorial',
}

const moveTo = ({ pathname, query, push }: NextRouter, part: Page) => {
  push({ pathname, query: { ...query, part } }, undefined, {
    shallow: true,
  });
};

export default moveTo;
