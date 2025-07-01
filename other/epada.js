function toggleDarkMode() {
    const body = document.body;
    const toggleBtn = document.querySelector('.toggle-btn');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerHTML = '☀️';
    } else {
        toggleBtn.innerHTML = '🌙';
    }
}

function navigateToGrade(grade) {
    // Grade page URLs
    const gradeUrls = {
        9: 'G9/index.html',
        10: 'G10/index.html',
        11: 'G11/index.html'
    };
    
    // Check if grade exists
    if (gradeUrls[grade]) {
        console.log(`Navigating to Grade ${grade}...`);
        
        // Show loading message
        const loadingMsg = document.createElement('div');
        loadingMsg.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                        background: rgba(0,0,0,0.8); color: white; padding: 20px; 
                        border-radius: 10px; z-index: 9999;">
                <div style="text-align: center;">
                    <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; 
                                border-radius: 50%; width: 40px; height: 40px; 
                                animation: spin 1s linear infinite; margin: 0 auto 10px;"></div>
                    <p>Loading Grade ${grade} Timetable...</p>
                </div>
            </div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
        document.body.appendChild(loadingMsg);
        
        // Auto redirect after 1 second
        setTimeout(() => {
            window.location.href = gradeUrls[grade];
        }, 1000);
        
    } else {
        // Error handling for invalid grade
        alert(`Grade ${grade} not found! Available grades: 9, 10, 11`);
        console.error(`Invalid grade: ${grade}`);
    }
}

// Add entrance animations
window.addEventListener('load', () => {
    const gradeButtons = document.querySelectorAll('.grade-btn');
    const welcomeSection = document.querySelector('.welcome-section');
    const creditsSection = document.querySelector('.credits-section');
    
    welcomeSection.style.opacity = '0';
    welcomeSection.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        welcomeSection.style.transition = 'opacity 0.6s ease, transform
