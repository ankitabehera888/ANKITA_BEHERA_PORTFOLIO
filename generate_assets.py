import os

certs = {
    'oracle_agentic_ai.svg': ('Oracle Certified Foundations Associate', 'Agentic AI • August 2026', 'ORACLE', '#34D399', '#D4AF37'),
    'aws_ml_foundations.svg': ('AWS Academy Graduate', 'Machine Learning Foundations • June 2026', 'AWS ACADEMY', '#34D399', '#FF9900'),
    'aws_nlp.svg': ('AWS Academy Graduate', 'ML for Natural Language Processing • July 2026', 'AWS ACADEMY', '#34D399', '#FF9900'),
    'nist_cloud_ml.svg': ('Cloud Collaborative Machine Learning', 'NIST University • June 2026', 'NIST UNIVERSITY', '#34D399', '#D4AF37')
}

cert_dir = r'd:\ANKITA PORTFOLIO\assets\certificates'
os.makedirs(cert_dir, exist_ok=True)
for filename, (title, subtitle, issuer, mint, gold) in certs.items():
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg_{filename[0:4]}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#161A14" />
      <stop offset="100%" stop-color="#0D0F0C" />
    </linearGradient>
    <linearGradient id="border_{filename[0:4]}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="{mint}" stop-opacity="0.6" />
      <stop offset="50%" stop-color="{gold}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="{mint}" stop-opacity="0.6" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="16" fill="url(#bg_{filename[0:4]})" stroke="url(#border_{filename[0:4]})" stroke-width="4" />
  <rect x="30" y="30" width="740" height="440" rx="10" fill="none" stroke="{gold}" stroke-opacity="0.2" stroke-width="1.5" stroke-dasharray="6,6" />
  
  <text x="400" y="90" fill="{gold}" font-family="sans-serif" font-size="14" font-weight="700" letter-spacing="4" text-anchor="middle">CERTIFICATE OF ACHIEVEMENT</text>
  <line x1="250" y1="105" x2="550" y2="105" stroke="{gold}" stroke-opacity="0.4" stroke-width="1" />
  
  <text x="400" y="160" fill="#F5F2EA" font-family="sans-serif" font-size="20" font-weight="400" text-anchor="middle">This certifies that</text>
  <text x="400" y="210" fill="{mint}" font-family="sans-serif" font-size="32" font-weight="800" text-anchor="middle">ANKITA BEHERA</text>
  
  <text x="400" y="260" fill="#9CA3AF" font-family="sans-serif" font-size="16" text-anchor="middle">has successfully completed</text>
  <text x="400" y="305" fill="#FFFFFF" font-family="sans-serif" font-size="24" font-weight="700" text-anchor="middle">{title}</text>
  <text x="400" y="345" fill="{gold}" font-family="sans-serif" font-size="16" font-weight="600" text-anchor="middle">{subtitle}</text>
  
  <circle cx="400" cy="410" r="26" fill="#222720" stroke="{gold}" stroke-width="2" />
  <path d="M390 410 L397 417 L412 402" fill="none" stroke="{mint}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  
  <text x="80" y="440" fill="#6B7280" font-family="sans-serif" font-size="12" font-weight="600">ISSUER: {issuer}</text>
  <text x="720" y="440" fill="#6B7280" font-family="sans-serif" font-size="12" font-weight="600" text-anchor="end">VERIFIED CERTIFICATE</text>
</svg>'''
    with open(os.path.join(cert_dir, filename), 'w', encoding='utf-8') as f:
        f.write(svg_content)

projects = {
    'finance_agentic_ai.svg': ('FINANCE AGENTIC AI', 'Multi-Agent Financial Intelligence System', 'Python • Agno • Groq • YFinance • DuckDuckGo'),
    'email_auto_reply.svg': ('EMAIL AUTO-REPLY SYSTEM', 'NLP Classification &amp; Role-Based Response Engine', 'Python • NLP • TF-IDF • FastAPI • Streamlit')
}

proj_dir = r'd:\ANKITA PORTFOLIO\assets\projects'
os.makedirs(proj_dir, exist_ok=True)
for filename, (title, subtitle, tags) in projects.items():
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="pbg_{filename[0:4]}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B221B" />
      <stop offset="100%" stop-color="#0F120E" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" rx="16" fill="url(#pbg_{filename[0:4]})" stroke="#2C5744" stroke-width="2" />
  <path d="M0 90 H800 M0 180 H800 M0 270 H800 M0 360 H800 M160 0 V450 M320 0 V450 M480 0 V450 M640 0 V450" stroke="#34D399" stroke-opacity="0.05" stroke-width="1" />
  <rect x="50" y="50" width="700" height="350" rx="12" fill="#121512" stroke="#34D399" stroke-opacity="0.3" stroke-width="1.5" />
  <path d="M50 50 H750 V90 H50 Z" fill="#1A1E1A" />
  <circle cx="80" cy="70" r="6" fill="#EF4444" />
  <circle cx="100" cy="70" r="6" fill="#F59E0B" />
  <circle cx="120" cy="70" r="6" fill="#10B981" />
  <text x="400" y="75" fill="#9CA3AF" font-family="monospace" font-size="14" text-anchor="middle">{title.lower().replace(' ', '_')}.py</text>
  <text x="90" y="150" fill="#D4AF37" font-family="sans-serif" font-size="13" font-weight="700" letter-spacing="2">[ AI/ML PROJECT PROTOTYPE ]</text>
  <text x="90" y="200" fill="#34D399" font-family="sans-serif" font-size="28" font-weight="800">{title}</text>
  <text x="90" y="240" fill="#F5F2EA" font-family="sans-serif" font-size="18" font-weight="400">{subtitle}</text>
  <rect x="90" y="285" width="620" height="45" rx="8" fill="#222822" stroke="#D4AF37" stroke-opacity="0.4" stroke-width="1" />
  <text x="110" y="313" fill="#D4AF37" font-family="monospace" font-size="14" font-weight="600">Tech Stack: {tags}</text>
</svg>'''
    with open(os.path.join(proj_dir, filename), 'w', encoding='utf-8') as f:
        f.write(svg_content)

print('Generated SVGs successfully.')
