'use client'
import { useEffect, createRef } from 'react'
import * as d3 from 'd3'

export default function CatalogCharts() {
    return (
        <div className="flex gap-4">
            <PieChart width={300} height={300}/>
            <LineChart width={300} height={300}/>
            <BarChart width={300} height={300}/>
        </div>
    )

}

const LineChart = ({ width = 300, height= 300 }) => {
    const ref = createRef()

    useEffect(() => {
        draw()
    })

    const draw = () => {
        //draw a line chart
        const data = [12, 5, 6, 6, 9, 10]
        const svg = d3.select(ref.current)
        svg.selectAll('*').remove()
        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, width])
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0])
        const line = d3.line()
            .x((d, i) => xScale(i))
            .y(d => yScale(d))
        svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'blue')
            .attr('stroke-width', 2)
            .attr('d', line)

    }

    return <div className={'border-1 border-primary p-3'}> <svg width={width} height={height} ref={ref}  /></div>

}

const PieChart = ({ width = 300, height= 300 }) => {
    const ref = createRef()

    useEffect(() => {
        draw()
    })

    const draw = () => {
        //draw a pie chart
        const data = [12, 5, 6, 6, 9, 10]
        var svg = d3.select(ref.current),
            width = svg.attr("width"),
            height = svg.attr("height"),
            radius = Math.min(width, height) / 2,
            g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

        // Generate the pie
        var pie = d3.pie();

        // Generate the arcs
        var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        //Generate groups
        var arcs = g.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")

        //Draw arc paths
        arcs.append("path")
            .attr("fill", function(d, i) {
                return color(i);
            })
            .attr("d", arc);
    }
            return <div className={'border-1 border-primary p-3'}> <svg width={width} height={height} ref={ref}  /></div>

}

const BarChart = ({ width = 300, height= 300 }) => {
    const ref = createRef()

    useEffect(() => {
        draw()
    })

    const draw = () => {
        //draw a bar chart
        const data = [12, 5, 6, 6, 9, 10]
        const svg = d3.select(ref.current)
        svg.selectAll('*').remove()
        const xScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, width])
            .padding(0.1)
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, height])
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(i))
            .attr('y', d => height - yScale(d))
            .attr('width', xScale.bandwidth())
            .attr('height', d => yScale(d))
            .attr('fill', 'orange')
    }

            return <div className={'border-1 border-primary p-3'}> <svg width={width} height={height} ref={ref}  /></div>
}


