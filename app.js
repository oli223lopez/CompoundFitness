const modal = document.getElementById('modal-bg')
const closeButton = document.getElementById('closeButton')


const chest = document.getElementById('chest_text')
chest.addEventListener('click', () => openModal('chest'))

const core = document.getElementById('core_text')
core.addEventListener('click', () => openModal('core'))

const leg = document.getElementById('leg_text')
leg.addEventListener('click', () => openModal('leg'))

const back = document.getElementById('back_text')
back.addEventListener('click', () => openModal('back'))

let ul = document.querySelector('ul')

closeButton.addEventListener('click', closeModal)


window.addEventListener('click', clickOutside)

function clickOutside(e){
    if(e.target === modal){
        modal.style.display = 'none'
        let div = document.getElementsByClassName('workouts')[0]
        if (div != undefined) {
            ul.removeChild(div)
        }
    }
    
    
    
    
}

function closeModal(){
    modal.style.display = 'none'
    let div = document.getElementsByClassName('workouts')[0]
    if (div != undefined) {
        ul.removeChild(div)
    }
}



function openModal(muscleValue) {

    modal.style.display = 'block'
    const select = document.querySelector('select')
    select.addEventListener('change', handleChange)
    // console.log('openModal ', select)
    // console.log('openModal ', muscleValue)

    function handleChange(e) {
        e.preventDefault();
        
        addExercises(muscleValue, select.value)
        
        
    }
    select.value = 'default'

}


