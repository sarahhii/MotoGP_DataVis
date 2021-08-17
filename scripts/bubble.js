// JS in whcih the bubbles are created

const file = 'data/data.json';
const width = window.innerWidth;
const height = window.innerHeight;

//colors per year
const colors = {
    Year_2020: '#64FFCF',
    Year_2019: '#64DFDF',
    Year_2018: '#5E60CE',
    Year_2017: '#7400B8',
};

const generateChart = data => {
    const bubble = data => d3.pack()
        .size([width, height])
        .padding(2)(d3.hierarchy({
            children: data
        }).sum(d => d.score));

    const svg = d3.select('#bubble-chart')
        .style('width', width)
        .style('height', height);

    const root = bubble(data);
    const tooltip = d3.select('.tooltip');

    const node = svg.selectAll()
        .data(root.children)
        .enter().append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    //appending of circle per data-set
    const circle = node.append('circle')
        //fill with color depending on category
        .style('fill', d => colors[d.data.category])
    
    //hover showing more details
        .on('mouseover', function (e, d) {
            tooltip.select('img').attr('src', d.data.img);
            tooltip.select('a').attr('href', d.data.link).text(d.data.name);
            tooltip.select('span').attr('class', d.data.category).text(d.data.category);
            tooltip.style('visibility', 'visible');

            d3.select(this).style('stroke', '#222');
        })
        .on('mousemove', e => tooltip.style('top', `${e.pageY}px`)
            .style('left', `${e.pageX + 10}px`))
        .on('mouseout', function () {
            d3.select(this).style('stroke', 'none');
            return tooltip.style('visibility', 'hidden');
        })

        // on click the crash stats are shown in a popup
        .on('click', (e, d) => alert("Total crashes at " + d.data.name + " in " + d.data.category + " were " + d.data.score));

    // the definition of the label that is appended to the bubble 
    const label = node.append('text')
        .attr('dy', 2)
        .text(d => d.data.name.substring(0, d.r / 3));

    // making sure bubbles are all next to each other and not at the same spot
    node.transition()
        .ease(d3.easeExpInOut)
        .duration(3000)
        .attr('transform', d => `translate(${d.x}, ${d.y})`);

    //
    circle.transition()
        .ease(d3.easeExpInOut)
        .duration(3000)
        .attr('r', d => d.r);

    //text inside the bubbles appears a little later
    label.transition()
        .delay(1500)
        .ease(d3.easeExpInOut)
        .duration(1000)
        .style('opacity', 1)
        .attr('class', 'classTest')
    

};


// starts the graph when the button gets clicked
document.getElementById("graphBtn").onclick = async () => {
    data = await d3.json(file).then(data => data);
    generateChart(data);
    document.getElementById("hidden").style.visibility = "visible"
    
};


