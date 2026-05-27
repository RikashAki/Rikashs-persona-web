let curtain, mainMenu, subPage, pageTitle, pageBody, hoverSound, selectSound, content, buttons;

// 2. Wait for the page to load before grabbing elements
window.addEventListener("DOMContentLoaded", () => {
    curtain = document.getElementById("transition-curtain");
    mainMenu = document.getElementById("main-menu");
    subPage = document.getElementById("sub-page");
    pageTitle = document.getElementById("page-title");
    pageBody = document.getElementById("page-body");
    
    hoverSound = document.getElementById("hover-sound");
    selectSound = document.getElementById("select-sound");
    content = document.getElementById("content");
    buttons = document.querySelectorAll(".btn");

    // 3. Set up button sounds inside the loader
    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            if (hoverSound) {
                hoverSound.currentTime = 0;
                hoverSound.play().catch(e => console.log("Audio blocked"));
            }
        });

        btn.addEventListener("click", () => {
            if (selectSound) {
                selectSound.currentTime = 0;
                selectSound.play().catch(e => console.log("Select sound error"));
            }
        });
    });
});

// 4. Navigation Functions
function navigateTo(section) {
    if (!curtain) return;

    curtain.classList.add("curtain-active");

    setTimeout(() => {
        mainMenu.style.display = "none";
        subPage.style.display = "flex";

        if (section === "about") {
            pageTitle.innerText = "WHO IS RIKASH?";
            pageBody.innerHTML = "HEYOOO IM RIKASHHH! A fresh developer making cool websites and games from scratch!i ALSO can rig simple vtubers!";
            subPage.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('submenu.jpg')";
        } 
        
        else if (section === "resume") {
            pageTitle.innerText = "RESUME";
            pageBody.innerHTML = `
        <div style="text-align: left; font-size: 24px;">
            <p><strong><span style="color: #ff0000;">></span> SKILLS:</strong>HTML5 (Lv. 8), CSS3 (Lv. 7), JavaScript (Lv. 5), Game Design (EXP Gaining).</p>
            <p><strong><span style="color: #ff0000;">></span> TOOLS:</strong> VS Code, Github, Live2D cubsim, netlify, Ren'Py.</p>
            <p><strong><span style="color: #ff0000;">></span> CURRENT FOCUS:</strong> Game Development & Interactive Web UI & Simple Rigging.</p>
            <hr style="border-color: #c50a0a;">
            <p style="font-size: 20px;">Leveling up my skills in web and game development also in rigging. I specialize in building projects with a unique 'edge' and creative UI.</p>
        </div>
    `;
            subPage.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('resume.jpg')";
        } 
        
        else if (section === "socials") {
            pageTitle.innerText = "SOCIALS";

            pageBody.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:15px; align-items:center;">

            <a href="https://x.com/Rikashyuu"
               target="_blank"
               class="social-btn">
               X / TWITTER
            </a>

            <a href="https://github.com/RikashAki"
               target="_blank"
               class="social-btn">
               GITHUB
            </a>

        </div>
         `;

            subPage.style.backgroundImage =
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('socials.jpg')";
        } 
        
        else if (section === "projects") {
            pageTitle.innerText = "SIDE PROJECTS";

            pageBody.innerHTML = `
               <div style="text-align: center;">
                    <p>Still working on my game! Also, ever wanted a calculator with an attitude problem?</p>

                    <a href="https://github.com/RikashAki/acalculatorthatbulliesyou" 
                       target="_blank" 
                       class="social-btn" 
                       style="display: block; margin-top: 20px;">
                       VIEW BULLY CALCULATOR
                   </a>
              </div>
         `;

            subPage.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('sideprojects.jpg')";
        }

        curtain.classList.remove("curtain-active");

    }, 600);
}

function goToHome() {
    curtain.classList.add("curtain-active");

    setTimeout(() => {
        subPage.style.display = "none";
        mainMenu.style.display = "flex";
        curtain.classList.remove("curtain-active");
    }, 600);
}