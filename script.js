// ===== PART 2: JAVASCRIPT FUNCTIONS - SCOPE, PARAMETERS & RETURN VALUES =====
        
        // Global scope variables
        let globalCounter = 0;
        let progressInterval;
        
        /**
         * Function demonstrating parameters and return values
         * @param {number} min - Minimum value
         * @param {number} max - Maximum value  
         * @returns {number} Random number between min and max
         */
        function getRandomNumber(min, max) {
            // Local scope variable
            const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomValue; // Return value demonstration
        }
        
        /**
         * Function with parameters that calculates a random increment
         * @returns {number} Random increment value
         */
        function calculateRandomIncrement() {
            // Using the getRandomNumber function with parameters
            const increment = getRandomNumber(1, 10);
            console.log(`Generated random increment: ${increment}`); // Local scope demonstration
            return increment;
        }
        
        /**
         * Function demonstrating scope and parameter usage
         * @param {number} change - Amount to change counter by
         */
        function updateCounter(change) {
            // Accessing global scope variable
            globalCounter += change;
            
            // Local scope variable for the display element
            const counterElement = document.getElementById('counterValue');
            counterElement.textContent = globalCounter;
            
            // Demonstrate return values in conditional logic
            const isPositive = validatePositiveNumber(globalCounter);
            if (isPositive) {
                counterElement.style.color = '#2ecc71';
            } else {
                counterElement.style.color = '#e74c3c';
            }
            
            // Local scope: This variable only exists within this function
            const changeMessage = `Counter ${change > 0 ? 'increased' : 'decreased'} by ${Math.abs(change)}`;
            console.log(changeMessage);
        }
        
        /**
         * Function with parameter and return value for validation
         * @param {number} number - Number to validate
         * @returns {boolean} True if positive, false if negative or zero
         */
        function validatePositiveNumber(number) {
            return number > 0; // Simple return value demonstration
        }
        
        /**
         * Function demonstrating scope - resets global variable
         */
        function resetCounter() {
            globalCounter = 0; // Modifying global scope
            const counterElement = document.getElementById('counterValue');
            counterElement.textContent = globalCounter;
            counterElement.style.color = '#4a5568'; // Reset color
        }
        
        // ===== PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT =====
        
        /**
         * Function that handles button clicks and triggers CSS animations
         * @param {HTMLElement} button - The button that was clicked
         * @param {string} animationType - Type of animation to trigger
         */
        function handleButtonClick(button, animationType) {
            // Add ripple effect to button (CSS animation triggered by JS)
            button.classList.add('ripple');
            setTimeout(() => {
                button.classList.remove('ripple');
            }, 600);
            
            // Get the animated box and apply CSS class for animation
            const box = document.getElementById('animatedBox');
            
            // Remove any existing animation classes
            box.classList.remove('bounce', 'rotate', 'shake');
            
            // Add the new animation class
            box.classList.add(animationType);
            
            // Remove animation class after animation completes
            setTimeout(() => {
                box.classList.remove(animationType);
            }, 600);
        }
        
        /**
         * Function that creates floating particles using CSS animations
         * @param {HTMLElement} sourceElement - Element that triggered the effect
         */
        function createParticles(sourceElement) {
            const particleCount = getRandomNumber(5, 15); // Using our parameter/return value function
            
            for (let i = 0; i < particleCount; i++) {
                // Local scope variables for each particle
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random positioning (demonstrating local scope)
                const randomX = getRandomNumber(0, window.innerWidth - 20);
                const randomY = getRandomNumber(0, window.innerHeight - 20);
                const randomDelay = getRandomNumber(0, 1000);
                
                particle.style.left = randomX + 'px';
                particle.style.top = randomY + 'px';
                particle.style.animationDelay = randomDelay + 'ms';
                
                document.body.appendChild(particle);
                
                // Remove particle after animation (cleanup)
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 3000);
            }
        }
        
        /**
         * Function that toggles loading spinner animation
         */
        function toggleSpinner() {
            const spinner = document.getElementById('loadingSpinner');
            // Toggle CSS class to start/stop animation
            spinner.classList.toggle('active');
        }
        
        /**
         * Function that starts progress bar animation
         */
        function startProgressAnimation() {
            const progressBar = document.getElementById('progressBar');
            let progress = 0;
            
            // Clear any existing interval (avoiding memory leaks)
            if (progressInterval) {
                clearInterval(progressInterval);
            }
            
            // Reset progress
            progressBar.style.width = '0%';
            
            // Animate progress using JavaScript + CSS transitions
            progressInterval = setInterval(() => {
                progress += getRandomNumber(1, 5); // Using our parameter function
                
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(progressInterval);
                }
                
                // JavaScript modifies CSS property, CSS handles smooth transition
                progressBar.style.width = progress + '%';
            }, 100);
        }
        
        /**
         * Function that shows modal with CSS animations
         */
        function showModal() {
            const modal = document.getElementById('demoModal');
            // Add CSS class to trigger animation
            modal.classList.add('show');
        }
        
        /**
         * Function that hides modal with CSS animations
         */
        function hideModal() {
            const modal = document.getElementById('demoModal');
            // Remove CSS class to trigger exit animation
            modal.classList.remove('show');
        }
        
        /**
         * Function that flips cards with CSS animations
         * @param {HTMLElement} card - Card element to flip
         */
        function flipCard(card) {
            // Toggle CSS class for flip animation
            card.classList.toggle('flipped');
            
            // Demonstrate return value usage in conditional
            const isFlipped = checkFlippedState(card);
            console.log(`Card is ${isFlipped ? 'flipped' : 'normal'}`);
        }
        
        /**
         * Function with return value to check card state
         * @param {HTMLElement} card - Card element to check
         * @returns {boolean} True if flipped, false otherwise
         */
        function checkFlippedState(card) {
            return card.classList.contains('flipped');
        }
        
        /**
         * Function that demonstrates advanced CSS + JS integration
         * @param {HTMLElement} button - Button that triggered the animation
         */
        function animateSection(button) {
            // Find the parent section
            const section = button.closest('.section');
            
            // Create temporary CSS class for special animation
            section.style.transform = 'scale(0.95) rotateX(5deg)';
            section.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            
            setTimeout(() => {
                section.style.transform = 'scale(1) rotateX(0deg)';
            }, 200);
            
            // Reset styles after animation
            setTimeout(() => {
                section.style.transform = '';
                section.style.transition = '';
            }, 700);
        }
        
        // Event listener for ESC key to close modal (demonstrating event handling)
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                hideModal();
            }
        });
        
        // Initialize some animations on page load
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Animation Playground loaded! Global counter initialized to:', globalCounter);
            
            // Demonstrate that functions can be called with different parameters
            console.log('Random number 1-10:', getRandomNumber(1, 10));
            console.log('Random number 50-100:', getRandomNumber(50, 100));
        });
