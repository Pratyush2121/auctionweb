/* ===== PROPERTY DATA ===== */
const PROPERTIES = [
  {
    id: 1, type: 'apartment', title: 'Oberoi Sky Heights', location: 'Worli, Mumbai',
    price: 45000000, priceLabel: '₹4.5 Cr', bhk: '3', area: '2,200', floor: '18th',
    badge: 'featured', tag: 'Featured',
    desc: 'Ultra-luxury sea-view apartment with world-class amenities and panoramic views of the Arabian Sea.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    ],
    amenities: ['Swimming Pool','Gym','Concierge','Security','Club House'],
    year: 2024, city: 'Mumbai'
  },
  {
    id: 2, type: 'villa', title: 'Emerald Grove Villa', location: 'DLF Phase 5, Gurgaon',
    price: 85000000, priceLabel: '₹8.5 Cr', bhk: '4', area: '5,500', floor: 'G+2',
    badge: 'new', tag: 'New Launch',
    desc: 'Sprawling luxury villa with private pool, landscaped garden and state-of-the-art smart home features.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    ],
    amenities: ['Private Pool','Smart Home','Garden','4-car Garage','Staff Quarters'],
    year: 2024, city: 'Gurgaon'
  },
  {
    id: 3, type: 'penthouse', title: 'The Prestige Apex', location: 'Koramangala, Bangalore',
    price: 65000000, priceLabel: '₹6.5 Cr', bhk: '4', area: '4,100', floor: '32nd',
    badge: 'featured', tag: 'Featured',
    desc: 'Exclusive penthouse duplex offering 360° views of Bangalore, private terrace and private elevator access.',
    image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
    ],
    amenities: ['Private Terrace','Private Lift','Jacuzzi','Home Theater','Club Lounge'],
    year: 2025, city: 'Bangalore'
  },
  {
    id: 4, type: 'apartment', title: 'Hiranandani Gardens', location: 'Powai, Mumbai',
    price: 22000000, priceLabel: '₹2.2 Cr', bhk: '2', area: '1,350', floor: '9th',
    badge: '', tag: '',
    desc: 'Well-planned apartment in a gated township, surrounded by lush greenery and top-tier infrastructure.',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&q=80',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80',
    ],
    amenities: ['Gymnasium','Park','School','Mall Access','24x7 Security'],
    year: 2023, city: 'Mumbai'
  },
  {
    id: 5, type: 'plot', title: 'Golden Gate Estate', location: 'Jubilee Hills, Hyderabad',
    price: 35000000, priceLabel: '₹3.5 Cr', bhk: 'N/A', area: '4,000 sq yd', floor: 'Plot',
    badge: '', tag: '',
    desc: 'Prime corner plot in Hyderabad\'s most prestigious neighborhood, perfect for building your dream bungalow.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80',
    ],
    amenities: ['Corner Plot','Clear Title','Paved Roads','Electricity','Water Connection'],
    year: 2024, city: 'Hyderabad'
  },
  {
    id: 6, type: 'commercial', title: 'Cyber City Tower C', location: 'Sector 24, Gurgaon',
    price: 120000000, priceLabel: '₹12 Cr', bhk: 'N/A', area: '8,500', floor: '14th',
    badge: 'new', tag: 'New',
    desc: 'Grade A commercial office space in the heart of Gurugram\'s financial district with excellent connectivity.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    ],
    amenities: ['Metro Connectivity','Parking','Food Court','Power Backup','Fire Safety'],
    year: 2025, city: 'Gurgaon'
  },
  {
    id: 7, type: 'villa', title: 'Amanora Forest Villa', location: 'Hadapsar, Pune',
    price: 42000000, priceLabel: '₹4.2 Cr', bhk: '3', area: '3,800', floor: 'G+1',
    badge: '', tag: '',
    desc: 'Eco-luxury villa nestled within a 100-acre forest township, offering unparalleled privacy and greenery.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80',
    ],
    amenities: ['Forest View','Community Pool','Club House','Jogging Track','Security'],
    year: 2024, city: 'Pune'
  },
  {
    id: 8, type: 'apartment', title: 'Chennai Bay Residences', location: 'Besant Nagar, Chennai',
    price: 18000000, priceLabel: '₹1.8 Cr', bhk: '3', area: '1,650', floor: '6th',
    badge: '', tag: '',
    desc: 'Sea-facing apartment with modern finishes near Elliot\'s Beach, a coveted address in the city.',
    image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    ],
    amenities: ['Sea View','Modular Kitchen','Lift','Parking','Security'],
    year: 2023, city: 'Chennai'
  },
  {
    id: 9, type: 'penthouse', title: 'Lodha World One Crown', location: 'Lower Parel, Mumbai',
    price: 250000000, priceLabel: '₹25 Cr', bhk: '5', area: '9,200', floor: '75th',
    badge: 'featured', tag: 'Ultra Luxury',
    desc: 'Iconic ultra-luxury penthouse in one of the world\'s tallest residential towers with 5-star butler service.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
    ],
    amenities: ['Butler Service','Private Pool','Wine Cellar','Cinema Room','Heli Pad'],
    year: 2025, city: 'Mumbai'
  },
];

