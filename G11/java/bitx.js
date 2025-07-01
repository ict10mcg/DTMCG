// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("hi2");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                toggleBtn.innerText = "☀️";
            } else {
                toggleBtn.innerText = "🌙";
            }
        });
    }
});

// Main function to update class data
You said:
Ceteat a function that works call by button that change the switch the time among the const periodTimings = [
    { start: "00:30", end: "07:49", id: "No School" },
    { start: "7:50", end: "8:30", id: "period1" }, 
    { start: "8:31", end: "9:10", id: "period2" },
    { start: "9:11", end: "9:50", id: "period3" },
    { start: "9:51", end: "9:59", id: "period4" },
    { start: "10:00", end: "10:30", id: "period4" },


    { start: "10:31", end: "10:50", id: "period5" }, // Interval


    
    { start: "10:51", end: "11:30", id: "period6" },
    { start: "11:31", end: "12:10", id: "period7" },
    { start: "12:11", end: "12:50", id: "period8" },
    { start: "12:51", end: "13:30", id: "period9" },
    { start: "13:31", end: "23:59", id: "No School" }
];   times i need ad that function to this async function updateClassData() {
    const now = new Date();
    const sriLankaTime = now.toLocaleString("en-US", { timeZone: "Asia/Colombo" });
    const sriLankaDate = new Date(sriLankaTime);

    const currentDay = sriLankaDate.toLocaleDateString("en-US", { weekday: "long" });
    const currentTime = sriLankaDate.getHours() + ":" + sriLankaDate.getMinutes().toString().padStart(2, "0");
    
    document.getElementById("Neth").textContent = currentTime;
    document.getElementById("This").textContent = currentDay;

    const teacherDataForDay = teacherDataByDay[currentDay] || {};
    const reliefDataForDay = reliefData[currentDay] || {};

    // Find current period first
    let currentPeriod = null;
    periodTimings.forEach(period => {
        if (currentTime >= period.start && currentTime < period.end) {
            currentPeriod = period;
        }
    });

    if (currentPeriod) {
        document.getElementById("Rak").textContent = currentPeriod.id;
        console.log(Current period: ${currentPeriod.id}, Time: ${currentTime});
        
        // Check if any class has an optional subject in this period
        const classKeys = ['classA', 'classB', 'classC', 'classD', 'classE', 'classF'];
        let optionalSubject = null;
        
        // First, check what subjects each class has for this period
        classKeys.forEach(classKey => {
            const reliefTeacherId = reliefDataForDay[classKey]?.[currentPeriod.id];
            const teacherId = reliefTeacherId || teacherDataForDay[classKey]?.[currentPeriod.id];
            console.log(${classKey} - ${currentPeriod.id}: ${teacherId});
            
            if (teacherId && teacherId.startsWith("OPT")) {
                optionalSubject = teacherId;
            }
        });


ChatGPT said:
You can add a button-triggered function to simulate switching time across your predefined periodTimings, and then use it within your updateClassData() function. Below is a working version of the solution.

✅ Full Implementation
html
Copy
Edit
<button onclick="switchToNextPeriod()">Switch Period</button>
<span id="Neth"></span>
<span id="This"></span>
<span id="Rak"></span>
js
Copy
Edit
const periodTimings = [
    { start: "00:30", end: "07:49", id: "No School" },
    { start: "7:50", end: "8:30", id: "period1" },
    { start: "8:31", end: "9:10", id: "period2" },
    { start: "9:11", end: "9:50", id: "period3" },
    { start: "9:51", end: "9:59", id: "period4" },
    { start: "10:00", end: "10:30", id: "period4" },
    { start: "10:31", end: "10:50", id: "period5" }, // Interval
    { start: "10:51", end: "11:30", id: "period6" },
    { start: "11:31", end: "12:10", id: "period7" },
    { start: "12:11", end: "12:50", id: "period8" },
    { start: "12:51", end: "13:30", id: "period9" },
    { start: "13:31", end: "23:59", id: "No School" }
];

let simulatedIndex = 0;

function switchToNextPeriod() {
    // Simulate time based on periodTimings
    if (simulatedIndex >= periodTimings.length) simulatedIndex = 0;
    
    const startTime = periodTimings[simulatedIndex].start;
    const [hour, minute] = startTime.split(":").map(Number);

    // Create a fake date object with simulated time
    const now = new Date();
    now.setHours(hour, minute, 0, 0);

    // Save simulated time for use in updateClassData
    window.simulatedTime = now;
    updateClassData();

    simulatedIndex++;
}

async function updateClassData() {
    const now = window.simulatedTime || new Date();
    const sriLankaTime = now.toLocaleString("en-US", { timeZone: "Asia/Colombo" });
    const sriLankaDate = new Date(sriLankaTime);

    const currentDay = sriLankaDate.toLocaleDateString("en-US", { weekday: "long" });
    const currentTime = sriLankaDate.getHours() + ":" + sriLankaDate.getMinutes().toString().padStart(2, "0");

    document.getElementById("Neth").textContent = currentTime;
    document.getElementById("This").textContent = currentDay;

    const teacherDataForDay = teacherDataByDay?.[currentDay] || {};
    const reliefDataForDay = reliefData?.[currentDay] || {};

    let currentPeriod = null;
    periodTimings.forEach(period => {
        if (currentTime >= period.start && currentTime < period.end) {
            currentPeriod = period;
        }
    });

    if (currentPeriod) {
        document.getElementById("Rak").textContent = currentPeriod.id;
        console.log(`Current period: ${currentPeriod.id}, Time: ${currentTime}`);

        const classKeys = ['classA', 'classB', 'classC', 'classD', 'classE', 'classF'];
        let optionalSubject = null;

        classKeys.forEach(classKey => {
            const reliefTeacherId = reliefDataForDay[classKey]?.[currentPeriod.id];
            const teacherId = reliefTeacherId || teacherDataForDay[classKey]?.[currentPeriod.id];
            console.log(`${classKey} - ${currentPeriod.id}: ${teacherId}`);

            if (teacherId && teacherId.startsWith("OPT")) {
                optionalSubject = teacherId;
            }
        });
    } else {
        document.getElementById("Rak").textContent = "Unknown";
    }
    }
        // Handle the period based on what we found
        if (currentPeriod.id === "period5") {
            console.log("Interval period detected");
            handleInterval();
        } else if (optionalSubject) {
            console.log(`Optional subject detected: ${optionalSubject}`);
            // First handle all regular classes
            classKeys.forEach(classKey => {
                handleClassPeriod(classKey, currentPeriod, teacherDataForDay, reliefDataForDay);
            });
            // Then handle the optional subjects (this will hide/show appropriate classes)
            handleOptionalSubjects(optionalSubject, null, currentPeriod.id);
        } else {
            // Regular period - handle each class individually
            classKeys.forEach(classKey => {
                handleClassPeriod(classKey, currentPeriod, teacherDataForDay, reliefDataForDay);
            });
            // Make sure optional subjects are hidden in regular periods
            handleOptionalSubjects(null, null, currentPeriod.id);
        }
    }
}

