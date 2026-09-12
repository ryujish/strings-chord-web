/**
 * STRINGS CHORD (스트링스 코드) - Official Website Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initPackageTabs();
  initAudioPlayer();
  initCalculator();
  initFAQ();
  initInquiryModal();
  initMobileMenu();
});

/* 1. Package Tabs */
function initPackageTabs() {
  const packageData = {
    gala: {
      title: "Package A. VIP 갈라 & 기업 만찬 (Gala & Banquet)",
      desc: "품격 있는 대화와 만찬 분위기를 방해하지 않으면서도, 공간 전체를 극상의 우아함으로 채워주는 하이엔드 큐레이션입니다.",
      repertoire: [
        { title: "사랑의 인사 (Salut d'Amour)", composer: "E. Elgar" },
        { title: "시네마 천국 (Cinema Paradiso)", composer: "Ennio Morricone" },
        { title: "리베르탱고 (Libertango)", composer: "A. Piazzolla" },
        { title: "Por Una Cabeza (여인의 향기 OST)", composer: "Carlos Gardel" },
        { title: "Fly Me to the Moon (재즈 현악 편곡)", composer: "Bart Howard" },
        { title: "Moon River (티파니에서 아침을)", composer: "Henry Mancini" }
      ]
    },
    opening: {
      title: "Package B. 국제회의 & 포럼 오프닝 (Forum & Opening)",
      desc: "귀빈들의 이목을 한순간에 집중시키고, 행사의 웅장한 서막을 알리는 다이내믹하고 임팩트 있는 현악 사운드입니다.",
      repertoire: [
        { title: "사계 중 '여름' 3악장 프레스토", composer: "A. Vivaldi" },
        { title: "Viva La Vida (현악 앙상블 편곡)", composer: "Coldplay" },
        { title: "캐리비안의 해적 (Pirates of the Caribbean)", composer: "Hans Zimmer" },
        { title: "어벤져스 메인 테마", composer: "Alan Silvestri" },
        { title: "캐논 변주곡 (Rock/Modern Strings Ver.)", composer: "J. Pachelbel" }
      ]
    },
    showcase: {
      title: "Package C. 브랜드 런칭 & 쇼케이스 (Launch & Showcase)",
      desc: "트렌디하고 감각적인 K-POP 및 글로벌 팝 넘버를 클래식 악기로 재해석하여, 브랜드의 세련미와 혁신을 극대화합니다.",
      repertoire: [
        { title: "Ditto / Hype Boy (현악 클래시컬 편곡)", composer: "NewJeans" },
        { title: "Dynamite / Spring Day", composer: "BTS" },
        { title: "Levitating (현악 크로스오버 편곡)", composer: "Dua Lipa" },
        { title: "Shape of You", composer: "Ed Sheeran" },
        { title: "A Thousand Years (트와일라잇 OST)", composer: "Christina Perri" }
      ]
    },
    wedding: {
      title: "Package D. 하이엔드 웨딩 & 프라이빗 파티 (Private & Wedding)",
      desc: "식전 연주부터 화촉점화, 신랑/신부 입장, 서약, 축가, 행진까지 완벽한 큐시트 싱크로율로 영화 같은 순간을 완성합니다.",
      repertoire: [
        { title: "오프닝 식전 연주: 디즈니 OST & 클래식 메들리", composer: "Strings Chord Selection" },
        { title: "양가 어머니 화촉점화: 황진이 OST '꽃날'", composer: "이필호" },
        { title: "신랑 입장: 위풍당당 행진곡 or Viva La Vida", composer: "E. Elgar" },
        { title: "신부 입장: She (노팅힐 OST) or Il Mondo", composer: "Elvis Costello" },
        { title: "신랑 신부 행진: 축혼행진곡 (모던 편곡) / 라라랜드 OST", composer: "F. Mendelssohn" }
      ]
    }
  };

  const tabBtns = document.querySelectorAll('.tab-btn');
  const packageTitle = document.getElementById('package-title');
  const packageDesc = document.getElementById('package-desc');
  const repertoireUl = document.getElementById('repertoire-items');

  if (!tabBtns.length || !packageTitle || !repertoireUl) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const pkgKey = btn.getAttribute('data-package');
      const data = packageData[pkgKey];

      if (data) {
        packageTitle.textContent = data.title;
        packageDesc.textContent = data.desc;

        repertoireUl.innerHTML = data.repertoire.map(item => `
          <li>
            <span class="repertoire-title">${item.title}</span>
            <span class="repertoire-composer">${item.composer}</span>
          </li>
        `).join('');
      }
    });
  });
}

