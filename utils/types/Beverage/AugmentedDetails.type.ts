import { Basics } from './Basics.type';
import { Details } from './Details.type';

export type AugmentedDetails = {
  previous: Basics | null;
  details: Details;
  next: Basics | null;
};
