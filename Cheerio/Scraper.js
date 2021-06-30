const cheerio = require('cheerio');
const axios = require('axios').default;

const  total = async (sv, user) =>{
    const response = await axios.get(encodeURI(`https://www.leagueofgraphs.com/summoner/${sv}/${user}`),
    {
    headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36'
        }
    })
    const $ = cheerio.load(response.data)
    
    console.log($('#graphDD3').html().trim())
    console.log($('#graphDD4').html().trim())
}

const  soloQ = async (sv, user) =>{
    const response = await axios.get(encodeURI(`https://www.leagueofgraphs.com/summoner/${sv}/${user}#championsData-soloqueue`),
    {
    headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36'
        }
    })
    const $ = cheerio.load(response.data)
    
    console.log('soloQ'+$('#graphDD5').text().trim())
    console.log('soloQ'+$('#graphDD6').html().trim())
}

total('las', 'Mâki')
soloQ('las', 'Mâki')