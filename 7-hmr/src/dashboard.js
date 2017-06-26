import { increment, decrement, STEP as COUNTER_STEP } from './counter';
import $ from 'jquery';

const $result = $('#result');

$('#add').off().on('click', e => {
    const oldSum = Number($result.text());
    const newSum = increment(oldSum);
    $result.text(newSum);
});
$('#subtract').off().on('click', e => {
    const oldSum = Number($result.text());
    const newSum = decrement(oldSum);
    $result.text(newSum);
});

export const STEP = COUNTER_STEP;
