const displayAggregate = (agg) => {
    let aggregateResultMarkup = `
        <h4>Olevel Grades</h4>
    `

    for (let i = 0; i <= 4; i++) {
        aggregateResultMarkup += `
            <p><span id="id'>${i + 1}.</span>
            <span id="subject">${inputArray[i].value}</span> 
            <span id="grade">${selectArray[i].value} </span></p>
        `
    }

    aggregateResultMarkup += `
        <h3>UTME Score</h3> 
        <span class="score">${utmeScore} / 400</span> 
        <h3>Post UTME Score</h3>
        <span class="score">${postUtmeScore} / 30</span>
        <h3 class="aggregate">Aggregate Score</h3>
        <span class="score aggregate">${Math.round(agg * 100) / 100}% / 100%</span>
    `

    document.querySelector(".aggregate-result").innerHTML = aggregateResultMarkup;
}