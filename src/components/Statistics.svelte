<script>
    import { scaleLinear } from "d3-scale";

    const points = [
        { year: -50, birthrate: 16.7 },
        { year: -40, birthrate: 14.6 },
        { year: -30, birthrate: 14.4 },
        { year: -20, birthrate: 14 },
        { year: -10, birthrate: 13 },
        { year: 50, birthrate: 16.7 },
        { year: 40, birthrate: 14.6 },
        { year: 30, birthrate: 14.4 },
        { year: 20, birthrate: 14 },
        { year: 10, birthrate: 13 },
        { year: 0, birthrate: 12.4 },
    ];

    const xTicks = [1990, 1995, 2000, 2005, 2010, 2015];
    const yTicks = [0, 5, 10, 15, 20];
    const padding = { top: 20, right: 15, bottom: 20, left: 25 };

    let width = 500;
    let height = 200;

    function formatMobile(tick) {
        return "'" + tick.toString().slice(-2);
    }

    $: xScale = scaleLinear()
        .domain([0, xTicks.length])
        .range([padding.left, width - padding.right]);

    $: yScale = scaleLinear()
        .domain([0, Math.max.apply(null, yTicks)])
        .range([height - padding.bottom, padding.top]);

    $: innerWidth = width - (padding.left + padding.right);
    $: barWidth = innerWidth / xTicks.length;
</script>

<main class="chart_box">
    <h2 style="color: #516f98fe;">Flow Trends</h2>

    <div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
        <svg>
            <!-- y axis -->
            <g class="axis y-axis">
                {#each yTicks as tick}
                    <g
                        class="tick tick-{tick}"
                        transform="translate(0, {yScale(tick)})"
                    >
                        <line x2="100%" />
                        <text y="-4"
                            >{tick}
                            {tick === 20 ? " per min" : ""}</text
                        >
                    </g>
                {/each}
            </g>

            <!-- x axis -->
            <g class="axis x-axis">
                {#each points as point, i}
                    <g class="tick" transform="translate({xScale(i)},{height})">
                        <text x={barWidth / 2} y="-4"
                            >{width > 380
                                ? point.year
                                : formatMobile(point.year)}</text
                        >
                    </g>
                {/each}
            </g>

            <g class="bars">
                {#each points as point, i}
                    <rect
                        x={xScale(i) + 2}
                        y={yScale(point.birthrate)}
                        width={barWidth - 4}
                        height={yScale(0) - yScale(point.birthrate)}
                        style={`animation-delay: 0.${i}s;`}
                    />
                {/each}
            </g>
        </svg>
    </div>
</main>

<style>
    .chart_box {
        padding: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    h2 {
        text-align: center;
    }

    .chart-container {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }

    .chart {
        width: 100%;
        height: 200px;
    }

    svg {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .tick {
        font-family: Helvetica, Arial;
        font-size: 0.725em;
        font-weight: 200;
    }

    .tick line {
        stroke: #e2e2e2;
        stroke-dasharray: 2;
    }

    .tick text {
        fill: #516f98fe;
        text-anchor: start;
        font-weight: bold;
        font-size: 2vh;
    }

    .tick.tick-0 line {
        stroke-dasharray: 0;
    }

    .x-axis .tick text {
        text-anchor: middle;
    }

    .bars rect {
        fill: #516f9876;
        stroke: none;
        opacity: 0;
        animation: apear_bars 0.9s ease-in forwards;
    }

    @keyframes apear_bars {
        from {
            opacity: 0;
            transform: translateY(100%); /* Start from off-screen */
        }
        to {
            opacity: 0.65;
            transform: translateY(0); /* Move to the correct position */
        }
    }
</style>
