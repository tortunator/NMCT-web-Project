app.service('flickrservice', function () {

    var flickr = new Flickr({
        api_key: ""
    });

    var per_page = 25;

    function getphotos(text , callback) {
        if (text) {
            return flickr.photos.search({
                text: text,
                per_page: per_page,

            }, function (err, result) {

                if (err) {
                    throw new Error(err);
                }
                photos = result.photos.photo;
                callback(photos);
            })
        }
    }

    flickrservice = {
        getphotos: getphotos,

    };
    return flickrservice;
});
