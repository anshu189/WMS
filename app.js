// Tab Switching
const tabs = document.querySelectorAll('[data-tab-target')
const tabContents = document.querySelectorAll('[data-tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

// Getting Pickup Form's Data

function hue(){
    var namu=document.getElementById("fname").value;
    // console.log(namu);
    var addr=document.getElementById("faddr").value;
    var zcode=document.getElementById("zcode").value;
    localStorage.setItem("name",namu);
    var datetime=document.getElementById("fpickupdatetime").value;
    var wcateg=document.getElementsByName("input[name='wcateg']:checked").value;
    var wamt=document.getElementsByName("fwamt").value;
    var wsnap=document.getElementsByName("wsnap").value;

    console.log(namu, addr, zcode, datetime, wcateg, wamt, wsnap);
    // console.log(namu, addr, zcode);
}