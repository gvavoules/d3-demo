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

csv(require('./data.csv')).then(data => {
  console.log(data);
});
