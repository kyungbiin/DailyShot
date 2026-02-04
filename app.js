// ===== 매장 샘플 데이터 =====
const STORE_DATA = [
  {
    id: 1, name: '사유의서재 강남', category: '양식', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 강남대로98길 11 5층 사유의서재',
    hours: '월 - 일 오전 11:30 ~ 오후 11:00',
    photos: ['./images/store1.jpg', './images/store2.jpg'],
    top: 28, left: 18
  },
  {
    id: 2, name: '먼데이블루스', category: '와인', type: 'free',
    badgeText: '콜키지 무료', address: '서울 서초구 강남대로53길 11 삼성쉐르빌2 1층',
    hours: '월 - 일 오전 11:00 ~ 오후 11:00',
    photos: ['./images/store3.jpg', './images/store4.jpg'],
    top: 45, left: 24
  },
  {
    id: 3, name: '비노파라다이소', category: '이탈리안', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 역삼로 234 2층',
    hours: '월 - 토 오전 11:30 ~ 오후 10:30',
    photos: ['./images/store4.jpg', './images/store5.jpg'],
    top: 22, left: 72
  },
  {
    id: 4, name: '르꼬숑', category: '프렌치', type: 'free',
    badgeText: '콜키지 무료', address: '서울 강남구 테헤란로 112 1층',
    hours: '화 - 일 오후 12:00 ~ 오후 10:00',
    photos: ['./images/store6.jpg', './images/store7.jpg'],
    top: 50, left: 70
  },
  {
    id: 5, name: '와인앤다인', category: '양식', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 서초구 서초대로 301 지하1층',
    hours: '월 - 일 오후 5:00 ~ 오전 1:00',
    photos: ['./images/store8.jpg', './images/store9.jpg'],
    top: 55, left: 15
  },
  {
    id: 6, name: '오스테리아 비앙카', category: '이탈리안', type: 'free',
    badgeText: '콜키지 무료', address: '서울 강남구 선릉로 525',
    hours: '월 - 토 오전 11:30 ~ 오후 10:00',
    photos: ['./images/store5.jpg', './images/store10.jpg'],
    top: 35, left: 9
  },
  {
    id: 7, name: '라망드셰프', category: '프렌치', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 강남대로 390',
    hours: '화 - 일 오후 12:00 ~ 오후 10:00',
    photos: ['./images/store6.jpg', './images/store7.jpg'],
    top: 33, left: 17
  },
  {
    id: 8, name: '더스테이크하우스', category: '스테이크', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 역삼동 678-9',
    hours: '월 - 일 오전 11:00 ~ 오후 11:00',
    photos: ['./images/store9.jpg', './images/store10.jpg'],
    top: 20, left: 78
  },
  {
    id: 9, name: '블루밍가든', category: '양식', type: 'free',
    badgeText: '콜키지 무료', address: '서울 서초구 반포대로 45',
    hours: '월 - 일 오전 10:00 ~ 오후 10:00',
    photos: ['./images/store2.jpg', './images/store8.jpg'],
    top: 30, left: 55
  },
  {
    id: 10, name: '트라토리아 서울', category: '이탈리안', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 도산대로 123',
    hours: '화 - 일 오후 12:00 ~ 오후 11:00',
    photos: ['./images/store8.jpg', './images/store10.jpg'],
    top: 38, left: 82
  },
  {
    id: 11, name: '카사델비노', category: '와인바', type: 'free',
    badgeText: '콜키지 무료', address: '서울 강남구 학동로 234',
    hours: '월 - 토 오후 5:00 ~ 오전 2:00',
    photos: ['./images/store1.jpg', './images/store3.jpg'],
    top: 47, left: 40
  },
  {
    id: 12, name: '피노누아 다이닝', category: '양식', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 서초구 서초중앙로 78',
    hours: '월 - 일 오전 11:30 ~ 오후 10:30',
    photos: ['./images/store7.jpg', './images/store4.jpg'],
    top: 53, left: 35
  },
  {
    id: 13, name: '리베르타', category: '프렌치', type: 'free',
    badgeText: '콜키지 무료', address: '서울 강남구 논현로 567',
    hours: '화 - 일 오후 12:00 ~ 오후 10:00',
    photos: ['./images/store5.jpg', './images/store6.jpg'],
    top: 60, left: 52
  },
  {
    id: 14, name: '셀러1988', category: '와인바', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 서초구 강남대로 201',
    hours: '월 - 토 오후 6:00 ~ 오전 1:00',
    photos: ['./images/store3.jpg', './images/store9.jpg'],
    top: 62, left: 22
  },
  {
    id: 15, name: '에노테카 서울', category: '이탈리안', type: 'free',
    badgeText: '콜키지 무료', address: '서울 강남구 삼성로 89',
    hours: '월 - 일 오전 11:00 ~ 오후 10:30',
    photos: ['./images/store10.jpg', './images/store6.jpg'],
    top: 68, left: 30
  },
  {
    id: 16, name: '비스트로 드 빈', category: '프렌치', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 봉은사로 456',
    hours: '화 - 일 오후 12:00 ~ 오후 11:00',
    photos: ['./images/store7.jpg', './images/store1.jpg'],
    top: 42, left: 50
  },
  {
    id: 17, name: '소믈리에 테이블', category: '양식', type: 'free',
    badgeText: '콜키지 무료', address: '서울 서초구 방배로 67',
    hours: '월 - 토 오후 5:30 ~ 오후 11:00',
    photos: ['./images/store2.jpg', './images/store5.jpg'],
    top: 75, left: 62
  },
  {
    id: 18, name: '포도나무 아래', category: '한식', type: 'partner',
    badgeText: '파트너', address: '서울 강남구 역삼로 345',
    hours: '월 - 일 오전 11:30 ~ 오후 9:30',
    photos: ['./images/store10.jpg', './images/store4.jpg'],
    top: 15, left: 50
  },
  {
    id: 19, name: '꼬르동블루 강남', category: '프렌치', type: 'partner',
    badgeText: '파트너', address: '서울 강남구 언주로 789',
    hours: '화 - 일 오후 12:00 ~ 오후 10:00',
    photos: ['./images/store8.jpg', './images/store1.jpg'],
    top: 85, left: 40
  },
  {
    id: 20, name: '더 와인키친', category: '양식', type: 'partner',
    badgeText: '파트너', address: '서울 서초구 사평대로 56',
    hours: '월 - 일 오후 12:00 ~ 오후 11:00',
    photos: ['./images/store3.jpg', './images/store9.jpg'],
    top: 22, left: 17
  },
];

// ===== 상태 변수 =====
let currentTab = 'all';
let activeFilter = 'all';
let selectedStore = null;
let sheetState = 'closed'; // 'closed' | 'half' | 'expanded'

// ===== DOM 요소 참조 =====
const tabAll = document.getElementById('tab-all');
const tabCorkage = document.getElementById('tab-corkage');
const filterBar = document.getElementById('filter-bar');
const pinLayer = document.getElementById('pin-layer');
const overlay = document.getElementById('bottom-sheet-overlay');
const sheet = document.getElementById('bottom-sheet');
const sheetContent = document.getElementById('sheet-content');
const sheetFilters = document.getElementById('sheet-filters');
const sheetHandle = document.getElementById('sheet-handle');
const tooltip = document.getElementById('map-tooltip');
const tooltipBadge = document.getElementById('tooltip-badge');
const tooltipName = document.getElementById('tooltip-name');