/* ===== STATE ===== */
let state = {
  isLoggedIn: false,
  user: null,
  savedProperties: [],
  viewedProperties: [],
  currentPropertyId: null,
  currentGalleryIndex: 0,
  selectedBhk: [],
  currentGalleryImages: [],
};

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderFeaturedCards();
  initSkeletonHeroLoad();
  initSmoothLinks();
});

function initSkeletonHeroLoad() {
  // Skeletons briefly appear, then real content
  const grid = document.getElementById('propertiesGrid');
  if (!grid) return;
  grid.innerHTML = [1,2,3,4,5,6].map(() => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton skeleton-line w60"></div>
        <div class="skeleton skeleton-line w80"></div>
        <div class="skeleton skeleton-line w40"></div>
      </div>
    </div>`).join('');
  setTimeout(renderFeaturedCards, 800);
}

function initSmoothLinks() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const menu = document.getElementById('navLinks');
      menu.classList.remove('open');
    });
  });
}

/* ===== NAVBAR ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function toggleMenu() {
  const menu = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  menu.classList.toggle('open');
  ham.classList.toggle('open');
}

/* ===== RENDER PROPERTY CARDS ===== */
function renderFeaturedCards(filter = 'all') {
  const grid = document.getElementById('propertiesGrid');
  if (!grid) return;
  const props = filter === 'all' ? PROPERTIES : PROPERTIES.filter(p => p.type === filter);
  const display = props.slice(0, 6);
  if (display.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--gray-400)"><i class="fas fa-search" style="font-size:40px;margin-bottom:16px;display:block"></i>No properties found</div>`;
    return;
  }
  grid.innerHTML = display.map((p, i) => propertyCardHTML(p, i)).join('');
}

function propertyCardHTML(p, i = 0) {
  const saved = state.savedProperties.includes(p.id);
  return `
  <div class="property-card" style="animation-delay:${i * 0.08}s" data-type="${p.type}" data-price="${p.price}">
    <div class="card-img-wrap">
      <img src="${p.image}" alt="${p.title}" loading="lazy" />
      ${p.badge ? `<span class="card-badge ${p.badge}">${p.tag}</span>` : ''}
      <span class="card-wishlist ${saved ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)">
        <i class="${saved ? 'fas' : 'far'} fa-heart"></i>
      </span>
    </div>
    <div class="card-body">
      <p class="card-type">${p.type.charAt(0).toUpperCase() + p.type.slice(1)}</p>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</p>
      <p class="card-desc">${p.desc}</p>
      <div class="card-specs">
        ${p.bhk !== 'N/A' ? `<span class="card-spec"><i class="fas fa-bed"></i> ${p.bhk} BHK</span>` : ''}
        <span class="card-spec"><i class="fas fa-ruler-combined"></i> ${p.area} sq.ft</span>
        <span class="card-spec"><i class="fas fa-building"></i> ${p.floor}</span>
        <span class="card-spec"><i class="fas fa-calendar"></i> ${p.year}</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="card-price">${p.priceLabel} <span>onward</span></div>
        </div>
        <button class="btn-view" onclick="handleViewDetails(${p.id})">
          View Details <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>`;
}

/* ===== FILTER ===== */
function filterProperties(type, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('propertiesGrid');
  grid.style.opacity = '0.5';
  setTimeout(() => { renderFeaturedCards(type); grid.style.opacity = '1'; }, 200);
}

/* ===== SHOW ALL / LISTING PAGE ===== */
function showAllProperties() {
  document.getElementById('listingSection').style.display = 'block';
  renderListingGrid(PROPERTIES);
  document.getElementById('resultCount').textContent = `Showing ${PROPERTIES.length} properties`;
  setTimeout(() => document.getElementById('listingSection').scrollIntoView({ behavior: 'smooth' }), 100);
}

function scrollToProperties() {
  document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
}

