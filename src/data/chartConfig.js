export const data = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    datasets: [
        {
            data: [0,2,4,6,10,12,13,15,18,15,13,17,18,22,24,25,25,23,20,22,28,27,28,27,26,24,27,28,29,29],
            lineTension: 0.4,
            borderColor: "#7445FB",
        },
        {
            data: [0,4,4,6,10,12,11,10,9,11,14,15,13,10,12,17,15,14,15,12,11,9,8,6,9,12,14,12,10,12],
            lineTension: 0.4,
            borderDash: [5, 3],
            borderColor: "gray",
        },
    ],
};

export const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: false, // Hide legend
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, ticks) {
                    return value + "k";
                },
            },
        },
    },
    elements: {
        point: {
            radius: 1.5,
        },
    },
};
