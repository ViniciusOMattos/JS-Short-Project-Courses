const box_1 = document.querySelector(".box-1");

box_1.animate
([
    {
        borderRadius: "0px", 
        transform: "none",
    },
    {
        transform: "translate(0, 300px)",
        borderRadius:"50%"
    }],
    {
        duration: 2000,
        fill: "both", 
        easing: "ease-in-out", 
    }
).finished.then(() => {
        box_1.animate([
            {
                transform: "translate(200px, 30px)",
                backgroundColor: "#f95",
                borderRadius: "0px",
            }], {
                delay:500,
                fill: "both",
                easing: "ease-in-out",
                duration: 1000,
            })
    })