// ===== SVG 아이콘 헬퍼 함수 =====
function pinSVG(type) {
  const colors = { partner: '#7C3AED', corkage: '#FF6B35', free: '#E84393' };
  const color = colors[type] || '#222';
  return `<svg viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.27 21.73 0 14 0z" fill="${color}"/>
    <circle cx="14" cy="13" r="5" fill="#fff"/>
  </svg>`;
}

function heartSVG() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/>
  </svg>`;
}

function locationSVG() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>`;
}

function clockSVG() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>`;
}

function copySVG() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="13" height="13">
    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
  </svg>`;
}

// ===== 현재 탭에 맞는 매장 목록 가져오기 =====
function getVisibleStores() {
  let stores = currentTab === 'all'
    ? STORE_DATA
    : STORE_DATA.filter(s => s.type === 'corkage' || s.type === 'free');

  if (activeFilter !== 'all') {
    stores = stores.filter(s => s.type === activeFilter);
  }
  return stores;
}

// ===== 필터 칩 렌더링 =====
function renderFilters(target) {
  const filters = currentTab === 'all'
    ? [
        { key: 'all', label: '전체', dot: null },
        { key: 'partner', label: '파트너', dot: 'partner' },
        { key: 'corkage', label: '콜키지 가능', dot: 'corkage' },
        { key: 'free', label: '콜키지 무료', dot: 'free' },
      ]
    : [
        { key: 'all', label: '전체', dot: null },
        { key: 'corkage', label: '콜키지 가능', dot: 'corkage' },
        { key: 'free', label: '콜키지 무료', dot: 'free' },
      ];

  target.innerHTML = filters.map(f => {
    const isActive = activeFilter === f.key;
    const dotHTML = f.dot
      ? `<span class="filter-chip__dot filter-chip__dot--${f.dot}"></span>`
      : '';
    return `<button class="filter-chip ${isActive ? 'active' : ''}" data-filter="${f.key}">
      ${dotHTML}${f.label}
    </button>`;
  }).join('');

  target.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      activeFilter = chip.dataset.filter;
      renderAllFilters();
      renderPins();
      if (sheetState === 'expanded') renderStoreList();
    });
  });
}

function renderAllFilters() {
  renderFilters(filterBar);
  renderFilters(sheetFilters);
}

// ===== 지도 핀 렌더링 =====
function renderPins() {
  const stores = getVisibleStores();
  pinLayer.innerHTML = stores.map(s =>
    `<button class="map-pin" data-id="${s.id}"
      style="top:${s.top}%;left:${s.left}%;" aria-label="${s.name}">
      ${pinSVG(s.type)}
    </button>`
  ).join('');

  pinLayer.querySelectorAll('.map-pin').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const store = STORE_DATA.find(s => s.id === Number(el.dataset.id));
      if (store && currentTab === 'corkage') {
        onPinClick(store, el);
      }
    });
  });
}

// ===== 매장 카드 HTML 생성 =====
function storeCardHTML(store) {
  const badgeClass = store.type === 'free' ? 'store-card__badge--free' : 'store-card__badge--corkage';
  return `
    <div class="store-card" data-id="${store.id}">
      <div class="store-card__header">
        <span class="store-card__badge ${badgeClass}">${store.badgeText}</span>
        <span class="store-card__name">${store.name}</span>
        <span class="store-card__category">${store.category}</span>
        <button class="store-card__heart" aria-label="찜하기">${heartSVG()}</button>
      </div>
      <div class="store-card__info">
        <div class="store-card__info-row">
          ${locationSVG()}
          <span>${store.address}</span>
          <button class="store-card__copy-btn">${copySVG()} 주소복사</button>
        </div>
        <div class="store-card__info-row">
          ${clockSVG()}
          <span>${store.hours}</span>
        </div>
      </div>
      <div class="store-photos">
        <img class="store-photos__img" src="${store.photos[0]}" alt="${store.name}">
        <img class="store-photos__img" src="${store.photos[1]}" alt="${store.name}">
      </div>
    </div>`;
}

// ===== 핀 클릭 처리 (콜키지 탭) =====
function onPinClick(store) {
  selectedStore = store;

  // 지도 위에 툴팁 표시
  const badgeClass = store.type === 'free' ? 'map-tooltip__badge--free' : 'map-tooltip__badge--corkage';
  tooltipBadge.className = 'map-tooltip__badge ' + badgeClass;
  tooltipBadge.textContent = store.badgeText;
  tooltipName.textContent = store.name;
  tooltip.style.top = store.top + '%';
  tooltip.style.left = store.left + '%';
  tooltip.classList.add('visible');

  // 바텀시트(하프) 표시: 선택된 매장 정보 + 액션 버튼
  renderHalfSheet(store);
  setSheetState('half');
}

// ===== 하프시트 렌더링 (단일 매장 정보) =====
function renderHalfSheet(store) {
  sheetContent.innerHTML = storeCardHTML(store) + `
    <div class="store-actions">
      <button class="store-actions__btn store-actions__btn--pickup">픽업 주류 고르기</button>
      <button class="store-actions__btn store-actions__btn--corkage">콜키지 예약하기</button>
    </div>`;
}

// ===== 매장 리스트 (확장) - 선택된 매장 우선 표시 =====
function renderStoreList() {
  const stores = getVisibleStores();
  // 선택된 매장을 맨 앞에 놓고 나머지 뒤에 배치
  let ordered = stores;
  if (selectedStore) {
    const others = stores.filter(s => s.id !== selectedStore.id);
    ordered = [selectedStore, ...others];
  }
  sheetContent.innerHTML = ordered.map(s => storeCardHTML(s)).join('');
}

// ===== 바텀시트 상태 관리 =====
function setSheetState(state) {
  sheetState = state;
  overlay.classList.toggle('active', state !== 'closed');
  overlay.classList.toggle('expanded', state === 'expanded');

  if (state === 'closed') {
    tooltip.classList.remove('visible');
    // 시트가 완전히 닫힌 경우에만 선택 매장 초기화 (전환 중 아닌 경우)
    setTimeout(() => { if (sheetState === 'closed') selectedStore = null; }, 50);
  }

  if (state === 'expanded') {
    tooltip.classList.remove('visible');
    renderStoreList();
  }

  // 확장 → 하프로 돌아갈 때: 단일 매장 정보 다시 렌더링
  if (state === 'half' && selectedStore) {
    renderHalfSheet(selectedStore);
    // 툴팁 다시 표시
    const badgeClass = selectedStore.type === 'free' ? 'map-tooltip__badge--free' : 'map-tooltip__badge--corkage';
    tooltipBadge.className = 'map-tooltip__badge ' + badgeClass;
    tooltipBadge.textContent = selectedStore.badgeText;
    tooltipName.textContent = selectedStore.name;
    tooltip.style.top = selectedStore.top + '%';
    tooltip.style.left = selectedStore.left + '%';
    tooltip.classList.add('visible');
  }
}

// ===== 바텀시트 스와이프/드래그 처리 =====
let dragStartY = 0;
let dragging = false;
let dragTarget = null;

function onDragStart(e) {
  const y = e.touches ? e.touches[0].clientY : e.clientY;
  dragStartY = y;
  dragging = true;
  dragTarget = e.target;
}

