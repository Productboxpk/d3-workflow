import React from 'react';
import * as d3 from 'd3';

const App = () => {
    const ref = React.createRef();
    React.useEffect(() => {
        let svg = d3.select(ref.current).append('svg').attr('width', '100%').attr('height', '100%');
        let group = svg.append('g');
        group
            .append('rect')
            .attr('rx', '30') //To round the corners
            .attr('ry', '30') //To round the corners
            .attr('x', 100)
            .attr('y', 400)
            .style('width', 120)
            .style('height', 120)
            .style('fill', '#e07110');

        group.append('text').attr('x', 120).attr('y', 535).attr('font-size', 14).text('k8s source');
        // Lines
        // Horizontal line
        const lineGroup = group.append('g');
        lineGroup.append('line').attr('x1', 150).attr('y1', 200).attr('x2', 400).attr('y2', 200).attr('stroke-width', 2).attr('stroke', 'black');
        // Vertical line
        lineGroup.append('line').attr('x1', 150).attr('y1', 400).attr('x2', 150).attr('y2', 200).attr('stroke-width', 2).attr('stroke', 'black');

        const lineGroup2 = group.append('g');
        // Line 2
        lineGroup2.append('line').attr('x1', 150).attr('y1', 700).attr('x2', 400).attr('y2', 700).attr('stroke-width', 2).attr('stroke', 'black');
        // Vertical line
        lineGroup2.append('line').attr('x1', 150).attr('y1', 700).attr('x2', 150).attr('y2', 550).attr('stroke-width', 2).attr('stroke', 'black');

        lineGroup2.append('line').attr('x1', 220).attr('y1', 450).attr('x2', 400).attr('y2', 450).attr('stroke-width', 2).attr('stroke', 'black');

        // Line ends
        //
        group
            .append('rect')
            .attr('rx', '30') //To round the corners
            .attr('ry', '30') //To round the corners
            .attr('x', 1300)
            .attr('y', 200)
            .style('width', 120)
            .style('height', 120)
            .style('fill', '#50942e');

        group.append('text').attr('x', 1340).attr('y', 335).attr('font-size', 14).text('event store');
        lineGroup2.append('line').attr('x1', 1200).attr('y1', 230).attr('x2', 1300).attr('y2', 230).attr('stroke-width', 2).attr('stroke', 'black');
        lineGroup2.append('line').attr('x1', 1200).attr('y1', 300).attr('x2', 1300).attr('y2', 300).attr('stroke-width', 2).attr('stroke', 'black');

        group
            .append('rect')
            .attr('rx', '30') //To round the corners
            .attr('ry', '30') //To round the corners
            .attr('x', 1300)
            .attr('y', 500)
            .style('width', 120)
            .style('height', 120)
            .style('fill', '#4763e5');
        group.append('text').attr('x', 1340).attr('y', 630).attr('font-size', 14).text('analytics');
        lineGroup2.append('line').attr('x1', 1200).attr('y1', 530).attr('x2', 1300).attr('y2', 530).attr('stroke-width', 2).attr('stroke', 'black');
        lineGroup2.append('line').attr('x1', 1200).attr('y1', 600).attr('x2', 1300).attr('y2', 600).attr('stroke-width', 2).attr('stroke', 'black');

        const eventFlowGroup = svg.append('g');
        eventFlowGroup
            .append('rect')
            .attr('rx', 10) //To round the corners
            .attr('ry', 10) //To round the corners
            .attr('width', '50%')
            .attr('height', '80%')
            .attr('x', 350)
            .attr('y', 100)
            .style('stroke', '#dfdfdf')
            .style('stroke-width', '1px')
            .style('fill', '#e5f5fd');

        // Main container
        eventFlowGroup.append('text').attr('x', 360).attr('y', 120).attr('font-size', 14).text('Event Flows');

        eventFlowGroup
            .append('rect')
            .attr('rx', 10) //To round the corners
            .attr('ry', 10) //To round the corners
            .attr('width', '10%')
            .attr('height', '70%')
            .attr('x', 370)
            .attr('y', 170)
            .style('stroke', '#dfdfdf')
            .style('stroke-width', '1px')
            .style('fill', '#eaf3e7');

        // Left Side of => Event Workers
        eventFlowGroup.append('text').attr('x', 375).attr('y', 190).attr('font-size', 14).text('Event Workers');

        // Lines
        eventFlowGroup
            .append('line')
            .attr('x1', 520)
            .attr('y1', 450)
            .attr('x2', 1000)
            .attr('y2', 450)
            .attr('stroke-width', 2)
            .attr('stroke', 'black');

        eventFlowGroup.append('line').attr('x1', 500).attr('y1', 250).attr('x2', 750).attr('y2', 250).attr('stroke-width', 2).attr('stroke', 'black');

        eventFlowGroup.append('line').attr('x1', 750).attr('y1', 250).attr('x2', 750).attr('y2', 400).attr('stroke-width', 2).attr('stroke', 'black');

        // Bottom lines
        eventFlowGroup.append('line').attr('x1', 500).attr('y1', 700).attr('x2', 750).attr('y2', 700).attr('stroke-width', 2).attr('stroke', 'black');
        eventFlowGroup.append('line').attr('x1', 750).attr('y1', 540).attr('x2', 750).attr('y2', 700).attr('stroke-width', 2).attr('stroke', 'black');

        // Right side lines
        eventFlowGroup
            .append('line')
            .attr('x1', 800)
            .attr('y1', 250)
            .attr('x2', 1020)
            .attr('y2', 250)
            .attr('stroke-width', 2)
            .attr('stroke', 'black');

        eventFlowGroup.append('line').attr('x1', 800).attr('y1', 250).attr('x2', 800).attr('y2', 400).attr('stroke-width', 2).attr('stroke', 'black');

        // Bottom lines
        eventFlowGroup
            .append('line')
            .attr('x1', 800)
            .attr('y1', 700)
            .attr('x2', 1020)
            .attr('y2', 700)
            .attr('stroke-width', 2)
            .attr('stroke', 'black');

        eventFlowGroup
            .append('line')
            .attr('x1', 800)
            .attr('y1', 540)
            .attr('x2', 800)
            .attr('y2', 700)
            .attr('stroke-width', 2)
            .attr('stroke', 'black');
        // Lines end

        eventFlowGroup
            .append('rect')
            .attr('rx', '30') //To round the corners
            .attr('ry', '30') //To round the corners
            .attr('x', 375)
            .attr('y', 195)
            .style('width', '9%')
            .style('height', 120)
            .style('fill', '#e07110');
        eventFlowGroup.append('text').attr('x', 415).attr('y', 330).attr('font-size', 14).text('worker1');

        eventFlowGroup
            .append('rect')
            .attr('rx', '30') //To round the corners
            .attr('ry', '30') //To round the corners
            .attr('x', 375)
            .attr('y', 400)
            .style('width', '9%')
            .style('height', 120)
            .style('fill', '#e07110');
        eventFlowGroup.append('text').attr('x', 415).attr('y', 535).attr('font-size', 14).text('worker2');

        eventFlowGroup
            .append('rect')
            .attr('rx', '30') //To round the corners
            .attr('ry', '30') //To round the corners
            .attr('x', 375)
            .attr('y', 600)
            .style('width', '9%')
            .style('height', 120)
            .style('fill', '#e07110');
        eventFlowGroup.append('text').attr('x', 415).attr('y', 735).attr('font-size', 14).text('worker3');

        // Mid Section
        eventFlowGroup.append('text').attr('x', 740).attr('y', 530).attr('font-size', 14).text('event queue');
        eventFlowGroup
            .append('rect')
            .attr('rx', '30') //To round the corners
            .attr('ry', '30') //To round the corners
            .attr('x', 700)
            .attr('y', 400)
            .style('width', '9%')
            .style('height', 120)
            .style('fill', '#e03675');

        eventFlowGroup
            .append('rect')
            .attr('rx', 10) //To round the corners
            .attr('ry', 10) //To round the corners
            .attr('width', '10%')
            .attr('height', '70%')
            .attr('x', 1010)
            .attr('y', 170)
            .style('stroke', '#dfdfdf')
            .style('stroke-width', '1px')
            .style('fill', '#eaf3e7');

        // Right Side of => Processing
        eventFlowGroup.append('text').attr('x', 1015).attr('y', 190).attr('font-size', 14).text('Processing');

        eventFlowGroup
            .append('rect')
            .attr('rx', '30') //To round the corners
            .attr('ry', '30') //To round the corners
            .attr('x', 1015)
            .attr('y', 195)
            .style('width', '9%')
            .style('height', 120)
            .style('fill', '#e07110');
        eventFlowGroup.append('text').attr('x', 1080).attr('y', 330).attr('font-size', 14).text('proc1');

        eventFlowGroup
            .append('rect')
            .attr('rx', '30') //To round the corners
            .attr('ry', '30') //To round the corners
            .attr('x', 1015)
            .attr('y', 400)
            .style('width', '9%')
            .style('height', 120)
            .style('fill', '#e07110');
        eventFlowGroup.append('text').attr('x', 1080).attr('y', 535).attr('font-size', 14).text('proc2');

        eventFlowGroup
            .append('rect')
            .attr('rx', '30') //To round the corners
            .attr('ry', '30') //To round the corners
            .attr('x', 1015)
            .attr('y', 600)
            .style('width', '9%')
            .style('height', 120)
            .style('fill', '#e07110');
        eventFlowGroup.append('text').attr('x', 1080).attr('y', 735).attr('font-size', 14).text('proc3');
    });
    return (
        <div className="row h-100" ref={ref}>
            {/* <svg>
                <defs>
                    <marker id="arrow-head" markerWidth="13" markerHeight="13" refx="5" refy="5" orient="auto">
                        <path d="M0,0 L0,10 L10,5 L0,0" style={{ fill: '#000000' }} />
                    </marker>
                </defs>
                <path
                    d="M0,0 L10,20 L20,50 L30,30 L40,40 L50,50"
                    style={{ stroke: '#000000', 'stroke-width': '1px', fill: 'none', markerEnd: 'url(#arrow-head)' }}
                />
            </svg> */}
        </div>
    );
};
export default App;
