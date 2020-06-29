import './css/main.css';
import {
  select,
  csv,
  scaleLinear,
  max,
  scaleBand,
  axisLeft,
  axisBottom
} from 'd3';

const svg = select('svg');

const width = +svg.attr('width')
const height = +svg.attr('height')

csv('./data.csv').then(data => {
  console.log(data);
});