/* 2. Interactive Audio Player Preview */
function initAudioPlayer() {
  const tracks = [
    { title: "사랑의 인사 (Salut d'Amour)", composer: "E. Elgar · 클래식 명곡", duration: "03:12", icon: "🎻", videoId: "Rrn1aQ5v_4k" },
    { title: "시네마 천국 (Cinema Paradiso)", composer: "Ennio Morricone · 시네마 OST", duration: "03:45", icon: "🎬", videoId: "1FzVWlOKeLs" },
    { title: "리베르탱고 (Libertango)", composer: "A. Piazzolla · 누에보 탱고", duration: "02:58", icon: "🔥", videoId: "kghJzPqJ_J0" },
    { title: "사계 중 '여름' 3악장 프레스토", composer: "A. Vivaldi · 다이내믹 오프닝", duration: "03:05", icon: "⚡", videoId: "g65oWFMSoK0" },
    { title: "Viva La Vida (현악 앙상블 편곡)", composer: "Coldplay · 모던 팝 클래식", duration: "03:40", icon: "✨", videoId: "1fRfg8iX2n8" },
    { title: "Por Una Cabeza (여인의 향기)", composer: "Carlos Gardel · 영화 음악", duration: "03:15", icon: "🌹", videoId: "Gcxv7i02lXc" }
  ];

  const playPauseBtn = document.getElementById('play-pause-btn');
  const waveBars = document.getElementById('wave-bars');
  const currentTitle = document.getElementById('current-track-title');
  const currentComposer = document.getElementById('current-track-composer');
  const trackArtwork = document.getElementById('track-artwork');
  const nowPlayingCard = document.querySelector('.now-playing');
  const playlistItems = document.querySelectorAll('#audio-playlist-container .playlist-item');
  const hiddenAudioStream = document.getElementById('hidden-audio-stream');

  let isPlaying = false;
  let currentTrackIndex = 0;

  function updateTrack(index, autoPlay = true) {
    currentTrackIndex = index;
    const track = tracks[index];
    if (currentTitle) currentTitle.textContent = track.title;
    if (currentComposer) currentComposer.textContent = track.composer;
    if (trackArtwork) trackArtwork.textContent = track.icon;

    playlistItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });

    if (autoPlay) {
      isPlaying = true;
      if (playPauseBtn) playPauseBtn.innerHTML = '⏸';
      if (waveBars) waveBars.classList.add('playing');
      if (nowPlayingCard) nowPlayingCard.classList.add('playing');
      if (hiddenAudioStream) {
        hiddenAudioStream.src = `https://www.youtube.com/embed/${track.videoId}?autoplay=1&enablejsapi=1&playsinline=1`;
      }
    }
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    const track = tracks[currentTrackIndex];

    if (playPauseBtn) {
      playPauseBtn.innerHTML = isPlaying ? '⏸' : '▶';
    }
    if (waveBars) {
      waveBars.classList.toggle('playing', isPlaying);
    }
    if (nowPlayingCard) {
      nowPlayingCard.classList.toggle('playing', isPlaying);
    }

    if (hiddenAudioStream) {
      if (isPlaying) {
        hiddenAudioStream.src = `https://www.youtube.com/embed/${track.videoId}?autoplay=1&enablejsapi=1&playsinline=1`;
      } else {
        hiddenAudioStream.src = '';
      }
    }
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', togglePlay);
  }

  playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      updateTrack(index, true);
    });
  });
}


