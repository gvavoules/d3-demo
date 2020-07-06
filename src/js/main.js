import '../css/main.css';
import {
  select,
  csv,
  scaleLinear,
<<<<<<< HEAD
=======
  scaleTime,
>>>>>>> new updates
  extent,
  axisLeft,
  axisBottom,
  area,
  format,
  curveBasis
} from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
<<<<<<< HEAD
  const title = 'Cars: Horsepower v. Weight'
  const xValue = d =>  +d.horsepower;
  const xAxisLabel = 'Horsepower';
  const yValue = d => +d.weight;
  const yAxisLabel = 'Weight';
  const circleRadius = 10;
=======
  const title = 'A week in San Francisco'
  const xValue = d =>  d.timestamp;
  const xAxisLabel = 'Time';
  const yValue = d => d.temperature;
  const yAxisLabel = 'Temperature';
  const circleRadius = 6;
>>>>>>> new updates
  const margin = {top: 60, right: 40, bottom: 75, left: 150};
  const innerWidth = width - +margin.left - +margin.right;
  const innerHeight = height - +margin.top - +margin.bottom;
  
<<<<<<< HEAD
  const xScale = scaleLinear()
    .domain(extent(data,xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data,yValue))
    .range([0, innerHeight])
=======
  const xScale = scaleTime()
    .domain(extent(data,xValue))
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain(extent(data,yValue))
    .range([innerHeight,0])
>>>>>>> new updates
    .nice();

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const xAxis = axisBottom(xScale)
    .tickSize(-innerHeight)
<<<<<<< HEAD
    .tickPadding(15);

  const yAxis = axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(10);

  const yAxisG = g.append('g').call(yAxis)
  
  yAxisG.selectAll('.domain').remove();
    
  yAxisG.append('text')
    .attr('class','axis-label')
    .attr('x',-innerHeight/2)
    .attr('y',-70)
    .attr('fill','black')
    .attr('transform', `rotate(-90)`)
    .attr('text-anchor','middle')
    .text(yAxisLabel);  

=======
    .ticks(6)
    .tickPadding(15);

  const yAxis = axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(10);

  const yAxisG = g.append('g').call(yAxis)
  
  yAxisG.selectAll('.domain').remove();
    
  yAxisG.append('text')
    .attr('class','axis-label')
    .attr('x',-innerHeight/2)
    .attr('y',-50)
    .attr('fill','black')
    .attr('transform', `rotate(-90)`)
    .attr('text-anchor','middle')
    .text(yAxisLabel);  

>>>>>>> new updates
  const xAxisG = g.append('g').call(xAxis)
    .attr('transform', `translate(0,${innerHeight})`);

  xAxisG.select('.domain').remove();

  xAxisG.append('text')
    .attr('class','axis-label')
    .attr('x',innerWidth/2)
    .attr('y',60)
    .attr('fill','black')
    .text(xAxisLabel);   
<<<<<<< HEAD
    
  g.selectAll('circle').data(data)
    .enter().append('circle')
      .attr('cx', d => xScale(xValue(d)))
      .attr('cy', d => yScale(yValue(d)))
      .attr('r', circleRadius);
=======
  
  const areaGenerator = area()
    .x(d => xScale(xValue(d)))
    .y0(innerHeight)
    .y1(d => yScale(yValue(d)))
    .curve(curveBasis);
  
  g.append('path') 
    .attr('class','line-path')
    .attr('d',areaGenerator(data)); 
>>>>>>> new updates

  g.append('text')
    .attr('class','title')
    .attr('y',-10)
    .text(title);    
};

<<<<<<< HEAD
csv('https://vizhub.com/curran/datasets/auto-mpg.csv')
  .then(data => {
    data.forEach(d => {
      d.mpg = +d.mpg;
      d.cylinders = +d.cylinders;
      d.displacement = +d.displacement;
      d.horsepower = +d.horsepower;
      d.weight = +d.weight;
      d.acceleration = +d.acceleration;
      d.year = +d.year;
=======
csv('https://vizhub.com/curran/datasets/temperature-in-san-francisco.csv')
  .then(data => {
    data.forEach(d => {
      d.timestamp = new Date(d.timestamp);
      d.temperature = +d.temperature;
>>>>>>> new updates
    });
    render(data);
    console.log(data);
  });