function onDragEnd(e) {
  if (!dragging) return;
  dragging = false;
  const endY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
  const diff = dragStartY - endY;

  // 확장 상태에서는 스크롤이 최상단일 때만 아래로 스와이프 허용
  if (sheetState === 'expanded' && diff < -50) {
    if (sheetContent.scrollTop <= 0) {
      setSheetState('half');
    }
    return;
  }

  if (diff > 50) {
    if (sheetState === 'half') setSheetState('expanded');
  } else if (diff < -50) {
    if (sheetState === 'half') setSheetState('closed');
  }
}

// 핸들: 항상 드래그 가능
sheetHandle.addEventListener('touchstart', onDragStart, { passive: true });
sheetHandle.addEventListener('mousedown', onDragStart);

// 컨텐츠 영역: 스와이프용 드래그
sheetContent.addEventListener('touchstart', onDragStart, { passive: true });
sheetContent.addEventListener('mousedown', onDragStart);

document.addEventListener('touchend', onDragEnd);
document.addEventListener('mouseup', onDragEnd);

// 시트 닫기: 오버레이 배경 또는 지도 영역 클릭 시
overlay.addEventListener('click', (e) => {
  if (e.target.closest('.bottom-sheet')) return;
  if (sheetState !== 'closed') setSheetState('closed');
});

document.querySelector('.map-container').addEventListener('click', (e) => {
  if (e.target.closest('.map-pin') || e.target.closest('.bottom-sheet-overlay') || e.target.closest('.my-location-btn')) return;
  if (sheetState !== 'closed') setSheetState('closed');
});

// ===== 지도 패닝(드래그/스와이프) =====
(function initMapPan() {
  const panLayer = document.getElementById('map-pan-layer');
  const container = document.querySelector('.map-container');
  if (!panLayer || !container) return;

  let isPanning = false;
  let startX = 0, startY = 0;
  let panX = 0, panY = 0;
  let curPanX = 0, curPanY = 0;

  // 초기 위치: 중앙 (150% 크기이므로 -25%만큼 오프셋)
  function getInitialOffset() {
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    return { x: -cw * 0.25, y: -ch * 0.25 };
  }

  function clampPan(x, y) {
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const pw = panLayer.scrollWidth;
    const ph = panLayer.scrollHeight;
    const minX = -(pw - cw);
    const minY = -(ph - ch);
    return {
      x: Math.min(0, Math.max(minX, x)),
      y: Math.min(0, Math.max(minY, y)),
    };
  }

  function applyTransform(x, y) {
    panLayer.style.transform = `translate(${x}px, ${y}px)`;
  }

  // 초기화
  const init = getInitialOffset();
  const clamped = clampPan(init.x, init.y);
  panX = clamped.x;
  panY = clamped.y;
  applyTransform(panX, panY);

  function getPointer(e) {
    if (e.touches && e.touches.length > 0) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  }

  container.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.filter-bar') || e.target.closest('.my-location-btn') || e.target.closest('.bottom-sheet-overlay')) return;
    isPanning = true;
    startX = e.clientX;
    startY = e.clientY;
    curPanX = panX;
    curPanY = panY;
    panLayer.style.transition = 'none';
    e.preventDefault();
  });

  window.addEventListener('pointermove', (e) => {
    if (!isPanning) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const c = clampPan(curPanX + dx, curPanY + dy);
    applyTransform(c.x, c.y);
  });

  window.addEventListener('pointerup', (e) => {
    if (!isPanning) return;
    isPanning = false;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const c = clampPan(curPanX + dx, curPanY + dy);
    panX = c.x;
    panY = c.y;
    panLayer.style.transition = '';
  });
})();

// ===== 탭 전환 =====
function switchTab(tab) {
  currentTab = tab;
  activeFilter = 'all';
  setSheetState('closed');

  tabAll.classList.toggle('active', tab === 'all');
  tabCorkage.classList.toggle('active', tab === 'corkage');

  renderAllFilters();
  renderPins();
}

tabAll.addEventListener('click', () => switchTab('all'));
tabCorkage.addEventListener('click', () => switchTab('corkage'));

// ===== 내 위치 버튼 =====
document.getElementById('my-location-btn').addEventListener('click', () => {
  console.log('My location clicked');
});

