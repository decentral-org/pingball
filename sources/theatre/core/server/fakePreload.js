function fakePreload(assets, handler) {

    let promises = [];

    // preloads each asset
    assets.forEach(function (asset) {

        // creates a promise for current asset preloading
        const promise = new Promise(function (resolve, reject) {

            // if current asset is a dataset then preload it
            if (asset.type === 'dataset') {

                asset.getter = () => asset.source;

                resolve(asset);
            }

            // if current asset is an image then preload it
            if (asset.type === 'image') {

                const image = {};

                image.src = asset.source;

                // when current image is loaded then resolve current promise

                asset.getter = () => image;

                resolve(asset);
            }

            // if current asset is a sound then preload it
            else if (asset.type === 'sound') {

                const sound = {};

                asset.getter = () => sound;

                resolve(asset);
            }
        });

        promises.push(promise);
    });

    // call user's success handler when all assets are preloaded
    Promise.all(promises).then(handler);
}

// exports current module as a function
export {fakePreload};
