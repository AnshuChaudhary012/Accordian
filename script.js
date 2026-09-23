
const parent = document.querySelector(".parent");


let accordian = [
    {
        heading : "Group-1",
        para : "Nibh dictum nulla morbi ornare. Varius sit at eget nunc. Nibh dictum nulla morbi ornare. Varius sit at eget nunc. Nibh dictum nulla morbi ornare. Varius sit at eget nunc."
    },
    {
        heading : "Group-1",
        para : "Nibh dictum nulla morbi ornare. Varius sit at eget nunc. Nibh dictum nulla morbi ornare. Varius sit at eget nunc. Nibh dictum nulla morbi ornare. Varius sit at eget nunc."
    },
    {
        heading : "Group-1",
        para : "Nibh dictum nulla morbi ornare. Varius sit at eget nunc. Nibh dictum nulla morbi ornare. Varius sit at eget nunc. Nibh dictum nulla morbi ornare. Varius sit at eget nunc."
    },
    {
        heading : "Group-1",
        para : "Nibh dictum nulla morbi ornare. Varius sit at eget nunc. Nibh dictum nulla morbi ornare. Varius sit at eget nunc. Nibh dictum nulla morbi ornare. Varius sit at eget nunc."
    },
    {
        heading : "Group-1",
        para : "Nibh dictum nulla morbi ornare. Varius sit at eget nunc. Nibh dictum nulla morbi ornare. Varius sit at eget nunc. Nibh dictum nulla morbi ornare. Varius sit at eget nunc."
    },
]

accordian.map((inside) => {
    const parent = document.querySelector(".parent");

    parent.innerHTML += `
        <div
            class="accordion max-w-124.5 w-full border border-black/10 rounded-[5px] py-4.5 pr-2.75 pl-4.75"
        >
            <div
                class="accordion-header text-[#808080] cursor-pointer flex items-center justify-between"
            >
                <h1
                    class="accordion-heading  text-base leading-[120%]"
                >
                    ${inside.heading}
                </h1>

                <div class="arrow transition-transform duration-300 ease-in-out">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.293 9.293L12 13.586L7.70703 9.293L6.29303 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
                            fill="#808080"
                        />
                    </svg>
                </div>
            </div>

            <div
                class="content max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out"
            >
                <div class="min-h-0">
                    <p
                        class="para max-w-117 w-full text-base leading-[150%] pt-4.5 text-[#808080]"
                    >
                        ${inside.para}
                    </p>
                </div>
            </div>
        </div>
    `;
});

// now the code here



const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

    const header = accordion.querySelector(".accordion-header");
    const content = accordion.querySelector(".content");
    const arrow = accordion.querySelector(".arrow");

    header.addEventListener("click", () => {

        // Open / close current accordion
        if (content.style.maxHeight) {

            // CLOSE
            content.style.maxHeight = null;
            arrow.classList.remove("rotate-180");
            accordion.classList.remove( "border-[#128DFF]")
            accordion.classList.add( "border-black/10")
            header.classList.add("text-[#808080]")

        } else {

            // OPEN
            content.style.maxHeight = content.scrollHeight + "px";
            arrow.classList.add("rotate-180");
            accordion.classList.remove( "border-black/10")
            accordion.classList.add( "border-[#128DFF]")
            header.classList.remove("text-[#808080]")
        }
    });

});