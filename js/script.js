/* ==========================================================================
   Ankita Behera Portfolio - Core JavaScript
   Handles dynamic certificate carousel, lightbox modal, scroll reveal, 
   active navigation scroll spy, and mobile drawer menu.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Data Architecture (Resume & Original Certificate Images)
  // --------------------------------------------------------------------------
  const certificates = [
    {
      id: 'oracle-agentic-ai',
      title: 'Oracle Certified Foundations Associate — Agentic AI',
      issuer: 'Oracle Corporation',
      date: 'August 10, 2026',
      image: 'assets/certificates/oracle_agentic_ai.png',
      description: 'Official Certificate of Recognition issued by Oracle Corporation. Recognizes Ankita Behera as an Oracle Certified Agentic AI Foundations Associate.',
      points: [
        'Certificate ID: 103513803AAI26OFA',
        'Recognized by Oracle Corporation as Oracle Certified Foundations Associate.',
        'Core focus on Agentic AI architectures, autonomous decision loops, and LLM reasoning.'
      ],
      tags: ['Oracle Certified', 'Agentic AI', 'Oracle University', 'Verified Credential']
    },
    {
      id: 'aws-ml-foundations',
      title: 'AWS Academy Graduate — Machine Learning Foundations',
      issuer: 'AWS Academy (Amazon Web Services)',
      date: 'June 22, 2026',
      image: 'assets/certificates/aws_ml_foundations.png',
      description: 'Certificate of Completion for AWS Academy Graduate - Machine Learning Foundations Training Badge (20 course hours completed).',
      points: [
        '20 course hours completed in machine learning fundamentals.',
        'Digital Badge URL: https://www.credly.com/go/DjKo9dUj',
        'Hands-on model building, data preprocessing, and AWS SageMaker workflows.'
      ],
      tags: ['AWS Academy', 'Machine Learning', '20 Hours', 'Credly Badge', 'SageMaker']
    },
    {
      id: 'aws-nlp',
      title: 'AWS Academy Graduate — ML for Natural Language Processing',
      issuer: 'AWS Academy (Amazon Web Services)',
      date: 'July 12, 2026',
      image: 'assets/certificates/aws_nlp.png',
      description: 'Certificate of Completion for AWS Academy Graduate - Machine Learning for Natural Language Processing Training Badge (20 course hours completed).',
      points: [
        '20 course hours completed in specialized NLP techniques.',
        'Digital Badge URL: https://www.credly.com/go/ULrZ2t8m',
        'Advanced text processing, feature extraction, and language classification.'
      ],
      tags: ['AWS Academy', 'NLP', '20 Hours', 'Credly Badge', 'Language Models']
    },
    {
      id: 'nist-cloud-ml',
      title: 'Cloud Collaborative Machine Learning',
      issuer: 'NIST University',
      date: 'July 10, 2026',
      image: 'assets/certificates/nist_cloud_ml.png',
      description: 'Certificate of Completion for the Cloud Collaborative Machine Learning Summer Course held at NIST University from June 3rd to June 24th, 2026.',
      points: [
        'Certificate Ref: NISTU/SD/SC/2026/0007 | Roll No: 202457130',
        'Completed summer course held from 3rd June to 24th June 2026 at NIST University.',
        'Hands-on collaborative cloud machine learning architectures and deployment.'
      ],
      tags: ['NIST University', 'Cloud ML', 'Summer Course', 'Berhampur, Odisha']
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Render Certificates Carousel Dynamic Cards
  // --------------------------------------------------------------------------
  const carouselContainer = document.getElementById('certificatesCarousel');

  if (carouselContainer) {
    carouselContainer.innerHTML = certificates.map(cert => `
      <div class="certificate-card glass-card" data-id="${cert.id}">
        <div class="cert-image-wrapper">
          <img src="${cert.image}" alt="${cert.title}" loading="lazy" />
        </div>
        <div class="cert-content">
          <div class="cert-issuer">${cert.issuer}</div>
          <h3 class="cert-title">${cert.title}</h3>
          <div class="cert-date">${cert.date}</div>
          <div class="cert-click-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
            Click to view original certificate
          </div>
        </div>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 3. Carousel Navigation Controls (Certifications & Projects)
  // --------------------------------------------------------------------------
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (carouselContainer && prevBtn && nextBtn) {
    const scrollAmount = 340;

    prevBtn.addEventListener('click', () => {
      carouselContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      carouselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  const projectsContainer = document.getElementById('projectsCarousel');
  const projectsPrevBtn = document.getElementById('projectsPrev');
  const projectsNextBtn = document.getElementById('projectsNext');

  if (projectsContainer && projectsPrevBtn && projectsNextBtn) {
    const projScrollAmount = 400;

    projectsPrevBtn.addEventListener('click', () => {
      projectsContainer.scrollBy({ left: -projScrollAmount, behavior: 'smooth' });
    });

    projectsNextBtn.addEventListener('click', () => {
      projectsContainer.scrollBy({ left: projScrollAmount, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 4. Lightbox Modal Functionality
  // --------------------------------------------------------------------------
  const certModal = document.getElementById('certModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalMeta = document.getElementById('modalMeta');
  const modalDesc = document.getElementById('modalDesc');
  const modalPoints = document.getElementById('modalPoints');
  const modalTags = document.getElementById('modalTags');

  function openCertModal(certId) {
    const cert = certificates.find(c => c.id === certId);
    if (!cert || !certModal) return;

    modalImg.src = cert.image;
    modalImg.alt = cert.title;
    modalTitle.textContent = cert.title;
    modalMeta.textContent = `${cert.issuer} • ${cert.date}`;
    modalDesc.textContent = cert.description;

    modalPoints.innerHTML = cert.points.map(pt => `<li>${pt}</li>`).join('');
    modalTags.innerHTML = cert.tags.map(t => `<span class="badge">${t}</span>`).join('');

    certModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    if (!certModal) return;
    certModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach card click listeners
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.certificate-card');
    if (card) {
      const certId = card.getAttribute('data-id');
      openCertModal(certId);
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCertModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeCertModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal && certModal.classList.contains('active')) {
      closeCertModal();
    }
  });

  // --------------------------------------------------------------------------
  // 5. Mobile Navigation Hamburger Menu Toggle
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. Active Scroll Spy (Navbar Highlighting)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink();

  // --------------------------------------------------------------------------
  // 7. Scroll Reveal Animation via IntersectionObserver
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
