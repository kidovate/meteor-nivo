Package.describe({
    summary: "Nivo slider packaged for meteor."
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/jquery.nivo.slider.pack.js',
        'lib/nivo-slider.css',
        'lib/themes/bar/bar.css',
        'lib/themes/bar/arrows.png',
        'lib/themes/bar/bullets.png',
        'lib/themes/bar/loading.gif',
        'lib/themes/dark/dark.css',
        'lib/themes/dark/arrows.png',
        'lib/themes/dark/bullets.png',
        'lib/themes/dark/loading.gif',
        'lib/themes/default/default.css',
        'lib/themes/default/arrows.png',
        'lib/themes/default/bullets.png',
        'lib/themes/default/loading.gif',
        'lib/themes/light/light.css',
        'lib/themes/light/arrows.png',
        'lib/themes/light/bullets.png',
        'lib/themes/light/loading.gif'
    ], 'client'
    );

});