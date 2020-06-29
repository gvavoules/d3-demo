import {select,csv} from 'd3'
const svg = select('svg');

const width = +svg.attr('width')
const hieght = +svg.attr('height')

csv('data.csv').then(data => {
  console.log(data);
});