// ===== 하단 네비게이션 =====
document.querySelectorAll('.bottom-nav__item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.bottom-nav__item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// ===== 매장 상세 페이지 =====
const detailPage = document.getElementById('detail-page');
const detailScroll = document.getElementById('detail-scroll');
const detailGallery = document.getElementById('detail-gallery');
const detailInfo = document.getElementById('detail-info');
const detailTabs = document.getElementById('detail-tabs');
const mapView = document.querySelector('.map-container');
const searchBar = document.querySelector('.search-bar');
const mainTabBar = document.querySelector('.tab-bar');
const bottomNav = document.querySelector('.bottom-nav');
const homeIndicator = document.querySelector('.home-indicator');

// 매장 상세 확장 데이터
const DETAIL_EXTRA = {
  phone: '010-2197-0957',
  notice: '휴게시간은 목업 및 변동 불가합니다. 오후 3:00 - 오후 4:30',
  // 매장 정보 더보기 데이터
  storeInfo: {
    parking: '건물 내 주차 가능 (2시간 무료)',
    facilities: [
      { name: '와이파이', icon: 'wifi', available: true },
      { name: '주차', icon: 'parking', available: true },
      { name: '반려동물', icon: 'pet', available: false },
      { name: '예약', icon: 'reservation', available: true },
      { name: '단체석', icon: 'group', available: true },
      { name: '콘센트', icon: 'outlet', available: true },
    ],
    payment: ['신용카드', '현금', '카카오페이', '네이버페이'],
    sns: { instagram: '@sayuuiseojae_gangnam', website: 'www.sayuuiseojae.com' },
    description: '사유의 서재는 강남 한복판에 위치한 프리미엄 다이닝 레스토랑입니다. 세련된 인테리어와 아늑한 분위기 속에서 특별한 식사를 즐기실 수 있습니다. 와인 애호가들을 위한 다양한 와인 셀렉션과 함께 정성스럽게 준비된 요리를 맛보세요.',
    directions: '강남역 11번 출구에서 도보 5분\n강남대로를 따라 직진 후 첫 번째 골목에서 좌회전',
    interiorPhotos: ['./images/interior1.jpg', './images/interior2.jpg', './images/interior3.jpg', './images/interior4.jpg'],
  },
  corkage: {
    tags: ['와인 좋아하는 고객님들의 만족도가 높아요', '술과 잘 어울리는 음식이 많아요'],
    drinks: [
      { name: '와인', price: '병당 20,000' },
      { name: '사케', price: '병당 10,000원' },
      { name: '위스키', price: '병당 20,000원' },
      { name: '백주', price: '-' },
      { name: '우리술', price: '-' },
    ],
    services: ['얼음', '와인잔', '위스키잔', '사케잔', '칠링 바스켓'],
    // 더보기 추가 정보
    extra: {
      policy: '콜키지는 1인 1병 기준이며, 추가 병당 동일 요금이 적용됩니다.',
      notice: '콜키지 예약 시 미리 주종을 알려주시면 더 나은 서비스를 제공해 드립니다.',
      additionalServices: ['디캔팅', '에어레이팅', '온도 맞춤 서비스', '페어링 추천'],
      availableTime: '런치 11:30 - 15:00 / 디너 17:30 - 22:00',
      maxBottles: '테이블당 최대 5병까지 가능',
      specialOffers: [
        { title: '평일 런치 할인', desc: '평일 점심 콜키지 50% 할인', badge: 'HOT' },
        { title: '생일 이벤트', desc: '생일 고객 콜키지 1병 무료', badge: 'EVENT' },
      ],
    },
  },
  menu: {
    recommended: [
      { name: '바질크림 파스타', desc: '신선한 바질페스토 크림파스타', price: '25,000원', img: './images/food1.jpg' },
      { name: '와인 무제한 1인', desc: '2시간 동안 다양한 보틀와인 무제한 이용', price: '30,000원', img: './images/food2.jpg' },
      { name: '치즈할 라구토마토 파스타', desc: '2시간 동안 다양한 보틀와인 무제한 이용', price: '25,000원', img: './images/food3.jpg' },
    ],
    // 더보기 추가 메뉴
    extra: [
      { name: '트러플 리조또', desc: '블랙 트러플을 듬뿍 올린 크리미한 리조또', price: '32,000원', img: './images/food4.jpg' },
      { name: '안심 스테이크', desc: '최상급 한우 안심을 사용한 프리미엄 스테이크', price: '58,000원', img: './images/food5.jpg' },
      { name: '해산물 플래터', desc: '신선한 새우, 홍합, 바지락 모듬', price: '45,000원', img: './images/food6.jpg' },
      { name: '티라미수', desc: '진한 에스프레소와 마스카포네 치즈의 조화', price: '12,000원', img: './images/food1.jpg', badge: '디저트' },
      { name: '치즈 플레이트', desc: '다양한 수입 치즈 5종과 크래커', price: '28,000원', img: './images/food2.jpg', badge: '안주' },
    ],
  },
  ai: {
    score: 93,
    bars: [
      { label: '맛있어요', value: 98 },
      { label: '분위기좋아요', value: 97 },
      { label: '청결해요', value: 92 },
    ],
    summary: '프라이빗한 룸과 넓은 테이블 간격 덕분에 조용한 대화가 가능하며, 세련된 인테리어와 톡톡 에어레이저처럼 분식기가 좋습니다. 가 생각 많아요.\n\n사유의 서재는 강남의 분위기 있는 와인바로, 치즈를 라구파스타와 아메리카노 스테이크가 인기메뉴입니다.',
  },
  review: {
    title: '만족해요',
    text: '처음가봤 먹는 바람에 사진을 이번에 찍었더라여 여긴이사하니 아, 통김스타일 것 같습니다.',
    // 더보기 추가 리뷰
    extra: [
      {
        badge: '재방문',
        title: '분위기 최고!',
        text: '데이트하기 정말 좋은 곳이에요. 조명도 은은하고 음악도 좋아서 대화하기 편했어요. 와인 추천도 잘 해주셔서 맛있게 먹었습니다.',
        photos: ['./images/review3.jpg', './images/review4.jpg'],
        author: '와인러버',
        date: '2024.01.15'
      },
      {
        badge: '단골',
        title: '서비스가 좋아요',
        text: '직원분들이 정말 친절하시고, 와인 서비스도 프로페셔널해요. 콜키지 비용도 합리적이고 다음에도 또 올 예정입니다.',
        photos: ['./images/interior1.jpg'],
        author: '미식가',
        date: '2024.01.10'
      },
      {
        badge: '추천',
        title: '음식이 맛있어요',
        text: '파스타가 정말 맛있었어요. 특히 바질크림 파스타는 다른 곳에서 못 먹어본 맛이었습니다. 스테이크도 굽기가 완벽했어요.',
        photos: ['./images/food4.jpg', './images/food5.jpg'],
        author: '파스타매니아',
        date: '2024.01.05'
      },
    ],
    allPhotos: [
      './images/review1.jpg', './images/review2.jpg', './images/review3.jpg', './images/review4.jpg',
      './images/interior1.jpg', './images/interior2.jpg', './images/food4.jpg', './images/food5.jpg'
    ],
  },
};

// 편의시설 아이콘 SVG 헬퍼
function facilityIconSVG(icon) {
  const icons = {
    wifi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12.55a11 11 0 0114 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>`,
    parking: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 010 6H9"/></svg>`,
    pet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 015 5v3.5a3.5 3.5 0 01-7 0V17a2 2 0 00-2-2 2 2 0 00-2 2"/></svg>`,
    reservation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
    group: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
    outlet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/><path d="M9 14h6"/></svg>`,
  };
  return icons[icon] || '';
}

// 상세 페이지가 어디서 열렸는지 추적
let detailOpenedFrom = null; // 'half' | 'expanded'
let detailOpenedStore = null;

function openDetailPage(store) {
  // Remember previous state before closing
  detailOpenedFrom = sheetState; // 'half' or 'expanded'
  detailOpenedStore = store;

  // Hide sheet without clearing selectedStore
  overlay.classList.remove('active', 'expanded');
  sheetState = 'closed';

  // Hide map UI
  searchBar.style.display = 'none';
  mainTabBar.style.display = 'none';
  mapView.style.display = 'none';
  bottomNav.style.display = 'none';
  homeIndicator.style.display = 'none';

  // Show detail
  detailPage.classList.add('active');

  // Gallery
  detailGallery.innerHTML = `
    <img class="detail-gallery__main" src="${store.photos[0]}" alt="${store.name}">
    <img class="detail-gallery__thumb" src="${store.photos[1]}" alt="${store.name}">
    <img class="detail-gallery__thumb" src="${store.photos[0]}" alt="${store.name}" style="filter:brightness(0.8)">`;

  // Info
  const badgeClass = store.type === 'free' ? 'store-card__badge--free' : 'store-card__badge--corkage';
  const storeInfo = DETAIL_EXTRA.storeInfo;
  detailInfo.innerHTML = `
    <div class="detail-info__badge-row">
      <span class="store-card__badge ${badgeClass}">${store.badgeText}</span>
      <span class="detail-info__name">${store.name}</span>
      <span class="detail-info__category">${store.category}</span>
    </div>
    <div class="detail-info__row">
      ${locationSVG()}
      <span>${store.address}</span>
      <button class="detail-info__copy-btn">${copySVG()} 복사</button>
    </div>
    <div class="detail-info__row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
      <span>${DETAIL_EXTRA.phone}</span>
      <button class="detail-info__call-btn">전화하기</button>
    </div>
    <div class="detail-info__row">
      ${clockSVG()}
      <span>${store.hours}</span>
    </div>
    <div class="detail-info__notice">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      <span>${DETAIL_EXTRA.notice}</span>
    </div>
    <button class="detail-info__more-btn" id="info-more-btn">
      <span>매장 정보 더보기</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="detail-info__expanded" id="info-expanded">
      <!-- 편의시설 -->
      <div class="detail-info__section">
        <div class="detail-info__section-title">편의시설</div>
        <div class="detail-info__facilities">
          ${storeInfo.facilities.map(f => `
            <div class="detail-info__facility ${f.available ? '' : 'detail-info__facility--disabled'}">
              <div class="detail-info__facility-icon">${facilityIconSVG(f.icon)}</div>
              <span class="detail-info__facility-name">${f.name}</span>
              ${!f.available ? '<span class="detail-info__facility-unavailable">불가</span>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
      <!-- 주차 정보 -->
      <div class="detail-info__section">
        <div class="detail-info__section-title">주차 정보</div>
        <div class="detail-info__parking">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 010 6H9"/></svg>
          <span>${storeInfo.parking}</span>
        </div>
      </div>
      <!-- 결제수단 -->
      <div class="detail-info__section">
        <div class="detail-info__section-title">결제수단</div>
        <div class="detail-info__payment-tags">
          ${storeInfo.payment.map(p => `<span class="detail-info__payment-tag">${p}</span>`).join('')}
        </div>
      </div>
      <!-- 찾아오시는 길 -->
      <div class="detail-info__section">
        <div class="detail-info__section-title">찾아오시는 길</div>
        <div class="detail-info__directions">${storeInfo.directions.replace(/\n/g, '<br>')}</div>
      </div>
      <!-- 매장 소개 -->
      <div class="detail-info__section">
        <div class="detail-info__section-title">매장 소개</div>
        <div class="detail-info__description">${storeInfo.description}</div>
      </div>
      <!-- SNS -->
      <div class="detail-info__section">
        <div class="detail-info__section-title">SNS</div>
        <div class="detail-info__sns">
          <div class="detail-info__sns-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>
            <span>${storeInfo.sns.instagram}</span>
          </div>
          <div class="detail-info__sns-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            <span>${storeInfo.sns.website}</span>
          </div>
        </div>
      </div>
      <!-- 매장 사진 -->
      <div class="detail-info__section">
        <div class="detail-info__section-title">매장 내부</div>
        <div class="detail-info__interior-photos">
          ${storeInfo.interiorPhotos.map(photo => `
            <img class="detail-info__interior-img" src="${photo}" alt="매장 내부">
          `).join('')}
        </div>
      </div>
    </div>`;

  // 더보기 버튼 이벤트
  const moreBtn = document.getElementById('info-more-btn');
  const expandedSection = document.getElementById('info-expanded');
  moreBtn.addEventListener('click', () => {
    const isExpanded = expandedSection.classList.toggle('active');
    moreBtn.classList.toggle('active', isExpanded);
    moreBtn.querySelector('span').textContent = isExpanded ? '매장 정보 접기' : '매장 정보 더보기';
  });

  // Corkage section
  const cork = DETAIL_EXTRA.corkage;
  const drinkImages = { '와인': './wine.png', '사케': './sake.png', '위스키': './whiskey.png', '백주': './beer.png', '우리술': './korean.png' };
  const serviceImages = { '얼음': './ice.png', '와인잔': './wineglass.png', '위스키잔': './whiskeyglass.png', '사케잔': './sakeglass.png', '칠링 바스켓': './chillingbucket.png' };

  document.getElementById('section-corkage').innerHTML = `
    <div class="detail-section__title">콜키지</div>
    <div class="corkage-tags">
      ${cork.tags.map(t => `<span class="corkage-tag corkage-tag--highlight">${t}</span>`).join('')}
    </div>
    <div class="corkage-drinks">
      ${cork.drinks.map(d => `
        <div class="corkage-drink">
          <span class="corkage-drink__name">${d.name}</span>
          <span class="corkage-drink__price">${d.price}</span>
          <div class="corkage-drink__icon"><img src="${drinkImages[d.name]}" alt="${d.name}" onerror="this.onerror=null;this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%22100%22><rect width=%2280%22 height=%22100%22 fill=%22%23eee%22 rx=%228%22/><text x=%2240%22 y=%2255%22 text-anchor=%22middle%22 fill=%22%23aaa%22 font-size=%2212%22>${d.name}</text></svg>'"></div>
        </div>`).join('')}
    </div>
    <div class="detail-section__title" style="font-size:14px;margin-top:8px;">제공 서비스</div>
    <div class="corkage-services">
      ${cork.services.map(s => `
        <div class="corkage-service">
          <div class="corkage-service__icon"><img src="${serviceImages[s]}" alt="${s}" onerror="this.onerror=null;this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2252%22 height=%2252%22><rect width=%2252%22 height=%2252%22 fill=%22%23eee%22 rx=%228%22/><text x=%2226%22 y=%2230%22 text-anchor=%22middle%22 fill=%22%23aaa%22 font-size=%2210%22>${s}</text></svg>'"></div>
          <span class="corkage-service__name">${s}</span>
        </div>`).join('')}
    </div>
    <button class="more-btn" id="corkage-more-btn">
      <span>더보기</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="section-expanded" id="corkage-expanded">
      <!-- 특별 혜택 -->
      <div class="expanded-block">
        <div class="expanded-block__title">특별 혜택</div>
        <div class="special-offers">
          ${cork.extra.specialOffers.map(offer => `
            <div class="special-offer">
              <span class="special-offer__badge">${offer.badge}</span>
              <div class="special-offer__content">
                <span class="special-offer__title">${offer.title}</span>
                <span class="special-offer__desc">${offer.desc}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <!-- 추가 서비스 -->
      <div class="expanded-block">
        <div class="expanded-block__title">추가 서비스</div>
        <div class="additional-services">
          ${cork.extra.additionalServices.map(s => `<span class="additional-service-tag">${s}</span>`).join('')}
        </div>
      </div>
      <!-- 이용 안내 -->
      <div class="expanded-block">
        <div class="expanded-block__title">이용 안내</div>
        <div class="corkage-info-list">
          <div class="corkage-info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span>${cork.extra.availableTime}</span>
          </div>
          <div class="corkage-info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            <span>${cork.extra.maxBottles}</span>
          </div>
          <div class="corkage-info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
            <span>${cork.extra.policy}</span>
          </div>
        </div>
      </div>
      <!-- 안내사항 -->
      <div class="expanded-notice">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        <span>${cork.extra.notice}</span>
      </div>
    </div>`;

  // Menu section
  const menu = DETAIL_EXTRA.menu;
  document.getElementById('section-menu').innerHTML = `
    <div class="detail-section__title">메뉴</div>
    <div class="menu-board">
      <img class="menu-board__img" src="./images/menu1.jpg" alt="메뉴1">
      <img class="menu-board__img" src="./images/menu2.jpg" alt="메뉴2">
      <img class="menu-board__img" src="./images/menu3.jpg" alt="메뉴3">
    </div>
    <div style="font-size:14px;font-weight:700;margin-bottom:12px;color:#222">추천 메뉴</div>
    ${menu.recommended.map(item => `
      <div class="menu-item">
        <img class="menu-item__img" src="${item.img}" alt="${item.name}">
        <div class="menu-item__info">
          <span class="menu-item__badge">추천</span>
          <span class="menu-item__name">${item.name}</span>
          <span class="menu-item__desc">${item.desc}</span>
          <span class="menu-item__price">${item.price}</span>
        </div>
      </div>`).join('')}
    <button class="more-btn" id="menu-more-btn">
      <span>더보기</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="section-expanded" id="menu-expanded">
      <div style="font-size:14px;font-weight:700;margin-bottom:12px;color:#222">전체 메뉴</div>
      ${menu.extra.map(item => `
        <div class="menu-item">
          <img class="menu-item__img" src="${item.img}" alt="${item.name}">
          <div class="menu-item__info">
            <span class="menu-item__badge ${item.badge ? 'menu-item__badge--alt' : ''}">${item.badge || '인기'}</span>
            <span class="menu-item__name">${item.name}</span>
            <span class="menu-item__desc">${item.desc}</span>
            <span class="menu-item__price">${item.price}</span>
          </div>
        </div>`).join('')}
    </div>`;

  // AI section
  const ai = DETAIL_EXTRA.ai;
  document.getElementById('section-ai').innerHTML = `
    <div class="detail-section__title">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      AI 요약
    </div>
    <div class="ai-score">
      <span class="ai-score__number">${ai.score}%</span>
      <span class="ai-score__label">가 만족했어요</span>
    </div>
    <div class="ai-bars">
      ${ai.bars.map(b => `
        <div class="ai-bar">
          <span class="ai-bar__label">${b.label}</span>
          <div class="ai-bar__track"><div class="ai-bar__fill" style="width:${b.value}%"></div></div>
          <span class="ai-bar__value">${b.value}%</span>
        </div>`).join('')}
    </div>
    <div class="ai-summary-text">${ai.summary.replace(/\n/g, '<br>')}</div>`;

  // Review section
  const rev = DETAIL_EXTRA.review;
  document.getElementById('section-review').innerHTML = `
    <div class="detail-section__title">사진 · 리뷰</div>
    <div class="review-card">
      <div class="review-card__badge">Best ${rev.title}</div>
      <div class="review-card__text">${rev.text}</div>
      <div class="review-photos">
        <img class="review-photos__img" src="./images/review1.jpg" alt="리뷰사진1">
        <img class="review-photos__img" src="./images/review2.jpg" alt="리뷰사진2">
      </div>
    </div>
    <button class="more-btn" id="review-more-btn">
      <span>더보기</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="section-expanded" id="review-expanded">
      <!-- 전체 사진 -->
      <div class="expanded-block">
        <div class="expanded-block__title">전체 사진 <span class="photo-count">${rev.allPhotos.length}</span></div>
        <div class="all-photos-grid">
          ${rev.allPhotos.map(photo => `
            <img class="all-photos-grid__img" src="${photo}" alt="사진">
          `).join('')}
        </div>
      </div>
      <!-- 추가 리뷰 -->
      <div class="expanded-block">
        <div class="expanded-block__title">리뷰 더보기</div>
        ${rev.extra.map(r => `
          <div class="review-card">
            <div class="review-card__header">
              <div class="review-card__badge review-card__badge--${r.badge === '재방문' ? 'revisit' : r.badge === '단골' ? 'regular' : 'recommend'}">${r.badge}</div>
              <div class="review-card__meta">
                <span class="review-card__author">${r.author}</span>
                <span class="review-card__date">${r.date}</span>
              </div>
            </div>
            <div class="review-card__title">${r.title}</div>
            <div class="review-card__text">${r.text}</div>
            ${r.photos.length > 0 ? `
              <div class="review-photos">
                ${r.photos.map(p => `<img class="review-photos__img" src="${p}" alt="리뷰사진">`).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>`;

  detailScroll.scrollTop = 0;
  setupDetailTabs();
  setupSectionMoreButtons();
}

// 각 섹션 더보기 버튼 설정
function setupSectionMoreButtons() {
  const sections = [
    { btnId: 'corkage-more-btn', expandedId: 'corkage-expanded' },
    { btnId: 'menu-more-btn', expandedId: 'menu-expanded' },
    { btnId: 'review-more-btn', expandedId: 'review-expanded' },
  ];

  sections.forEach(({ btnId, expandedId }) => {
    const btn = document.getElementById(btnId);
    const expanded = document.getElementById(expandedId);
    if (btn && expanded) {
      btn.addEventListener('click', () => {
        const isExpanded = expanded.classList.toggle('active');
        btn.classList.toggle('active', isExpanded);
        btn.querySelector('span').textContent = isExpanded ? '접기' : '더보기';
      });
    }
  });
}

function closeDetailPage() {
  detailPage.classList.remove('active');
  searchBar.style.display = '';
  mainTabBar.style.display = '';
  mapView.style.display = '';
  bottomNav.style.display = '';
  homeIndicator.style.display = '';
}

// Back button - return to previous sheet state
document.getElementById('detail-back').addEventListener('click', () => {
  closeDetailPage();

  // Restore the sheet state we came from
  if (detailOpenedStore) {
    selectedStore = detailOpenedStore;
    if (detailOpenedFrom === 'half') {
      renderHalfSheet(selectedStore);
      setSheetState('half');
    } else if (detailOpenedFrom === 'expanded') {
      setSheetState('expanded');
    } else {
      // Default: show half sheet
      renderHalfSheet(selectedStore);
      setSheetState('half');
    }
  }
});

// Sticky section tabs: click to scroll
function setupDetailTabs() {
  const tabBtns = detailTabs.querySelectorAll('.detail-tabs__item');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sectionId = 'section-' + btn.dataset.section;
      const section = document.getElementById(sectionId);
      if (section) {
        const tabsHeight = detailTabs.offsetHeight;
        const scrollTarget = section.offsetTop - detailTabs.offsetTop - tabsHeight;
        detailScroll.scrollTo({ top: scrollTarget, behavior: 'smooth' });
      }
    });
  });

  // Update active tab on scroll
  detailScroll.addEventListener('scroll', () => {
    const sections = ['corkage', 'menu', 'ai', 'review'];
    const tabsBottom = detailTabs.getBoundingClientRect().bottom;
    let current = 'corkage';
    for (const id of sections) {
      const el = document.getElementById('section-' + id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= tabsBottom + 10) {
          current = id;
        }
      }
    }
    tabBtns.forEach(b => {
      b.classList.toggle('active', b.dataset.section === current);
    });
  });
}

// Make store cards clickable -> open detail
function bindStoreCardClicks(container) {
  container.querySelectorAll('.store-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.closest('.store-card__heart') || e.target.closest('.store-card__copy-btn')) return;
      const store = STORE_DATA.find(s => s.id === Number(card.dataset.id));
      if (store) openDetailPage(store);
    });
  });
}

// Patch renderHalfSheet and renderStoreList to bind clicks
const _origRenderHalf = renderHalfSheet;
renderHalfSheet = function(store) {
  _origRenderHalf(store);
  bindStoreCardClicks(sheetContent);
};

const _origRenderList = renderStoreList;
renderStoreList = function() {
  _origRenderList();
  bindStoreCardClicks(sheetContent);
};

// ===== Navigation History =====
const navHistory = [];

function pushNav(page) {
  navHistory.push(page);
}

function popNav() {
  if (navHistory.length > 0) {
    const prev = navHistory.pop();
    if (prev === 'detail') {
      closeReservationPage();
      detailPage.classList.add('active');
    } else if (prev === 'map-half') {
      closeReservationPage();
      closeDetailPage();
    } else if (prev === 'map') {
      closeReservationPage();
      closeDetailPage();
    }
  }
}

// ===== Corkage Reservation Page =====
const resPage = document.getElementById('reservation-page');
const resDrinksContainer = document.getElementById('res-drinks');
const resTimesContainer = document.getElementById('res-times');
const resCalendar = document.getElementById('res-calendar');
const resDatePicker = document.getElementById('res-date-picker');
const resDateText = document.getElementById('res-date-text');

const BASE_FEE = 30000;
const RES_DRINKS = [
  { name: '와인', price: 20000, priceLabel: '병당 20,000원' },
  { name: '사케', price: 10000, priceLabel: '병당 10,000원' },
  { name: '위스키', price: 20000, priceLabel: '병당 20,000원' },
  { name: '백주', price: 10000, priceLabel: '병당 10,000원' },
];
const TIME_SLOTS = ['17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30'];

let resDrinkQtys = {};
let resSelectedDate = null;
let resSelectedTime = null;
let resPeople = 0;
let resCalMonth = null; // {year, month}

// Drink SVGs (reuse from detail page)
const resDrinkImages = {
  '와인': './wine.png',
  '사케': './sake.png',
  '위스키': './whiskey.png',
  '백주': './beer.png',
};

function openReservationPage(fromPage) {
  pushNav(fromPage);
  resPage.classList.add('active');

  // Reset state
  resDrinkQtys = {};
  RES_DRINKS.forEach(d => resDrinkQtys[d.name] = 0);
  resSelectedDate = null;
  resSelectedTime = null;
  resPeople = 0;

  const now = new Date();
  resCalMonth = { year: now.getFullYear(), month: now.getMonth() };

  renderResDrinks();
  renderResTimes();
  updateResSummary();
  resDateText.textContent = '예약 일자 선택하기';
  resDatePicker.classList.remove('selected');
  resCalendar.classList.remove('open');
  document.getElementById('people-value').textContent = '0';
  document.getElementById('res-scroll').scrollTop = 0;
}

function closeReservationPage() {
  resPage.classList.remove('active');
}

function renderResDrinks() {
  resDrinksContainer.innerHTML = RES_DRINKS.map(d => {
    const qty = resDrinkQtys[d.name];
    const hasQty = qty > 0;
    return `<div class="res-drink-card">
      <span class="res-drink-card__name">${d.name}</span>
      <span class="res-drink-card__price">${d.priceLabel}</span>
      <div class="res-drink-card__img"><img src="${resDrinkImages[d.name] || ''}" alt="${d.name}" onerror="this.onerror=null;this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2280%22><rect width=%2260%22 height=%2280%22 fill=%22%23eee%22 rx=%228%22/><text x=%2230%22 y=%2244%22 text-anchor=%22middle%22 fill=%22%23aaa%22 font-size=%2210%22>${d.name}</text></svg>'"></div>
      <div class="res-drink-card__controls">
        ${hasQty ? `
          <button class="res-drink-card__ctrl-btn res-drink-card__ctrl-btn--active" data-drink="${d.name}" data-action="minus">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <span class="res-drink-card__qty">${qty}</span>
        ` : ''}
        <button class="res-drink-card__ctrl-btn ${hasQty ? 'res-drink-card__ctrl-btn--active' : ''}" data-drink="${d.name}" data-action="plus">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </div>
    </div>`;
  }).join('');

  resDrinksContainer.querySelectorAll('.res-drink-card__ctrl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.drink;
      const action = btn.dataset.action;
      if (action === 'plus') resDrinkQtys[name]++;
      else if (action === 'minus') resDrinkQtys[name] = Math.max(0, resDrinkQtys[name] - 1);
      renderResDrinks();
      updateResSummary();
    });
  });
}

function renderResCalendar() {
  const { year, month } = resCalMonth;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  today.setHours(0,0,0,0);
  const monthNames = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

  let html = `<div class="res-cal-header">
    <button class="res-cal-header__btn" id="cal-prev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>
    <span class="res-cal-header__title">${year}년 ${monthNames[month]}</span>
    <button class="res-cal-header__btn" id="cal-next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>
  </div>`;
  html += `<div class="res-cal-weekdays"><span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span></div>`;
  html += `<div class="res-cal-days">`;
  for (let i = 0; i < firstDay; i++) html += `<button class="res-cal-day empty"></button>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const isPast = date < today;
    const isSelected = resSelectedDate && resSelectedDate.getTime() === date.getTime();
    const isToday = date.getTime() === today.getTime();
    const cls = [isPast ? 'past' : '', isSelected ? 'selected' : '', isToday ? 'today' : ''].filter(Boolean).join(' ');
    html += `<button class="res-cal-day ${cls}" data-date="${year}-${month}-${d}">${d}</button>`;
  }
  html += `</div>`;
  resCalendar.innerHTML = html;

  document.getElementById('cal-prev').addEventListener('click', () => {
    if (resCalMonth.month === 0) { resCalMonth.year--; resCalMonth.month = 11; }
    else resCalMonth.month--;
    renderResCalendar();
  });
  document.getElementById('cal-next').addEventListener('click', () => {
    if (resCalMonth.month === 11) { resCalMonth.year++; resCalMonth.month = 0; }
    else resCalMonth.month++;
    renderResCalendar();
  });

  resCalendar.querySelectorAll('.res-cal-day:not(.empty):not(.past)').forEach(btn => {
    btn.addEventListener('click', () => {
      const [y, m, d] = btn.dataset.date.split('-').map(Number);
      resSelectedDate = new Date(y, m, d);
      const mm = String(m + 1).padStart(2, '0');
      const dd = String(d).padStart(2, '0');
      resDateText.textContent = `${y}. ${mm}. ${dd}`;
      resDatePicker.classList.add('selected');
      resCalendar.classList.remove('open');
      renderResCalendar();
      updateResSummary();
    });
  });
}

resDatePicker.addEventListener('click', () => {
  resCalendar.classList.toggle('open');
  if (resCalendar.classList.contains('open')) renderResCalendar();
});

function renderResTimes() {
  resTimesContainer.innerHTML = TIME_SLOTS.map(t =>
    `<button class="res-time-slot ${resSelectedTime === t ? 'selected' : ''}" data-time="${t}">${t}</button>`
  ).join('');

  resTimesContainer.querySelectorAll('.res-time-slot').forEach(btn => {
    btn.addEventListener('click', () => {
      resSelectedTime = btn.dataset.time;
      renderResTimes();
      updateResSummary();
    });
  });
}

// People counter
document.getElementById('people-minus').addEventListener('click', () => {
  resPeople = Math.max(0, resPeople - 1);
  document.getElementById('people-value').textContent = resPeople;
  updateResSummary();
});
document.getElementById('people-plus').addEventListener('click', () => {
  resPeople++;
  document.getElementById('people-value').textContent = resPeople;
  updateResSummary();
});

function updateResSummary() {
  // Drinks
  let drinksTotal = 0;
  const drinkParts = [];
  RES_DRINKS.forEach(d => {
    const q = resDrinkQtys[d.name];
    if (q > 0) {
      drinksTotal += d.price * q;
      drinkParts.push(`${d.name} ${q}병`);
    }
  });
  document.getElementById('sum-drinks-detail').textContent = drinkParts.join(' · ') || '';
  document.getElementById('sum-drinks-price').textContent = drinksTotal > 0 ? drinksTotal.toLocaleString() + '원' : '0원';

  // People
  document.getElementById('sum-people-detail').textContent = resPeople > 0 ? resPeople + '명' : '';
  document.getElementById('sum-people-price').textContent = resPeople > 0 ? '추가금 없음' : '0원';

  // Time
  let timeDetail = '';
  if (resSelectedDate && resSelectedTime) {
    const mm = String(resSelectedDate.getMonth() + 1).padStart(2, '0');
    const dd = String(resSelectedDate.getDate()).padStart(2, '0');
    timeDetail = `${resSelectedDate.getFullYear()}. ${mm}. ${dd} / ${resSelectedTime}`;
  }
  document.getElementById('sum-time-detail').textContent = timeDetail;
  document.getElementById('sum-time-price').textContent = timeDetail ? '추가금 없음' : '0원';

  // Total
  const total = drinksTotal;
  document.getElementById('sum-total').textContent = total.toLocaleString() + '원';
}

// Reservation page navigation
document.getElementById('res-back').addEventListener('click', popNav);
document.getElementById('res-close').addEventListener('click', () => {
  navHistory.length = 0;
  closeReservationPage();
  closeDetailPage();
});
document.getElementById('res-btn-close').addEventListener('click', () => {
  navHistory.length = 0;
  closeReservationPage();
  closeDetailPage();
});

// ===== Wire up all "콜키지 예약하기" buttons =====
document.addEventListener('click', (e) => {
  // Skip if inside confirm-page or modals
  if (e.target.closest('.confirm-page') || e.target.closest('.modal-overlay')) return;

  const btn = e.target.closest('.store-actions__btn--corkage');
  if (!btn) return;

  if (detailPage.classList.contains('active')) {
    detailPage.classList.remove('active');
    openReservationPage('detail');
  } else if (sheetState !== 'closed') {
    setSheetState('closed');
    openReservationPage('map-half');
  }
});

// ===== Confirm Page =====
const confirmPage = document.getElementById('confirm-page');
const confirmStoreCard = document.getElementById('confirm-store-card');
const confirmScroll = document.getElementById('confirm-scroll');

function openConfirmPage() {
  pushNav('reservation');
  confirmPage.classList.add('active');

  // Build drink summary
  const drinkParts = [];
  let drinksTotal = 0;
  RES_DRINKS.forEach(d => {
    const q = resDrinkQtys[d.name];
    if (q > 0) {
      drinkParts.push(`${d.name}(${q})`);
      drinksTotal += d.price * q;
    }
  });

  const mm = String(resSelectedDate.getMonth() + 1).padStart(2, '0');
  const dd = String(resSelectedDate.getDate()).padStart(2, '0');
  const dayNames = ['일','월','화','수','목','금','토'];
  const dayName = dayNames[resSelectedDate.getDay()];

  // Convert time to 오후 format
  const hour = parseInt(resSelectedTime.split(':')[0]);
  const min = resSelectedTime.split(':')[1];
  const ampm = hour >= 12 ? '오후' : '오전';
  const h12 = hour > 12 ? hour - 12 : hour;
  const timeStr = `${ampm} ${h12}:${min}`;

  const total = BASE_FEE + drinksTotal;

  confirmStoreCard.innerHTML = `
    <div class="confirm-card__title">${selectedStore ? selectedStore.name : '사유의 서재 강남'}</div>
    <div class="confirm-card__row">
      <span class="confirm-card__label">주종(병수)</span>
      <span class="confirm-card__value">${drinkParts.join(', ')}</span>
    </div>
    <div class="confirm-card__row">
      <span class="confirm-card__label">일정</span>
      <span class="confirm-card__value">${mm}.${dd}(${dayName})  ·  ${timeStr}</span>
    </div>
    <div class="confirm-card__row">
      <span class="confirm-card__label">인원</span>
      <span class="confirm-card__value">${resPeople}명</span>
    </div>
    <div class="confirm-card__row">
      <span class="confirm-card__label confirm-card__value--highlight">콜키지 예상 금액</span>
      <span class="confirm-card__value">${drinksTotal.toLocaleString()}원</span>
    </div>`;

  // Reset booker fields
  document.getElementById('booker-name-display').classList.remove('hidden');
  document.getElementById('booker-name-input').classList.remove('active');
  document.getElementById('booker-name-display').textContent = '홍길동';
  document.getElementById('booker-name-input').value = '홍길동';
  document.getElementById('booker-phone-display').classList.remove('hidden');
  document.getElementById('booker-phone-input').classList.remove('active');
  document.getElementById('booker-phone-display').textContent = '010-12**-56**';
  document.getElementById('booker-phone-input').value = '010-1234-5678';
  document.getElementById('confirm-request').value = '';
  document.getElementById('request-count').textContent = '0';

  confirmScroll.scrollTop = 0;
}

function closeConfirmPage() {
  confirmPage.classList.remove('active');
}

// Confirm back
document.getElementById('confirm-back').addEventListener('click', () => {
  closeConfirmPage();
  // Go back to reservation page
  if (navHistory.length > 0 && navHistory[navHistory.length - 1] === 'reservation') {
    navHistory.pop();
    resPage.classList.add('active');
  }
});

document.getElementById('confirm-close-btn').addEventListener('click', () => {
  navHistory.length = 0;
  closeConfirmPage();
  closeReservationPage();
  closeDetailPage();
});

// Booker name change
document.getElementById('booker-name-change').addEventListener('click', () => {
  const display = document.getElementById('booker-name-display');
  const input = document.getElementById('booker-name-input');
  const isEditing = input.classList.contains('active');

  if (isEditing) {
    // Save
    display.textContent = input.value || '홍길동';
    display.classList.remove('hidden');
    input.classList.remove('active');
    document.getElementById('booker-name-change').textContent = '변경';
  } else {
    // Edit
    input.value = display.textContent;
    display.classList.add('hidden');
    input.classList.add('active');
    input.focus();
    document.getElementById('booker-name-change').textContent = '저장';
  }
});

// Phone verify
document.getElementById('booker-phone-verify').addEventListener('click', () => {
  const display = document.getElementById('booker-phone-display');
  const input = document.getElementById('booker-phone-input');
  const isEditing = input.classList.contains('active');

  if (isEditing) {
    const val = input.value || '010-1234-5678';
    display.textContent = val.replace(/(\d{3})-(\d{2})\d{2}-(\d{2})\d{2}/, '$1-$2**-$3**');
    display.classList.remove('hidden');
    input.classList.remove('active');
    document.getElementById('booker-phone-verify').textContent = '연락처 확인';
  } else {
    display.classList.add('hidden');
    input.classList.add('active');
    input.focus();
    document.getElementById('booker-phone-verify').textContent = '저장';
  }
});

// Request textarea counter
document.getElementById('confirm-request').addEventListener('input', (e) => {
  document.getElementById('request-count').textContent = e.target.value.length;
});

// Submit reservation -> "이 가격으로 예약하러 가기"
document.getElementById('res-btn-submit').addEventListener('click', () => {
  // Validate first (don't close resPage yet)
  const hasDrinks = RES_DRINKS.some(d => resDrinkQtys[d.name] > 0);
  if (!hasDrinks || !resSelectedDate || !resSelectedTime || resPeople <= 0) {
    const missing = [];
    if (!hasDrinks) missing.push('주종');
    if (!resSelectedDate) missing.push('날짜');
    if (!resSelectedTime) missing.push('시간');
    if (resPeople <= 0) missing.push('인원수');
    document.getElementById('modal-alert-desc').innerHTML = `${missing.join(', ')}을(를)<br>선택해 주세요.`;
    document.getElementById('modal-alert').classList.add('active');
    return;
  }
  // Valid: hide res page and open confirm
  resPage.classList.remove('active');
  openConfirmPage();
});

// Confirm submit -> show success modal
document.getElementById('confirm-submit-btn').addEventListener('click', () => {
  document.getElementById('modal-success').classList.add('active');
});

// Success modal -> close everything, back to map
document.getElementById('modal-success-btn').addEventListener('click', () => {
  document.getElementById('modal-success').classList.remove('active');
  navHistory.length = 0;
  closeConfirmPage();
  closeReservationPage();
  closeDetailPage();
});

// Alert modal -> close
document.getElementById('modal-alert-btn').addEventListener('click', () => {
  document.getElementById('modal-alert').classList.remove('active');
});

// ===== Init =====
renderAllFilters();
renderPins();