/* 3. Interactive Instant Quote Calculator */
function initCalculator() {
  const eventTypeSelect = document.getElementById('calc-event-type');
  const lineupSelect = document.getElementById('calc-lineup');
  const durationSelect = document.getElementById('calc-duration');
  const locationSelect = document.getElementById('calc-location');
  const priceDisplay = document.getElementById('calc-price-result');
  const quoteSummaryNote = document.getElementById('calc-summary-note');

  if (!lineupSelect || !priceDisplay) return;

  function calculateQuote() {
    // Base prices by lineup (순수 연주 용역 기준, 만원 단위)
    // Trio: 120, Quartet: 180, Chamber: 420, String Orchestra: 850, Grand Orchestra: 1650, Crossover: 240
    let basePrice = 120;
    const lineupVal = lineupSelect.value;
    if (lineupVal === 'quartet') basePrice = 180;
    if (lineupVal === 'chamber') basePrice = 420;
    if (lineupVal === 'string-orchestra') basePrice = 850;
    if (lineupVal === 'grand-orchestra') basePrice = 1650;
    if (lineupVal === 'crossover') basePrice = 240;

    // Multiplier by duration / format
    const durationVal = durationSelect.value;
    let durationMultiplier = 1.0;
    if (durationVal === 'opening') durationMultiplier = 0.85; // 1~2곡 오프닝
    if (durationVal === '1set') durationMultiplier = 1.0;    // 30분 메인 세트
    if (durationVal === 'full') durationMultiplier = 1.35;   // 60분 2세트/풀패키지

    let calculated = basePrice * durationMultiplier;

    // Location add-on
    const locationVal = locationSelect ? locationSelect.value : 'capital';
    if (locationVal === 'local') {
      if (lineupVal === 'grand-orchestra') calculated += 150;
      else if (lineupVal === 'string-orchestra') calculated += 80;
      else if (lineupVal === 'chamber') calculated += 50;
      else calculated += 30; // 지방 출장비
    }

    const minPrice = Math.round(calculated * 0.95);
    const maxPrice = Math.round(calculated * 1.1);

    priceDisplay.textContent = `${minPrice.toLocaleString()}만 ~ ${maxPrice.toLocaleString()}만원`;
    if (quoteSummaryNote) {
      quoteSummaryNote.textContent = `(순수 연주료 기준 / 부가세 별도 / 편성: ${lineupSelect.options[lineupSelect.selectedIndex].text})`;
    }
  }

  [eventTypeSelect, lineupSelect, durationSelect, locationSelect].forEach(element => {
    if (element) {
      element.addEventListener('change', calculateQuote);
    }
  });

  // Run initial calculation
  calculateQuote();
}

/* 4. FAQ Accordion */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

/* 5. Inquiry Modal & Form Handling */
function initInquiryModal() {
  const form = document.getElementById('inquiry-form');
  const dialog = document.getElementById('inquiry-result-dialog');
  const closeBtn = document.getElementById('dialog-close-btn');
  const summaryDiv = document.getElementById('dialog-inquiry-summary');
  const copyBtn = document.getElementById('copy-inquiry-btn');

  if (!form || !dialog) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const companyName = document.getElementById('inquiry-company').value;
    const contactName = document.getElementById('inquiry-name').value;
    const phone = document.getElementById('inquiry-phone').value;
    const date = document.getElementById('inquiry-date').value;
    const note = document.getElementById('inquiry-note').value;
    const lineupText = document.getElementById('calc-lineup').options[document.getElementById('calc-lineup').selectedIndex].text;
    const estimatedPrice = document.getElementById('calc-price-result').textContent;

    const summaryText = `[스트링스 코드 행사 섭외 문의]\n• 단체/회사명: ${companyName}\n• 담당자명: ${contactName}\n• 연락처: ${phone}\n• 행사 예정일: ${date}\n• 희망 편성: ${lineupText}\n• 예상 견적: ${estimatedPrice}\n• 문의/요청사항: ${note || '없음'}`;

    if (summaryDiv) {
      summaryDiv.innerHTML = `
        <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 8px; font-size: 0.9rem; line-height: 1.7; margin-bottom: 20px; white-space: pre-wrap;">${summaryText}</div>
      `;
    }

    dialog.showModal();

    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(summaryText).then(() => {
          copyBtn.textContent = '✅ 복사 완료!';
          setTimeout(() => { copyBtn.textContent = '📋 문의 내용 복사하기'; }, 2000);
        });
      };
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      dialog.close();
    });
  }

  // Close when clicking outside modal
  dialog.addEventListener('click', (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close();
    }
  });
}

/* 6. Mobile Menu */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#090d16';
        navMenu.style.padding = '24px';
        navMenu.style.borderBottom = '1px solid rgba(212, 175, 55, 0.2)';
      }
    });

    // Close on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
        }
      });
    });
  }
}
