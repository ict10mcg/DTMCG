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

        // Check for saved dark mode preference (removed localStorage usage)
        // Add entrance animations
        window.addEventListener('load', () => {
            const gradeButtons = document.querySelectorAll('.grade-btn');
            const welcomeSection = document.querySelector('.welcome-section');
            const creditsSection = document.querySelector('.credits-section');
            
            welcomeSection.style.opacity = '0';
            welcomeSection.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                welcomeSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                welcomeSection.style.opacity = '1';
                welcomeSection.style.transform = 'translateY(0)';
            }, 200);
            
            gradeButtons.forEach((btn, index) => {
                btn.style.opacity = '0';
                btn.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    btn.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    btn.style.opacity = '1';
                    btn.style.transform = 'translateY(0)';
                }, 400 + (index * 150));
            });

            // Animate credits section
            creditsSection.style.opacity = '0';
            creditsSection.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                creditsSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                creditsSection.style.opacity = '1';
                creditsSection.style.transform = 'translateY(0)';
            }, 1000);
        });

        // Add click ripple effect
        document.querySelectorAll('.grade-btn, .person-card').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.background = 'rgba(255, 255, 255, 0.3)';
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.pointerEvents = 'none';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
