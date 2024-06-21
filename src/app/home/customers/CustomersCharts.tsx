'use client'
import { useEffect, createRef } from 'react'
import * as d3 from 'd3'
import { FaRegLightbulb } from "react-icons/fa";
import {Image} from "@nextui-org/image";
import { FaVolumeUp } from "react-icons/fa";
export default function CatalogCharts() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <PopularProduct data={{name: 'Product 1', description: 'Product 1 description', image: '/gloves.jpeg'}}/>
            <DistributionHistogram width={300} height={300}/>
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

const PopularProduct = ({data}: any) => {
    return <div className={'border-1 border-primary p-3'}>
        <h3 className={'flex justify-between'}>Your most Popular Item <FaVolumeUp/></h3>
        <p className={'text-sm text-slate-400'}>Discover your best-selling product. Identify the top-performing item in your inventory helping you focus on what customers love must</p>
        <div className={' flex flex-col items-center justify-center my-3'}>
            <Image src={data.image} width={100} height={100}/>
            <div>
                <h5 className={'text-center'}>{data.name}</h5>
                <p className={'text-center'}>{data.description}</p>
            </div>
            <div className={'text-center flex border-1 border-gray-50 p-2'}>
                <FaRegLightbulb />
                <p>Prompt: Why is so popular ?</p>
            </div>
        </div>

    </div>
}

const DistributionHistogram = ({
                                     width = 300,
                                      height = 300
                               }) => {
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

    return <div className={'border-1 border-primary p-3'}>
        <h3 className={'flex justify-between'}>Price Distribution Histogram <FaVolumeUp/></h3>
        <p className={'text-sm text-slate-400'}>Closely examine the price distribution of your
            products this chart offers a visual breakdown of product prices, helping you identify pricing trends,
            popular price ranges , and potential pricing strategies</p>
        <svg width={width} height={height} ref={ref}  />
    </div>

}