function addExercises(muscleValue, value) {
    
    let div = document.getElementsByClassName('workouts')[0]

    if (div === undefined) {
        div = document.createElement('div')
        div.classList.add('workouts')
        ul.appendChild(div)
    }

    
    switch (value) {
        case 'Calisthenics':

            switch (muscleValue) {
                case 'chest':
                    div.innerHTML = `
                        <div>
                            <h1 class='novice'>Novice</h1>
                            <h2 class='workoutName'>Push Ups</h2>
                            <img src='./images/push_ups.gif' width=200 height=200>
                            <img src='./images/push_up_female.gif' width=200 height=200>

                            <p class='workoutDescription'>

                            Step-by-Step instructions: 
                            <ol class='workoutInstructions'> 
                                <li> 
                                    Get on the floor on all fours, positioning your hands slightly wider than your shoulders.
                                </li>
                                <li>
                                    Extend your legs back so that you are balanced on your hands and toes. Keep your body in a straight line from head to toe without sagging in the middle or arching your back. 
                                    You can position your feet to be close together or a bit wider depending on what is most comfortable for you.
                                </li>
                                <li>
                                    Before you begin any movement, contract your abs and tighten your core by pulling your belly button toward your spine. Keep a tight core throughout the entire pushup.
                                </li>
                                <li>
                                    Inhale as you slowly bend your elbows and lower yourself untilyour chest graises the floor or until your arms hit 90 degrees
                                </li>
                                <li> 
                                    Exhale as you begin contracting your chest muscles and pushing back up through your hands to the start position. Don't lock out the elbows; keep them slightly bent.
                                </li>

                            </ol>
                            </p>

                            <p class='workoutDescription'>

                            Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>True Beginner: 3 sets of 1-10 reps, 2-3 minute rest between sets. If needed go on knees and perform the pushup.</li>
                                <li>Novice: 5 sets of 5-15 reps, 2-3 minute rest between sets. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Novice/Intermidate: 5 sets of 10-20 reps, 2-3 minute rest between sets.  </li>
                            </ul> 
                            </p>
                            <p class='workoutDescription'>

                            ** For maximum results combine this exercise with the next exercise ** 

                            </p>

                            <h1 class='intermediate'>Intermediate</h1>
                            <h2 class='workoutName'>Dips</h2>
                            <img src='./images/ring_dips.gif' width=200 height=200>
                            
                            <p class='workoutDescription'>
                            
                            Step-by-Step Instructions:
                            <ol> 
                                <li> Grasp the parallel bars(or rings) and hop up so your arms are straight. Lean forward at about a 45-degree angle, bend at the waist so your legs are vertical and pull your toes up toward your shins. 
                                Pull your shoulders down and back. 
                                Maintain this body position throughout the exercise.</li>
                                <li> Inhale as you slowly bend your elbows to lower your body into the Dip until your upper arms are about parallel to the ground. 
                                Keep your elbows tight to your body.</li>
                                <li> Exhale as you straighten your arms to drive your body up to the starting position.</li>
                                <li> </li>
                            </ol>
                            </p>
                            <p class='workoutDescription'>
                            
                            Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>Starting Intermediate: 3 sets of 15-30 reps, 2-3 minute rest between sets.</li>
                                <li>Intermediate: 5 sets of 25-50 reps, 2-3 minute rest between sets. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Intermidate/Advanced: 5 sets of 50-70 reps, 2-3 minute rest between sets.  </li>
                            </ul> 
                            </p>
                            <p class='workoutDescription'>
                            
                            ** For maximum results combine this exercise with the next exercise **
                            </p>

                            <h1 class='advanced'>Advanced</h1>
                            <h2 class='workoutName'>One Handed Push-ups</h2>
                            <img src='./images/single_arm_male.gif' width=200 height=200>

                            <p class='workoutDescription'> 
                            The one hand push-up is an exercise that demonstrates a good deal of strength. Only attempt it if you have developed a great deal of strength in all of the other variations.
                            </p>

                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li> Get into pushup position with one hand on the surface and spread your feet wide apart. 
                                Initially, you may only be able to do it with a wide foot stance and a slight bend in the upper body, but as you get stronger, you can bring your feet closer together.</li>
                                <li> Tense your entire body and hold your free hand tight against your lower back. </li>
                                <li> Inhale as you lower your body slowly until your chest nearly touches.</li>
                                <li> Exhale and explode up to the starting position </li>
                            </ol>
                            </p>
                            <p class='workoutDescription'>
                             Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>Starting Advanced: 3 sets of 1-10 reps per arm, 2-3 minute rest between sets.</li>
                                <li>Advanced: 5 sets of 10- 20 reps per arm, 2-3 minute rest between sets. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Ultra Instinct: 5 sets of 20-40 reps per arm, 3-5 minute rest between sets.  </li>
                            </ul> 
                            </p>


                        </div>
                        `
                    return ul.appendChild(div)
                case 'core':
                    div.innerHTML = `<div>
                            <h1 class='novice'>Novice</h1>
                            <h2 class='workoutName'>Plank</h2>
                            <img src='./images/plank_male.gif' width=200 height=200>
                            <img src='./images/plank_female.gif' width=200 height=200>

                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                                Begin in the plank position, face down with your forearms and toes on the floor. Your elbows are directly under your shoulders and your forearms are facing forward.
                                 Your head is relaxed and you should be looking at the floor. 
                                </li>
                                <li> Engage your abdominal muscles, drawing your navel toward your spine. Keep your torso straight and rigid and your body in a straight line from ears to toes with no sagging or bending. 
                                This is the neutral spine position. Ensure your shoulders are down, not creeping up toward your ears. 
                                Your heels should be over the balls of your feet.</li>
                                <li> 
                                Hold this position for the appropriate amount of time. Release to floor.
                                </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>True Beginner: 3 sets of 10-30 second holds, 1 minute rest between sets.</li>
                                <li>Novice: 5 sets of 30-60 second holds, 1 minute rest between sets. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Novice/Intermediate: 5 sets of 60-120 second holds, 2 minute rest between sets.  </li>
                            </ul> 
                            </p>

                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='intermediate'>Intermediate</h1>
                            <h2 class='workoutName'>Side Plank</h2>
                            <img src='./images/side_plank_male.gif' width=200 height=200>
                            <img src='./images/side_plank_female.gif' width=200 height=200>

                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li> Lie on your right side, legs extended and stacked from hip to feet. The elbow of your right arm is directly under your shoulder. Ensure your head is directly in line with your spine. 
                                Your left arm can be aligned along the left side of your body.
                                </li>
                                <li>Engage your abdominal muscles, drawing your navel toward your spine.</li>
                                <li> Lift your hips and knees from the mat while exhaling. Your torso is straight in line with no sagging or bending. Hold the position.</li>
                                <li> After several breaths, inhale and return to the starting position. Hold this position for the appropriate amount of time. Change sides and repeat.</li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                             Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>Starting Intermediate: 3 sets of 15-45 second holds, 1 minute rest between sets.</li>
                                <li>Intermediate: 5 sets of 45-75 second holds, 2 minute rest between sets. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Intermediate/Advanced: 5 sets of 75-120 second holds, 2 minute rest between sets.  </li>
                            </ul> 
                            </p>

                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='advanced'>Advanced</h1>
                            <h2 class='workoutName'>Dragon Flag</h2>
                            <img src='./images/dragon_flag.png' width=200 height=200>
                            <p class='workoutDescription'> 
                            Step-by-Step Instructions:
                            <ol>
                                <li> Get into proper position by locking your arms in a fixed overhead position. 
                                You can do this on a bench, with your hand next to your head and gripping the sides of the bench, or you can grip a stable object overhead. 
                                Some people use kettlebells or a barbell, but using something fixed and stable is a bit more practical, and quite a bit safer.
                                </li>
                                <li>Contract your torso and drive your legs up as if you are performing a reverse crunch, but keep your body rigid from your shoulders to toes, and avoid bending the hips. 
                                Point your toes to help maintain proper body alignment.</li>
                                <li> Once lifted, slowly lower your legs in a controlled motion without letting any part of your body touch the bench other than the upper back and shoulder. 
                                If you cave in, drop your hips, or arch your back, you don't have the strength yet and you should not continue the exercise.</li>
                                <li> Lower your body until it is hovering just over the bench.</li>
                                <li> Repeat as possible. Once you break form, you are done.</li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                             Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>Starting Advanced: 3 sets of 5-10 reps, 2-3 minute rest between sets.</li>
                                <li>Advanced: 5 sets of 10-20 reps, 2-3 minute rest between sets. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Ultra Instinct: 5 sets of 20-40 reps, 2-3 minute rest between sets.  </li>
                            </ul>                                
                            </p>

                            </div>`
                    return ul.appendChild(div)
                case 'leg':
                    div.innerHTML = `<div>
                            <h1 class='novice'>Novice</h1>
                            <h2 class='workoutName'>Squats</h2>
                            <img src='./images/squat.gif' width=200 height=200>
                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                                Stand with feet slightly wider than hip-width apart, with toes turned slightly outward. Brace abdominal muscles to engage core. 
                                </li>
                                <li> Inhale and initiate the movement by hinging at the hips first, then bend knees to lower into a squat position until 1) thighs are parallel or almost parallel with the floor, 2) heels begin to lift off the floor, or 3) torso starts to round or flex forward. 
                                (Ideally, in the lowest position, the torso and shin bone should be parallel to each other.)</li>
                                <li> 
                                Exhale and press into the mid-foot to straighten legs to stand, hips and torso rising at the same time.
                                </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>True Beginner: 3 sets of 15-25 reps, 2 minute rest between sets.</li>
                                <li>Novice: 5 sets of 25-50 reps per leg,, 2 minute rest between sets. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Novice/Intermediate: 5 sets of 50-75 reps, 2 minute rest between sets.  </li>
                            </ul> 
                            </p>

                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='intermediate'>Intermediate</h1>
                            <h2 class='workoutName'>Single Leg Box Squat</h2>
                            <img src='./images/single_leg_box_squat.gif' width=200 height=200>
                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                               Utilize a box at an appropriate height that will challenge the strength/control of the client, but not allow for a sudden drop or loss of control on the descent.  
                                </li>
                                <li>
                                Stand on the left leg with the heel about 2-3 inches away from the box. The right leg will be unsupported and out in front of the body. 
                                The arms can be extended out in front of the body during the squat to help maintain balance.
                                </li>
                                <li> 
                                Inhale and slowly squat down until the glutes softly touch the top of the box. 
                                </li>
                                <li>Pause momentarily, then exhale and return to the start position. </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>Starting Intermediate: 3 sets of 10-20 reps per leg, 2 minute rest between sets.</li>
                                <li>Intermediate: 5 sets of 20-40, 2 minute rest between sets per leg. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Intermediate/Advanced: 5 sets of 40-70 reps per leg, 2 minute rest between sets.  </li>
                            </ul> 
                            </p>

                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='advanced'>Advanced</h1>
                            <h2 class='workoutName'>Pistol Squat</h2>
                            <img src='./images/pistol_squat_male.gif' width=200 height=200>
                            <img src='./images/pistol_squat_female.gif' width=200 height=200>
                             <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                              Stand on one leg with your foot pointing straight ahead and the knee of the other leg slightly bent. 
                              You can have your arms extended for balance or kept at your sides. Roll your shoulder blades back and keep your back straight. 
                              Keep your weight centered over the ball of your foot, your upper body erect, and your head facing forward.  
                                </li>
                                <li>
                                Raise the non-supporting foot from the floor slightly.
                                </li>
                                <li> 
                                Inhale and lower to a squat position, keeping the knee of the supporting leg centered over the ball of the foot. 
                                </li>
                                <li>Exhale and return to the start position. </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>Starting Advanced: 3 sets of 5-15 reps per leg, 2 minute rest between sets.</li>
                                <li>Advanced: 5 sets of 15-25 reps per leg,, 2 minute rest between sets per leg. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Ultra Instinct: 5 sets of 25-50 reps per leg, 2 minute rest between sets.  </li>
                            </ul> 
                            </p>

                    
                    </div>`
                    return ul.appendChild(div)
                case 'back':
                    div.innerHTML = `<div> 
                            <h1 class='novice'>Novice</h1>
                            <h2 class='workoutName'>Assisted Pull-Ups</h2>
                            <img src='./images/Bench-Pull-ups-male.gif' width=200 height=200>
                            <img src='./images/Bench-Pull-ups-female.gif' width=200 height=200>
                           <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                                Stand with feet slightly wider than hip-width apart, with toes turned slightly outward. Brace abdominal muscles to engage core. 
                                </li>
                                <li> Inhale and initiate the movement by hinging at the hips first, then bend knees to lower into a squat position until 1) thighs are parallel or almost parallel with the floor, 2) heels begin to lift off the floor, or 3) torso starts to round or flex forward. 
                                (Ideally, in the lowest position, the torso and shin bone should be parallel to each other.)</li>
                                <li> 
                                Exhale and press into the mid-foot to straighten legs to stand, hips and torso rising at the same time.
                                </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>True Beginner: 3 sets of 15-25 reps, 2 minute rest between sets.</li>
                                <li>Novice: 5 sets of 25-50 reps, 2 minute rest between sets. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Novice/Intermediate: 5 sets of 50-75 reps, 2 minute rest between sets.  </li>
                            </ul> 
                            </p>

                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='intermediate'>Intermediate</h1>
                            <h2 class='workoutName'>Pull-Ups</h2>
                            <img src='./images/pull_up_male.gif' width=200 height=200>
                            <img src='./images/pull_up_female.gif' width=200 height=200>
                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                                Leap up and grip the bar with your hands shoulder width apart and your palms facing away from you. Hang with your arms fully extended, you can bend your legs at the knee if they’re dragging on the ground. 
                                </li>
                                <li> Keep your shoulders back and your core engaged throughout. Then pull up. 
                                Focus on enlisting your lats, traps, ans rhomboids when pulling yourself up.</li>
                                <li> 
                                Inhale and pull yourself slowly upward until your chin is above the bar.
                                </li>
                                <li> 
                                Exhale and slowly let your muscles relax downwards until your arms are extended again.
                                </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges:
                            <ul class='workoutRanges'>
                                <li>Starting Intermediate: 3 sets of 1-5 reps, 2-3 minute rest between sets.</li>
                                <li>Intermediate: 5 sets of 5-10 reps,, 2-3 minute rest between sets. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Intermediate/Advanced: 5 sets of 10-15 reps, 2-3 minute rest between sets.  </li>
                            </ul> 
                            </p>

                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='advanced'>Advanced</h1>
                            <h2 class='workoutName'>Muscle Ups</h2>
                            <img src='./images/muscle_up.gif' width=200 height=200>
                             <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                                Jump up onto the bar, and establish a solid hollow body position while hanging.  
                                </li>
                                <li> Your back should be slightly arched, with your feet behind you and together, staying tight throughout your core and quads.</li>
                                <li> 
                                From the arch position, move to scooping your legs through (back under the bar) and then levering yourself back.
                                </li>
                                <li> 
                                As your knees and legs are lifting into the air with the elevation, think about aggressively popping your hips.
                                </li>
                                <li>
                                Relax your grip, let both of your hands slide around the bar at the same time.
                                </li>
                                <li>
                                Engage your core, and allow that torso to really pivot over the top of the pull-up bar, then locking out your arms at the top.
                                </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: 
                            <ul class='workoutRanges'>
                                <li>Starting Advanced: 3 sets of 1-5 reps, 2-3 minute rest between sets.</li>
                                <li>Advanced: 5 sets of 5-10 reps per leg,, 2-3 minute rest between sets. Remember the goal is to not reach the max but to keep proper form throughout the movement. </li>
                                <li>Ultra Instinct: 5 sets of 10-15 reps, 2-3 minute rest between sets.  </li>
                            </ul> 
                            </p>

                        </div>`
                    return ul.appendChild(div)
                default: return (console.log('calisthenic default'))
            }

        case 'Resistance':
            div.classList.add('workouts')
            switch (muscleValue) {
                case 'chest':
                    div.innerHTML = `<div>
                    
                     <h1 class='novice'>Novice</h1>
                            <h2 class='workoutName'>One Arm Yoga Ball Dumbell Press</h2>
                            <img src='./images/one_arm_yoga_ball_male.gif' width=200 height=200>
                            <img src='./images/one_arm_yoga_ball_female.gif' width=200 height=200>
                               <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                                Assume bridge position with upper back resting on physioball.(yoga ball)
                                </li>
                                <li> Hold dumbbell in right hand at shoulder level with arm to the side</li>
                                <li> 
                                Exhale and press dumbbell by extending arm up and over chest.
                                </li>
                                <li> 
                                Inhale and lower dumbbell in a controlled manner to start position; repeat for specified reps.
                                </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight per arm, 1-2 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight per arm, 2-3 minute rest between sets.</li>
                                <li>Power Training:3 sets of 1-5 reps w/ heavy weight per arm, 3-5 minute rest between sets.</li>
                            </ul> 
                            </p>

                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='intermediate'>Intermediate</h1>
                            <h2 class='workoutName'>Cable Press</h2>
                            <img src='./images/cable_press.gif' width=200 height=200>
                                <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                                Place a flat bench between two low cable pulleys.(Can be done standing as well, just put the pulleys slightly above your shoulders, take a step forward and look at steps three and on)
                                </li>
                                <li> Grasp both stirrups and lie supine (on your back) on the bench, feet flat on the floor.</li>
                                <li> 
                                Position the stirrups to the sides of your chest, with your elbows bent and tucked in to your torso at a 45-degree angle.
                                </li>
                                <li> 
                                Exhale as you press the stirrups upward and inward until they touch at the top of the movement.
                                </li>
                                <li> Inhale as you slowly reverse the motion and return the stirrups to the starting position.</li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                               <li>Endurance Training: 3 sets of 15-20 reps w/ light weight, 2-3 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight, 2-3 minute rest between sets.</li>
                                <li>Power Training:3 sets of 1-5 reps w/ heavy weight, 2-3 minute rest between sets.</li>
                            </ul> 
                            </p>

                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='advanced'>Advanced</h1>
                            <h2 class='workoutName'>Bench Press</h2>
                            <img src='./images/chest_press_male.gif' width=200 height=200>
                            <img src='./images/chest_press_female.gif' width=200 height=200>
                                         <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                                Lie on the bench under the rack that holds the bar. Your eyes should be approximately aligned with the front of the barbell rack uprights. Butt, shoulders, and head should be flat on the bench with a slight (neutral) bend in the spine. 
                                Arch your back drawing your shoulder blades back behind you to keep from pressing with rounded shoulders. 
                                Feet should be flat on the floor and relatively wide apart.
                                </li>
                                <li> Grasp the bar with your thumbs on the outside of your closed fist, overhand grip, with arms slightly wider than shoulder-width apart. The angle of the upper arms should be at about 45 degrees to the body.</li>
                                <li> 
                                Remove the barbell from the rack and lock the elbows out before lowering the bar to the chest at the nipple line. Don't move the bar in an arc from the rack directly to the chest position.
                                </li>
                                <li> 
                                Take a deep breath and raise the bar to above the chest with arms extended, exhaling while you push upward and aiming consistently at the same spot on the ceiling. Don't watch the bar; focus on the ceiling.
                                </li>
                                <li>
                                Return the bar to just above the chest and repeat the exercise.
                                </li>
                                <li>
                                To finish, replace the bar on the rack from the locked out position.
                                </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight, 2-3 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight, 2-3 minute rest between sets.</li>
                                <li>Power Training:3 sets of 1-5 reps w/ heavy weight, 2-3 minute rest between sets.</li>
                            </ul> 
                            </p>



                    </div>`
                    return ul.appendChild(div)
                case 'core':
                    div.innerHTML = `<div>
                    
                        
                            <h1 class='novice'>Novice</h1>
                            <h2 class='workoutName'>Weighted Russian Twist</h2>
                            <img src='./images/dumbbell_twist_male.gif' width=200 height=200>
                            <img src='./images/dumbbell_twist_female.gif' width=200 height=200>
                               <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                                Start by sitting on the floor, with your knees bent and feet flat on the ground. Then lean back so your upper body is at a 45-degree angle to the floor. Keep your back straight at this angle throughout the exercise, as it will be tempting to hunch your shoulders forward. 
                                </li>
                                <li> Link your hands together in front of your chest, then brace your core and raise your legs up off the ground. </li>
                                <li> Rotate your arms all the way over to one side, then do the same in the other direction. </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight, 1-2 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight, 2-3 minute rest between sets.</li>
                            </ul> 
                            </p>
                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='intermediate'>Intermediate</h1>
                             <h2 class='workoutName'>One Arm Slams</h2>
                            <img src='./images/one_arm_slams.gif' width=200 height=200>  
                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>
                                To start, stand tall with your feet roughly shoulder-width apart, your knees and hips slightly bent, holding a medicine ball in one hand at your torso. Engage your core, drawing your abs toward your spine and rolling your shoulders back to start with perfect posture.
                                </li>
                                <li> Squat down slightly to load the spring. Then, in one powerful motion, inhale and press through your heels before rising up on the balls of your feet. Extend your knees and hips as you rise to power the upward swing of your arm and lift the medicine ball overhead. 
                                The ball should be almost straight overhead with your arm extended at the height of the movement. 
                                Keep your arm straight, not leaning back so the ball is behind you.</li>
                                <li> Use your core and your arm to slam the medicine ball straight down between your feet with as much force as you can. Press your hips back and bend your knees to further power the slam. Exhale as you slam the ball down.</li>
                                <li>Squat down to pick up the ball from the floor, then immediately move into the next slam by powerfully using your calves, quads, hamstrings, and glutes to rise up to standing. Come up on the balls of your feet again as you lift the medicine ball overhead.</li>
                            </ol>
                            </p>
                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight per arm, 1-2 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight per arm, 2-3 minute rest between sets.</li>
                            </ul> 
                            </p>
                             <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='advanced'>Advanced</h1>
                            <h2 class='workoutName'>Weighted Hanging Leg Raises</h2>
                            <img src='./images/weighted_hanging_leg_raises.gif' width=200 height=200>  
                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>Place a dumbbell or a medicine ball between your feet. </li>
                                <li>
                                Grasp a bar above your head. You don't have to necessarily be hanging at this stage, but ideally, the grip does have to be well above your head. You can try an overhand grip with your thumb around the bar to improve stability.
                                </li>
                                <li> While keeping your legs straight raise your feet up to your midsection and then lower them back down. This completes one repetition.</li>
                            </ol>
                            </p>
                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight, 1-2 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight, 2-3 minute rest between sets.</li>
                            </ul> 
                            </p>
                    
                    </div>`
                    return ul.appendChild(div)
                case 'leg':
                    div.innerHTML = `<div>
                            <h1 class='novice'>Novice</h1>
                            <h2 class='workoutName'>Barbell Squats</h2>
                            <img src='./images/squat_male.gif' width=200 height=200>
                            <img src='./images/squat_female.gif' width=200 height=200>
                           <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>Load a barbell on a rack at upper-chest height.</li>
                                <li>
                                Step under the barbell so that it rests on the back of your shoulders, and grasp the bar at each side.
                                </li>
                                <li> Dismount the barbell and step backward carefully. Your feet should be shoulder-width apart and pointing slightly outwards.</li>
                                <li>Inhale as you squat down by simultaneously pushing your butt backward and bending your knees forward. 
                                Keep your torso upright, and descend at least until your knees are bent at a 90-degree angle. </li>
                                <li>Exhale as you push your body back up to the starting position, driving through your heels and keeping your torso upright. </li>
                            </ol>
                            </p>
                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight, 1-2 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight, 2-3 minute rest between sets.</li>
                                <li>Power Training: 3 sets of 1-5 reps w/ heavy weight, 3-5 minute rest between sets.</li>
                            </ul> 
                            </p>
                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='intermediate'>Intermediate</h1>
                            <h2 class='workoutName'>Front Squats</h2>
                            <img src='./images/front_squat.gif' width=200 height=200>
                             <p class='workoutDescription'>
                            Form Instructions:
                            <ol>
                                <li>Step up to the rack and rest the bar on the meaty part of your upper chest. The bar should be close to your neck, but not touching it.</li>
                                <li>
                               Now you'll grip the bar. Elbow placement and proper grip are key. Place your fingers under and around the bar, so that the elbows lift forward, up, and away from the body. 
                               The hands are placed shoulder-width apart. Try to get your elbows up to bar height throughout this move. If you can, use all four fingers under the bar, but you'll notice that this requires substantial wrist flexibility. 
                               If you can't get all four fingers under the bar, just place two fingers (forefinger and middle finger) under the bar.
                                </li>
                                <li> Puff up your pectoral (chest) muscles so that there is no pressure on your fingers. At no point do your fingers support the bar. With a good upright spinal position and a lifted chest, the chest supports the bar. 
                                The fingers simply keep the bar from rolling forward.</li>
                                <li>Now unrack the bar and step back away from the rack. Place feet a bit wider than hip-distance apart with the toes pointed out slightly. </li>
                            </ol>
                            </p>
                              <p class='workoutDescription'>
                            Movement Instructions:
                            <ol>
                                <li>Begin to lower the body into a deep squat with the weight descending down between the knees. Keep the spine long and the back tall and upright. 
                                You'll notice that the back stays almost completely vertical as you descend, unlike a traditional squat where the torso leans slightly forward.</li>
                                <li>
                                Your hips stay under the bar (rather than floating behind the bar in a traditional squat) even as your glutes continue to lower down below knee level. 
                                You'll also notice that the knees extend further out in front and the ankles flex more than in a traditional squat.
                                </li>
                                <li> At the lowest position your hamstrings will nearly touch the back of the calves. Keep elbows lifted at bar height (if possible) and chest upright to prevent the bar from rolling forward.</li>
                                <li>Reverse the squat in a slow, controlled manner with the hips and knees extending simultaneously. Continue lifting until the body is back at the starting position.</li>
                            </ol>
                            </p>
                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight, 1-2 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight, 2-3 minute rest between sets.</li>
                                <li>Power Training: 3 sets of 1-5 reps w/ heavy weight, 3-5 minute rest between sets.</li>
                            </ul> 
                            </p>
                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>

                            <h1 class='advanced'>Advanced</h1>
                            <h2 class='workoutName'>Deadlifts</h2>
                            <img src='./images/deadlift_male.gif' width=200 height=200>
                            <img src='./images/deadlift_female.gif' width=200 height=200>
                             <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>Position the feet shoulder-width apart (or not much more) with toes under the bar. 
                                The feet point straight ahead or they can angle out slightly. Heels should stay flat on the surface. When you lift, the bar will travel close to the shins and may even graze them. 
                                Your head (and eyes) should reflect a neutral spine position—neither crooked noticeably up or down, although a very slight upward tilt is not uncommon or unsafe when putting the effort in.</li>
                                <li>
                                Stabilize the abdominal muscles by bracing them.
                                </li>
                                <li>Squat down, bending at the knees. The form for descending to the bar is similar (but not identical) to the squat, with back straight or arched in slightly and not rounded at the shoulders or spine.</li>
                                <li>Grasp the bar just outside the line of the knees with an overhand or mixed grip.</li>
                                <li>Lift the bar by pushing upward with the legs from the knees. Breathe out on exertion. Be careful not to raise the hips first so that the trunk moves forward and the back becomes rounded. Don’t try to haul the bar up with the arms. 
                                The arms stay extended under tension while gripping the bar as the legs push up. 
                                Think of the legs and shoulders moving upward in unison with the hips the balancing point. </li>
                                <li>The bar should almost graze the shins and come to rest around thigh level as you reach full height. Pull the shoulders back as much as possible without bending backward. </li>
                                <li>Lower the bar to the floor with a reverse motion ensuring a straight back again. </li>
                            </ol>
                            </p>
                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight, 1-2 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight, 2-3 minute rest between sets.</li>
                                <li>Power Training: 3 sets of 1-5 reps w/ heavy weight, 3-5 minute rest between sets.</li>
                            </ul> 
                            </p>
                            </div>`
                    return ul.appendChild(div)
                case 'back':
                    div.innerHTML = `<div>
                    
                    <h1 class='novice'>Novice</h1>
                            <h2 class='workoutName'>Dumbbell Rows</h2>
                            <img src='./images/dumbbell_row_male.gif' width=200 height=200>
                            <img src='./images/dumbbell_row_female.gif' width=200 height=200>
                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>With a dumbbell in each hand, bend over at about a 45-degree angle (no farther). Keep the back straight throughout the exercise. Brace your abdominals and breathe in.</li>
                                <li>
                                Lift the weights straight up, exhaling. While lifting, the arms should go no higher than parallel with the shoulders—slightly lower than the shoulders is fine. 
                                While lifting, try to keep the wrists from excessive extra movement down or to the side. Do not squat down and up after the initial pose. No movement of the legs occurs throughout the exercise.
                                </li>
                                <li> Lower the weights in a controlled manner while inhaling.</li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight, 1-2 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight, 2-3 minute rest between sets.</li>
                                <li>Power Training: 3 sets of 1-5 reps w/ heavy weight, 3-5 minute rest between sets.</li>
                            </ul> 
                            </p>
                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>
                            

                            <h1 class='intermediate'>Intermediate</h1>
                            <h2 class='workoutName'>Barbell Rows</h2>
                            <img src='./images/barbell_row_male.gif' width=200 height=200>
                            <img src='./images/barbell_row_female.gif' width=200 height=200>
                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>Bend the knees slightly and tilt forward, hinging at the hips and pushing the glutes back.</li>
                                <li>
                                Reach down and grab the barbell with an overhand grip to prepare to row. The back should be strong and flat, knees should be bent. 
                                Try to keep a neutral gaze (not looking straight down, craning your neck or looking too far up). Hands should be placed on the bar about shoulder-width apart. 
                                In this starting position, your shoulders should be just a few inches higher than your hips
                                </li>
                                <li>Exhale and engage through the shoulder blades and middle back to pull the barbell up towards the torso. The elbows will lift up and diagonally back. 
                                The core stays strong. At the highest point, the bar lightly touches the area at the bottom of your ribcage.</li>
                                <li>Slowly release the bar back down until the arms are fully extended and repeat. </li>
                            </ol>
                            </p>
                            
                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight, 1-2 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight, 2-3 minute rest between sets.</li>
                                <li>Power Training: 3 sets of 1-5 reps w/ heavy weight, 3-5 minute rest between sets.</li>
                            </ul> 
                            </p>
                            <p class='workoutDescription'>
                            ** For maximum results combine this exercise with the next exercise ** 
                            </p>



                            <h1 class='advanced'>Advanced</h1>
                            <h2 class='workoutName'>Pendlay Rows</h2>
                            <img src='./images/pendlay_rows.gif' width=200 height=200>
                            <p class='workoutDescription'>
                            Step-by-Step Instructions:
                            <ol>
                                <li>Assume a standing position with your feet shoulder width apart. Step forward so that the barbell is over the middle portion of your feet. </li>
                                <li>
                                Hinge at the waist and bend your knees so that your back is roughly parallel to the floor.
                                </li>
                                <li>Grab the bar with an overhand grip with your hands wider than shoulder width apart. </li>
                                <li>Keeping your elbows slightly tucked, brace your core and contract your lats to drive your elbows up and back, bringing the barbell towards the bottom of your chest. </li>
                                <li> Squeeze your lats at the top, pause for a moment, and slowly bring the barbell back to the floor in the starting position.  </li>
                                <li>Maintain tightness in your core and back and repeat! </li>
                            </ol>
                            </p>

                            <p class='workoutDescription'>
                            Recommended Set/Rep Ranges: !Remember to find a weight that is resonable for your expreince level!
                            <ul class='workoutRanges'>
                                <li>Endurance Training: 3 sets of 15-20 reps w/ light weight, 1-2 minute rest between sets..</li>
                                <li>Strength Training: 3 sets of 5-10 reps w/ moderate to heavy weight, 2-3 minute rest between sets.</li>
                                <li>Power Training: 3 sets of 1-5 reps w/ heavy weight, 3-5 minute rest between sets.</li>
                            </ul> 
                            </p>

                    </div>`
                    return ul.appendChild(div)
                default: return (console.log('Resistance default'))

            }
        default: return (console.log('default'))
    }
}










