'use client'
import { useEffect, createRef } from 'react'
import * as d3 from 'd3'
export default function CustomersCharts() {
    return (
        <div className="grid ">

            <BarChart width={300} height={300}/>
            <GlobeChart width={800} height={800}/>
        </div>
    )

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


const GlobeChart = ({ width = 300, height= 300 }) => {
    const ref = createRef()

    useEffect(() => {
        draw()
    })

    const draw = async () => {
        let width = d3.select(ref.current).node().getBoundingClientRect().width
        let height = 500
        const sensitivity = 75

        let projection = d3.geoOrthographic()
            .scale(250)
            .center([0, 0])
            .rotate([0,-30])
            .translate([width / 2, height / 2])


        const initialScale = projection.scale()
        let path = d3.geoPath().projection(projection)

        let svg = d3.select(ref.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)

        let globe = svg.append("circle")
            .attr("fill", "#EEE")
            .attr("stroke", "#000")
            .attr("stroke-width", "0.2")
            .attr("cx", width/2)
            .attr("cy", height/2)
            .attr("r", initialScale)

        svg.call(d3.drag().on('drag', (selection) => {
            const rotate = projection.rotate()
            const k = sensitivity / projection.scale()
            projection.rotate([
                rotate[0] + selection.dx * k,
                rotate[1] - selection.dy * k
            ])
            path = d3.geoPath().projection(projection)
            svg.selectAll("path").attr("d", path)
        }))
            .call(d3.zoom().on('zoom', () => {
                if(d3.event.transform.k > 0.3) {
                    projection.scale(initialScale * d3.event.transform.k)
                    path = d3.geoPath().projection(projection)
                    svg.selectAll("path").attr("d", path)
                    globe.attr("r", projection.scale())
                }
                else {
                    d3.event.transform.k = 0.3
                }
            }))

        let map = svg.append("g")

        let data = await getWorldMap()

        map.append("g")
            .attr("class", "countries" )
            .selectAll("path")
            .data(data.features)
            .enter().append("path")
            .attr("class", d => "country_" + d.properties.name.replace(" ","_"))
            .attr("d", path)
            .attr("fill", "white")
            .style('stroke', 'black')
            .style('stroke-width', 0.3)
            .style("opacity",0.8)

        //Optional rotate
        d3.timer(function(elapsed) {
            const rotate = projection.rotate()
            const k = sensitivity / projection.scale()
            projection.rotate([
                rotate[0] - 1 * k,
                rotate[1]
            ])
            path = d3.geoPath().projection(projection)
            svg.selectAll("path").attr("d", path)
        },200)
    }

    return <div className={'border-1 border-primary p-3'}>
        s
        <svg width={width} height={height} ref={ref}  />
    </div>
}

const getWorldMap = async () => {
    const data = await fetch('https://static.observableusercontent.com/files/cbb0b433d100be8f4c48e19de6f0702d83c76df3def6897d7a4ccdb48d2f5f039bc3ae1141dd1005c253ca13c506f5824ae294f4549e5af914d0e3cb467bd8b0')
    return data.json()
}
