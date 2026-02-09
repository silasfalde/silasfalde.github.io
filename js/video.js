/**
 * Hero YouTube video: init player, mute/unmute button, hide when scrolled past hero.
 */
(function () {
  'use strict';

  var heroPlayer = null;

  function initHeroVideo() {
    if (typeof YT === 'undefined' || !YT.Player) return;

    heroPlayer = new YT.Player('hero-video-player', {
      videoId: 'YltidP2WmJo',
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        playlist: 'YltidP2WmJo',
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        playsinline: 1,
      },
      events: {
        onReady: function (e) {
          e.target.playVideo();
        },
        onStateChange: function (e) {
          if (e.data === 0) e.target.playVideo();
        },
      },
    });

    var muteBtn = document.getElementById('hero-mute-btn');
    if (muteBtn) {
      muteBtn.addEventListener('click', function () {
        if (!heroPlayer || !heroPlayer.unMute) return;
        var isMuted = heroPlayer.isMuted ? heroPlayer.isMuted() : true;
        if (isMuted) {
          heroPlayer.unMute();
          muteBtn.setAttribute('aria-pressed', 'true');
          muteBtn.setAttribute('aria-label', 'Mute video');
          muteBtn.title = 'Mute video';
        } else {
          heroPlayer.mute();
          muteBtn.setAttribute('aria-pressed', 'false');
          muteBtn.setAttribute('aria-label', 'Unmute video');
          muteBtn.title = 'Unmute video';
        }
      });
    }
  }

  if (typeof YT !== 'undefined' && YT.Player) {
    initHeroVideo();
  } else {
    window.onYouTubeIframeAPIReady = initHeroVideo;
  }

  function updateVideoVisibility() {
    var hero = document.querySelector('.hero');
    var videoWrap = document.querySelector('.hero__video-wrap');
    var overlay = document.querySelector('.hero__overlay');
    if (!hero || !videoWrap) return;
    var heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom <= 0) {
      videoWrap.style.opacity = '0';
      videoWrap.style.visibility = 'hidden';
      if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
      }
    } else {
      videoWrap.style.opacity = '1';
      videoWrap.style.visibility = 'visible';
      if (overlay) {
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
      }
    }
  }

  updateVideoVisibility();
  window.addEventListener('scroll', updateVideoVisibility, { passive: true });
})();
