/**
 * MEDIX - Social Media Management Service
 * JavaScript Interactivity & Form Automation
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Integrasi Form Konsultasi ke WhatsApp
    const form = document.getElementById('consultationForm') || document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nama = (document.getElementById('nama')?.value || '').trim();
            const email = (document.getElementById('email')?.value || '').trim();
            const telepon = (document.getElementById('telepon')?.value || '').trim();
            const paketSelect = document.getElementById('paket');
            const paket = (paketSelect?.options[paketSelect.selectedIndex]?.text || paketSelect?.value || '').trim();
            const pesan = (document.getElementById('pesan')?.value || '').trim();

            if (!nama || !email) {
                alert('Silakan lengkapi nama dan email Anda terlebih dahulu.');
                return;
            }

            // Susun teks pesan WhatsApp rapi dan profesional
            const pesanWA = `Halo MEDIX, saya ingin konsultasi & pemesanan layanan:\n\n` +
                `*Nama Lengkap:* ${nama}\n` +
                `*Email:* ${email}\n` +
                `*Nomor WhatsApp:* ${telepon || '-'}\n` +
                `*Paket Layanan:* ${paket || '-'}\n` +
                `*Pesan / Kebutuhan:* ${pesan || '-'}\n\n` +
                `Terima kasih!`;

            const waNumber = '6285183867027';
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(pesanWA)}`;

            // Buka WhatsApp di tab baru
            window.open(waUrl, '_blank');
        });
    }

    // 2. Active State pada Menu Navigasi saat Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    const updateActiveNav = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const offset = 140;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.offsetHeight;
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
    };

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();
});
