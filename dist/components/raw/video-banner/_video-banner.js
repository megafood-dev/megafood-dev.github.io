'use strict';

MF.videoBannerYoutube = {
    init: () => {
        // Load the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/player_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // YouTube player after the API code downloads.
        var player;

        window.onYouTubePlayerAPIReady = function() {
            var $playerSelector = $('#ytplayer');
            var videoId = $playerSelector.data('ytid');
            var $playButton = $playerSelector.siblings('button');
            var $playPreloader = $playerSelector.siblings('img');

            if ($playerSelector.length) {
                player = new YT.Player('ytplayer', {
                    videoId: videoId,
                    playerVars: {
                        modestbranding: 0,
                        controls: 1,
                        rel: 0
                    },
                    events: {
                        'onReady': function(){
                            $playPreloader.addClass('hidden');
                        },
                        'onStateChange': function(event){
                            $playButton.toggleClass('hidden', event.data === YT.PlayerState.PLAYING);
                        },
                    }
                });
            }

            if ($playButton.length) {
                $playButton.on('click', function(){
                    player.playVideo();
                    $(this).off('click').remove();
                })
            }
        }
    }
};

module.exports = MF.imgBanner;