function renderListingGrid(props) {
  const grid = document.getElementById('listingGrid');
  if (!grid) return;
  if (props.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:64px;color:var(--gray-400)"><i class="fas fa-home" style="font-size:48px;margin-bottom:16px;display:block;opacity:0.3"></i><h3 style="font-size:20px;margin-bottom:8px;color:var(--gray-600)">No properties found</h3><p style="font-size:14px">Try adjusting your filters</p></div>`;
    return;
  }
  grid.innerHTML = props.map((p, i) => propertyCardHTML(p, i)).join('');
  document.getElementById('resultCount').textContent = `Showing ${props.length} properties`;
}

function applyFilters() {
  const search = (document.getElementById('filterSearch')?.value || '').toLowerCase();
  const location = document.getElementById('filterLocation')?.value || '';
  const budget = document.getElementById('filterBudget')?.value || '';
  const checkedTypes = [...document.querySelectorAll('#typeFilters input:checked')].map(el => el.value);
  let filtered = PROPERTIES.filter(p => {
    const matchSearch = !search || p.title.toLowerCase().includes(search) || p.location.toLowerCase().includes(search);
    const matchLocation = !location || p.city === location;
    const matchType = checkedTypes.length === 0 || checkedTypes.includes(p.type);
    let matchBudget = true;
    if (budget) {
      const [min, max] = budget.split('-').map(Number);
      matchBudget = p.price >= min && p.price <= max;
    }
    const matchBhk = state.selectedBhk.length === 0 || (state.selectedBhk.includes(p.bhk));
    return matchSearch && matchLocation && matchType && matchBudget && matchBhk;
  });
  renderListingGrid(filtered);
}

function clearFilters() {
  document.getElementById('filterSearch').value = '';
  document.getElementById('filterLocation').value = '';
  document.getElementById('filterBudget').value = '';
  document.querySelectorAll('#typeFilters input').forEach(el => el.checked = false);
  document.querySelectorAll('.bhk-btn').forEach(b => b.classList.remove('active'));
  state.selectedBhk = [];
  renderListingGrid(PROPERTIES);
}

function toggleBhk(btn, val) {
  btn.classList.toggle('active');
  if (state.selectedBhk.includes(val)) {
    state.selectedBhk = state.selectedBhk.filter(v => v !== val);
  } else {
    state.selectedBhk.push(val);
  }
  applyFilters();
}

function sortProperties(method) {
  let sorted = [...PROPERTIES];
  if (method === 'price-asc') sorted.sort((a, b) => a.price - b.price);
  else if (method === 'price-desc') sorted.sort((a, b) => b.price - a.price);
  else if (method === 'newest') sorted.sort((a, b) => b.year - a.year);
  renderListingGrid(sorted);
}

/* ===== VIEW DETAILS ===== */
function handleViewDetails(id) {
  state.currentPropertyId = id;
  if (!state.viewedProperties.includes(id)) state.viewedProperties.push(id);
  if (!state.isLoggedIn) {
    openModal('loginModal');
    showToast('Please login to view property details', 'info');
    return;
  }
  openPropertyModal(id);
}