function handleClassPeriod(classKey, period, teacherDataForDay, reliefDataForDay) {
    const reliefTeacherId = reliefDataForDay[classKey]?.[period.id];
    const teacherId = reliefTeacherId || teacherDataForDay[classKey]?.[period.id];

    const imgId = `img${classKey.charAt(5).toUpperCase()}`;
    const nameId = `name${classKey.charAt(5).toUpperCase()}`;
    const subjectId = `subject${classKey.charAt(5).toUpperCase()}`;

    if (teacherId && teachers[teacherId]) {
        const teacher = teachers[teacherId];
        loadTeacherImage(teacher, imgId, nameId, subjectId);
    } else if (reliefTeacherId) {
        setReliefTeacher(imgId, nameId, subjectId);
    } else {
        setDefaultClassInfo(classKey, imgId, nameId, subjectId);
    }
}

function loadTeacherImage(teacher, imgId, nameId, subjectId) {
    const img = new Image();
    img.src = teacher.img;
    img.onerror = () => {
        document.getElementById(imgId).src = "https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg";
    };
    img.onload = () => {
        document.getElementById(imgId).src = teacher.img;
    };
    document.getElementById(nameId).textContent = teacher.name;
    document.getElementById(subjectId).textContent = teacher.subjects;
}

function setReliefTeacher(imgId, nameId, subjectId) {
    document.getElementById(imgId).src = "https://placehold.co/600x400?text=Relief";
    document.getElementById(nameId).textContent = "Relief Teacher";
    document.getElementById(subjectId).textContent = "Relief";
}

/**
 * Handles the interval period (period5) by hiding all class and optional subject elements,
 * and showing only the interval elements.
 */
function handleInterval() {
    // IDs of class and optional subject elements to hide during interval
    const classesToHide = [
        "classA", "classB", "classC", "classD", "classE", "classF",
        "opta", "optb", "optc", "opta2", "optb2", "optc2"
    ];
    hideElementsByIds(classesToHide);

    // IDs of interval elements to show during interval
    const intervalElementsToShow = ["int1", "int2", "int3"];
    showElementsByIds(intervalElementsToShow);
}

