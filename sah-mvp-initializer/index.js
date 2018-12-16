const unirest = require('unirest');
const parseString = require('xml2js').parseString;

unirest
    .get('http://feeds.spotahome.com/trovit-Ireland.xml')
    .end(({ body }) => {
        
        parseString(body, (err, result) => {
            if(!err) {
                const ads = Array.prototype.slice.call(result.trovit.ad);
                ads.forEach(ad => {
                   
                    const request = {
                        id: parseInt(ad.id[0]),
                        title: ad.title[0],
                        link: ad.url[0],
                        city: ad.city[0],
                        mainPicture: ad.pictures[0].picture[0].picture_url[0]
                    };

                    unirest.post(process.env.API_URL)
                        .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
                        .send(request)
                        .end(response => {
                            console.info(`Sent ${request.id} to backend.`)
                        });
                });
            } else {
                console.error('ERROR!');
            }
        });



    });