function openPropertyModal(id) {
  const p = PROPERTIES.find(x => x.id === id);
  if (!p) return;
  state.currentGalleryIndex = 0;
  state.currentGalleryImages = p.images;
  const content = document.getElementById('propertyModalContent');
  content.innerHTML = `
    <div class="prop-gallery">
      <img id="galleryImg" src="${p.images[0]}" alt="${p.title}" />
      ${p.images.length > 1 ? `
        <button class="prop-prev" onclick="changeGallery(-1)"><i class="fas fa-chevron-left"></i></button>
        <button class="prop-next" onclick="changeGallery(1)"><i class="fas fa-chevron-right"></i></button>
        <div class="prop-gallery-dots">${p.images.map((_, i) => `<span class="${i===0?'active':''}" onclick="setGalleryImg(${i})"></span>`).join('')}</div>
      ` : ''}
    </div>
    <div class="prop-body">
      <div class="prop-header">
        <div>
          <h2 class="prop-title">${p.title}</h2>
          <p class="prop-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</p>
        </div>
        <div class="prop-price">${p.priceLabel}</div>
      </div>
      <div class="prop-specs-grid">
        ${p.bhk !== 'N/A' ? `<div class="prop-spec-item"><i class="fas fa-bed"></i><strong>${p.bhk}</strong><span>BHK</span></div>` : ''}
        <div class="prop-spec-item"><i class="fas fa-ruler-combined"></i><strong>${p.area}</strong><span>Sq. Ft.</span></div>
        <div class="prop-spec-item"><i class="fas fa-building"></i><strong>${p.floor}</strong><span>Floor</span></div>
        <div class="prop-spec-item"><i class="fas fa-calendar-check"></i><strong>${p.year}</strong><span>Year</span></div>
      </div>
      <p class="prop-desc">${p.desc}</p>
      <div class="prop-locked">
        <i class="fas fa-lock"></i>
        <h3>Full Details Locked</h3>
        <p>Complete property information, floor plans, legal documents, and owner contact details are available after admin approval of your account.</p>
        <div class="prop-doc-preview">
          <i class="fas fa-file-pdf"></i>
          <div><span style="display:block;font-weight:600;font-size:14px;color:var(--dark)">Brochure & Floor Plan</span><span>PDF · Approval required</span></div>
          <i class="fas fa-lock" style="margin-left:auto;color:var(--gray-400)"></i>
        </div>
        <div class="prop-doc-preview" style="margin-top:8px">
          <i class="fas fa-file-contract"></i>
          <div><span style="display:block;font-weight:600;font-size:14px;color:var(--dark)">Legal Documents</span><span>PDF · Approval required</span></div>
          <i class="fas fa-lock" style="margin-left:auto;color:var(--gray-400)"></i>
        </div>
        <button class="btn-primary" style="margin-top:20px" onclick="closeModal('propertyModal'); openDashboard()">Check Approval Status <i class="fas fa-arrow-right"></i></button>
      </div>
    </div>`;
  openModal('propertyModal');
}

function changeGallery(dir) {
  const imgs = state.currentGalleryImages;
  state.currentGalleryIndex = (state.currentGalleryIndex + dir + imgs.length) % imgs.length;
  setGalleryImg(state.currentGalleryIndex);
}

function setGalleryImg(i) {
  state.currentGalleryIndex = i;
  const img = document.getElementById('galleryImg');
  if (img) { img.style.opacity = '0'; setTimeout(() => { img.src = state.currentGalleryImages[i]; img.style.opacity = '1'; }, 150); }
  document.querySelectorAll('.prop-gallery-dots span').forEach((dot, idx) => dot.classList.toggle('active', idx === i));
}

/* ===== WISHLIST ===== */
function toggleWishlist(id, el) {
  if (!state.isLoggedIn) { openModal('loginModal'); showToast('Please login to save properties'); return; }
  if (state.savedProperties.includes(id)) {
    state.savedProperties = state.savedProperties.filter(s => s !== id);
    el.classList.remove('active');
    el.innerHTML = '<i class="far fa-heart"></i>';
    showToast('Removed from saved properties');
  } else {
    state.savedProperties.push(id);
    el.classList.add('active');
    el.innerHTML = '<i class="fas fa-heart"></i>';
    showToast('Property saved! ❤️');
  }
}

/* ===== AUTH ===== */
function handleLogin() {
  state.isLoggedIn = true;
  state.user = { name: 'Rahul Sharma', email: 'rahul@email.com' };
  closeModal('loginModal');
  updateNavForLoggedIn();
  if (state.currentPropertyId) {
    setTimeout(() => openPropertyModal(state.currentPropertyId), 300);
  } else {
    setTimeout(() => openModal('pendingModal'), 300);
  }
  showToast('Welcome back, Rahul! 👋');
}

function handleSignup() {
  state.isLoggedIn = true;
  state.user = { name: 'Rahul Sharma', email: 'rahul@email.com' };
  closeModal('loginModal');
  updateNavForLoggedIn();
  setTimeout(() => openModal('pendingModal'), 300);
  showToast('Account created successfully! 🎉');
}

function handleForgot() {
  showToast('Reset link sent to your email! 📧');
  setTimeout(() => { switchAuthTab('login', null); }, 1500);
}

function handleLogout() {
  state.isLoggedIn = false;
  state.user = null;
  closeModal('dashboardModal');
  const loginBtn = document.querySelector('.btn-login');
  loginBtn.innerHTML = '<i class="fas fa-user-circle"></i> Login';
  loginBtn.onclick = () => openModal('loginModal');
  showToast('Logged out successfully');
}

function updateNavForLoggedIn() {
  const btn = document.querySelector('.btn-login');
  btn.innerHTML = `<i class="fas fa-user-circle"></i> ${state.user.name.split(' ')[0]}`;
  btn.onclick = () => openDashboard();
}

function openDashboard() {
  if (!state.isLoggedIn) { openModal('loginModal'); return; }
  renderDashboard('overview');
  openModal('dashboardModal');
}

