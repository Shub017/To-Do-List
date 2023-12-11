console.log("Script Loaded");
var count = 0;



(() => {
    // Define newevent first
    let isdelTrue = false;
    const taskCounter = document.getElementById("taskCounter");
    const addButton = document.getElementById("addButton");
    const containerList = document.getElementById("containerList")

    function taskRemCount(){
        taskCounter.innerText = count;
    }

    // Define addNewActivity before using it in the event listener
    const addNewActivity = () => {
        console.log("Function Ran")
        var newevent = document.getElementById("exampleInput");
        var inputValue = newevent.value.trim(); // Trim to remove leading and trailing spaces
        if (inputValue === "") {
            console.log("Invalid Input");
        }
        else{
            // Create container for the new activity
            const activityContainer = document.createElement("div");

            const currentDate = new Date();  // Get current date and time
            const formattedTime = currentDate.toLocaleTimeString();  // Format the date as a string

            count++;
            taskRemCount();
            const leftText = document.createElement("div")
            leftText.className = "leftText";
            leftText.textContent = formattedTime;

            const middleText = document.createElement("div")
            middleText.className = "middleText";
            middleText.textContent = inputValue;

            // Adding checkbox 

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkBox";

            // Adding checkbox event Listner to the checkbox
            checkbox.addEventListener("change", ()=>{
                if(checkbox.checked){
                    count--;
                    taskRemCount();
                    const image = document.createElement("img");
                    image.src = "G:\\Web_Page\\Skill-Test\\Images\\verified.png";
                    image.alt = "Activity Completed";
                    image.className = "activityDone";
                    activityContainer.appendChild(image);
                }
                else {
                    count++;
                    taskRemCount();
                    const existingImage = activityContainer.querySelector(".activityDone");
                    if (existingImage) {
                        existingImage.remove();
                    }
                }
            })

            // Creating a button to delete activity from todo list
            const rightImage = document.createElement("img");
            rightImage.src = "G:\\Web_Page\\To-Do-list\\bin.png";
            rightImage.alt = "-";
            rightImage.className = "rightImage";

            // Event listner for button
            rightImage.addEventListener("click", ()=>{
                if (isdelTrue != true){
                    isdelTrue = true
                activityContainer.classList.add('fadeOut');
                console.log("Delete event triggered");
                activityContainer.addEventListener('animationend', () => {
                    activityContainer.remove();
                    count--;
                    taskRemCount();
                    isdelTrue = false;
                });
            }
            })
        


            // Append elements to the container for the new activity
            activityContainer.appendChild(leftText);
            activityContainer.appendChild(middleText);
            activityContainer.appendChild(checkbox);
            activityContainer.appendChild(rightImage);

            // Set the margin-top for the new activity container
            activityContainer.style.marginTop = "30px";
            // activityContainer.style.border = "2px solid black"; 
            // activityContainer.style.borderStyle = "dotted";

            // Set the size of the container explicitly
            // activityContainer.style.height = "50px";
            activityContainer.style.boxSizing = "border-box";  // Include border and padding in total width and height

            // Append the container for the new activity to the containerList
            
            containerList.appendChild(activityContainer);

            // Clear input field
            newevent.value = "";
        }
    };

    // trigger events for add buttons
    addButton.addEventListener("click", addNewActivity);
    document.getElementById("exampleInput").addEventListener("keydown", (event)=>{
        if (event.key === "Enter"){
            addNewActivity();
        }
    })
})();
