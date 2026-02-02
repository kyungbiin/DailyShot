// ===== 매장 샘플 데이터 =====
const STORE_DATA = [
  {
    id: 1, name: '사유의서재 강남', category: '양식', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 강남대로98길 11 5층 사유의서재',
    hours: '월 - 일 오전 11:30 ~ 오후 11:00',
    photos: ['https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 28, left: 18
  },
  {
    id: 2, name: '먼데이블루스', category: '와인', type: 'free',
    badgeText: '콜키지 무료', address: '서울 서초구 강남대로53길 11 삼성쉐르빌2 1층',
    hours: '월 - 일 오전 11:00 ~ 오후 11:00',
    photos: ['https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 45, left: 24
  },
  {
    id: 3, name: '비노파라다이소', category: '이탈리안', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 역삼로 234 2층',
    hours: '월 - 토 오전 11:30 ~ 오후 10:30',
    photos: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 22, left: 72
  },
  {
    id: 4, name: '르꼬숑', category: '프렌치', type: 'free',
    badgeText: '콜키지 무료', address: '서울 강남구 테헤란로 112 1층',
    hours: '화 - 일 오후 12:00 ~ 오후 10:00',
    photos: ['https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 50, left: 70
  },
  {
    id: 5, name: '와인앤다인', category: '양식', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 서초구 서초대로 301 지하1층',
    hours: '월 - 일 오후 5:00 ~ 오전 1:00',
    photos: ['https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 55, left: 15
  },
  {
    id: 6, name: '오스테리아 비앙카', category: '이탈리안', type: 'free',
    badgeText: '콜키지 무료', address: '서울 강남구 선릉로 525',
    hours: '월 - 토 오전 11:30 ~ 오후 10:00',
    photos: ['https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1485686531765-ba63b07845a7?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 35, left: 9
  },
  {
    id: 7, name: '라망드셰프', category: '프렌치', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 강남대로 390',
    hours: '화 - 일 오후 12:00 ~ 오후 10:00',
    photos: ['https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 33, left: 17
  },
  {
    id: 8, name: '더스테이크하우스', category: '스테이크', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 역삼동 678-9',
    hours: '월 - 일 오전 11:00 ~ 오후 11:00',
    photos: ['https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 20, left: 78
  },
  {
    id: 9, name: '블루밍가든', category: '양식', type: 'free',
    badgeText: '콜키지 무료', address: '서울 서초구 반포대로 45',
    hours: '월 - 일 오전 10:00 ~ 오후 10:00',
    photos: ['https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 30, left: 55
  },
  {
    id: 10, name: '트라토리아 서울', category: '이탈리안', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 도산대로 123',
    hours: '화 - 일 오후 12:00 ~ 오후 11:00',
    photos: ['https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 38, left: 82
  },
  {
    id: 11, name: '카사델비노', category: '와인바', type: 'free',
    badgeText: '콜키지 무료', address: '서울 강남구 학동로 234',
    hours: '월 - 토 오후 5:00 ~ 오전 2:00',
    photos: ['https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 47, left: 40
  },
  {
    id: 12, name: '피노누아 다이닝', category: '양식', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 서초구 서초중앙로 78',
    hours: '월 - 일 오전 11:30 ~ 오후 10:30',
    photos: ['https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 53, left: 35
  },
  {
    id: 13, name: '리베르타', category: '프렌치', type: 'free',
    badgeText: '콜키지 무료', address: '서울 강남구 논현로 567',
    hours: '화 - 일 오후 12:00 ~ 오후 10:00',
    photos: ['https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 60, left: 52
  },
  {
    id: 14, name: '셀러1988', category: '와인바', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 서초구 강남대로 201',
    hours: '월 - 토 오후 6:00 ~ 오전 1:00',
    photos: ['https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 62, left: 22
  },
  {
    id: 15, name: '에노테카 서울', category: '이탈리안', type: 'free',
    badgeText: '콜키지 무료', address: '서울 강남구 삼성로 89',
    hours: '월 - 일 오전 11:00 ~ 오후 10:30',
    photos: ['https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 68, left: 30
  },
  {
    id: 16, name: '비스트로 드 빈', category: '프렌치', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 봉은사로 456',
    hours: '화 - 일 오후 12:00 ~ 오후 11:00',
    photos: ['https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 42, left: 50
  },
  {
    id: 17, name: '소믈리에 테이블', category: '양식', type: 'free',
    badgeText: '콜키지 무료', address: '서울 서초구 방배로 67',
    hours: '월 - 토 오후 5:30 ~ 오후 11:00',
    photos: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 75, left: 62
  },
  {
    id: 18, name: '포도나무 아래', category: '한식', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 역삼로 345',
    hours: '월 - 일 오전 11:30 ~ 오후 9:30',
    photos: ['https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 15, left: 50
  },
  {
    id: 19, name: '꼬르동블루 강남', category: '프렌치', type: 'corkage',
    badgeText: '콜키지 가능', address: '서울 강남구 언주로 789',
    hours: '화 - 일 오후 12:00 ~ 오후 10:00',
    photos: ['https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=400&h=300&q=80'],
    top: 85, left: 40
  },
  {
    id: 20, name: '더 와인키친', category: '양식', type: 'free',
    badgeText: '콜키지 무료', address: '서울 서초구 사평대로 56',
    hours: '월 - 일 오후 12:00 ~ 오후 11:00',
    photos: ['https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=400&h=300&q=80', 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=400&h=300&q=80'],
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
  const color = type === 'free' ? '#E84393' : '#FF6B35';
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
        <img class="store-photos__img" src="${store.photos[0]}" alt="${store.name}" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="console.error('[IMG FAIL] store photo 0:',this.src);this.style.background='#E8E8E8'">
        <img class="store-photos__img" src="${store.photos[1]}" alt="${store.name}" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="console.error('[IMG FAIL] store photo 1:',this.src);this.style.background='#E8E8E8'">
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
  },
  menu: {
    recommended: [
      { name: '바질크림 파스타', desc: '신선한 바질페스토 크림파스타', price: '25,000원', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=200&h=200&q=80' },
      { name: '와인 무제한 1인', desc: '2시간 동안 다양한 보틀와인 무제한 이용', price: '30,000원', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=200&h=200&q=80' },
      { name: '치즈할 라구토마토 파스타', desc: '2시간 동안 다양한 보틀와인 무제한 이용', price: '25,000원', img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=200&h=200&q=80' },
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
  },
};

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
    <img class="detail-gallery__main" src="${store.photos[0]}" alt="${store.name}" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="console.error('[IMG FAIL] gallery main:',this.src);this.style.background='#3A3A4A'">
    <img class="detail-gallery__thumb" src="${store.photos[1]}" alt="${store.name}" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="console.error('[IMG FAIL] gallery thumb:',this.src);this.style.background='#4A3A3A'">
    <img class="detail-gallery__thumb" src="${store.photos[0]}" alt="${store.name}" referrerpolicy="no-referrer" crossorigin="anonymous" style="filter:brightness(0.8)" onerror="console.error('[IMG FAIL] gallery thumb2:',this.src);this.style.background='#4A3A3A'">`;

  // Info
  const badgeClass = store.type === 'free' ? 'store-card__badge--free' : 'store-card__badge--corkage';
  detailInfo.innerHTML = `
    <div class="detail-info__badge-row">
      <span class="store-card__badge ${badgeClass}">${store.badgeText}</span>
      <span class="detail-info__name">${store.name}</span>
      <span class="detail-info__category">${store.category}</span>
    </div>
    <div class="detail-info__row">
      ${locationSVG()}
      <span>주소복사</span>
      <span>${DETAIL_EXTRA.phone}</span>
    </div>
    <div class="detail-info__row">
      ${clockSVG()}
      <span>${store.hours}</span>
    </div>
    <div class="detail-info__notice">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      <span>${DETAIL_EXTRA.notice}</span>
    </div>`;

  // Corkage section
  const cork = DETAIL_EXTRA.corkage;
  const drinkImages = { '와인': '/DailyShot/wine.png', '사케': '/DailyShot/sake.png', '위스키': '/DailyShot/whiskey.png', '백주': '/DailyShot/beer.png', '우리술': '/DailyShot/korean.png' };
  const serviceImages = { '얼음': '/DailyShot/ice.png', '와인잔': '/DailyShot/wineglass.png', '위스키잔': '/DailyShot/whiskeyglass.png', '사케잔': '/DailyShot/sakeglass.png', '칠링 바스켓': '/DailyShot/chillingbucket.png' };

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
    <button class="more-btn">더보기</button>`;

  // Menu section
  const menu = DETAIL_EXTRA.menu;
  document.getElementById('section-menu').innerHTML = `
    <div class="detail-section__title">메뉴</div>
    <div class="menu-board">
      <img class="menu-board__img" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&h=400&q=80" alt="메뉴1" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="console.error('[IMG FAIL] menu board:',this.src);this.style.background='#E8E4DE'">
      <img class="menu-board__img" src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=400&h=400&q=80" alt="메뉴2" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="console.error('[IMG FAIL] menu board:',this.src);this.style.background='#E8E4DE'">
      <img class="menu-board__img" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=400&q=80" alt="메뉴3" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="console.error('[IMG FAIL] menu board:',this.src);this.style.background='#E8E4DE'">
    </div>
    <div style="font-size:14px;font-weight:700;margin-bottom:12px;color:#222">추천 메뉴</div>
    ${menu.recommended.map(item => `
      <div class="menu-item">
        <img class="menu-item__img" src="${item.img}" alt="${item.name}" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="console.error('[IMG FAIL] menu item:',this.src);this.style.background='#E8E4DE'">
        <div class="menu-item__info">
          <span class="menu-item__badge">추천</span>
          <span class="menu-item__name">${item.name}</span>
          <span class="menu-item__desc">${item.desc}</span>
          <span class="menu-item__price">${item.price}</span>
        </div>
      </div>`).join('')}
    <button class="more-btn">더보기</button>`;

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
        <img class="review-photos__img" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&h=300&q=80" alt="리뷰사진1" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="console.error('[IMG FAIL] review:',this.src);this.style.background='#E0DDD8'">
        <img class="review-photos__img" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&h=300&q=80" alt="리뷰사진2" referrerpolicy="no-referrer" crossorigin="anonymous" onerror="console.error('[IMG FAIL] review:',this.src);this.style.background='#E0DDD8'">
      </div>
    </div>
    <button class="more-btn">더보기</button>`;

  detailScroll.scrollTop = 0;
  setupDetailTabs();
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
  '와인': '/DailyShot/wine.png',
  '사케': '/DailyShot/sake.png',
  '위스키': '/DailyShot/whiskey.png',
  '백주': '/DailyShot/beer.png',
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
  const total = BASE_FEE + drinksTotal;
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
