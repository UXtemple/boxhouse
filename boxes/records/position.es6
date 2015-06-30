import { Record } from 'immutable';

export default class PositionRecord extends Record({
  shelf: undefined,
  rack:  undefined,
  height: undefined,
  position: undefined,
  depth: undefined
}) {
  static from(raw) {
    return new PositionRecord(raw);
  }
}