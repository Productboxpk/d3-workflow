# Data Flow Diagram using d3 in React

- Apologies for the bad code quality, was just focused on getting the task done.

## Pre-Req
- NPM

## Steps to run it
- Clone/Download the repo.
- Open root folder in terminal.
- Run `npm install` to install package.
- Run `npm start` to see the diagram. Runs on 3000 port!


## Approach of Implementation.

The repo contains simple react app. We are using d3js to crete a DFD.
Create a div in App.js and create a ref using React.createRef and pass it in div ref attribute.


`const ref = React.createRef();`

Import d3. Use d3 selector to create svg inside the div
```
`import * as d3 from 'd3';`
let svg = d3.select(ref.current)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%');
```

Creating a g to group objects `let group = svg.append('g');` 

The below code adds a rectangle in `g` with fill color
```
    group
        .append('rect')
        .attr('rx', '30') //To round the corners
        .attr('ry', '30') //To round the corners
        .attr('x', 100) // The start point (origin) of the the rectangle on x axis
        .attr('y', 400) // The start point (origin) of the the rectangle on y axis
        .style('width', 120) 
        .style('height', 120)
        .style('fill', '#e07110');
```
The tricker part is to adjust lines. Once again add `g` to group lines. 
```
const lineGroup = group.append('g');
// Lines 
        // Horizontal line
    const lineGroup = group.append('g');
    lineGroup.append("line")
    .attr("x1", 150) // start point on x axis
    .attr("y1", 200) // start point on y axis
    .attr("x2", 400) // end point on x axis
    .attr("y2", 200) // end point on y axis
    .attr("stroke-width", 2) // width of line
    .attr("stroke", "black"); // color

        // Vertical line
    lineGroup.append("line")
    .attr("x1", 150)
    .attr("y1", 400)
    .attr("x2", 150)
    .attr("y2", 200)
    .attr("stroke-width", 2)
    .attr("stroke", "black");
```