/**
 * Adds the 'hide' class to elements with the given IDs to hide them.
 * @param {string[]} elementIds - Array of element IDs to hide.
 */
function hideElementsByIds(elementIds) {
    elementIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            console.log(`Hiding element with id: ${id}`);
            el.classList.add("hide");
            el.classList.remove("square");
            // Also hide all child elements inside this element
            Array.from(el.children).forEach(child => {
                child.classList.add("hide");
            });
        } else {
            console.log(`Element with id: ${id} not found`);
        }
    });
}

/**
 * Removes the 'hide' class and adds the 'square' class to elements with the given IDs to show them.
 * @param {string[]} elementIds - Array of element IDs to show.
 */
function showElementsByIds(elementIds) {
    elementIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove("hide");
            el.classList.add("square");
        }
    });
}

function setDefaultClassInfo(classKey, imgId, nameId, subjectId) {
    document.getElementById(imgId).src = "Image/nsch.png";
    document.getElementById(nameId).textContent = `Class ${classKey.charAt(5).toUpperCase()}`;
    document.getElementById(subjectId).textContent = "Subject";
}

function handleOptionalSubjects(teacherId, classKey, periodId) {
    const optionDetails = {
        "OPT1A": { hideClasses: ["classA", "classB", "classC"], showClasses: ["opta", "optb", "optc"], details: ['<br>K.L.U.Kumari<br>R.D.N.Rathnayaka<br>', 'OPT 1<br>R.D.N.Rathnayaka-<br>Rev. M.Nandasiri<br>', '<br>U.J.T. Chamari<br>M.V.H.D.gunasekara<br>'] },
        "OPT1B": { hideClasses: ["classD", "classE", "classF"], showClasses: ["opta2", "optb2", "optc2"], details: ['<br>A.S.Manoja<br>R.D.N.Rathnayaka<br>', 'OPT 1<br>M.W.K.Liyange<br>P.G.P.W. Sewwandi<br>', '<br>K.L.U. Kumari<br>Rev. M.Nandasiri<br>U.G.R.Dilrukshi'] },
        "OPT2A": { hideClasses: ["classA", "classB", "classC"], showClasses: ["opta", "optb", "optc"], details: ['<br>M.M. Gothami Gunapali<br>S.T. Indrani<br>', 'OPT 2<br>P.D. Kariyawasam<br>Nilmini Wewalwala<br>', '<br>B.A.C. Priyakalum<br>A.M. Ranasingha Adikari<br>Sandamali Ilesinghe'] },
        "OPT2B": { hideClasses: ["classD", "classE", "classF"], showClasses: ["opta2", "optb2", "optc2"], details: ['<br>G.W. Chamara Rosan<br>M.M. Gothami Gunapali<br>', 'OPT 2<br>H.G. Mangalika<br>S.A. Nayana Preethi Kumari<br>', '<br>B.A.C. Priyakalum<br>A.M. Ranasingha Adikari<br>Nilmini Wewalwala'] },
        "OPT3A": { hideClasses: ["classA", "classB", "classC"], showClasses: ["opta", "optb", "optc"], details: ['<br>M.W. Ajith<br>E.M.D.Dayarathna', 'OPT 3', '<br>M.Gunawardana<br>W.T.K. Kosali<br>'] },
        "OPT3B": { hideClasses: ["classD", "classE", "classF"], showClasses: ["opta2", "optb2", "optc2"], details: ['<br>L.L.L.Sadamali Thilakarathane<br>W.H.G. Nishani<br>M.W. Ajith', 'OPT 3<br>M.W.Chamila<br>Y. Nishantha Kumara', '<br>N.L.P.N. Narasinghe<br>J.D.Samantha<br>W.T.K.Kosali'] }
    };

    if (optionDetails[teacherId]) {
        const { hideClasses, showClasses, details } = optionDetails[teacherId];
        hideClasses.forEach(classId => document.getElementById(classId).classList.add("hide"));
        showClasses.forEach((showClass, index) => {
            const element = document.getElementById(showClass);
            element.classList.remove("hide");
            element.classList.add("opt");
            if (showClass.endsWith('2')) {
                document.getElementById(`opt${index + 1}2`).innerHTML = details[index];
            } else {
                document.getElementById(`opt${index + 1}`).innerHTML = details[index];
            }
        });
    } else {
        // Hide all opt groups
        ["opta", "optb", "optc", "opta2", "optb2", "optc2"].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add("hide");
                el.classList.remove("opt");
            }
        });
        // Show all default classes
        ["classA", "classB", "classC", "classD", "classE", "classF"].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove("hide");
            }
        });
    }
}

// Update data every minute
updateClassData();
setInterval(updateClassData, 60000);
