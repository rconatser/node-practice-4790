export const test = ((req, res) => {
    res.send('Greetings from the test controller')
})

export const status = ((req, res) => {
    res.json(
        {
            status: 'ok',
            ozzy: 'here',
            malone: 'all tatooed up'
        }
    )
})

export const postMalone = ((req, res) => {
    // handle ozzy boolean here
    res.send('Ozzy was here...')
})