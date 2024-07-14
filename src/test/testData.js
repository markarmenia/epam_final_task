// testData.js
module.exports = {
    validUsers: [
        { username: 'standard_user', password: 'secret_sauce' },
        { username: 'problem_user', password: 'secret_sauce' }
    ],
    invalidUsers: [
        { username: 'ilove', password: 'qa' },
        { username: 'invalid_user', password: 'wrong_password' }
    ]
}