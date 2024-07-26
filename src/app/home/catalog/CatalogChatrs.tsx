'use client'
import { useEffect, createRef } from 'react'
import * as d3 from 'd3'
import { FaRegLightbulb } from "react-icons/fa";
import { Image } from "@nextui-org/image";
import { FaVolumeUp } from "react-icons/fa";

export default function CatalogCharts() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <PopularProduct data={{ name: 'Product 1', description: 'Product 1 description', image: '/gloves.jpeg' }} />
            <DistributionHistogram />
            <PieChart />
            <LineChart />
            <BarChart />
        </div>
    )
}

const LineChart = ({ width = 300, height = 300 }) => {
    const ref = createRef()

    useEffect(() => {
        draw()
    })

    const draw = () => {
        const data = [12, 5, 6, 6, 9, 10]
        const svg = d3.select(ref.current)
        svg.selectAll('*').remove()

        const margin = { top: 10, right: 30, bottom: 30, left: 40 },
            width = svg.node().parentNode.clientWidth - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, width])
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0])
        const line = d3.line()
            .x((d, i) => xScale(i))
            .y(d => yScale(d))

        svg.append('g')
            .attr("transform", `translate(${margin.left},${margin.top})`)
            .append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'blue')
            .attr('stroke-width', 2)
            .attr('d', line)
    }

    return <div className="border border-primary p-3">
        <svg ref={ref} className="w-full h-64" />
    </div>
}

const PieChart = ({ width = 300, height = 300 }) => {
    const ref = createRef()

    useEffect(() => {
        draw()
    })

    const draw = () => {
        const data = [12, 5, 6, 6, 9, 10]
        const svg = d3.select(ref.current)
        svg.selectAll('*').remove()

        const width = svg.node().parentNode.clientWidth,
            height = 300,
            radius = Math.min(width, height) / 2;

        const g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        const color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);
        const pie = d3.pie();
        const arc = d3.arc().innerRadius(0).outerRadius(radius);

        g.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")
            .append("path")
            .attr("fill", (d, i) => color(i))
            .attr("d", arc);
    }

    return <div className="border border-primary p-3">
        <svg ref={ref} className="w-full h-64" />
    </div>
}

const BarChart = ({ width = 300, height = 300 }) => {
    const ref = createRef()

    useEffect(() => {
        draw()
    })

    const draw = () => {
        const data = [12, 5, 6, 6, 9, 10]
        const svg = d3.select(ref.current)
        svg.selectAll('*').remove()

        const margin = { top: 10, right: 30, bottom: 30, left: 40 },
            width = svg.node().parentNode.clientWidth - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        const xScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, width])
            .padding(0.1)
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0])

        const g = svg.append('g').attr("transform", `translate(${margin.left},${margin.top})`);

        g.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(i))
            .attr('y', d => yScale(d))
            .attr('width', xScale.bandwidth())
            .attr('height', d => height - yScale(d))
            .attr('fill', 'orange')
    }

    return <div className="border border-primary p-3">
        <svg ref={ref} className="w-full h-64" />
    </div>
}

const PopularProduct = ({ data }) => {
    return <div className="border border-primary p-3">
        <h3 className="flex justify-between">Your most Popular Item <FaVolumeUp /></h3>
        <p className="text-sm text-slate-400">Discover your best-selling product. Identify the top-performing item in your inventory helping you focus on what customers love most.</p>
        <div className="flex flex-col items-center justify-center my-3">
            <Image src={data.image} width={100} height={100} />
            <div>
                <h5 className="text-center">{data.name}</h5>
                <p className="text-center">{data.description}</p>
            </div>
            <div className="text-center flex border border-gray-50 p-2">
                <FaRegLightbulb />
                <p>Prompt: Why is it so popular?</p>
            </div>
        </div>
    </div>
}

const DistributionHistogram = ({ width = 300, height = 300 }) => {
    const ref = createRef()

    useEffect(() => {
        draw()
    })

    const draw = () => {
        const data = [12, 5, 6, 6, 9, 10]
        const svg = d3.select(ref.current)
        svg.selectAll('*').remove()

        const margin = { top: 10, right: 30, bottom: 30, left: 40 },
            width = svg.node().parentNode.clientWidth - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        const xScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0, width])
            .padding(0.1)
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height, 0])

        const g = svg.append('g').attr("transform", `translate(${margin.left},${margin.top})`);

        g.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(i))
            .attr('y', d => yScale(d))
            .attr('width', xScale.bandwidth())
            .attr('height', d => height - yScale(d))
            .attr('fill', 'orange')
    }

    return <div className="border border-primary p-3">
        <h3 className="flex justify-between">Price Distribution Histogram <FaVolumeUp /></h3>
        <p className="text-sm text-slate-400">Closely examine the price distribution of your products. This chart offers a visual breakdown of product prices, helping you identify pricing trends, popular price ranges, and potential pricing strategies.</p>
        <svg ref={ref} className="w-full h-64" />
    </div>
}
