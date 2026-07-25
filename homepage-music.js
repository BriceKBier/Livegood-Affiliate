(() => {
  const player = document.getElementById("homepageMusic");
  const toggle = document.getElementById("homepageMusicToggle");
  const volume = document.getElementById("homepageMusicVolume");
  if (!player || !toggle || !volume) return;

  player.volume = Number(volume.value) / 100;

  const showState = playing => {
    toggle.setAttribute("aria-pressed", String(playing));
    toggle.innerHTML = playing
      ? '<span aria-hidden="true">❚❚</span> Pause music'
      : '<span aria-hidden="true">▶</span> Play music';
    document.querySelector(".homepage-music")?.classList.toggle("is-playing", playing);
  };

  toggle.addEventListener("click", async () => {
    if (player.paused) {
      try {
        await player.play();
        showState(true);
        if (typeof gtag === "function") gtag("event", "homepage_music_play");
      } catch {
        showState(false);
      }
    } else {
      player.pause();
      showState(false);
    }
  });

  volume.addEventListener("input", () => {
    player.volume = Number(volume.value) / 100;
  });
  player.addEventListener("pause", () => showState(false));
  player.addEventListener("play", () => showState(true));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !player.paused) player.pause();
  });
})();
