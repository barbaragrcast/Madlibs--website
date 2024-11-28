document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("madlibs-form");
    const storyOutput = document.getElementById("story-output");
    const backButton = document.getElementById("back-button");
    const storyAudio = document.getElementById("story-audio");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        
        const name = document.getElementById("name").value;
        const adjective = document.getElementById("adjective").value;
        const color = document.getElementById("color").value.toLowerCase();
        const verb = document.getElementById("verb").value;
        const emotion = document.getElementById("emotion").value;
        const animal = document.getElementById("animal").value;

        
        const story = `
            Once upon a time, there was a legendary warrior named 
            <span class="colored-text" style="color: ${color}">${name}</span>. They wielded a 
            <span class="colored-text" style="color: ${color}">${adjective}</span> sword and wore shining 
            <span class="colored-text" style="color: ${color}">${color}</span> armor. One day, as they were
            <span class="colored-text" style="color: ${color}">${verb}</span> through their village, a thunderous 
            roar echoed across the land. Instantly alert, they set off to find the source, 
            their heart pounding with <span class="colored-text" style="color: ${color}">${emotion}</span> as the 
            ground trembled beneath their feet. Hiding among the bushes, they gripped their 
            sword tightly, ready to strike. But as they sprang forward, they discovered the 
            fearsome roar was coming from... just a <span class="colored-text" style="color: ${color}">${animal}</span>!
        `;

        
        if (storyAudio) {
            storyAudio.currentTime = 0; 
            storyAudio.play().catch((error) => {
                console.error("Audio playback failed:", error);
            });
        }

        
        typeWriterEffect(story, storyOutput);
    });

    
    backButton.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    
    function typeWriterEffect(text, outputElement) {
        outputElement.innerHTML = "";
        let index = 0;
        let result = "";
        let isTag = false;
        let tag = "";

        function type() {
            if (index < text.length) {
                const char = text.charAt(index);

                if (char === "<") {
                    
                    isTag = true;
                    tag = "<";
                } else if (char === ">") {
                    
                    isTag = false;
                    tag += ">";
                    result += tag; 
                } else if (isTag) {
                    
                    tag += char;
                } else {
                    
                    result += char;
                }

                outputElement.innerHTML = result; 
                index++;
                setTimeout(type, 30); 
            }
        }

        type();
    }
});