/* ===== AUTH UI ===== */
function switchAuthTab(tab, btn) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('forgotForm').classList.add('hidden');
  if (tab === 'login') { document.getElementById('loginForm').classList.remove('hidden'); if (btn) btn.classList.add('active'); }
  if (tab === 'signup') { document.getElementById('signupForm').classList.remove('hidden'); }
  if (tab === 'forgot') { document.getElementById('forgotForm').classList.remove('hidden'); }
}

function showForgotPassword() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('forgotForm').classList.remove('hidden');
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
}

function togglePass(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

/* ===== DASHBOARD ===== */
function openDashboard() {
  if (!state.isLoggedIn) { openModal('loginModal'); return; }
  renderDashboard('overview');
  openModal('dashboardModal');
}

function switchDashTab(tab, btn) {
  document.querySelectorAll('.dash-nav-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderDashboard(tab);
}

function renderDashboard(tab) {
  const content = document.getElementById('dashboardContent');
  if (!content) return;
  if (tab === 'overview') {
    content.innerHTML = `
      <h2 class="dash-section-title">Welcome back, ${state.user?.name?.split(' ')[0] || 'User'} 👋</h2>
      <div class="stat-cards">
        <div class="stat-card"><i class="fas fa-heart"></i><strong>${state.savedProperties.length}</strong><span>Saved Properties</span></div>
        <div class="stat-card"><i class="fas fa-eye"></i><strong>${state.viewedProperties.length}</strong><span>Viewed</span></div>
        <div class="stat-card"><i class="fas fa-clock"></i><strong>Pending</strong><span>Access Status</span></div>
      </div>
      <div class="access-alert">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <strong>Your access is pending admin approval</strong>
          <p>Complete property details, documents, and owner contacts are locked until our admin team reviews and approves your profile. This usually takes 24–48 hours after signup.</p>
        </div>
      </div>`;
  } else if (tab === 'saved') {
    const saved = PROPERTIES.filter(p => state.savedProperties.includes(p.id));
    content.innerHTML = `<h2 class="dash-section-title">Saved Properties</h2>
      ${saved.length === 0 ? `<div style="text-align:center;padding:48px;color:var(--gray-400)"><i class="fas fa-heart" style="font-size:40px;margin-bottom:16px;display:block;opacity:0.3"></i><p>No saved properties yet.<br>Browse and save the ones you love!</p></div>` :
      `<div class="properties-grid-list">${saved.map((p, i) => propertyCardHTML(p, i)).join('')}</div>`}`;
  } else if (tab === 'viewed') {
    const viewed = PROPERTIES.filter(p => state.viewedProperties.includes(p.id));
    content.innerHTML = `<h2 class="dash-section-title">Recently Viewed</h2>
      ${viewed.length === 0 ? `<div style="text-align:center;padding:48px;color:var(--gray-400)"><i class="fas fa-eye" style="font-size:40px;margin-bottom:16px;display:block;opacity:0.3"></i><p>No properties viewed yet.</p></div>` :
      `<div class="properties-grid-list">${viewed.map((p, i) => propertyCardHTML(p, i)).join('')}</div>`}`;
  } else if (tab === 'profile') {
    content.innerHTML = `
      <h2 class="dash-section-title">Edit Profile</h2>
      <div class="contact-form" style="max-width:400px;padding:28px">
        <div class="form-row">
          <div class="form-group"><label>First Name</label><input type="text" value="Rahul" /></div>
          <div class="form-group"><label>Last Name</label><input type="text" value="Sharma" /></div>
        </div>
        <div class="form-group"><label>Email</label><input type="email" value="rahul@email.com" /></div>
        <div class="form-group"><label>Phone</label><input type="tel" value="+91 9876543210" /></div>
        <div class="form-group"><label>City</label><select><option>Mumbai</option><option>Delhi</option><option>Bangalore</option></select></div>
        <button class="btn-primary full-width" onclick="showToast('Profile updated successfully! ✅')">Save Changes <i class="fas fa-check"></i></button>
      </div>`;
  }
}

/* ===== MODALS ===== */
function openModal(id) {
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOutside(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

/* ===== TOAST ===== */
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast ${type === 'error' ? 'error' : ''} show`;
  setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ===== CONTACT FORM ===== */
function submitContact(e) {
  e.preventDefault();
  showToast('Message sent! We\'ll be in touch soon 🙏');
  e.target.reset();
}

/* ===== KEYBOARD ESC ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['loginModal','pendingModal','propertyModal','dashboardModal'].forEach(closeModal);
  }
});