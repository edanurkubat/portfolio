/* src/js/utils/generateCV.js */
import { portfolioData } from '../data/portfolioData.js';
import { getLang, localize } from '../i18n/i18n.js';

export async function generateAndDownloadCV() {
  const btn = document.getElementById('cv-download-btn');
  const originalText = btn ? btn.textContent : '';

  if (btn) {
    btn.disabled = true;
    btn.textContent = getLang() === 'tr' ? 'Hazırlanıyor...' : 'Preparing...';
  }

  const container = buildCVTemplate();
  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    const safeName = portfolioData.personalInfo.name.replace(/\s+/g, '-');
    pdf.save(`CV-${safeName}.pdf`);
  } catch (err) {
    console.error('CV oluşturma hatası:', err);
    alert(getLang() === 'tr'
      ? 'CV oluşturulurken bir sorun oluştu, lütfen tekrar deneyin.'
      : 'Something went wrong while generating the CV. Please try again.');
  } finally {
    document.body.removeChild(container);
    if (btn) {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  }
}

function buildCVTemplate() {
  const { name, title, about, email, location, socials } = portfolioData.personalInfo;
  const { skills, experience, education, certificates } = portfolioData;
  const lang = getLang();

  const wrapper = document.createElement('div');
  wrapper.style.position = 'fixed';
  wrapper.style.top = '0';
  wrapper.style.left = '-10000px';
  wrapper.style.width = '800px';
  wrapper.style.background = '#ffffff';
  wrapper.style.fontFamily = 'Arial, sans-serif';
  wrapper.style.color = '#1a1a1a';

  const L = {
    about: lang === 'tr' ? 'HAKKIMDA' : 'ABOUT ME',
    education: lang === 'tr' ? 'EĞİTİM' : 'EDUCATION',
    skills: lang === 'tr' ? 'BECERİLER' : 'SKILLS',
    experience: lang === 'tr' ? 'İŞ DENEYİMİ' : 'WORK EXPERIENCE',
    certificates: lang === 'tr' ? 'SERTİFİKALAR' : 'CERTIFICATES',
  };

  const sectionTitle = (text) => `
    <h2 style="font-size: 15px; font-weight: 800; letter-spacing: 1px; margin: 0 0 14px; color: #111827;">
      ${text}
    </h2>
  `;

  wrapper.innerHTML = `
    <!-- Üst Başlık -->
    <div style="display: flex; justify-content: space-between; align-items: flex-start; padding: 40px 40px 24px;">
      <div>
        <h1 style="font-size: 30px; font-weight: 800; letter-spacing: 1px; margin: 0; color: #111827;">${name.toUpperCase()}</h1>
        <p style="font-size: 14px; font-weight: 600; letter-spacing: 2px; color: #6b7280; margin: 6px 0 0;">${localize(title).toUpperCase()}</p>
      </div>
      <div style="text-align: right; font-size: 11px; color: #4b5563; line-height: 1.8;">
        <p style="margin: 0;">${email}</p>
        <p style="margin: 0;">${socials.github}</p>
        <p style="margin: 0;">${socials.linkedin}</p>
        <p style="margin: 0;">${location}</p>
      </div>
    </div>

    <div style="height: 2px; background: #111827; margin: 0 40px 32px;"></div>

    <!-- İki Sütunlu Gövde -->
    <div style="display: flex; gap: 32px; padding: 0 40px 40px;">

      <!-- Sol Sütun -->
      <div style="width: 220px; flex-shrink: 0;">
        <div style="width: 220px; height: 260px; overflow: hidden; margin-bottom: 28px; filter: grayscale(100%); border: 1px solid #e5e7eb;">
          <img src="/public/images/profile.jpg" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>

        <div style="margin-bottom: 28px;">
          ${sectionTitle(L.education)}
          ${education.map(item => `
            <div style="margin-bottom: 14px;">
              <p style="font-size: 12px; font-weight: 700; margin: 0; color: #111827;">${item.school}</p>
              <p style="font-size: 11px; color: #374151; margin: 2px 0;">${localize(item.degree)}</p>
              <p style="font-size: 10px; color: #9ca3af; margin: 0;">${item.period}</p>
            </div>
          `).join('')}
        </div>

        <div>
          ${sectionTitle(L.skills)}
          ${skills.map(group => `
            <div style="margin-bottom: 8px;">
              <p style="font-size: 11px; font-weight: 700; margin: 0 0 3px; color: #111827;">${group.category}</p>
              <p style="font-size: 10px; color: #4b5563; margin: 0; line-height: 1.5;">${group.items.join(' · ')}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Dikey Ayırıcı Çizgi -->
      <div style="width: 1px; background: #e5e7eb;"></div>

      <!-- Sağ Sütun -->
      <div style="flex: 1;">
        <div style="margin-bottom: 28px;">
          ${sectionTitle(L.about)}
          <p style="font-size: 12px; line-height: 1.7; color: #374151; margin: 0;">${localize(about)}</p>
        </div>

        <div style="margin-bottom: 28px;">
          ${sectionTitle(L.experience)}
          ${experience.map(item => `
            <div style="display: flex; gap: 16px; margin-bottom: 16px;">
              <div style="width: 8px; height: 8px; border-radius: 50%; border: 2px solid #111827; margin-top: 4px; flex-shrink: 0;"></div>
              <div>
                <p style="font-size: 13px; font-weight: 700; margin: 0; color: #111827;">${localize(item.role)}</p>
                <p style="font-size: 11px; color: #6b7280; margin: 2px 0;">${item.company} · ${item.period}</p>
                <p style="font-size: 11px; color: #4b5563; margin: 6px 0 0; line-height: 1.6;">${localize(item.description)}</p>
              </div>
            </div>
          `).join('')}
        </div>

        ${certificates && certificates.length ? `
          <div>
            ${sectionTitle(L.certificates)}
            ${certificates.map(cert => `
              <p style="font-size: 11px; color: #374151; margin: 0 0 6px; line-height: 1.5;">
                <strong>${localize(cert.title)}</strong> — ${cert.institution}, ${cert.date}
              </p>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `;

  return wrapper;
}