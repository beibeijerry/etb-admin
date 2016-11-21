/**
 * Created by muran001 on 16/11/19.
 */
import {states} from '../components/config'
import lodash from 'lodash'
import {isUndefined} from '../components/utils/utils'

export function  statesName (value, param) {
    if (isUndefined(value))
      return '';
    var the_index = lodash.findIndex(states[param], 'val', value);
    return states[param][the_index].name;
};

export function formatSize(size) {
  if (size > 1024 * 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB';
  } else if (size > 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  } else if (size > 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + ' MB';
  } else if (size > 1024) {
    return (size / 1024).toFixed(2) + ' KB';
  }
  return size.toString() + ' B';
}
