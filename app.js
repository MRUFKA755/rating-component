const ratePage = document.querySelector(".rate")
const thanksPage = document.querySelector(".thanks")
const rateBtn = document.querySelectorAll(".rating")
const submitBtn = document.querySelector(".submit")
const selected = document.querySelector(".selected")

submitBtn.addEventListener("click", () => {
    ratePage.classList.add("hidden")
    thanksPage.classList.remove("hidden")
})
rateBtn.forEach((rate) =>
    rate.addEventListener("click", () => {
        selected.textContent = `You selected ${rate.textContent} out of 5`
    })
)