export const getHomePageConstants = () => ({
    newstitle: 'News',
    recipesTitle: 'Healthy Recipes',
    ingredientsLabel: 'Ingredients',
    chevronWidth: 50,
    bmrTitle: "Calculate Your BMR",
    bmrImageAlt: "bmr",
    bmrImageSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Obesity-waist_circumference.svg/300px-Obesity-waist_circumference.svg.png", 
    genderText: "Gender",
    bmrBtnText: "Calculate",
    resultText: "Result",
    bmrText: "BMR",
    caloriesPerDayText: "Calories/day",
    caloriesNeedText: "Daily Calorie needs based on activity level",
    activityLevelText: "Activity Level",
    calorieText: "Calorie",
    goBackBtn: "Go Back",
    calorieArray: [
        {
            activity: "Sedentary (little to no exercise + work a desk job)",
            multiplier: 1.2,
        }, 
        {
            activity: "Lightly Active (light exercise 1-3 days / week) ",
            multiplier: 1.375
        },
        {
            activity: "Moderately Active (moderate exercise 3-5 days / week)",
            multiplier: 1.55,
        },
        {
            activity: "Very Active (heavy exercise 6-7 days / week) ",
            multiplier: 1.725,
        },
        {
            activity: "Extremely Active (very heavy exercise, hard labor job, training 2x / day)",
            multiplier: 1.9,
        }
    ],
    REGEX_VALIDATION: {
        NUMBER_REGEX: /([0-9]){4}/g,
    }
});