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
    console.log(value,param,the_index,states,states[param]);
    return states[param][the_index].name;
};
