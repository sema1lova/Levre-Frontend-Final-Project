let count = 1;

document.querySelector(".span-minus").addEventListener("click",() =>{
    if (count > 1) {
        count--;
        document.querySelector(".pro-count").innerText = count;

    }
})

document.querySelector(".span-plus").addEventListener("click",() =>{
    count++;
    document.querySelector(".pro-count").innerText = count;

})


